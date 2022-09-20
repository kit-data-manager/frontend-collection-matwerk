let uiDefinitionRead = {
    "type": "fieldset",
    "items": [
        {
            "key": "id",
            "readonly": true
        },
        {
            "type": "array",
            "title": "Titles",
            "readonly": true,
            "items":{
                "type": "section",
                "items": [
                    {"title":"Language", "key":"titles[].lang","readonly": true},
                    {"title":"Type", "key":"titles[].titleType", "type":"text", "readonly": true},
                    {"title":"Value", "key":"titles[].value","readonly": true}
                ]
            }
        },
        {
            "title": "Publisher",
            "key": "publisher",
            "readonly": true
        },
        {
            "title": "Publication Year",
            "key": "publicationYear",
            "readonly": true
        },
        {
            "title": "Language",
            "key": "language",
            "readonly": true
        },
        {
            "title": "Last Update",
            "key": "lastUpdate",
            "readonly": true
        },
        {
            "title": "General Resource Type",
            "key": "resourceType.typeGeneral",
            "type":"text",
            "readonly": true
        },
        {
            "title": "Specific Resource Type",
            "key": "resourceType.value",
            "readonly": true
        },
        {
            "title": "State",
            "key": "state",
            "type": "text",
            "readonly": true
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
                                    "readonly": true
                                },
                                {
                                    "type": "array",
                                    "title": "Rights",
                                    "readonly": true,
                                    "items":{
                                        "type": "section",
                                        "items": [
                                            {"title": "Identifier", "key":"rights[].schemeId","readonly": true},
                                            {"title": "URI","key":"rights[].schemeUri","readonly": true, "type":"text"}
                                        ]
                                    }
                                },
                                {
                                    "type": "array",
                                    "title": "Access Control List",
                                    "readonly": true,
                                    "items":{
                                        "type": "section",
                                        "items": [
                                            {"key":"acls[].sid","readonly": true},
                                            {"key":"acls[].permission","readonly": true, "type":"text"}
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
                                    "readonly": true,
                                    "items":{
                                        "type": "section",
                                        "items": [
                                            {"title": "Family Name", "key":"creators[].familyName","readonly": true},
                                            {"title": "Given Name","key":"creators[].givenName","readonly": true},
                                            {
                                                "type": "array",
                                                "title": "Affiliations",
                                                "readonly": true,
                                                "items":{
                                                    "type": "section",
                                                    "items": [
                                                        {"key":"creators[].affiliations[]","readonly": true},
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "type": "array",
                                    "title": "Contributors",
                                    "readonly": true,
                                    "items":{
                                        "type": "section",
                                        "items": [
                                            {"title": "Contribution Type","key":"contributors[].contributionType", "type": "text", "readonly": true},
                                            {"title": "Family Name", "key":"contributors[].user.familyName","readonly": true},
                                            {"title": "Given Name","key":"contributors[].user.givenName","readonly": true},
                                            {
                                                "type": "array",
                                                "title": "Affiliations",
                                                "readonly": true,
                                                "items":{
                                                    "type": "section",
                                                    "items": [
                                                        {"key":"contributors[].user.affiliations[]","readonly": true},
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
                                {"title": "Identifier Type", "key":"identifier.identifierType","readonly": true},
                                {"title": "Identifier","key":"identifier.value","readonly": true},
                                {
                                    "type": "array",
                                    "title": "Alternate Identifiers",
                                    "readonly": true,
                                    "items":{
                                        "type": "section",
                                        "items": [
                                            {"title": "Identifier Type", "key":"alternateIdentifiers[].identifierType", "type":"text", "readonly": true},
                                            {"title": "Identifier","key":"alternateIdentifiers[].value","readonly": true},
                                        ]
                                    }
                                },
                                {
                                    "type": "array",
                                    "title": "Related Identifiers",
                                    "readonly": true,
                                    "items":{
                                        "type": "section",
                                        "items": [
                                            {"title": "Relation Type", "key":"relatedIdentifiers[].relationType", "type":"text", "readonly": true},
                                            {"title": "Identifier Type", "key":"relatedIdentifiers[].identifierType", "type":"text", "readonly": true},
                                            {"title": "Identifier","key":"relatedIdentifiers[].value","readonly": true},
                                            {"title": "Scheme Id","key":"relatedIdentifiers[].scheme.schemeId","readonly": true},
                                            {"title": "Scheme URI","key":"relatedIdentifiers[].scheme.schemeUri","readonly": true},
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
                                    "items":{
                                        "type": "section",
                                        "items": [
                                            {"title": "Date Type", "key":"dates[].type", "type":"text", "readonly": true},
                                            {"title": "Date","key":"dates[].value","readonly": true},
                                        ]
                                    }
                                },
                                {
                                    "type": "array",
                                    "title": "Subjects",
                                    "readonly": true,
                                    "items":{
                                        "type": "section",
                                        "items": [
                                            {"title": "Language", "key":"subjects[].lang", "readonly": true},
                                            {"title": "Subject", "key":"subjects[].value", "readonly": true},
                                            {"title": "Subject URI", "key":"subjects[].valueUri", "readonly": true},
                                            {"title": "Scheme Id", "key":"subjects[].scheme.schemeId", "readonly": true},
                                            {"title": "Scheme URI", "key":"subjects[].scheme.schemeUri", "readonly": true},
                                        ]
                                    }
                                },
                                {
                                    "type": "array",
                                    "title": "Descriptions",
                                    "readonly": true,
                                    "items":{
                                        "type": "section",
                                        "items": [
                                            {"title": "Type", "key":"descriptions[].type", "type": "text", "readonly": true},
                                            {"title": "Language", "key":"descriptions[].lang", "readonly": true},
                                            {"title": "Description", "key":"descriptions[].description", "readonly": true}
                                        ]
                                    }
                                },
                                {
                                    "type": "array",
                                    "title": "Formats",
                                    "readonly": true,
                                    "items":{
                                        "type": "section",
                                        "items": [
                                            {"key":"formats[]", "type": "text", "readonly": true}
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
                                    "height": "200px",
                                    "readonly": true
                                },
                            ]
                        },
                        {
                            "title": "Funding Information",
                            "type": "tab",
                            "items": [
                                {
                                    "type": "array",
                                    "title": "Funding References",
                                    "readonly": true,
                                    "items":{
                                        "type": "section",
                                        "items": [
                                            {"title": "Award Number", "key":"fundingReferences[].awardNumber.schemeId", "readonly": true},
                                            {"title": "Award URI", "key":"fundingReferences[].awardNumber.schemeUri", "readonly": true},
                                            {"title": "Award Title", "key":"fundingReferences[].awardTitle", "readonly": true},
                                            {"title": "Award URI", "key":"fundingReferences[].awardUri", "readonly": true},
                                            {"title": "Funder Name", "key":"fundingReferences[].funderName", "readonly": true},
                                            {"title": "Funder Identifier", "key":"fundingReferences[].funderIdentifier.identifierType", "type":"text", "readonly": true},
                                            {"title": "Funder Type", "key":"fundingReferences[].funderIdentifier.type", "type":"text", "readonly": true},
                                            {"title": "Funder", "key":"fundingReferences[].funderIdentifier.value", "readonly": true}
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
