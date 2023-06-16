let uiDefinitionCreate = {
    "type": "fieldset",
    "items": [
        {
            "type": "tabs",
            "id": "navtabs_acl",
            "items": [
                {
                    "title": "Mandatory_Attributes",
                    "type": "tab",
                    "items": [
                        {
                            "title": "Kernel Information Profile",
                            "key": "kernelInformationProfile",
                            "value": "21.T11148/b9b76f887845e32d29f7",
                            "readOnly": true
                        }, {
                            "title": "Digital Object Type",
                            "key": "digitalObjectType",
                            "placeholder": "1234/1234"
                        },
                        {
                            "title": "Digital Object Location",
                            "key": "digitalObjectLocation",
                            "placeholder": "https://hostname:port/data"
                        },
                        {
                            "title": "Creation Date",
                            "key": "dateCreated",
                            "placeholder": "yyyy-MM-ddThh:mm:ssZ",
                            "slots": "yMdhms",
                            "accept": "\\d",
                        },
                        {
                            "title": "License",
                            "key": "license",
                            "placeholder": "https://spdx.org/licenses/CC-BY-4.0"
                        }
                    ]
                },
                {
                    "title": "Recommended_Attributes",
                    "type": "tab",
                    "items": [
                        {
                            "title": "Version",
                            "key": "version",
                            "placeholder": "1.0.0"
                        },
                        {
                            "title": "Modification Date",
                            "key": "dateModified",
                            "placeholder": "yyyy-MM-ddThh:mm:ssZ",
                            "slots": "yMdhms",
                            "accept": "\\d",
                        },
                        {
                            "title": "Checksum",
                            "key": "checksum",
                            "placeholder":"0CBC6611F5540BD0809A388DC95A615B",
                        },
                        {
                            "type": "array",
                            "title": "Topics",
                            "items": {
                                "type": "section",
                                "items": [
                                    {
                                        "title": "Topic",
                                        "key": "topic[]",
                                        "type": "text",
                                        "placeholder":"http://vocabularies.unesco.org/thesaurus/concept7387"
                                    }
                                ]
                            }
                        },
                        {
                            "type": "array",
                            "title": "Contact",
                            "items": {
                                "type": "section",
                                "items": [
                                    {
                                        "title": "Contact",
                                        "key": "contact[]",
                                        "type": "text",
                                        "placeholder":"https://ror.org/04t3en479"
                                    }
                                ]
                            }
                        }
                    ]
                },
                {
                    "title": "Enhanced_Attributes",
                    "type": "tab",
                    "items": [
                        {
                            "title": "Embargo Date",
                            "key": "underEmbargoUntil",
                            "placeholder": "yyyy-MM-ddThh:mm:ssZ",
                            "slots": "yMdhms",
                            "accept": "\\d",
                        },
                        {
                            "type": "array",
                            "title": "Previews",
                            "items": {
                                "type": "section",
                                "items": [
                                    {
                                        "title": "Preview",
                                        "key": "locationPreview[]",
                                        "type": "text",
                                        "placeholder":"https://hostname:port/data/preview.tiff"
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    ]
};
