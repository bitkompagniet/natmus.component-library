<template>
  <div class="home">

    <n-section>
      <h2>Nationalmuseet Component Library (NCL)</h2>

      <p>
        Every component in the NCL are prefixed with <code>n-</code> (for example, <code>n-section</code>). All Bootstrap Vue components
        are left as is, and are prefixed with <code>b-</code> (for example, <code>b-button</code>).
        All NCL components are abstractions and specializations of Bootstrap components or pure HTML.
      </p>

      <p>
        NCL components should cover all usage scenarios that can be derived from the specification and design guides created by
        <a href="http://bitkompagniet.dk/">Bitkompagniet</a> and approved by <a href="http://natmus.dk/">Nationalmuseet</a>.
      </p>

      <h3>Basic structure</h3>

      <p>
        If you just want to follow the convention laid out by the component library, you define some header content such as navigation,
        and all body content is then placed inside a series of <code>n-section</code>'s. In Vue, you need a top-level wrapper element.
        This could be a standard <code>div</code> (or <code>template</code>, if you don't want it to render).
      </p>

      <pre>
&lt;div&gt;
  &lt;n-nav-topbar&gt;
    &lt;div&gt;&lt;router-link to="/"&gt;Home&lt;/router-link&gt;
  &lt;/n-nav-topbar&gt;
  &lt;n-section&gt;
    &lt;h2&gt;Section header&lt;/h2&gt;
    &lt;p&gt;A paragraph&lt;/p&gt;
  &lt;/n-section&gt;
  &lt;n-section theme="darkred"&gt;
    &lt;h2&gt;Section header&lt;/h2&gt;
    &lt;p&gt;A paragraph&lt;/p&gt;
  &lt;/n-section&gt;
&lt;/div&gt;</pre>

      <p>The page you are currently reading follows the above markup.</p>

      <h3>Separation of Bootstrap and NCL components</h3>

      <p>
        Bootstrap Vue and Font Awesome are included in the library, and the library does not generally override anything - it will stay
        as unobtrusive as possible.
        Instead, NCL is defined as scoped specializations of the Bootstrap components. 
        When you use NCL components (prefixed with <code>n-</code>), they will fully implement the NCL styles and behaviours. 
        When you use the Bootstrap components (prefixed with <code>b-</code>), they will generally display as default Bootstrap components.
      </p>

      <h3>The <code>.n-style</code> CSS class</h3>

      <p>
        The styling of components is controlled by a CSS scope class called <code>.n-style</code>. This makes it possible to apply
        the NCL style to Bootstrap components, when you want the original component with the new styling.
        However, you should be aware <em>that not all styles are overridden by NCL - only the needed subset</em>.
      </p>

      <h4>A button directly from Bootstrap</h4>

      <pre>
&lt;b-button size="md" variant="primary"&gt;Primary&lt;/b-button&gt;</pre>

      <b-button size="md" variant="primary">Primary</b-button>

      <h4>With the <code>.n-style</code> class</h4>

      <pre>
&lt;b-button class="n-style" size="md" variant="primary"&gt;Primary&lt;/b-button&gt;</pre>
      
      <b-button class="n-style" size="md" variant="primary">Primary</b-button>

      <h4>Equivalent to using the NCL button</h4>

      <pre>
&lt;n-button variant="primary"&gt;Primary&lt;/n-button&gt;</pre>

      <n-button variant="primary">Primary</n-button>

      <h3>Container level use of <code>.n-style</code></h3>

      <p>
        When applied to a container level element ( <code>div</code>, <code>article</code>, <code>aside</code>, <code>header</code>, <code>footer</code>, etc.),
        <code>.n-style</code> will define standard typography, font sizes, margins and paddings inside that container - but will leave all other component-level 
        styles alone (buttons, form fields, etc.).
      </p>

      <p><pre>
&lt;div class="n-style"&gt;&lt;h2&gt;This header will be Natmus styled&lt;/h2&gt;&lt;/div&gt;</pre></p>

      <p>
        Most page content should be wrapped in <code>n-section</code>, which implements the <code>.n-container</code> class - and if
        this convention is upheld, there is no need to use the <code>.n-container class</code> manually.
      </p>

      <h3>Library &amp; Vue Bootstrap components</h3>

      <p>
        Likewise, no components from Vue Bootstrap are altered. Instead, they are composed in local and more specific components that make up the
        visual and behavioural style of the library. This means that you can use bootstrap components directly:
      </p>

      <p><pre>
</pre></p>
    </n-section>

    <n-section theme="white" no-pad style="padding-top: 5em">
      <h2>Navigation</h2>
      <p>
        Most pages should have a top navigation bar, like the one you see
        above. It could be defined in the top-most <code>App</code> component
        for a smaller site, or it could be defined on the page level.
      </p>

      <h3>Basic usage</h3>

      <pre>
&lt;n-nav-topbar&gt;
  &lt;div&gt;&lt;router-link to="/"&gt;A link&lt;/router-link&gt;&lt;/div&gt;
&lt;/n-nav-topbar&gt;
</pre>

      <h3>Example</h3>

    </n-section>

    <n-nav-topbar><router-link to="/">A link</router-link></n-nav-topbar>

    <n-section>
      <h2>Sections</h2>

      <p>
        All content on pages should be in sections.
        Sections are used to divide pages into large structural blocks.
        This is the most dramatic way to split pages. Usually, two sections are
        demarked by different background colors. Sections define a very generous
        top and bottom <code>padding</code>.
      </p>

      <p>
        Sections are usually immediately followed by a
        <code>h2</code>, which
        acts as a section header. Any subsequent headers should be
        <code>h3</code> or
        smaller.
      </p>

      <h3>Basic usage</h3>

      <pre>
&lt;n-section theme="white"&gt;
  &lt;h2&gt;Section header&lt;/h2&gt;
&lt;/n-section&gt;
</pre>

      <h3>Properties</h3>

      <b-table striped :fields="fields" :items="properties">
        <template slot="name" slot-scope="data">
          <code>{{ data.value }}</code>
        </template>
        <template slot="type" slot-scope="data">
          <code>{{ data.value }}</code>
        </template>
      </b-table>

      <h3>Design guidelines</h3>

      <ul>
        <li>
          Don't let two sections of the same theme follow each other, <em>except</em> if both sections are white. In this case,
          a small divider will tie the two sections together (this section features an example).
        </li>
      </ul>

    </n-section>

    <n-section>
      <h2>Slim</h2>
      <p>
        A <code>n-section</code> will be set to the standard bootstrap container width unless it is fluid.
        You can use a <code>n-slim</code> inside a <code>n-section</code> to get a half-width container.
      </p>

      <n-slim>
        This is inside a <code>n-slim</code>. This is very useful for forms or condensed text snippets, since
        very long or wide views of this sort can be difficult to follow.
      </n-slim>

      <h3>Basic usage</h3>

      <pre>
&lt;n-slim&gt;
  This is inside a n-slim.
&lt;/n-slim&gt;
</pre>

      <h3>Design guidelines</h3>

      <ul>
        <li>Use with forms.</li>
      </ul>

    </n-section>

    <template v-for="color in sectionColors">
      <n-section :theme="color" :key="color">
        <b-container>
          <b-row>
            <b-col>
              <h2>Section with theme '{{ color }}'</h2>
              <p>This is an example of the section theme "{{ color }}".</p>
              <pre>
&lt;n-section theme="{{ color }}"&gt;
  &lt;h2&gt;Section with theme '{{ color }}'&lt;/h2&gt;
&lt;/n-section&gt;
</pre>
            </b-col>
          </b-row>
        </b-container>
      </n-section>
    </template>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  data: () => ({
    sectionColors: [
      'rose',
      'darkblue',
      'orange',
      'darkred',
      'beige',
      'lightgrey',
    ],
    fields: [
      { key: 'name', sortable: true },
      { key: 'type' },
      { key: 'default' },
      { key: 'description' },
    ],
    properties: [
      {
        name: 'fluid',
        type: 'bool',
        default: 'false',
        description: 'Whether the embedded bootstrap grid should be fluid. Ignored when the no-container option is on.',
      },
      {
        name: 'no-container',
        type: 'bool',
        default: 'false',
        description: 'For complete control of content, suppress the inner generation of a Bootstrap grid.',
      },
      {
        name: 'no-pad',
        type: 'bool',
        default: 'false',
        description: 'Suppress standard top and bottom padding.',
      },
      {
        name: 'theme',
        type: 'string',
        default: '"white"',
        description: 'One of "white", "rose", "darkblue", "orange", "darkred", "beige", "lightgrey".',
      },
      {
        name: 'vertical-fill',
        type: 'bool',
        default: 'false',
        description: 'Expands section vertically to at least 100% vertical viewport height.',
      },
    ],
  }),
});
</script>
