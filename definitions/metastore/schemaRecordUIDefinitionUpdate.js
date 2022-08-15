let uiDefinitionUpdate= {
  "type": "fieldset",
  "items": [
    {
      "key": "schemaId",
      "readonly": true
    },
    {
      "key": "label",
      "readonly": true
    },
    {
      "key": "mimeType",
      "type": "text",
      "readonly": true
    },
    {
      "key": "type",
      "type": "text",
      "readonly": true
    },
    {
      "type": "array",
      "title": "ACL",
      "htmlClass": "acl",
      "items": [
        "acl[]"
      ]
    },
    "locked"
  ]
}

