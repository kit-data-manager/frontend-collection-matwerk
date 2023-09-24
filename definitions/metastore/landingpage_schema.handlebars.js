(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['landingpage_schema'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <i>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"schema") : depth0)) != null ? lookupProperty(stack1,"definition") : stack1), depth0))
    + "</i>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                            <i>No definition available</i>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <i>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"schema") : depth0)) != null ? lookupProperty(stack1,"comment") : stack1), depth0))
    + "</i>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "                            <i>No comment available</i>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!--html>\n<head>\n    <script src=\"../../js/semantic-ui/transition.min.js\"></script>\n    <script src=\"../../js/semantic-ui/dimmer.min.js\"></script>\n    <script src=\"../../js/semantic-ui/tab.min.js\"></script>\n    <script src=\"../../js/semantic-ui/modal.min.js\"></script>\n    <script src=\"../../js/semantic-ui/dropdown.min.js\"></script>\n    <link rel=\"stylesheet\" href=\"../../css/semantic.min.css\">\n</head>\n<body class=\"ui\"-->\n<div class=\"ui grid container\">\n    <div class=\"ui padded grid\" style=\"width:100%\">\n        <!--left side (details and content)-->\n        <div class=\"ten wide column\">\n            <div class=\"ui padded grid\">\n                <!--row-->\n                <div class=\"ui row\">\n                    <div class=\"eleven wide column\">\n                        <h3 class=\"ui header\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"schema") : depth0)) != null ? lookupProperty(stack1,"label") : stack1), depth0))
    + "</h3>\n                    </div>\n                    <div class=\"five wide right floated column\">\n                        <span class=\"ui tiny fluid blue label\">\n                            "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"schema") : depth0)) != null ? lookupProperty(stack1,"schemaId") : stack1), depth0))
    + "<br/>\n                            <div class=\"detail\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"schema") : depth0)) != null ? lookupProperty(stack1,"schemaVersion") : stack1), depth0))
    + "</div>\n                         </span>\n                    </div>\n                </div>\n                <!--row-->\n                <div class=\"ui row\">\n                    <div class=\"column\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"schema") : depth0)) != null ? lookupProperty(stack1,"definition") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":31,"column":24},"end":{"line":35,"column":31}}})) != null ? stack1 : "")
    + "                    </div>\n                </div>\n                <!--row-->\n                <div class=\"ui row\">\n                    <div class=\"column\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"schema") : depth0)) != null ? lookupProperty(stack1,"comment") : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":41,"column":24},"end":{"line":45,"column":31}}})) != null ? stack1 : "")
    + "                    </div>\n                </div>\n                <!--row-->\n                <div class=\"ui row\">\n                    <div class=\"column\">\n                        <a href='"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"relatedResource") : stack1)) != null ? lookupProperty(stack1,"identifier") : stack1), depth0))
    + "' target='_blank'>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"metadata") : depth0)) != null ? lookupProperty(stack1,"relatedResource") : stack1)) != null ? lookupProperty(stack1,"identifier") : stack1), depth0))
    + "</a></div>\n                </div>\n            </div>\n        </div>\n        <!--right side (metadata)-->\n        <div class=\"six wide column\">\n            <div class=\"ui row\">\n                <div class=\"ui flex-fill segment\">\n                    <h3>Metadata</h3>\n                    <b>Type:</b><br/>\n                    <span class=\"indent\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"schema") : depth0)) != null ? lookupProperty(stack1,"type") : stack1), depth0))
    + "</span><br/>\n                    <b>MimeType:</b><br/>\n                    <span class=\"indent\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"schema") : depth0)) != null ? lookupProperty(stack1,"mimeType") : stack1), depth0))
    + "</span><br/>\n                    <b>Created at:</b><br/>\n                    <span class=\"indent\">"
    + alias2((lookupProperty(helpers,"formatDate")||(depth0 && lookupProperty(depth0,"formatDate"))||alias4).call(alias3,(depth0 != null ? lookupProperty(depth0,"createdAt") : depth0),{"name":"formatDate","hash":{},"data":data,"loc":{"start":{"line":65,"column":41},"end":{"line":65,"column":65}}}))
    + "</span><br/>\n                    <b>Last Modified:</b><br/>\n                    <span class=\"indent\">"
    + alias2((lookupProperty(helpers,"formatDate")||(depth0 && lookupProperty(depth0,"formatDate"))||alias4).call(alias3,(depth0 != null ? lookupProperty(depth0,"lastUpdate") : depth0),{"name":"formatDate","hash":{},"data":data,"loc":{"start":{"line":67,"column":41},"end":{"line":67,"column":66}}}))
    + "</span><br/>\n                </div>\n            </div>\n            <!--row-->\n            <div class=\"ui row\" style=\"margin-top: 20px\">\n                <div class=\"ui flex-fill segment\">\n                    <h3>Downloads</h3>\n                    <div id=\"download_json\" class=\"ui label download\">\n                        JSON\n                    </div>\n                    <div id=\"download_zip\" class=\"ui label download\">\n                        ZIP\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!--/body>\n</html-->\n";
},"useData":true});
})();