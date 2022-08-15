let tableItems = [{
        "title": "Identifier",
        "field": "id"
    },  
    {
        "title": "Title",
        "field": "firstTitle"
    },
    {
        "title": "Publisher",
        "field": "publisher"
    },
    {
        "title": "Publication Year",
        "field": "publicationYear"
    },
    {
        "title": "Resource Type",
        "field": "resourceType.value",
    },
    {
        "title": "Date Updated",
        "field": "lastUpdate",
        "formatter":"datetime",
        "formatterParams":{
            "outputFormat":"YYYY-MM-DD HH:mm"
        }
    }
];
