# frontend-collection

This repository contains a collection of generic web frontends for accessing RESTful services from the KIT Data Manager service portfolio. The idea is to have graphical user interfaces available such that certain base services can be directly used for performing basic tasks without the need of integrating them in your own frontends before being able to use them the first time.

However, for some application cases, these generic web frontends might even be sufficient for direct interaction with our services, and they might be offered to the end-user. To allow that, all frontends of this collection offer a certain degree of customization to slightly adapt their presentation to specific needs.

## Installation

Installing the frontend collection is relatively easy, as it is based only on HTML and vanilla JavaScript and therefore needs no external dependencies or frameworks to be installed. The only thing you'll need is a web server hosting the contents, e.g., an Apache HTTP server, an NGINX server, or for testing purposes a simple HTTP server provided by Python, which is the one we'll focus here.

If you don't have Python installed, this would be the first step for you. You may either install Python 2.x or 3.x, depending on your preferences. 

Afterwards, you have to clone this repository to a directory of your choice, e.g., /home/user/, and change into the 'frontend-collection' sub folder:

```bash
user@hostname:~ git clone https://github.com/kit-data-manager/frontend-collection
user@hostname:~ cd frontend-collection
user@hostname:~/frontent-collection _
```

From this folder you may now start your simple HTTP server depending on your Python version: 

### Python 2.x

```bash
user@hostname:~/frontent-collection python -m SimpleHTTPServer
Serving HTTP on :: port 8000 (http://[::]:8000/) ...
```

### Python 3.x (may also apply when using Windows)

```bash
user@hostname:~/frontent-collection python -m http.server
Serving HTTP on :: port 8000 (http://[::]:8000/) ...
```

After this, the output should tell you that the content is served at [http://localhost:8000/](http://localhost:8000/). 
Hostname and/or port might be different depending on your local configuration.

You can now access the HTML pages of the single frontends directly, which are: 

| Service                                                                | Frontend Location|
|------------------------------------------------------------------------|------------------|
| [base-repo](https://github.com/kit-data-manager/base-repo)             | http://localhost:8000/repo-management.html
| [metastore](https://github.com/kit-data-manager/metastore2)            | http://localhost:8000/metadata-management.html or http://localhost:8000/schema-management.html
| [typed-pid-maker](https://github.com/kit-data-manager/pit-service)     | http://localhost:8000/typed-pid-maker-ui.html
| [mapping-service](https://github.com/kit-data-manager/mapping-service) | http://localhost:8000/mapping-service-ui.html
| fdo-creator     | http://localhost:8000/fdo-creator-ui.html

## Basic Customization

For basic customization please check the .settings.js files in the `settings` sub folder of this repository.
Settings for the dashboard page can be found in `dashboard.settings.js`.
Settings applied for different frontends the same way can be found in `general.settings.js`.
In addition, for each frontend you'll find a specific settings file, e.g., `base-repo.settings.js` for repo-management.html or 
`metastore.settings.js` for metadata-management.html and schema-management.html. 

For more information please refer to the documentation inside the setting files.

## Issues

:grey_question: 
**The table showing service entries shows an error and no data is loaded.**

:grey_exclamation: 
Typically, this is an issue with the ajaxBaseURL, which was either provided in the service's settings.js file or via the input of the frontend page. 
At first, you should check the format. The URL should look similar to http://localhost:8080/api/v1/ or http://localhost:8090/, i.e., 
it should contain protocol, hostname and port depending on the addressed service instance optionally followed by an API base path, e.g., api/v1/, 
which is the base path of the API itself. The ajaxBaseURL **must** end with /

If everything looks fine, ensure that no authentication is used by the service you want to address. If Keycloak-based 
authentication is used by the service, please also adapt the `general.settings.js` accordingly to gain access.

If both checks succeed, please also check by which protocol the server providing your frontend is accessible. 
If it is `https` you are only allowed to load information from `https` resources. Accessing a service via `http` 
from a frontend running with `https` is not possible for security reasons.

Finally, if everything looks fine so far there might also be an issue with the service itself. Try to access the service without frontend to ensure
it is up and running.
---

:grey_question: 
**After applying a filter to the MetaStore and base-repo frontends, no results are shown even when I'm sure that there should be one.**

:grey_exclamation: 
The reason here is, that the tables are loaded page-wise with max. 20 entries at once. New data is only loaded on scrolling. As filtering
happens on the client-side, only the data already loaded is filtered. This may result in an empty table if elements known to match
the filter criteria are not loaded yet. The only solution for this for now is scrolling the table to the end before applying filters.

## License

The KIT Data Manager is licensed under the Apache License, Version 2.0.
