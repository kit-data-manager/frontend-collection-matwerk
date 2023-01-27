let tableItems = [{
    formatter:"responsiveCollapse",
    width: 30,
    minWidth: 30,
    hozAlign: "center",
    resizable: false,
    headerSort: false
    },
    {
        "title": "Identifier",
        "field": "schemaId",
        "resizable": false
    },  
    {
        "title": "Version",
        "field": "schemaVersion",
        "editor":"input"
    },
    {
        "title": "Type",
        "field": "type"  
    },
    {
        "title": "Label",
        "field": "label",
        "minWidth":200
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
