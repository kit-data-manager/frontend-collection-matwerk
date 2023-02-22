let orcid = {
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

        $.ajax({
            url: "https://pub.orcid.org/v3.0/search/?q=family-name:Hartmann+AND+given-names:Volker&qf=given-names%5E1.0%20family-name%5E3.0",
            type: 'GET',
            async: false,
            headers: {
                "Accept": 'application/json; charset=utf-8',
            },
            success: function (json) {
                console.log(JSON.stringify(json));
                let arrayLength = json.result.length;
                for (let i = 0; i < arrayLength; i++) {
                    let orcid_url = json.result[i]["orcid-identifier"]["uri"];
                    //orcid_url = orcid_url.replace("orcid", "pub.orcid");
                    resources.push(orcid_url);
                }
                return resources;
            }
        });

        for (let i = 0; i < resources.length; i++) {
            console.log("GET " + resources[i]);
            $.ajax({
                url: resources[i],
                type: 'GET',
                async: false,
                headers: {
                   "Accept": 'application/json; charset=utf-8'
                },
                complete: function(xmlHttp) {
                    console.log(JSON.stringify(xmlHttp));
                },
                success: function (orcid_json) {
                   // console.log(JSON.stringify(orcid_json));
                },
                error: function () {
                    console.log("error");
                }
            });
        }

        let substringMatcher = function (strs) {
            return function findMatches(q, cb) {
                let matches, substrRegex;
                matches = [];
                substrRegex = new RegExp(q, 'i');

                $.each(strs, function (i, str) {
                    if (substrRegex.test(JSON.stringify(str))) {
                        matches.push(str);
                    }
                });
                cb(matches);
            };
        };

        console.log("Renderer " + node.renderer);

        let renderSelection = function(value){
            return node.formElement.url + value.id;
        }

        $(node.el).find('.typeahead').typeahead({
                hint: false,
                highlight: true,
                minLength: 1
            },
            {
                name: 'resources',
                display: renderSelection,
                source: substringMatcher(resources),
                templates: {
                    suggestion: Handlebars.compile('<div>{{id}} – {{title}}</div>')
                }
            }
        );

    }
};
