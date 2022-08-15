let tableItems = [{
        "title": "Identifier",
        "field": "id"
    },  
    {
        "title": "Related Resource",
        "field": "relatedResource.identifier"
    },
    {
        "title": "Schema Identifier",
        "field": "schema.identifier",
        "formatter":"link",
        "formatterParams":{
            "target":"_blank",
                "label":  function(data){
                    let identifier = data._cell.value;
                    let version = identifier.substring(identifier.lastIndexOf('?') + 1);
                    return identifier.substring(identifier.lastIndexOf('/') + 1, identifier.lastIndexOf('?')) + ' (' + version +')' ;
            }
        }
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
