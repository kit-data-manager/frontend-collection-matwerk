export let ajaxBaseUrl = "https://demo.datamanager.kit.edu:8443/base-repo/api/v1/";
export const keycloak = Keycloak({
    url: 'https://gateway.datamanager.kit.edu:8443/',
    realm: 'dem_testing',
    clientId: 'kitdm-services'
});
export const tags = [{"name":"tag", "color":"red"}, {"name":"tag2", "color":"blue"},{"name":"tag3", "color":"green"}];
export const showServiceUrl = false;

export const appDescription = {
    "app-logo":"./images/disks.jpg",
    "app-title":"Base-Repo Demonstrator",
    "app-subtitle":"Data Resource Management"
};




