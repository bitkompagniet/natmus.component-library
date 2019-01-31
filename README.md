# Nationalmuseet Vue component library

TODO: write introduction.

## How to build

The component library can be installed as a module in other vue projects, or it can run in a demo / documentation mode.

### Build the demo / documentation app

This will produce a flat html file, js file and assets. Navigate into the `source` folder from the root directory and run:

```bash
npm install
npm run build:demo
```

This will produce the flat site in `source/dist/demo`. The contents of this folder can be dropped into a web folder root. Please note that the site produces _root-relative_ URLs (starting with `/`), so it should not be dropped into a subfolder.

## Install as Node module

When included as an NPM module in another Vue project, the exported top level object is a [Vue plugin](https://vuejs.org/v2/guide/plugins.html). 

```javascript
import Vue from 'vue';
import nmComponentLibrary from 'nm-component-library';

const options = { ... };

Vue.use(nmComponentLibrary, options);
```

The plugin can _optionally_ be given an option object of the type `INclOptions`:

```typescript
interface INclOptions {
  auth?: IAuth0Options
}

interface IAuth0Options {
  domain: string;
  clientID: string;
  redirectUri: string;
  responseType?: string;
  scope?: string;
}
```

Note that when the `auth` object is omitted from the configuration, the authentication sub-plugin will not be initialized, so `this.$auth` will not exist on components.

The `domain` and `clientID` can be found in your [admin panel at Auth0](https://manage.auth0.com/#/applications).

## Run in development mode

In development mode, the demo site can be edited with Hot Module Reloading. It is currently configured to be hot reloaded on the local LAN, but for this to work, you need to configure your LAN IP in `source/vue.config.js` (set `devServer.public` to your IP). If you have no need for LAN HMR, you can delete the entire `devServer` key. If you leave it as is, and the IP does not correspond to your actual IP, HMR will not work.

Navigate into the `source` folder from root and install dependencies:

```bash
npm install
```

To run the project in development mode with hot module reloading:

```bash
npm run serve
```

The site will be served at: http://localhost:8080/

## Directory structure

```
source
|- dist: build target folder
|  |- demo: the build target of the demo / documentation site
|  |- lib: the build target of the module
|- public: the index and favicon that are baked into the demo site
|- src: main code folder
|  |- assets: styles, fonts, images
|  |  |- fonts: font folder
|  |  |- images: static images
|  |  |- scss: SCSS style sheets overriding Bootstrap styles
|  |  |- base: structure, base font and sizes, utilities
|  |  |- elements: certain component and element overrides
|  |  | app.scss: main SCSS file
|  |- builds: building blocks for configuring the output build
|  |  | customBootstrap.ts: adds Bootstrap and the override SCSS to the build
|  |  | demoWebApp.ts: adds the demo site to the build
|  |  | fontawesome.ts: adds font awesome icons to the build
|  |  | globalComponents.ts: registers all custom components globally with the n-prefix
|  |- components: custom vue components built for this library
|  |- demo: the demo site - everything below is only used in the demo build
|  | main.ts: entry point for the demo web app build
|  | module.ts: entry point for the module build
| README.md: original Vue CLI README
| package.json: Node package file
| tsconfig.json: TypeScript configuration
| tslint.json: tslint configuration
| vue.config.js: vue-cli-service configuration file
| babel.config.js: babel presets

```

## Azure specific changes
Due to Azures handling of fonts, this file needs to be created at the root of the site, ie. the location where index.html is:

web.config:

```xml
<configuration>
	<system.webServer>    
	   <staticContent>
		   <remove fileExtension=".otf" />
		   <mimeMap fileExtension=".otf" mimeType="font/otf" />
		</staticContent>
	</system.webServer>
</configuration>
```