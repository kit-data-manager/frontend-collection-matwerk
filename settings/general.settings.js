//Keycloak configuration to use Keycloak as identity provider for single sign-on.
export const keycloak = undefined;
/*= Keycloak({
    url: 'https://gateway.datamanager.kit.edu:8443/',
    realm: 'dem_testing',
    clientId: 'kitdm-services'
});*/

//Show the input for the backend service URL. This property should only be enabled for debugging.
export const showServiceUrl = false;

//The max. number of elements obtained in a single search request.
export const page_size = 5;
