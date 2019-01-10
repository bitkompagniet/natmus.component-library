<template>
  <div class="home">

    <n-section>
      <h2>Nationalmuseet Component Library (NCL)</h2>

      <p>
        This component library is built on top of Bootstrap Vue.
        It defines a set of components that are specific to the specification and design guides
        created by <a href="http://bitkompagniet.dk/">Bitkompagniet</a> and approved by 
        <a href="http://natmus.dk/">Nationalmuseet</a>.
      </p>

      <h3>Basic structure</h3>

      <p>
        Every page in our examples is built from a <code>n-nav-topbar</code> elements followed by a series of 
        <code>n-section</code> elements, and terminated with a <code>n-footer</code>.
      </p>

      <p>
        If you just want to follow the convention laid out by the component library, you define some header content such as navigation,
        and all body content is then placed inside a series of <code>n-section</code>'s. In Vue, you need a top-level wrapper element.
        This could be a standard <code>div</code>.
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

      <h3>NCL and Bootstrap: separation and scope</h3>

      <p>
        The library exports all of Bootstrap in its vanilla / unchanged form.
        Bootstrap components are prefixed by <code>b-</code> (see the Bootstrap Vue documentation).
        The NCL-specific components are prefixed by <code>n-</code> (for example, <code>n-section</code>).
      </p>

      <p>
        When Bootstrap components are placed inside the CSS scope <code>.n-style</code> (for example, a
        containing <code>div class="n-style"</code>), it will take on the styling intended in this
        library. The <code>n-section</code> elments are central to all content in this library, and
        since these sections use the <code>.n-style</code> class, all content inside these sections
        will implement the library specific styling.
      </p>

      <p>
        If you want a single element to be <code>.n-style</code>'d, you can also implement it on
        element level.
      </p>
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
      'lightgrey',
      'darkred',
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
