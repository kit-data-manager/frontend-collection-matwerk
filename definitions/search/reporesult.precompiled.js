(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['reporesult'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "                <a class=\"ui green right corner label\">\r\n                    <i class=\"lock open icon\"></i>\r\n                </a>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                <a class=\"ui red right corner label\">\r\n                    <i class=\"lock icon\"></i>\r\n                </a>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"givenName") || (depth0 != null ? lookupProperty(depth0,"givenName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"givenName","hash":{},"data":data,"loc":{"start":{"line":32,"column":53},"end":{"line":32,"column":66}}}) : helper)));
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <i>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"descriptions") : stack1)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"description") : stack1), depth0))
    + "</i>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "                <i>No description available</i>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.lambda, alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"ui divider\"></div>\r\n<div class=\"ui padded grid\">\r\n    <div class=\"ui row\">\r\n        <div class=\"ui fluid image\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"isOpen")||(depth0 && lookupProperty(depth0,"isOpen"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"read") : stack1),{"name":"isOpen","hash":{},"data":data,"loc":{"start":{"line":5,"column":18},"end":{"line":5,"column":39}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":5,"column":12},"end":{"line":13,"column":19}}})) != null ? stack1 : "")
    + "        </div>\r\n        <div class=\"ten wide column\">\r\n            <h3 class=\"ui header\">"
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"titles") : stack1)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "</h3>\r\n        </div>\r\n        <div class=\"two wide column\">\r\n            <a class=\"ui fluid orange label\">\r\n                "
    + alias4(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":20,"column":16},"end":{"line":20,"column":26}}}) : helper)))
    + "\r\n            </a>\r\n        </div>\r\n        <div class=\"three wide column\">\r\n            <a class=\"ui fluid blue label\">\r\n                "
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"resourceType") : stack1)) != null ? lookupProperty(stack1,"typeGeneral") : stack1), depth0))
    + "\r\n                <div class=\"detail\">"
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"resourceType") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "</div>\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui row\">\r\n        <div class=\"column\">\r\n            <span>"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"creators") : stack1),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":18},"end":{"line":32,"column":75}}})) != null ? stack1 : "")
    + "</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui row\">\r\n        <div class=\"column\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"descriptions") : stack1)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"description") : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":37,"column":12},"end":{"line":41,"column":19}}})) != null ? stack1 : "")
    + "        </div>\r\n    </div>\r\n    <div class=\"ui row\">\r\n        <div class=\"five wide column\">\r\n            <div class=\"ui fluid label\">\r\n                Created at:\r\n                <div class=\"detail\">"
    + alias4((lookupProperty(helpers,"formatDate")||(depth0 && lookupProperty(depth0,"formatDate"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"created") : stack1),{"name":"formatDate","hash":{},"data":data,"loc":{"start":{"line":48,"column":36},"end":{"line":48,"column":66}}}))
    + "</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"five wide column\">\r\n            <div class=\"ui fluid label\">\r\n                Publisher:\r\n                <div class=\"detail\">"
    + alias4(alias3(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"publisher") : stack1), depth0))
    + "</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"four wide column\">\r\n            <div class=\"ui fluid label\">\r\n                Publication Year:\r\n                <div class=\"detail\">"
    + alias4(alias3(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"publicationYear") : stack1), depth0))
    + "</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n";
},"useData":true});
})();