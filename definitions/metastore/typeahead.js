var typeahead = {
    'template': '<input type="typeahead" ' +
        'class=\'form-control typeahead <%= (fieldHtmlClass ? " " + fieldHtmlClass : "") %>\'' +
        'name="<%= node.name %>" value="<%= escape(value) %>" id="<%= id %>"' +
        ' aria-label="<%= node.title ? escape(node.title) : node.name %>"' +
        '<%= (node.disabled? " disabled" : "")%>' +
        '<%= (node.readOnly ? " readonly=\'readonly\'" : "") %>' +
        '<%= (node.schemaElement && (node.schemaElement.step > 0 || node.schemaElement.step == "any") ? " step=\'" + node.schemaElement.step + "\'" : "") %>' +
        '<%= (node.schemaElement && node.schemaElement.minLength ? " minlength=\'" + node.schemaElement.minLength + "\'" : "") %>' +
        '<%= (node.schemaElement && node.schemaElement.maxLength ? " maxlength=\'" + node.schemaElement.maxLength + "\'" : "") %>' +
        '<%= (node.schemaElement && node.schemaElement.required && (node.schemaElement.type !== "boolean") ? " required=\'required\'" : "") %>' +
        '<%= (node.placeholder? " placeholder=" + \'"\' + escape(node.placeholder) + \'"\' : "")%>' +
        ' />',

    inputfield: true,
    fieldtemplate: true,

    onInsert: function (evt, node) {
         let resources = [];
        let loggedIn = localStorage.getItem("userLoggedIn");
        let token = localStorage.getItem("token");
        $.ajax({
            url: node.formElement.url,
            type: 'GET',
            dataType: 'json',
            headers: {
                "Accept": 'application/json; charset=utf-8',
                "Authorization": "Bearer " + token
            },
            success: function (json) {
                let arrayLength = json.length;
                for (let i = 0; i < arrayLength; i++) {
                    //if (!resources.includes(eval("json[i]" + node.formElement.selector))) {
                        resources.push(json[i]);//eval("json[i]" + node.formElement.selector));
                    //}
                }
                return resources;
            }
        });
        let substringMatcher = function (strs) {
            return function findMatches(q, cb) {
                let matches, substrRegex;
                matches = [];
                substrRegex = new RegExp(q, 'i');
                $.each(strs, function (i, str) {
                    if (substrRegex.test(str)) {
                        matches.push(str);
                    }
                });
                cb(matches);
            };
        };

        let renderSelection = function(value){
            return node.formElement.url + value.id;
        }

        $(node.el).find('.typeahead').typeahead(null,
            {
                name: 'resources',
                display: renderSelection,
                source: substringMatcher(resources),
                templates: {
                    suggestion: Handlebars.compile('<div><strong>{{id}}</strong> – {{titles.0.value}}</div>')
                }
            }
        );

    }
};
