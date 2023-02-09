export let ajaxBaseUrl = "https://demo.datamanager.kit.edu:8443/base-repo/api/v1/";
//export let ajaxBaseUrl = "http://localhost:8081/api/v1/";
export const keycloak = Keycloak({
    url: 'https://gateway.datamanager.kit.edu:8443/',
    realm: 'dem_testing',
    clientId: 'kitdm-services'
});

export const showServiceUrl = false;

export const appDescription = {
    "app-logo":"./images/search.jpg",
    "app-title":"Repository Search Demonstrator",
    "app-subtitle":"Data Resource Search"
};




