let uiDefinitionContentRead = {
    "type": "fieldset",
    "items": [
        {
            "title": "Parent Resource Identifier",
            "key": "parentResource.id",
            "readonly": true
        },
        {
            "title": "Relative Path",
            "key": "relativePath",
            "readonly": true
        },
        {
            "title": "Metadata Version",
            "key": "version",
            "readonly": true
        },
        {
            "title": "File Version",
            "key": "fileVersion",
            "readonly": true
        },
        {
            "key": "uploader",
            "readonly": true
        },
        {
            "key": "mediaType",
            "readonly": true
        },
        {
            "key": "hash",
            "readonly": true
        },
        {
            "key": "size",
            "readonly": true
        },
        {
            "type": "array",
            "title": "Tags",
            "htmlClass": "acl",
            "readonly": true,
            "items":{
                "type": "section",
                "items": [
                    {"key":"tags[]","readonly": true},
                ]
            }
        }
    ]
};
