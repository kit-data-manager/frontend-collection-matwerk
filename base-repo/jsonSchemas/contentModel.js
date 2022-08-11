let contentModel = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
        "id": {
            "type": "integer"
        },
        "parentResource": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "string"
                },
                "identifier": {
                    "type": "object",
                    "properties": {
                        "value": {
                            "type": "string"
                        },
                        "identifierType": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "value",
                        "identifierType"
                    ]
                },
                "alternateIdentifiers": {
                    "type": "array",
                    "items": [
                        {
                            "type": "object",
                            "properties": {
                                "value": {
                                    "type": "string"
                                },
                                "identifierType": {
                                    "type": "string"
                                }
                            },
                            "required": [
                                "value",
                                "identifierType"
                            ]
                        }
                    ]
                }
            },
            "required": [
                "id",
                "identifier",
                "alternateIdentifiers"
            ]
        },
        "relativePath": {
            "type": "string"
        },
        "version": {
            "type": "integer"
        },
        "fileVersion": {
            "type": "string"
        },
        "versioningService": {
            "type": "string"
        },
        "uploader": {
            "type": "string"
        },
        "mediaType": {
            "type": "string"
        },
        "hash": {
            "type": "string"
        },
        "size": {
            "type": "integer"
        },
        "metadata": {
            "type": "object"
        },
        "tags": {
            "type": "array",
            "items": {}
        },
        "filename": {
            "type": "string"
        }
    }
};
