let uiDefinitionCreate= {
    "type": "fieldset",
    "items": [
        {
            "title": "Related Resource Identifier",
            "key": "relatedResource.identifier",
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
            "title": "Schema Identifier Type",
            "key": "schema.identifierType"
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
