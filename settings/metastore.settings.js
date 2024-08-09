//The backend service URL for the MetaStore instance used by the frontend.
export const ajaxBaseUrl = "https://matwerk.datamanager.kit.edu/api/v1/";

//The app description used to customize the frontend, e.g., for a specific project with a custom title and subtitle.
export const appDescription = {
    "app-logo":"./images/nfdi-logo.png",
    "app-title":"NFDI-MatWerk Metadata Repository",
    "app-subtitle":"Schema and Metadata Management"
};

//Enable/disable the Elastic search functionality. The availability of the search depends on the configuration of
//the configured MetaStore instance. If Elastic search is not configured for the underlying MetaStore, it should
//also be disabled here.
export const searchEnabled = true;



