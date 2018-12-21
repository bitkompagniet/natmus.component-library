<template>
  <div class="home">
    <layout-section>
        <h2>Sections</h2>

        <p>
          Sections are used to divide pages into large structural blocks.
          This is the most dramatic way to split pages. Usually, two sections are
          demarked by different background colors. Sections define a very generous
          top and bottom
          <code>padding</code>.
        </p>

        <p>
          Sections are usually immediately followed by a <code>h2</code>, which
          acts as a section header. Any subsequent headers should be <code>h3</code> or
          smaller.
        </p>

        <h3>Basic usage</h3>

        <pre>
&lt;layout-section&gt;
  &lt;h2&gt;Section header&lt;/h2&gt;
&lt;/layout-section&gt;
</pre>

        <h3>
          Properties
        </h3>

        <b-table striped :fields="fields" :items="properties">
          <template slot="name" slot-scope="data">
            <code>{{ data.value }}</code>
          </template>
          <template slot="type" slot-scope="data">
            <code>{{ data.value }}</code>
          </template>
        </b-table>

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
        name: 'no-container',
        type: 'bool',
        default: 'false',
        description: `For complete control of content, suppress the inner generation of a Bootstrap grid.`,
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
        description: 'Expands section vertically to 100% of view height',
      },
    ],
  }),
});
</script>
