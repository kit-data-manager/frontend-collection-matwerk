export let ajaxBaseUrl = "https://demo.datamanager.kit.edu:8443/metastore/api/v1/";
//export let ajaxBaseUrl = "http://localhost:8041/api/v1/";
export const keycloak = export const keycloak = Keycloak({
    url: 'https://gateway.datamanager.kit.edu:8443/',
    realm: 'dem_testing',
    clientId: 'kitdm-services'
});

export const showServiceUrl = true;

export const appDescription = {
    "app-logo":"./images/metadata.jpg",
    "app-title":"MetaStore Frontend",
    "app-subtitle":"Schema and Metadata Management"
};


