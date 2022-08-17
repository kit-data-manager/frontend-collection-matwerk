# frontend-collection

This repository contains a collection of generic web frontends for accessing RESTful services from the KIT Data Manager service portfolio. The idea is to have graphical user interfaces available such that certain base services can be directly used for performing basic tasks without the need of integrating them in your own frontends before being able to use them the first time.

However, for some application cases, these generic web frontends might even be sufficient for direct interaction with our services and they might be offered to the end-user. To allow that, all frontends of this collection offer a certain degree of customization to slightly adapt their presentation to specific needs.

## Installation

Installing the frontend collection is relatively easy, as it is based only on HTML and vanilla JavaScript and therefore needs no external dependencies or frameworks to be installed. The only thing you'll need is a web server hosting the contents, e.g., an Apache HTTP server, an NGINX server, or for testing purposes a simple HTTP server provided by Python, which is the one we'll focus here.

If you don't have Python installed, this would be the first step for you. You may either install Python 2.x or 3.x, depending on your preferences. 

Afterwards, you have to clone this repository to a directory of your choice, e.g., /home/user/, and change into the 'frontend-collection' subfolder:

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

After this, the output should tell you that the content is served at [http://localhost:8000/](http://localhost:8000/). Hostname and/or port might be different depending on your local configuration.

You can now access the HTML pages of the single frontends directly, which are: 

| Service       | Frontend Location|
|---------------|------------------|
| [base-repo](https://github.com/kit-data-manager/base-repo)     | http://localhost:8000/repo-management.html
| [metastore](https://github.com/kit-data-manager/metastore2)     | http://localhost:8000/metadata-management.html or http://localhost:8000/schema-management.html

## Basic Customization

For basic customization please check the .settings.js files in the js subfolder of this repository. For each frontend, you'll find one settings file, e.g., `base-repo.settings.js` for repo-management.html or `metastore.settings.js` for metadata-management.html and schema-management.html. 

Depending on the service, there might be different settings available depending on the service's capabilities. There are some commons property variables listed in the following table:

| Variable       | Description     |
|---------------|------------------|
| ajaxBaseUrl   |  The base URL for requests to this service, e.g., http://localhost:8080/api/v1/ Be aware, that providing a wrong base URL will result in loading errors in the frontend.
| keycloak      | If you want to enable authentication via Keycloak, you have to assign a proper value according to the example to this variable. Otherwise, no user login will be provided.
| showServiceUrl | Setting this variable `true` will allow to change ajaxBaseUrl in the frontend. This setting is meant for developers only. In production environments, only `ajaxBaseUrl` should be used.
| appDescription | Here you can customize the header of your frontend, e.g., by providing a custom logo, title, or subtitle. 

For the base-repo frontend, there is another variable named `tags`. This variable allows to provide a list of tags and their color, which are then presented to the user to tag content elements in the frontend. Please note, that tag colors re only used in the frontend and are not stored at the base-repo service. Browsing a base-repo instance with another instance of the frontend having a different tag coloring scheme will render the tags according to the configuration in the currently used frontend instance.

## Issues

:grey_question: 
**The table showing service entries shows an error and no data is loaded.**

:grey_exclamation: 
Typically, this is an issue with the ajaxBaseURL, which was either provided in the settings.js file or via the input of the frontend page. At first, you should check the format. The URL should look similar to http://localhost:8080/api/v1/ , i.e., it should contain protocol, hostname and port depending on the addressed service instance followed by api/v1/, which is the base path of the API itself and **must** end with /

If everything looks fine, ensure that no authentication is used by the service you want to address. If Keycloak-based authentication is used, please adapt the settings.js accordingly to gain access.

If both checks succeed, please also check by which protocol the server providing your frontend is accessible. If it is `https` you are only allowed to load information from `https` resources. Accessing a service via `http` from a frontend running with `https` is not possible for security reasons.

---

:grey_question: 
**Applying filters to the tables in `metadata-management.html` and `schema-management.html` results in incomplete pages.**

:grey_exclamation: 
The reason here is, that pagination for the MetaStore frontend is build remotely, whereas filering happens on the client-side. In future this will change in a way, that both is done on the client side.

---

:grey_question: **The tables in `repo-management.html` seem not to contain all resources I have in my system.**

:grey_exclamation: 
For the base-repo frontent, pagination is done locally instead of remotely. However, for proper local pagination, the Tabulator library we are using for handling tables requires a certain response format which is not yet provided by base-repo. Therefore, Tabulator-wise only one page with 20 elements is loaded. This will change in future.


## License

The KIT Data Manager is licensed under the Apache License, Version 2.0.
