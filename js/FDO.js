class FDO{
    constructor(customName, pid) {
        this.customName = customName;
        this.pid = pid;
        this.properties = [];
    }

    setPid(pid){
        this.pid = pid;
    }

    getPid(){
        return this.pid;
    }

    setCustomName(customName){
        this.customName = customName;
    }

    getCustomName(){
        return this.customName;
    }

    addProperty(key, value){
        this.properties.push({"key": key, "value": value});
    }

    removeProperty(idx){
        this.properties.splice(idx, 1);
    }

    getProperties(){
        return this.properties;
    }

    hasLinkTo(pid){
        for(let i=0;i<this.properties.length;i++){
            if(this.properties[i].value === pid) return true;
        }
        return false;
    }

    fromObject(object){
        let f = new FDO();
        f.setCustomName(object['customName']);
        f.setPid(object['pid']);
        for(let i=0;i<object['properties'].length;i++){
            f.addProperty(object['properties'][i].key, object['properties'][i].value);
        }
        return f;
    }

    fromTypedPidMaker(document){
        let result = new FDO();
        result.pid = document.pid;
        for(let i=0;i<document.entries;i++){
            this.addProperty(document.entries[i].key, document.entries[id].value);
        }
        return result;
    }

    toTypedPidMaker(){
        let result = {};
        result.pid = this.getPid();
        for(let i=0;i<this.properties.length;i++){
            result.entries[i].key = this.properties[i].key;
            result.entries[i].value = this.properties[i].value;
        }
        return result;
    }

    fromJson(formOutput, known_types){
        let result = new FDO();
        result.pid = "(:tba)_" + new Date().getTime();
        let labelMap = known_types.map(a => a.label);
        let formOutputObject = JSON.parse(formOutput);
        let keys = Object.keys(formOutputObject);
        result.setCustomName(formOutputObject["customName"])
        for (let i = 0; i < keys.length; i++) {
            //obtain PID from schema
            let pid = model['properties'][keys[i]]['pid'];
            //check if attribute value is a digitalObjectType label
            if (labelMap.indexOf(formOutputObject[keys[i]]) >= 0) {
                //We have a type label, set final record value to PID for digitalObjectType label
                result.addProperty(pid, known_types.slice(labelMap.indexOf(formOutputObject[keys[i]]), 1).at(0)['pid']);
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
                    result.addProperty(pid, checksumRecordValue);
                }else if(pid == '21.T11148/b415e16fbe4ca40f2270'){
                    //topic
                    result.addProperty(pid, formOutputObject[keys[i]]);
                } else {
                    //we have another attribute value, check if valid and set if true
                    if (formOutputObject[keys[i]]) {
                        result.addProperty(pid, formOutputObject[keys[i]]);
                    }
                }
            }
        }

        return result;
    }

    toNode(){
        let node = {};
        node.id = this.pid;

        let typeProperty = this.properties.find((element) => element.key === "21.T11148/1c699a5d1b4ad3ba4956");
        if( typeProperty){
            node.type =  typeProperty.value;
        }

        node.customName = this.customName;
        let props = [];
        for(let i=0;i<this.properties.length;i++){
            let prop = this.properties[i];
            props.push({"key":prop.key, "value":prop.value});
        }
        node.props = props;
        return node;
    }
};



