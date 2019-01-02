<template>
  <div class="home">
    <layout-section theme="white">
      <h2>Navigation</h2>
      <p>
        Most pages should have a top navigation bar, like the one you see
        above. It could be defined in the top-most <code>App</code> component
        for a smaller site, or it could be defined on the page level.
      </p>

      <h3>Basic usage</h3>

      <pre>
&lt;navigation-topbar&gt;
  &lt;div&gt;&lt;router-link to="/"&gt;Structure&lt;/router-link&gt;&lt;/div&gt;
&lt;/navigation-topbar&gt;
</pre>

    </layout-section>

    <layout-section>
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
&lt;layout-section theme="white"&gt;
  &lt;h2&gt;Section header&lt;/h2&gt;
&lt;/layout-section&gt;
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

    </layout-section>

    <layout-section>
      <h2>Slim</h2>
      <p>
        A <code>layout-section</code> will be set to the standard bootstrap container width unless it is fluid.
        You can use a <code>layout-slim</code> inside a <code>layout-section</code> to get a half-width container.
      </p>

      <layout-slim>
        This is inside a <code>layout-slim</code>. This is very useful for forms or condensed text snippets, since
        very long or wide views of this sort can be difficult to follow.
      </layout-slim>

      <h3>Basic usage</h3>

      <pre>
&lt;layout-slim&gt;
  This is inside a layout-slim.
&lt;/layout-slim&gt;
</pre>

      <h3>Design guidelines</h3>

      <ul>
        <li>Use with forms.</li>
      </ul>

    </layout-section>

    <template v-for="color in sectionColors">
      <layout-section :theme="color" :key="color">
        <b-container>
          <b-row>
            <b-col>
              <header-section>Section with theme '{{ color }}'</header-section>
              <p>This is an example of the section theme "{{ color }}".</p>
              <pre>
&lt;layout-section theme="{{ color }}"&gt;
  &lt;h2&gt;Section with theme '{{ color }}'&lt;/h2&gt;
&lt;/layout-section&gt;
</pre>
            </b-col>
          </b-row>
        </b-container>
      </layout-section>
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
