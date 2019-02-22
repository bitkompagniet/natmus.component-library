import auth0 from 'auth0-js';
import { VueConstructor } from 'vue';

export interface IAuth0Options {
    domain: string;
    clientID: string;
    redirectUri: string;
    audience: string;
    responseType?: string;
    scope?: string;
    language?: string;
}

export default {
    install(vue: VueConstructor, options: IAuth0Options): void {

        const defaults: Partial<IAuth0Options> = {
            responseType: 'token id_token',
            scope: 'openid profile email',
        };

        const configuration: IAuth0Options = { ...defaults, ...options };

        // exchange the object with your own from the setup step above.
        const webAuth = new auth0.WebAuth({
            domain: configuration.domain,
            clientID: configuration.clientID,
            // make sure this line is contains the port: 8080
            redirectUri: configuration.redirectUri,
            // we will use the api/v2/ to access the user information as payload
            audience: configuration.audience,
            responseType: configuration.responseType,
            scope: configuration.scope,
        });

        const auth = new vue({
            data: {
                set token(token: string | null) {
                    if (token == null) {
                        localStorage.removeItem('id_token');
                    } else {
                        localStorage.setItem('id_token', token);
                    }
                },
                get token(): string | null {
                    return localStorage.getItem('id_token');
                },
                set accessToken(token: string | null) {
                    if (token == null) {
                        localStorage.removeItem('access_token');
                    } else {
                        localStorage.setItem('access_token', token);
                    }
                },
                get accessToken(): string | null {
                    return localStorage.getItem('access_token');
                },
                set expiresAt(expiry: number | null) {
                    if (expiry == null) {
                        localStorage.removeItem('expires_at');
                    } else {
                        localStorage.setItem('expires_at', (expiry * 1000).toString());
                    }
                },
                get expiresAt(): number | null {
                    const stored = localStorage.getItem('expires_at');
                    if (stored != null) {
                        return parseInt(stored, 10);
                    }

                    return null;
                },
                set user(user: any) {
                    localStorage.setItem('user', JSON.stringify(user));
                },
                get user(): any {
                    return JSON.parse(localStorage.getItem('user') as string);
                },
            },
            methods: {
                login(passthrough: string | null) {
                    if (passthrough) {
                        localStorage.setItem('passthrough', passthrough);
                    } else {
                        localStorage.removeItem('passthrough');
                    }

                    const language = configuration.language || 'da';
                    const lockOptions: auth0.AuthorizeOptions = { language };

                    webAuth.authorize(lockOptions);
                },
                logout(): Promise<never> {
                    return new Promise((resolve, reject) => {
                        this.expiresAt = null;
                        this.accessToken = null;
                        this.token = null;
                        this.user = null;
                        resolve();
                    });
                },
                isAuthenticated(): boolean {
                    const loggedIn = this.expiresAt != null && new Date().getTime() < this.expiresAt;

                    if (!loggedIn && this.user != null) {
                        this.logout();
                    }

                    return loggedIn;
                },
                handleAuthentication(): Promise<{ passthrough: string | null }> {
                    return new Promise((resolve, reject) => {
                        webAuth.parseHash((err, authResult) => {

                            if (authResult && authResult.accessToken && authResult.idToken) {
                                this.accessToken = authResult.accessToken;
                                this.token = authResult.idToken;
                                this.user = authResult.idTokenPayload;
                                this.expiresAt = authResult.idTokenPayload.exp;
                                resolve({ passthrough: localStorage.getItem('passthrough') });

                            } else if (err) {
                                this.logout();
                                reject(err);
                            }

                        });
                    });
                },
                webAuth(): auth0.WebAuth {
                    return webAuth;
                },
                configuration(): IAuth0Options {
                    return configuration;
                },
            },
        });

        vue.prototype.$auth = auth;
    },
};
