/*let data = {
    "nodes": [
        {
            "id": "21.T11148/b3eb8a2b2a94bf5a73e7",
            "type": "10.123/001",
            "props": {
                "kernelInformationProfile": "21.T11148/863d938d632b53d62d52",
                "21.T11148/397d831aa3a9d18eb52c": "2022-06-06T00:00:00+00:00"
            }
        }
        ],
        "links": [
            {
                source: "21.T11148/b3eb8a2b2a94bf5a73e7",
                target: "21.T11148/b3eb8a2b2a94bf5a73e1",
                relationType: "isMetadata"
            }
        ]
};*/

class FDOStore{
    constructor(){
        this.fdos = new Map();
    }

    addFdo(fdo){
        this.fdos.set(fdo.getPid(), fdo);
    }

    getPids(){
        return Array.from(this.fdos.keys());
    }

    getLinkedFDOs(pid){
        let pids = this.getPids();
        let linkedFdos = []
        let fdo = this.getFdo(pid);
        for(let i=0;i<fdo.getProperties().length;i++){
            let valuePid = fdo.getProperties()[i].value;
            if(pids.includes(valuePid)){
               linkedFdos.push({"pid": valuePid, "relationType": fdo.getProperties()[i].key});
            }
        }
        return linkedFdos;
    }

    getLinks(node){
        let linkNodes = [];
        linkNodes.push(node);
        for (let i = 0; i < node.sourceLinks.length; i++) {
            linkNodes.push(node.sourceLinks[i].target);
        }
        for (let i = 0; i < node.targetLinks.length; i++) {
            linkNodes.push(node.targetLinks[i].source);
        }
        return linkNodes;
    }

    getFdo(pid){
        return this.fdos.get(pid);
    }

    toData(){
        let data = {"nodes":[], "links":[]};
        let pids = this.getPids();
        this.fdos.forEach((fdo, key) => {
            let node = fdo.toNode();
            data.nodes.push(node);
            for(const [key, value] of Object.entries(node.props)){
                if(pids.includes(value)){
                    let link = {"source":node.id, "target":value, "relationType":key};
                    data.links.push(link);
                }
            }
        });
        return data;
    }
}

