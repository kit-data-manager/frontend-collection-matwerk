export let ajaxBaseUrl = "http://localhost:8040/api/v1/";
export const keycloak = Keycloak({
    url: 'https://gateway.datamanager.kit.edu:8443/',
    realm: 'nfdi4ing',
    clientId: 'kitdm-services'
});

export const showServiceUrl = true;

export const appDescription = {
    "app-logo":"./images/metadata.jpg",
    "app-title":"MetaStore Frontend",
    "app-subtitle":"Schema and Metadata Management"
};


