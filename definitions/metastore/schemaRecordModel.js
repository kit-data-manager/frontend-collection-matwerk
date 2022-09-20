let model = {
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$id": "http://www.example.org/schema/json",
    "type": "object",
    "properties": {
        "schemaId": {
            "type": "string",
            "title": "Schema Record Identifier"
        },
        "schemaVersion": {
            "type": "string",
            "title": "Schema Version",
            "optional":true
        },
        "mimeType": {
            "type": "string",
            "title": "mime Type",
            "default": "application/json",
            "enum": ["application/json", "application/xml"]
        },
        "type": {
            "type": "string",
            "title": "Type",
            "default": "JSON",
            "enum": ["JSON", "XML"]
        },
        "createdAt": {
            "type": "datetime",
            "title": "Date Created",
            "optional":true
        },
        "lastUpdate": {
            "type": "datetime",
            "title": "Date Updated",
            "optional":true
        },
        "label": {
            "type": "string",
            "title": "Label",
            "optional":true
        },
        "definition": {
            "type": "string",
            "title": "Definition",
            "optional":true
        },
        "comment": {
            "type": "string",
            "title": "Comment",
            "optional":true
        },
        "acl": {
            "type": "array",
            "title": "ACL",
            "optional":true,
            "items": {
                "type": "object",
                "properties": {
                    "sid": {
                        "type": "string",
                        "title": "sid",
                        "default": "SELF"
                    },
                    "permission": {
                        "type": "string",
                        "title": "Permission",
                        "default": "ADMINISTRATE",
                        "enum": ["NONE", "READ", "WRITE", "ADMINISTRATE"]
                    }
                }
            }
        },
        "schemaDocumentUri": {
            "type": "string",
            "title": "Schema Document Uri",
            "optional":true
        },
        "fileSchema": {
            "type": "string",
            "title": "Schema Document",
            "optional":true
        },
        "schemaHash": {
            "type": "string",
            "title": "Schema Hash",
            "optional":true
        },
        "locked": {
            "type": "boolean",
            "default": false,
            "title": "Locked",
            "optional":true
        }
    }
}
