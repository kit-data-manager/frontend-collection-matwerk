function escapeXml(unsafe) {
    return unsafe.replace(/["]/g, function (c) {
        switch (c) {
            case '"':
                return '\'';
        }
    });
};

function unescapeXml(unsafe) {
    return unsafe.replace(/[']/g, function (c) {
        switch (c) {
            case '\'':
                return '\"';
        }
    });
};

/**
 * checks if the file is uploaded. If yes, the file is returned, otherwise null.
 * @param {type} input input field
 * @returns {undefined}
 */
function readFile(input) {
    return new Promise(function (resolve, reject) {
        if (input[0].value.length !== 0) {
            //document file is uploaded
            let file = input[0].files[0];
            let reader = new FileReader();
            reader.readAsText(file);
            reader.onload = function () {
                let documentAsText = reader.result;
                resolve(documentAsText);
            };
        } else {
            reject("No file selected.");
        }
    });
};

/**UUID creation helper for creating unique instances of Ace editor and message elements.*/
function create_UUID() {
    let dt = new Date().getTime();
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}

export { escapeXml, unescapeXml, readFile, create_UUID };


