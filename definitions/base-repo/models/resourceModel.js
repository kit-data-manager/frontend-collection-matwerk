let model = {
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$defs": {
        "IDENTIFIER_TYPE": {
            "type": "string",
            "enum": ["ARK", "AR_XIV", "BIBCODE", "DOI", "EAN_13", "EISSN", "HANDLE", "IGSN", "ISBN", "ISSN", "ISTC", "LISSN", "LSID", "PMID", "PURL", "UPC", "URL", "URN", "W_3_ID", "INTERNAL", "OTHER"],
            "default": "DOI"
        }
    },
    "type": "object",
    "required": [
        "titles", "publisher", "publicationYear", "resourceType", "alternateIdentifiers"
    ],
    "format": "categories",
    "properties": {
        "titles": {
            "type": "array",
            "title": "Titles",
            "description": "A list of titles.",
            "minItems": 1,
            "propertyOrder": 1,
            "options": {
                "disable_collapse": false,
                "disable_edit_json": true,
                "disable_properties": false,
                "compact": false
            },
            "items": {
                "headerTemplate": " {{#if self.titleType}}\n" +
                    "                    <i>{{self.titleType}}</i>\n" +
                    "               {{else}}\n" +
                    "                    <i>None</i>\n" +
                    "               {{/if}}",
                "$ref": "definitions/base-repo/models/title.json",
                "watch": {
                    "titleType": "self.titleType"
                }
            }
        },
        "descriptions": {
            "type": "array",
            "title": "Descriptions",
            "format": "grid-strict",
            "propertyOrder": 2,
            "items": {
                "headerTemplate": " {{#if self.type}}\n" +
                    "                    <i>{{self.type}}</i>\n" +
                    "               {{else}}\n" +
                    "                    <i>None</i>\n" +
                    "               {{/if}}",
                "$ref": "definitions/base-repo/models/description.json",
                "watch": {
                    "titleType": "self.type"
                }
            }
        },
        "resourceType": {
            "$ref": "definitions/base-repo/models/resource_type.json"
        },
        "publisher": {
            "type": "string",
            "title": "Publisher",
        },
        "publicationYear": {
            "type": "string",
            "title": "Publication Year",
            "options": {
                "inputAttributes": {
                    "placeholder": "YYYY"
                },
                "cleave": {
                    "date": true,
                    "datePattern": ['Y']
                }
            }
            //"pattern":"^(19|20)\\d{2}$"
        },
        "acls": {
            "type": "array",
            "title": "Access Control Information",
            "required": true,
            "items": {
                "headerTemplate": " {{#if self.sid}}\n" +
                    "                    <i>{{self.sid}}</i>\n" +
                    "               {{else}}\n" +
                    "                    <i>None</i>\n" +
                    "               {{/if}}",
                "$ref": "definitions/base-repo/models/acl_entry.json",
                "watch": {
                    "titleType": "self.sid"
                }
            }
        },
        "alternateIdentifiers": {
            "type": "array",
            "title": "Alternate Identifiers",
            "items": {
                "type": "object",
                "headerTemplate": "{{ self.identifierType }}",
                "format":"grid-strict",
                "properties": {
                    "id": {
                        "type": "integer",
                        "title":"Id",
                        "propertyOrder": 1,
                        "readOnly":true,
                        "options": {
                            "grid_columns": 2,
                        }
                    },
                    "identifierType": {
                        "propertyOrder": 2,
                        "$ref": "#/$defs/IDENTIFIER_TYPE",
                        "default": "DOI",
                        "options": {
                            "grid_columns": 4,
                        }
                    },
                    "value": {
                        "type": "string",
                        "propertyOrder": 3,
                        "title": "Identifier",
                        "options": {
                            "grid_columns": 6
                        }
                    }
                },
                "required": ["identifierType", "value"]
            }
        },
        "contributors": {
            "type": "array",
            "title":"Contributors",
            "options": {
                "grid_columns": 6,
                "disable_collapse": false,
                "disable_edit_json": true,
                "disable_properties": true,
                "compact": false
            },
            "items": {
                "type": "object",
                "headerTemplate": "{{ self.contributionType }}",
                "options": {
                    "grid_columns": 12,
                    "disable_collapse": false,
                    "disable_edit_json": true,
                    "disable_properties": true,
                    "compact": false
                },
                "properties": {
                    "id": {
                        "type": "integer",
                        "propertyOrder": 1,
                        "readOnly": true
                    },
                    "contributionType": {
                        "type": "string",
                        "title":"Contribution Type",
                        "propertyOrder": 2,
                        "enum": ["CONTACT_PERSON", "DATA_COLLECTOR", "DATA_CURATOR", "DATA_MANAGER", "DISTRIBUTOR", "EDITOR", "HOSTING_INSTITUTION", "OTHER", "PRODUCER", "PROJECT_LEADER", "PROJECT_MANAGER", "PROJECT_MEMBER", "REGISTRATION_AGENCY", "REGISTRATION_AUTHORITY", "RELATED_PERSON", "RESEARCH_GROUP", "RIGHTS_HOLDER", "RESEARCHER", "SPONSOR", "SUPERVISOR", "WORK_PACKAGE_LEADER"],
                        "options": {
                            "grid_columns": 12,
                            "disable_collapse": false,
                            "disable_edit_json": true,
                            "disable_properties": true,
                            "compact": false
                        }
                    },
                    "user": {
                        "propertyOrder": 3,
                        "headerTemplate":" {{#if self.givenName}}\n" +
                            "                   {{#if self.familyName}}\n" +
                            "                        <i>{{self.familyName}}, {{self.givenName}}</i>\n" +
                                "               {{else}}\n" +
                            "                        <i>No Contributor</i>\n" +
                            "                   {{/if}}"+
                            "               {{else}}\n" +
                            "                   <i>No Contributor</i>\n" +
                            "               {{/if}}",
                        "$ref": "definitions/base-repo/models/agent.json",
                        "required": ["givenName", "familyName"],
                        "options": {
                            "grid_columns": 12,
                            "disable_collapse": false,
                            "disable_edit_json": true,
                            "disable_properties": false,
                            "compact": false
                        },
                        "watch": {
                            "givenName": "self.givenName",
                            "familyName": "self.familyName"
                        }
                    }
                },
                "required": ["contributionType", "user"]
            }
        },
        "creators": {
            "type": "array",
            "title":"Creators",
            "format": "grid-strict",
            "options": {
                "grid_columns": 6,
                "disable_collapse": false,
                "disable_edit_json": true,
                "disable_properties": true,
                "compact": false
            },
            "items": {
                "headerTemplate":" {{#if self.givenName}}\n" +
                    "                   {{#if self.familyName}}\n" +
                    "                        <i>{{self.familyName}}, {{self.givenName}}</i>\n" +
                    "               {{else}}\n" +
                    "                   <i>No Creator</i>\n" +
                    "               {{/if}}"+
                    "               {{else}}\n" +
                    "                   <i>No Creator</i>\n" +
                    "               {{/if}}",
                "$ref": "definitions/base-repo/models/agent.json",
                "required": ["givenName", "familyName"],
                "watch": {
                    "givenName": "self.givenName",
                    "familyName": "self.familyName"
                }

            }
        },
        "dates": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer"
                    },
                    "type": {
                        "type": "string",
                        "enum": ["ACCEPTED", "AVAILABLE", "COLLECTED", "COPYRIGHTED", "CREATED", "ISSUED", "SUBMITTED", "UPDATED", "VALID", "REVOKED"]
                    },
                    "value": {
                        "type": "string",
                        "pattern": "\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d([+-][0-2]\\d:[0-5]\\d|Z)"
                    }
                }
            }
        },

        "embargoDate": {
            "type": "string",
            "pattern": "\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d([+-][0-2]\\d:[0-5]\\d|Z)"
        },
        "formats": {
            "type": "array",
            "items": {
                "type": "string"
            }
        },
        "fundingReferences": {
            "type": "array",
            "items": {
                "$ref": "definitions/base-repo/models/funding_reference.json"
            }
        },
        "geoLocationsAsString": {
            "type": "string"
        },
        "geoLocations": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "box": {
                        "title": "Box",
                        "type": "object",
                        "properties": {
                            "eastLongitude": {
                                "type": "number"
                            },
                            "id": {
                                "type": "integer"
                            },
                            "northLatitude": {
                                "type": "number"
                            },
                            "southLatitude": {
                                "type": "number"
                            },
                            "westLongitude": {
                                "type": "number"
                            }
                        }
                    },
                    "id": {
                        "type": "integer"
                    },
                    "place": {
                        "title": "Place",
                        "type": "string"
                    },
                    "point": {
                        "$ref": "definitions/base-repo/models/point.json"
                    },
                    "polygon": {
                        "type": "object",
                        "title": "Polygon",
                        "properties": {
                            "id": {
                                "type": "integer"
                            },
                            "points": {
                                "type": "array",
                                "items": {
                                    "$ref": "definitions/base-repo/models/point.json"
                                }
                            }
                        }
                    }
                }
            }
        },
        "id": {
            "type": "string"
        },
        "identifier": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer"
                },
                "identifierType": {
                    "type": "string"
                },
                "value": {
                    "type": "string"
                }
            }
        },
        "language": {
            "$ref": "definitions/base-repo/models/language.json"
        },
        "lastUpdate": {
            "type": "string"
        },


        "relatedIdentifiers": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer"
                    },
                    "identifierType": {
                        "$ref": "#/$defs/IDENTIFIER_TYPE"
                    },
                    "relatedMetadataScheme": {
                        "type": "string"
                    },
                    "relationType": {
                        "type": "string",
                        "enum": ["IS_CITED_BY", "CITES", "IS_SUPPLEMENT_TO", "IS_SUPPLEMENTED_BY", "IS_CONTINUED_BY", "CONTINUES", "IS_NEW_VERSION_OF", "IS_PREVIOUS_VERSION_OF", "IS_PART_OF", "HAS_PART", "IS_REFERENCED_BY", "REFERENCES", "IS_DOCUMENTED_BY", "DOCUMENTS", "IS_COMPILED_BY", "COMPILES", "IS_VARIANT_FORM_OF", "IS_ORIGINAL_FORM_OF", "IS_IDENTICAL_TO", "HAS_METADATA", "IS_METADATA_FOR", "REVIEWS", "IS_REVIEWED_BY", "IS_DERIVED_FROM", "IS_SOURCE_OF"]
                    },
                    "scheme": {
                        "$ref": "definitions/base-repo/models/scheme.json"
                    },
                    "value": {
                        "type": "string"
                    }
                }
            }
        },


        "rights": {
            "type": "array",
            "items": {
                "$ref": "definitions/base-repo/models/scheme.json"
            }
        },
        "sizes": {
            "type": "array",
            "items": {
                "type": "string"
            }
        },
        "state": {
            "type": "string",
            "enum": ["VOLATILE", "FIXED", "REVOKED", "GONE"]
        },
        "subjects": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer"
                    },
                    "lang": {
                        "$ref": "definitions/base-repo/models/language.json"
                    },
                    "scheme": {
                        "$ref": "definitions/base-repo/models/scheme.json"
                    },
                    "value": {
                        "type": "string"
                    },
                    "valueUri": {
                        "type": "string"
                    }
                }
            }
        }
    }
};
