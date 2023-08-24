let model = {
  "$schema": "http://json-schema.org/draft-07/schema",
  "title": "Helmholtz Kernel Information Profile",
  "$id": "21.T11148/b9b76f887845e32d29f7",
  "type": "object",
  "required": [
    "kernelInformationProfile",
    "digitalObjectType",
    "digitalObjectLocation",
    "dateCreated",
    "license"
  ],
  "properties": {
    "customName": {
      "title": "Custom Name",
      "pid":"customName",
      "maxLength": 42,
      "description": "A human readable name for better identification. This property is NOT part of the final FAIR DO!",
      "type": "string"
    },
    "kernelInformationProfile": {
      "title": "kernelInformationProfile",
      "pid": "21.T11148/076759916209e5d62bd5",
      "description": "A PID pointing to the kernel information profile defining the structure of this PID record.",
      "type": "string"
    },
    "digitalObjectType": {
      "title": "digitalObjectType",
      "pid": "21.T11148/1c699a5d1b4ad3ba4956",
      "description": "The type of the object referenced by digitalObjectLocation.",
      "type": "string"
    },
    "digitalObjectLocation": {
      "title": "digitalObjectLocation",
      "pid": "21.T11148/b8457812905b83046284",
      "description": "A web-resolvable pointer to the actual object described by this PID record.",
      "items": {
        "type": "string"
      }
    },
    "digitalObjectLocationAccessProtocol": {
      "title": "digitalObjectLocationAccessProtocol",
      "pid": "21.T11148/dcd4e99d26a00b8132f8",
      "description": "Additional information which can be used by an access client for accessing digitalObjectLocation.",
      "type": "string"
    },
    "dateCreated": {
      "title": "dateCreated",
      "pid": "21.T11148/aafd5fb4c7222e2d950a",
      "description": "The date when the object referenced by digitalObjectLocation was initially created.",
      "type": "string"
    },
    "dateModified": {
      "title": "dateModified",
      "pid": "21.T11148/397d831aa3a9d18eb52c",
      "description": "The date when the object referenced by digitalObjectLocation was last modified. This attribute is recommended, if a version is provided.",
      "type": "string"
    },
    "underEmbargoUntil": {
      "title": "underEmbargoUntil",
      "pid": "21.T11148/796a3ea6c9a38633fb7e",
      "description": "The date when the object referenced by digitalObjectLocation is planned to be publicly accessible or was made publicly accessible.",
      "type": "string"
    },
    "policy": {
      "title": "policy",
      "pid": "21.T11148/8074aed799118ac263ad",
      "description": "A web-resolvable pointer to a policy object describing e.g., object access and modification policies.",
      "type": "string"
    },
    "version": {
      "title": "version",
      "pid": "21.T11148/c692273deb2772da307f",
      "description": "Version of the object referenced by digitalObjectLocation, preferably following semantic versioning conventions.",
       "type": "string",
      "pattern": "v?[0-9]+.[0-9]+.[0-9]+.*"
    },
    "license": {
      "title": "license",
      "pid": "21.T11148/2f314c8fe5fb6a0063a8",
      "default": "https://spdx.org/licenses/CC-BY-4.0",
      "description": "URL referring to the license of the object referenced by digitalObjectLocation, preferably pointing to https://spdx.org/.",
      "type": "string"
    },
    "checksum": {
      "title": "checksum",
      "pid": "21.T11148/82e2503c49209e987740",
      "allowEmpty": false,
      "default":"",
      "description": "Checksum of the object referenced by digitalObjectLocation. The checksum algorithm is determined by the input length.",
      "oneOf": [
        {
          "required": [
            "sha160sum"
          ],
          "title": "SHA-160",
          "type": "object",
          "properties": {
            "sha160sum": {
              "pattern": "^((sha|SHA)160( |:|=))?( )*([0-9]|[a-f]){40}$",
              "type": "string",
              "description": "sha160sum-string@21.T11148/538d60da429f234d6f53"
            }
          }
        },
        {
          "required": [
            "sha224sum"
          ],
          "title": "SHA-224",
          "type": "object",
          "properties": {
            "sha224sum": {
              "pattern": "^((sha|SHA)224( |:|=))?( )*([0-9]|[a-f]){56}$",
              "type": "string",
              "description": "sha224sum-string@21.T11148/8fe94dfe8d852b486b3b"
            }
          }
        },
        {
          "required": [
            "sha256sum"
          ],
          "title": "SHA-256",
          "type": "object",
          "properties": {
            "sha256sum": {
              "pattern": "^((sha|SHA)256( |:|=))?( )*([0-9]|[a-f]){64}$",
              "type": "string",
              "description": "sha256sum-string@21.T11148/bf6a6b86cb0481572b13"
            }
          }
        },
        {
          "required": [
            "sha384sum"
          ],
          "title": "SHA-384",
          "type": "object",
          "properties": {
            "sha384sum": {
              "pattern": "^((sha|SHA)384( |:|=))?( )*([0-9]|[a-f]){96}$",
              "type": "string",
              "description": "sha384sum-string@21.T11148/e944e035caf3ec24192c"
            }
          }
        },
        {
          "required": [
            "sha512sum"
          ],
          "title": "SHA-512",
          "type": "object",
          "properties": {
            "sha512sum": {
              "pattern": "^((sha|SHA)512( |:|=))?( )*([0-9]|[a-f]){128}$",
              "type": "string",
              "description": "sha512sum-string@21.T11148/89d2e4d1e93625060cf0"
            }
          }
        },
        {
          "required": [
            "md5sum"
          ],
          "type": "object",
          "title": "MD5",
          "properties": {
            "md5sum": {
              "pattern": "^((md|MD)5( |:|=))?( )*([0-9]|[a-f]){32}$",
              "type": "string",
              "description": "md5sum-string@21.T11148/ef277087753e8ba2e606"
            }
          }
        }
      ]
    },
    "signature": {
      "title": "signature",
      "pid": "21.T11148/37d0f4689c6ea3301787",
      "description": "A cryptographic signature of this record in a specified format, including especially the checksum for advanced integrity checks and assumptions about reproducibility.",
      "type": "string"
    },
    "topic": {
      "title": "topic",
      "pid": "21.T11148/b415e16fbe4ca40f2270",
      "description": "One or more topics from a controlled vocabulary the object referenced by digitalObjectLocation is related to.",
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 1
    },
    "locationPreview": {
      "title": "locationPreview",
      "pid": "21.T11148/7fdada5846281ef5d461",
      "description": "A web-resolvable pointer to a preview of the object referenced by digitalObjectLocation, e.g., a low-resolution image or a dataset sample.",
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 1
    },
    "contact": {
      "title": "contact",
      "pid": "21.T11148/1a73af9e7ae00182733b",
      "description": "A web-resolvable pointer to an institution or a person responsible for the object referenced by digitalObjectLocation, preferably an ORCiD or ROR URL.",
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 1
    },
    "hasMetadata": {
      "title": "hasMetadata",
      "pid": "21.T11148/d0773859091aeb451528",
      "description": "One or more PID(s) referring to related FAIR DOs providing metadata for the object referenced by digitalObjectLocation. It is the inverse to isMetadataFor.",
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 1
    },
    "isMetadataFor": {
      "title": "isMetadataFor",
      "pid": "21.T11148/4fe7cde52629b61e3b82",
      "description": "A PID pointing to another FAIR DO describing the object referenced by digitalObjectLocation. It is the inverse to hasMetadata.",
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 1
    },
    "wasGeneratedBy": {
      "title": "wasGeneratedBy",
      "pid": "21.T11148/c085f1292d7d4a338d96",
      "description": "A PID pointing to an activity which generated the object referenced by digitalObjectLocation.",
      "type": "string"
    },
    "wasDerivedFrom": {
      "title": "wasDerivedFrom",
      "pid": "21.T11148/c6e4c19f294ee6f41b1e",
      "description": "A PID pointing to another FAIR DO from which the object referenced by digitalObjectLocation was derived from.",
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 1
    },
    "specializationOf": {
      "title": "specializationOf",
      "pid": "21.T11148/ab53242825e85a0a7f76",
      "description": "A PID pointing to another FAIR DO which is a specialization of the object referenced by digitalObjectLocation.",
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 1
    },
    "wasRevisionOf": {
      "title": "wasRevisionOf",
      "pid": "21.T11148/2a1cad55473b20407c78",
      "description": "A PID pointing to another FAIR DO which is a specialization of the object referenced by digitalObjectLocation.",
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 1
    },
    "hadPrimarySource": {
      "title": "hadPrimarySource",
      "pid": "21.T11148/a753134738da82809fc1",
      "description": "A PID pointing to another FAIR DO which is the primary source of the object referenced by digitalObjectLocation.",
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 1
    },
    "wasQuotedFrom": {
      "title": "wasQuotedFrom",
      "pid": "21.T11148/beaeecebec408908de35",
      "description": "A PID pointing to another FAIR DO from which the object referenced by digitalObjectLocation was fully or partly quoted.",
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 1
    },
    "alternateOf": {
      "title": "alternateOf",
      "pid": "21.T11148/432132bdbd946b2baf2b",
      "description": "A PID pointing to another FAIR DO which is an alternate of the object referenced by digitalObjectLocation.",
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 1
    },
    "provenanceGraph": {
      "title": "provenanceGraph",
      "pid": "21.T11148/af11e18f83466642c47d",
      "description": "A PID pointing to another FAIR DO which refers to the provenance graph of the object referenced by digitalObjectLocation.",
      "type": "string"
    }
  }
};
