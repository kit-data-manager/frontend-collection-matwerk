(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['reporesult_detailed_new'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "                        <a class=\"ui green left corner label\">\n                            <i class=\"lock open icon\"></i>\n                        </a>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                        <a class=\"ui red left corner label\">\n                            <i class=\"lock icon\"></i>\n                        </a>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"givenName") || (depth0 != null ? lookupProperty(depth0,"givenName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"givenName","hash":{},"data":data,"loc":{"start":{"line":35,"column":65},"end":{"line":35,"column":78}}}) : helper)));
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <i>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"descriptions") : stack1)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"description") : stack1), depth0))
    + "</i>\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "                        <i>No description available</i>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"content") : stack1),{"name":"each","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":56,"column":28},"end":{"line":66,"column":37}}})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <div class=\"ui fluid list\" style=\"margin-left: 10px\">\n                                <div class=\"item\">\n                                    <div class=\"content\">\n                                        <div class=\"header\"><a href='"
    + alias3((lookupProperty(helpers,"contentLink")||(depth0 && lookupProperty(depth0,"contentLink"))||alias2).call(alias1,depth0,{"name":"contentLink","hash":{},"data":data,"loc":{"start":{"line":60,"column":69},"end":{"line":60,"column":89}}}))
    + "'\n                                                               target='_blank'>"
    + alias3(((helper = (helper = lookupProperty(helpers,"relativePath") || (depth0 != null ? lookupProperty(depth0,"relativePath") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"relativePath","hash":{},"data":data,"loc":{"start":{"line":61,"column":79},"end":{"line":61,"column":95}}}) : helper)))
    + "</a></div>\n                                        <div class=\"description\">"
    + alias3(((helper = (helper = lookupProperty(helpers,"hash") || (depth0 != null ? lookupProperty(depth0,"hash") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"hash","hash":{},"data":data,"loc":{"start":{"line":62,"column":65},"end":{"line":62,"column":73}}}) : helper)))
    + "</div>\n                                    </div>\n                                </div>\n                            </div>\n";
},"14":function(container,depth0,helpers,partials,data) {
    return "                            <i style=\"padding-left: 20px\">No content uploaded, yet.</i>\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <span class=\"indent\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"rights") : stack1)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"schemaId") : stack1), depth0))
    + "</span>\n";
},"18":function(container,depth0,helpers,partials,data) {
    return "                    <span class=\"indent\">No license assigned</span>\n";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"relatedIdentifiers") : stack1),{"name":"each","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":97,"column":24},"end":{"line":104,"column":33}}})) != null ? stack1 : "");
},"21":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <div class=\"item\">\n                            <div class=\"content\">\n                                <a class=\"header\" href='"
    + alias4(((helper = (helper = lookupProperty(helpers,"value") || (depth0 != null ? lookupProperty(depth0,"value") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data,"loc":{"start":{"line":100,"column":56},"end":{"line":100,"column":65}}}) : helper)))
    + "'>"
    + alias4((lookupProperty(helpers,"splitUrl")||(depth0 && lookupProperty(depth0,"splitUrl"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"value") : depth0),{"name":"splitUrl","hash":{},"data":data,"loc":{"start":{"line":100,"column":67},"end":{"line":100,"column":85}}}))
    + "</a>\n                                <div class=\"description\">("
    + alias4(((helper = (helper = lookupProperty(helpers,"relationType") || (depth0 != null ? lookupProperty(depth0,"relationType") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"relationType","hash":{},"data":data,"loc":{"start":{"line":101,"column":58},"end":{"line":101,"column":74}}}) : helper)))
    + ")</div>\n                            </div>\n                        </div>\n";
},"23":function(container,depth0,helpers,partials,data) {
    return "                        <div class=\"item\">\n                            <div class=\"content\">\n                                <div class=\"description\">No related identifiers assigned</div>\n                            </div>\n                        </div>\n";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"alternateIdentifiers") : stack1),{"name":"each","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":116,"column":24},"end":{"line":123,"column":33}}})) != null ? stack1 : "");
},"26":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <div class=\"item\">\n                            <div class=\"content\">\n                                <a class=\"header\" href='"
    + alias4(((helper = (helper = lookupProperty(helpers,"value") || (depth0 != null ? lookupProperty(depth0,"value") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data,"loc":{"start":{"line":119,"column":56},"end":{"line":119,"column":65}}}) : helper)))
    + "'>"
    + alias4((lookupProperty(helpers,"splitUrl")||(depth0 && lookupProperty(depth0,"splitUrl"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"value") : depth0),{"name":"splitUrl","hash":{},"data":data,"loc":{"start":{"line":119,"column":67},"end":{"line":119,"column":85}}}))
    + "</a>\n                                <div class=\"description\">("
    + alias4(((helper = (helper = lookupProperty(helpers,"identifierType") || (depth0 != null ? lookupProperty(depth0,"identifierType") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"identifierType","hash":{},"data":data,"loc":{"start":{"line":120,"column":58},"end":{"line":120,"column":76}}}) : helper)))
    + ")</div>\n                            </div>\n                        </div>\n";
},"28":function(container,depth0,helpers,partials,data) {
    return "                        <div class=\"item\">\n                            <div class=\"content\">\n                                <div class=\"description\">No alternate identifiers assigned</div>\n                            </div>\n                        </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.lambda, alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!--html>\n<head>\n    <script src=\"../../js/semantic-ui/transition.min.js\"></script>\n    <script src=\"../../js/semantic-ui/dimmer.min.js\"></script>\n    <script src=\"../../js/semantic-ui/tab.min.js\"></script>\n    <script src=\"../../js/semantic-ui/modal.min.js\"></script>\n    <script src=\"../../js/semantic-ui/dropdown.min.js\"></script>\n    <link rel=\"stylesheet\" href=\"../../css/semantic.min.css\">\n</head>\n<body class=\"ui\"-->\n<div class=\"ui grid container\">\n    <div class=\"ui padded grid\">\n        <div class=\"ten wide column\">\n            <div class=\"ui padded grid\">\n                <!--row-->\n                <div class=\"ui row\">\n                    <div class=\"ui fluid image\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"isOpen")||(depth0 && lookupProperty(depth0,"isOpen"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"read") : stack1),{"name":"isOpen","hash":{},"data":data,"loc":{"start":{"line":18,"column":30},"end":{"line":18,"column":51}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":18,"column":24},"end":{"line":26,"column":31}}})) != null ? stack1 : "")
    + "                    </div>\n                    <div class=\"ten wide column\" style=\"margin-left:40px\">\n                        <h3 class=\"ui header\">"
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"titles") : stack1)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "</h3>\n                    </div>\n                </div>\n                <!--row-->\n                <div class=\"ui row\">\n                    <div class=\"column\">\n                        <span>"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"creators") : stack1),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":35,"column":30},"end":{"line":35,"column":87}}})) != null ? stack1 : "")
    + "</span>\n                    </div>\n                </div>\n                <!--row-->\n                <div class=\"ui row\">\n                    <div class=\"column\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"descriptions") : stack1)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"description") : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":41,"column":24},"end":{"line":45,"column":31}}})) != null ? stack1 : "")
    + "                    </div>\n                </div>\n                <!--row-->\n                <div class=\"ui row\">\n                    <div class=\"column\">\n                        <div class=\"ui segment\">\n                            <a class=\"ui left corner label\">\n                                <i class=\"file icon\"></i>\n                            </a>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"content") : stack1)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"relativePath") : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(14, data, 0),"data":data,"loc":{"start":{"line":55,"column":28},"end":{"line":69,"column":35}}})) != null ? stack1 : "")
    + "                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"six wide column\">\n            <div class=\"ui row\">\n                <div class=\"ui flex-fill segment\">\n                    <h3>Metadata</h3>\n                    <b>Publisher:</b><br/>\n                    <span class=\"indent\">"
    + alias4(alias3(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"publisher") : stack1), depth0))
    + "</span><br/>\n                    <b>Publication Year:</b><br/>\n                    <span class=\"indent\">"
    + alias4(alias3(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"publicationYear") : stack1), depth0))
    + "</span><br/>\n                    <b>Created at:</b><br/>\n                    <span class=\"indent\">"
    + alias4((lookupProperty(helpers,"formatDate")||(depth0 && lookupProperty(depth0,"formatDate"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"created") : stack1),{"name":"formatDate","hash":{},"data":data,"loc":{"start":{"line":84,"column":41},"end":{"line":84,"column":71}}}))
    + "</span><br/>\n                    <b>Last Modified:</b><br/>\n                    <span class=\"indent\">"
    + alias4((lookupProperty(helpers,"formatDate")||(depth0 && lookupProperty(depth0,"formatDate"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"lastUpdate") : stack1),{"name":"formatDate","hash":{},"data":data,"loc":{"start":{"line":86,"column":41},"end":{"line":86,"column":74}}}))
    + "</span><br/>\n                    <b>License:</b><br/>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"rights") : stack1)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"schemaId") : stack1),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.program(18, data, 0),"data":data,"loc":{"start":{"line":88,"column":20},"end":{"line":92,"column":27}}})) != null ? stack1 : "")
    + "                    <br/>\n                    <b>Related Identifiers:</b><br/>\n                    <div class=\"ui fluid divided list\" style=\"margin-left: 10px\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"relatedIdentifiers") : stack1)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.program(23, data, 0),"data":data,"loc":{"start":{"line":96,"column":24},"end":{"line":111,"column":31}}})) != null ? stack1 : "")
    + "                    </div>\n                    <b>Alternate Identifiers:</b><br/>\n                    <div class=\"ui fluid divided list\" style=\"margin-left: 10px\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"alternateIdentifiers") : stack1)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.program(28, data, 0),"data":data,"loc":{"start":{"line":115,"column":24},"end":{"line":130,"column":31}}})) != null ? stack1 : "")
    + "                    </div>\n                </div>\n            </div>\n            <!--row-->\n            <div class=\"ui row\" style=\"margin-top: 20px\">\n                <div class=\"ui flex-fill segment\">\n                    <h3>Downloads</h3>\n                    <div class=\"ui label\">\n                        JSON\n                    </div>\n                    <div class=\"ui label\">\n                        ZIP\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!--/body>\n</html-->\n";
},"useData":true});
})();