import Vue, { VueConstructor } from 'vue';
import { WebAuth } from 'auth0-js';

declare module 'vue/types/vue' {
    interface Vue {
        $auth?: {
            token: string | null;
            accessToken: string | null;
            expiresAt: number;
            user: any;
            login: (passthrough: string) => void;
            logout: () => Promise<never>;
            handleAuthentication: () => Promise<{ passthrough: string | null }>;
            isAuthenticated: () => boolean;
            webAuth: () => WebAuth;
        }
    }
}