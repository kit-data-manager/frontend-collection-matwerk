let tableDefinitionMetadata = {
    layout: "fitDataFill",
    responsiveLayout: "collapse",
    ajaxURL: undefined,
    ajaxProgressiveLoad:"load",
    groupBy: function(data){
        let identifier = data.schemaId
        let version = data.schemaVersion

        return identifier + " (" + version + ")" ;
    },
    height: 400,
    paginationSize: 10,
    paginationSizeSelector: [3, 6, 8, 10, 15, 20]
    /* for modifying data while loading,
    dataLoading:   function(data) {
      for(var i=0;i<data.length;i++){
       readSchemaRecord(data[i].schema.identifier, function(status, result){
       data[i].label = result.label;
  });
      }
    }*/
};
