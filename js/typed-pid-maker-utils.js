export let config = {};

export function transformUserInput(formOutput, model, known_types){
    //transform form result to Typed PID Maker record format
    let record = {};
    let labelMap = known_types.map(a => a.label);
    let formOutputObject = JSON.parse(formOutput);
    let keys = Object.keys(formOutputObject);
    for (let i = 0; i < keys.length; i++) {
        //obtain PID from schema
        let pid = model['properties'][keys[i]]['pid'];
        //check if attribute value is a digitalObjectType label
        if (labelMap.indexOf(formOutputObject[keys[i]]) >= 0) {
            //We have a type label, set final record value to PID for digitalObjectType label
            record[pid] = known_types.slice(labelMap.indexOf(formOutputObject[keys[i]]), 1).at(0)['pid'];
        } else {
            //check for checksum
            if (pid == '21.T11148/82e2503c49209e987740') {
                //process checksum
                let checksumValue = formOutputObject[keys[i]];
                let checksumAlg = undefined;
                switch (checksumValue.length){
                    case 32:{
                        //md5
                        checksumAlg = "md5";
                        break;
                    }
                    default:{
                        checksumAlg = "sha" + (4 * checksumValue.length);
                    }
                }
                let checksumRecordValue = {};
                checksumRecordValue[checksumAlg + "sum"] = checksumValue;
                record[pid] = checksumRecordValue;
            }else if(pid == '21.T11148/b415e16fbe4ca40f2270'){
                //topic

            } else {
                //we have another attribute value, check if valid and set if true
                if (formOutputObject[keys[i]]) {
                    record[pid] = formOutputObject[keys[i]];
                }
            }
        }
    }

    return record;
}

export function resolveType(pid){
    let headers = {
        Accept: "application/json"
    };

    console.log(pid);
    console.log("https://hdl.handle.net/" + pid + "?locatt=json");
    return new Promise(function (resolve, reject) {
        $.ajax({
            type: "GET",
            url: "https://hdl.handle.net/" + pid + "?locatt=json",
            headers: headers,
            cache: false,
            success: function (result) {
                resolve(result);
            },
            error: function (result) {
                let message = "Failed read type information. (HTTP " + result.status + ")";
                reject(message);
            }
        })
    });
}
