//export let ajaxBaseUrl = "https://demo.datamanager.kit.edu:8443/base-repo/api/v1/";
export let ajaxBaseUrl = "http://localhost:8081/api/v1/";
export const keycloak = undefined;
/*Keycloak({
    url: 'https://gateway.datamanager.kit.edu:8443/',
    realm: 'dem_testing',
    clientId: 'kitdm-services'
});*/
export const tags = [
    {"name":"rawData", "color":"red"},
    {"name":"analyzedData", "color":"green"},
    {"name":"document", "color":"blue"},
    {"name":"code", "color":"orange"},
    {"name":"deprecated", "color":"black"}


];

export const showServiceUrl = false;

export const appDescription = {
    "app-logo":"./images/disks.jpg",
    "app-title":"Base-Repo Demonstrator",
    "app-subtitle":"Data Resource Management"
};




