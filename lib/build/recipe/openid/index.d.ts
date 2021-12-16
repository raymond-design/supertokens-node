// @ts-nocheck
import OpenIdRecipe from "./recipe";
export default class OpenIdRecipeWrapper {
    static init: typeof OpenIdRecipe.init;
    static getOpenIdDiscoveryConfiguration(): Promise<{
        status: "OK";
        issuer: string;
        jwks_uri: string;
    }>;
    static createJWT(
        payload?: any,
        validitySeconds?: number
    ): Promise<
        | {
              status: "OK";
              jwt: string;
          }
        | {
              status: "UNSUPPORTED_ALGORITHM_ERROR";
          }
    >;
    static getJWKS(): Promise<{
        status: "OK";
        keys: import("../jwt").JsonWebKey[];
    }>;
}
export declare let init: typeof OpenIdRecipe.init;
export declare let getOpenIdDiscoveryConfiguration: typeof OpenIdRecipeWrapper.getOpenIdDiscoveryConfiguration;
export declare let createJWT: typeof OpenIdRecipeWrapper.createJWT;
export declare let getJWKS: typeof OpenIdRecipeWrapper.getJWKS;
