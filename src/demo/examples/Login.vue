<template>
    <div>
        <h2>Auth0 login</h2>

        <p>
            Auth0 login is baked in as methods on the Vue prototype.
        </p>

        <h3>Initialization and options</h3>

        <p>
            Auth will only be active if configured during plugin initialization in Vue.
            We refer to the <code>README.md</code> file for details on how to configure
            the plugin.
        </p>

        <h3>Methods</h3>

        <p>
            All methods and data can be found on the <code>$auth</code> property of each Vue
            instance.
        </p>

        <b-table 
            :fields="[
                { key: 'member', sortable: true, class: 'no-wrap' },
                { key: 'type', sortable: true, class: 'no-wrap' },
                { key: 'description', sortable: true },
            ]"
            :items="[
                {
                    member: '$auth.handleAuthentication(): Promise<{ passthrough: string }>',
                    type: 'method',
                    description: 'Should run on the callback (redirectUri) page when sign in returns. This sets the localStorage tokens. Will receive the passthrough string set during login.',
                },
                {
                    member: '$auth.isAuthenticated(): boolean',
                    type: 'method',
                    description: 'Check whether the user is logged in.',
                },
                {
                    member: '$auth.login(passthrough: string): void',
                    type: 'method',
                    description: 'Triggers redirect to Auth0 register / login flow. Will return to the configured redirectUri upon completion.',
                },
                {
                    member: '$auth.logout(): void',
                    type: 'method',
                    description: 'Clear the login information from local storage.',
                },
                {
                    member: '$auth.webAuth(): auth0-js.WebAuth',
                    type: 'method',
                    description: 'Get the underlying WebAuth object for direct manipulation or reading/setting properties.',
                },
                {
                    member: '$auth.accessToken: string | null',
                    type: 'property',
                    description: 'The access token.',
                },
                {
                    member: '$auth.expiresAt: number | null',
                    type: 'property',
                    description: 'A timestamp indicating when the token will expire.',
                },
                {
                    member: '$auth.token: string | null',
                    type: 'property',
                    description: 'The raw JWT ID token identifying the user.',
                },
                {
                    member: '$auth.user: any',
                    type: 'property',
                    description: 'An object representing the user object returned by the identity provider.',
                },
            ]"
        >
            <template slot="member" slot-scope="data">
                <code>{{ data.value }}</code>
            </template>
        </b-table>

        <h3>Usage</h3>

        <p>
            To send your users to Auth0 for login, use <code>$auth.login</code>:
        </p>

<d-helpers-highlight lang="html">
&lt;n-button v-if="!$auth.isAuthenticated()" @click="$auth.login('features')" variant="primary"&gt;Login at Auth0&lt;/n-button&gt;
&lt;n-button v-if="$auth.isAuthenticated()" @click="$auth.logout()"&gt;Logout&lt;/n-button&gt;
</d-helpers-highlight>

        <p>
            Note that the login method can accept a <code>passthrough</code> string.
            Basically, this is a string that will be received again by the
            <code>handleAuthentication</code> method during callback. This can be
            used to redirect the user internally, back to where login back. Since
            the application is effectively terminated and restarted at callback,
            this string needs to be kept in localStorage.
        </p>

        <p>
            Your Auth0 configuration will contain a redirect / callback url back to
            your application. Mount a component at this URL that triggers
            the <code>handleAuthentication</code> method at mount. This causes
            all token properties of the <code>$auth</code> object to be set.
        </p>

        <p>
            In this example, we used the <code>passthrough</code> variable to pass
            a named route, which we then return to on success.
        </p>

<d-helpers-highlight lang="typescript">
import Vue from 'vue';
export default Vue.extend({
    mounted() {
        if (this.$auth != null) {
            this.$auth.handleAuthentication().then((data: { passthrough: string | null }) => {
                if (data.passthrough) {
                    this.$router.push({ name: data.passthrough });
                }
            });
        }
        
    }
});
</d-helpers-highlight>        

        <h3>Example</h3>

        <p>Configuration:</p>

        <ul>
            <li><strong>domain</strong>: {{ $auth.configuration().domain }} </li>
            <li><strong>clientID</strong>: {{ $auth.configuration().clientID }} </li>
            <li><strong>redirectUri</strong>: {{ $auth.configuration().redirectUri }} </li>
        </ul>

        <p>Logged in: <strong>{{ $auth.isAuthenticated() ? 'YES' : 'NO' }}</strong></p>

        <div v-if="$auth.isAuthenticated()">
            <h4>Contents of token</h4>
            <ul>
                <li v-for="(value, key) in $auth.user" :key="key"><strong>{{ key }}</strong>: {{value}}</li>
            </ul>
            <p>This token expires in {{ minuteDiff }} minutes.</p>
        </div>

        <div v-if="$auth.user && $auth.user.picture" class="mb-4">
            <h4>Image source found in token:</h4>
            <img :src="$auth.user.picture" height="200" />
        </div>

        <n-button v-if="!$auth.isAuthenticated()" @click="$auth.login('features')" variant="primary">Login at Auth0</n-button>
        <n-button v-if="$auth.isAuthenticated()" @click="$auth.logout()">Logout</n-button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import moment from 'moment';

interface IData {
    minuteDiff: number | null;
}

export default Vue.extend({
    mounted() {

        const calcDiff = () => {
            if (this.$auth != null && this.$auth.expiresAt != null) {
                this.minuteDiff = moment(this.$auth.expiresAt).diff(moment(), 'm');
            }
        };

        calcDiff();

        setInterval(calcDiff, 5000);
    },
    data(): IData {
        return {
            minuteDiff: null,
        }
    },
});
</script>
