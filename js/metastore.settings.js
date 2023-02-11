export let ajaxBaseUrl = "http://metastore.docker:8040/api/v1/";
//export let ajaxBaseUrl = "http://localhost:8041/api/v1/";
export const keycloak = Keycloak({
    url: 'https://gateway.datamanager.kit.edu:8443/',
    realm: 'dem_testing',
    clientId: 'kitdm-services'
});

export const showServiceUrl = false;

export const appDescription = {
    "app-logo":"./images/metadata.jpg",
    "app-title":"MetaStore Frontend",
    "app-subtitle":"Schema and Metadata Management"
};


