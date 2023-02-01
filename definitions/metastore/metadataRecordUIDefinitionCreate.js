let uiDefinitionCreate= {
    "type": "fieldset",
    "items": [
        {
            "title": "Related Resource Identifier",
            "key": "relatedResource.identifier",
            "type": "typeahead",
            "url": "https://demo.datamanager.kit.edu:8443/base-repo/api/v1/dataresources/",
            "selector": "['titles'][0].value",
            "required": true
        },
        {
            "title": "Related Resource Identifier Type",
            "key": "relatedResource.identifierType",
            "required": true
        },
        {
            "title": "Schema Identifier",
            "key": "schema.identifier"
        },
        {
            "key": "schemaVersion",
            "type":"text",
            /*"onChange": function (evt) {
                var value = $(evt.target).val();
                if (value) alert(value);
            }*/
        },
        {
            "type": "array",
            "title": "ACL",
            "htmlClass": "acl",
            "items":{
                "type": "section",
                "items": [
                    {"key":"acl[].sid"},
                    {"key":"acl[].permission"}
                ]
            }
        },{
            "key": "metadataDocument",
            "id": "metadataDocument",
            "type": "file"
        }
    ]
};
