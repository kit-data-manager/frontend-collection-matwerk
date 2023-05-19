let uiDefinitionCreate = {
    "type": "fieldset",
    "items": [
        {
            "type": "array",
            "title": "Titles",
            "description":"One or more titles describing the resource.",
            "key":"titles",
            "items":{
                "type": "section",
                "items": [
                    {"title":"Language", "key":"titles[].lang", "description":"The title language.", "placeholder":"en"},
                    {"title":"Type", "key":"titles[].titleType", "description":"The type of the title."},
                    {"title":"Value", "key":"titles[].value", "description":"The title value.", "required": true, "placeholder":"My title"}

                ]
            }
        },
        {
            "title": "Publisher",
            "key": "publisher",
            "description":"The publisher of the resource. If no publisher is set, base-repo assigns the publisher based on the caller, i.e., the logged in user.",
            "placeholder":"Jane Doe",
        },
        {
            "title": "Publication Year",
            "key": "publicationYear",
            "description":"The year when the resource was published. If no publicationYear is set, base-repo assigned the current year automatically.",
            "placeholder":"2023"
        },
        {
            "title": "Language",
            "key": "language",
            "placeholder": "en",
            "description":"The language of the resource, if applicable."
        },
        {
            "title": "General Resource Type",
            "key": "resourceType.typeGeneral",
            "description":"The general type of the resource.",
            "required": true
        },
        {
            "title": "Specific Resource Type",
            "key": "resourceType.value",
            "description":"A more specific type of the resource.",
            "placeholder":"raw data",
            "required": true
        },
        {
            "title": "Enhanced Metadata",
            "type": "fieldset",
            "items": [
                {
                    "type": "tabs",
                    "id": "navtabs_acl",
                    "items": [
                        {
                            "title": "Access_Control_and_Restrictions",
                            "type": "tab",
                            "items": [
                                {
                                    "title": "Embargo Date",
                                    "key": "embargoDate",
                                    "placeholder":"2023-12-31T23:59:59Z",
                                    "description": "The date until when the resource is under embargo."
                                },
                                {
                                    "type": "array",
                                    "title": "License",
                                    "description":"Add one or more licenses applicable to the resource's contents.",
                                    "items":{
                                        "type": "section",
                                        "items": [
                                            {"title": "Identifier", "key":"rights[].schemeId", "description":"The license identifier.", "placeholder":"CC-BY-1.0"},
                                            {"title": "URI","key":"rights[].schemeUri", "description":"The URI where license information is available.", "placeholder":"https://spdx.org/licenses/CC-BY-1.0"}
                                        ]
                                    }
                                },
                                {
                                    "type": "array",
                                    "title": "Access Control List",
                                    "description":"Define additional access permissions. By default, base-repo automatically grants full permissions to the caller, i.e., the logged in user.",
                                    "htmlClass": "acl",
                                    "items":{
                                        "type": "section",
                                        "items": [
                                            {"title":"SID", "key":"acls[].sid", "description":"The subject id, i.e., a user or group id.", "placeholder":"anonymousUser"},
                                            {"title":"Permission", "key":"acls[].permission", "description":"The permission granted for the subject."}
                                        ]
                                    }
                                }
                            ]
                        },
                        {
                            "title": "Creators_and_Contributors",
                            "type": "tab",
                            "items": [
                                {
                                    "type": "array",
                                    "title": "Creators",
                                    "description": "One or more persons involved in the creation of the resource. If no creator is added, base-repo will automatically insert the caller, i.e., the logged in user.",
                                    "items":{
                                        "type": "section",
                                        "items": [
                                            {"title": "Family Name", "key":"creators[].familyName", "description":"The creator's last name.", "placeholder":"Doe"},
                                            {"title": "Given Name","key":"creators[].givenName", "description":"The creator's first name.", "placeholder":"Jane" },
                                            {
                                                "type": "array",
                                                "title": "Affiliations",
                                                "items":{
                                                    "type": "section",
                                                    "items": [
                                                        {"title":"Affiliation", "key":"creators[].affiliations[]", "description":"The creator affiliation's name or persistent identifier.", "placeholder":"https://ror.org/04t3en479" },
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "type": "array",
                                    "title": "Contributors",
                                    "description":"One or more persons contributing to the resource in some way.",
                                    "items":{
                                        "type": "section",
                                        "items": [
                                            {"title": "Contribution Type","key":"contributors[].contributionType", "description":"The type of contribution."},
                                            {"title": "Family Name", "key":"contributors[].user.familyName", "description":"The contributor's last name.", "placeholder":"Doe"},
                                            {"title": "Given Name","key":"contributors[].user.givenName", "description":"The contributor's first name.", "placeholder":"John"},
                                            {
                                                "type": "array",
                                                "title": "Affiliations",
                                                "items":{
                                                    "type": "section",
                                                    "items": [
                                                        {"title":"Affiliation", "key":"contributors[].user.affiliations[]", "description":"The contributor affiliation's name or persistent identifier.", "placeholder":"https://ror.org/04t3en479"},
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        {
                            "title": "Identifiers",
                            "type": "tab",
                            "items": [
                                {"title": "Identifier Type", "key":"identifier.identifierType", "description":"The type of the primary identifier.", "placeholder":"DOI"},
                                {"title": "Identifier","key":"identifier.value", "description":"The value of the primary identifier.", "placeholder":"10.1234/56789"},
                                {
                                    "type": "array",
                                    "title": "Alternate Identifiers",
                                    "description":"One or more alternate identifiers, i.e., identifiers pointing to the same resource.",
                                    "items":{
                                        "type": "section",
                                        "items": [
                                            {"title": "Identifier Type", "key":"alternateIdentifiers[].identifierType", "description":"The type of the alternate identifier.", "value":"DOI"},
                                            {"title": "Identifier","key":"alternateIdentifiers[].value", "description":"The value of the alternate identifier.", "placeholder":"10.1234/56789"},
                                        ]
                                    }
                                },
                                {
                                    "type": "array",
                                    "title": "Related Resources",
                                    "description":"One or more resources that are in some relation to the created resource, e.g., additional parts or related metadata.",
                                    "items":{
                                        "type": "section",
                                        "items": [
                                            {"title": "Relation Type", "key":"relatedIdentifiers[].relationType", "description":"The relation type of the related resource.", "value":"HAS_METADATA"},
                                            {"title": "Identifier Type", "key":"relatedIdentifiers[].identifierType", "description":"The type of the related resource's identifier.", "value":"DOI"},
                                            {"title": "Identifier","key":"relatedIdentifiers[].value", "description":"The value of the related resource's identifier.", "placeholder":"10.1234/56789" },
                                            {"title": "Scheme Id","key":"relatedIdentifiers[].scheme.schemeId", "description":"The related resource's schema id (applicable for relation types hasMetadata/isMetadataFor).", "placeholder":"http://purl.org/dc/elements/1.1/"},
                                            {"title": "Scheme URI","key":"relatedIdentifiers[].scheme.schemeUri", "description": "The related resource's schema URI (applicable for relation types hasMetadata/isMetadataFor).", "placeholder":"https://www.dublincore.org/schemas/xmls/simpledc20021212.xsd"},
                                        ]
                                    }
                                }
                            ]
                        },
                        {
                            "title": "Descriptive",
                            "type": "tab",
                            "items": [
                                {
                                    "type": "array",
                                    "title": "Dates",
                                    "readonly": true,
                                    "description":"One or more dates on which certain activities with regard to the resource happened, e.g., creation or revokation.",
                                    "items":{
                                        "type": "section",
                                        "items": [
                                            {"title": "Date Type", "key":"dates[].type", "description": "The type of the date.", "value":"CREATED"},
                                            {"title": "Date","key":"dates[].value", "description":"The value of the date.", "placeholder":"2023-01-01T00:00:00Z" },
                                        ]
                                    }
                                },
                                {
                                    "type": "array",
                                    "title": "Subjects",
                                    "description":"One or more subjects allowing putting the resource and its contents more into context.",
                                    "items":{
                                        "type": "section",
                                        "items": [
                                            {"title": "Term", "key":"subjects[].value", "description":"The subject term, e.g., keyword, classification code, or key phrase describing the resource.", "placeholder":"Astrophysics"},
                                            {"title": "Term URI", "key":"subjects[].valueUri", "description":"The URI of the subject term.", "placeholder":"http://vocabularies.unesco.org/thesaurus/concept3218"},
                                            {"title": "Scheme Id", "key":"subjects[].scheme.schemeId", "description":"The id of the subject identifier scheme."},
                                            {"title": "Scheme URI", "key":"subjects[].scheme.schemeUri", "description":"The URI of the subject identifier scheme."},
                                        ]
                                    }
                                },
                                {
                                    "type": "array",
                                    "title": "Descriptions",
                                    "description":"One or more human readable descriptions of the resource, e.g., an abstract.",
                                    "items":{
                                        "type": "section",
                                        "items": [
                                            {"title": "Type", "key":"descriptions[].type",  "description":"The type of the description."},
                                            {"title": "Language", "key":"descriptions[].lang", "description":"The language of the description.", "placeholder":"en"},
                                            {"title": "Description", "key":"descriptions[].description", "type": "textarea", "description":"The description text with a max length of 10240 characters."}
                                        ]
                                    }
                                },
                                {
                                    "type": "array",
                                    "title": "Formats",
                                    "description":"One or more technical formats describing the contents of the resource.",
                                    "readonly": true,
                                    "items":{
                                        "type": "section",
                                        "items": [
                                            {"title":"Format Value", "key":"formats[]", "type": "text", "description":"A technical format, e.g., mime type or file extension.", "placeholder":"image/tiff"}
                                        ]
                                    }
                                }
                            ]
                        },
                        {
                            "title": "Geo Information",
                            "type": "tab",
                            "items": [
                                {
                                    "title": "Geo Locations",
                                    "key": "geoLocationsAsString",
                                    "type": "ace",
                                    "aceMode": "json",
                                    "aceTheme": "twilight",
                                    "width": "100%",
                                    "height": "200px"
                                },
                            ]
                        },
                        {
                            "title": "Funding Information",
                            "description":"One or more entries giving finding information on the context in which the resource was created.",
                            "type": "tab",
                            "items": [
                                {
                                    "type": "array",
                                    "title": "Funding References",
                                    "items":{
                                        "type": "section",
                                        "items": [
                                            {"title": "Award Number", "key":"fundingReferences[].awardNumber.schemeId", "description":"The award number.", "placeholder":"031B0733A"},
                                            {"title": "Award Title", "key":"fundingReferences[].awardTitle", "description":"The funding award title."},
                                            {"title": "Award URI", "key":"fundingReferences[].awardUri", "description":"The funding award URI."},
                                            {"title": "Funder Name", "key":"fundingReferences[].funderName", "description":"The name of the funder.", "placeholder":"Bundesministerium für Bildung und Forschung"},
                                            {"title": "Funder Identifier", "key":"fundingReferences[].funderIdentifier.identifierType", "description":"The funder identifier type.", "value":"DOI"},
                                            {"title": "Funder Identifier Type", "key":"fundingReferences[].funderIdentifier.type", "description":"Type of the funder identifier.", "value":"CROSSREF_FUNDER_ID" },
                                            {"title": "Funder", "key":"fundingReferences[].funderIdentifier.value", "description":"The funder identifier", "placeholder":"10.13039/501100002347"}
                                        ]
                                    }
                                }
                            ]
                        },
                    ]
                }
            ]
        }

    ]
};
