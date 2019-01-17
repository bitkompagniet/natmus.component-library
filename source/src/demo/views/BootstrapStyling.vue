<template>
    <div>
        <n-section>
            <h2>Boostrap styling</h2>
            <p>
                Some Bootstrap components should be used as-is, since we have not wrapped or
                extended their functionality. They will appear differently by simply being
                inside a <code>n-section</code> / <code>.n-style</code> classed container.
            </p>
            <p>
                On this page we present those different appearances.
            </p>
        </n-section>

        <n-section>
            <h2>Pagination</h2>

            <h3>Usage</h3>
            <pre>
&lt;b-pagination size="md" :total-rows="250" v-model="page" :per-page="10" :limit="20"&gt;&lt;/b-pagination&gt;</pre>

            <h3>Example</h3>
            <b-pagination size="md" :total-rows="250" v-model="page" :per-page="10" :limit="20"></b-pagination>

            <p>Selected page: {{ page }}</p>
        </n-section>

        <n-section>
            <h2>Breadcrumb</h2>
            <h3>Usage</h3>
            <pre>
&lt;b-breadcrumb :items="items"/&gt;</pre>
            <h3>Example</h3>
            <b-breadcrumb :items="items"/>
        </n-section>

        <n-section>
            <h2>Cards</h2>

            <h3>Guidelines</h3>

            <ul>
                <li>Only place images in top of card (<code>img-top</code> property).</li>
                <li>Don't use the header and footer slots of the cards.</li>
            </ul>

            <h3>Examples</h3>

            <b-card-group deck v-for="theme in ['white', 'darkblue', 'darkred', 'rose', 'lightgrey']" :key="theme" class="mb-4">
                <b-card
                    :class="theme"
                >
                    <p class="card-text">
                        Basic, just text.
                    </p>
                </b-card>
                <b-card
                    :img-src="require('../assets/images/summer_party_2.jpg')"
                    img-top
                    title="Sommeraftener"
                    :class="theme"
                >
                    <p class="card-text">
                        A card with an image and a title.
                    </p>
                </b-card>
                <b-card
                    :img-src="require('../assets/images/summer_party_2.jpg')"
                    img-top
                    title="Sommeraftener"
                    sub-title="Subtitle"
                    :class="theme"
                >
                    <p class="card-text">
                        A card with subtitle and button.
                    </p>
                    <n-button variant="primary">Continue</n-button>
                </b-card>
            </b-card-group>
        </n-section>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
   data()  {
       return {
            page: 1,
            items: [{
                text: 'Admin',
                href: '#'
            }, {
                text: 'Manage',
                href: '#'
            }, {
                text: 'Library',
                active: true
            }]
        };
    }
});
</script>
