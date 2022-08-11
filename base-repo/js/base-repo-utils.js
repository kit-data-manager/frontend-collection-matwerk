export let config = {};

/**
 * Generates the etag of a data resource.
 * @param {string} idValue represents the identifier of a data resource.
 * @returns {Promise} On success, the ETag is returned, otherwise an error message.
 */
function generateEtag(idValue) {
    let headers = {
        Accept: "application/json"
    };

    if (config.token != null) {
        headers["Authorization"] = "Bearer" + config.token;
    }
    return new Promise(function (resolve, reject) {
        $.ajax({
            type: "GET",
            url: config.ajaxBaseUrl + "dataresources/" + idValue,
            dataType: "json",
            headers: headers,
            success: function (output, status, xhr) {
                resolve(xhr.getResponseHeader("ETag"));
            },

            error: function (result) {
                let message = "Failed generate ETag for resource with id " + idValue + ". (HTTP " + result.status + ")";
                reject(message);
            }
        })
    });
}

/**
 * Reads a data resource.
 * @param {string} resourceId The resource Id.
 * @returns {Promise} On success, the data resource is returned, otherwise an error message.
 */

export function readSchemaRecord(resourceId) {
    return new Promise(function (resolve, reject) {
        let headers = {
            Accept: "application/vnd.datamanager.schema-record+json"
        };

        if (config.token != null) {
            headers["Authorization"] = "Bearer" + config.token;
        }

        $.ajax({
            type: "GET",
            url: config.ajaxBaseUrl + idValue,
            contentType: "application/json",
            dataType: 'json',
            headers: headers,
            success: function (output, status, xhr) {
                //TODO: send back ETag and use it to check for conflicts later on
                //let res = {};
                //res.etag = xhr.getResponseHeader("etag");
                //res.content = output;
                resolve(output);
            },
            error: function (result) {
                let message = "Failed to read data resource from URL " + (config.ajaxBaseUrl + "dataresources/" + idValue) + ". (HTTP " + result.status + ")";
                reject(message);
            }
        });
    });
};

/**
 * Updates the data resource.
 * @param {object} valueRecord JSON value of the data resource.
 * @returns {Promise} Containing a message describing the result.
 */
export function updateDataResource(valueRecord) {
    let resourceId = JSON.parse(valueRecord).id;
    //TODO: Use previously obtained ETag here...obtaining it at this point makes no sense
    return generateEtag(resourceId).then(function (result) {
        return new Promise(function (resolve, reject) {
            let headers = {
                "If-Match": result,
            };

            if (config.token != null) {
                headers["Authorization"] = "Bearer" + config.token;
            }

            $.ajax({
                type: "PUT",
                url: config.ajaxBaseUrl + resourceId,
                contentType: "application/json",
                processData: false,
                headers: headers,
                data: JSON.stringify(JSON.parse(valueRecord), null, 2),
                success: function () {
                    resolve("Data resource successfully updated.");
                },
                error: function (result) {
                    let message = "Failed to update data resource. (HTTP " + result.status + ")";
                    reject(message);
                }
            });
        });
    })
};




/**
 * Registers a new metadata Record.
 * @param {object} valueMetadataRecord the JSON value of the metadata record.
 * @param {file} metadataDocumentFile the metadata document file.
 * @returns {Promise} Containing a message describing the result.
 */
export function createMetadataRecord(valueMetadataRecord, metadataDocumentFile) {
    let headers = {};

    if (config.token != null) {
        headers["Authorization"] = "Bearer" + config.token;
    }

    let formData = new FormData();

    let blobRecord = new Blob([JSON.stringify(JSON.parse(valueMetadataRecord), null, 2)], {type: "application/json"});
    const metadataRecordFile = new File([blobRecord], 'metadataRecordFile.json');

    formData.append("document", metadataDocumentFile);
    formData.append("record", metadataRecordFile);

    return new Promise(function (resolve, reject) {
        $.ajax({
            type: "POST",
            url: config.ajaxBaseUrl + "/metadata/",
            contentType: false,
            processData: false,
            data: formData,
            headers: headers,
            success: function () {
                resolve("Metadata document successfully created.")
            },
            error: function (result) {
                let message = "Failed to create schema record. (HTTP " + result.status + ")";
                reject(message);
            }
        });
    })
};

/**
 * Upload content to a data resource identified using its identifier. The provided file is stored
 * @param {string} resourceId The id of the data resource.
 * @param {string} relativePath The relative path where to upload the file to.
 * @returns {Promise} Containing a message describing the result.
 */
export function uploadContent(resourceId, relativePath, contentInformationRecord, file) {
    let formData = new FormData();
    if (contentInformationRecord != null) {
        let blobRecord = new Blob([JSON.stringify(JSON.parse(contentInformationRecord), null, 2)], {type: "application/json"});
        const recordFile = new File([blobRecord], 'recordFile.json');
        formData.append("metadata", recordFile);
    }

    return new Promise(function(resolve, reject){
      if(!file){
          reject("No file to upload provided.");
      }

      if(!relativePath){
          reject("No relative path provided.");
      }
      formData.append("file", file);
      resolve(true);
    }).then(success =>{

        //TODO: Use previously obtained ETag here...obtaining it at this point makes no sense
        return generateEtag(resourceId).then(function (result) {
            return new Promise(function (resolve, reject) {
                let headers = {
                    "If-Match": result
                };

                if (config.token != null) {
                    headers["Authorization"] = "Bearer" + config.token;
                }

                $.ajax({
                    type: "PUT",
                    url: config.ajaxBaseUrl + resourceId + "/data/" + relativePath,
                    contentType: "multipart/form-data",
                    processData: false,
                    headers: headers,
                    data: formData,
                    success: function () {
                        resolve("Metadata record successfully updated.");
                    },
                    error: function (result) {
                        let message = "Failed to update schema record. (HTTP " + result.status + ")";
                        reject(message);
                    }
                });
            });
        })

    });

};


