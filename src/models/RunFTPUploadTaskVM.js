/**
 * FastReport Cloud
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import RunInputFileVM from './RunInputFileVM';
import RunTransportTaskBaseVM from './RunTransportTaskBaseVM';

/**
 * The RunFTPUploadTaskVM model module.
 * @module models/RunFTPUploadTaskVM
 * @version v1
 */
class RunFTPUploadTaskVM {
    /**
     * Constructs a new <code>RunFTPUploadTaskVM</code>.
     * @alias module:models/RunFTPUploadTaskVM
     * @extends module:models/RunTransportTaskBaseVM
     * @implements module:models/RunTransportTaskBaseVM
     * @param t {String} 
     */
    constructor(t) { 
        RunTransportTaskBaseVM.initialize(this, t);
        RunFTPUploadTaskVM.initialize(this, t);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, t) { 
        obj['$t'] = t;
    }

    /**
     * Constructs a <code>RunFTPUploadTaskVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/RunFTPUploadTaskVM} obj Optional instance to populate.
     * @return {module:models/RunFTPUploadTaskVM} The populated <code>RunFTPUploadTaskVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RunFTPUploadTaskVM();
            RunTransportTaskBaseVM.constructFromObject(data, obj);
            RunTransportTaskBaseVM.constructFromObject(data, obj);

            if (data.hasOwnProperty('archive')) {
                obj['archive'] = ApiClient.convertToType(data['archive'], 'Boolean');
            }
            if (data.hasOwnProperty('archiveName')) {
                obj['archiveName'] = ApiClient.convertToType(data['archiveName'], 'String');
            }
            if (data.hasOwnProperty('destinationFolder')) {
                obj['destinationFolder'] = ApiClient.convertToType(data['destinationFolder'], 'String');
            }
            if (data.hasOwnProperty('ftpHost')) {
                obj['ftpHost'] = ApiClient.convertToType(data['ftpHost'], 'String');
            }
            if (data.hasOwnProperty('ftpPassword')) {
                obj['ftpPassword'] = ApiClient.convertToType(data['ftpPassword'], 'String');
            }
            if (data.hasOwnProperty('ftpPort')) {
                obj['ftpPort'] = ApiClient.convertToType(data['ftpPort'], 'Number');
            }
            if (data.hasOwnProperty('ftpUsername')) {
                obj['ftpUsername'] = ApiClient.convertToType(data['ftpUsername'], 'String');
            }
            if (data.hasOwnProperty('useSFTP')) {
                obj['useSFTP'] = ApiClient.convertToType(data['useSFTP'], 'Boolean');
            }
            if (data.hasOwnProperty('$t')) {
                obj['$t'] = ApiClient.convertToType(data['$t'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RunFTPUploadTaskVM</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RunFTPUploadTaskVM</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RunFTPUploadTaskVM.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['archiveName'] && !(typeof data['archiveName'] === 'string' || data['archiveName'] instanceof String)) {
            throw new Error("Expected the field `archiveName` to be a primitive type in the JSON string but got " + data['archiveName']);
        }
        // ensure the json data is a string
        if (data['destinationFolder'] && !(typeof data['destinationFolder'] === 'string' || data['destinationFolder'] instanceof String)) {
            throw new Error("Expected the field `destinationFolder` to be a primitive type in the JSON string but got " + data['destinationFolder']);
        }
        // ensure the json data is a string
        if (data['ftpHost'] && !(typeof data['ftpHost'] === 'string' || data['ftpHost'] instanceof String)) {
            throw new Error("Expected the field `ftpHost` to be a primitive type in the JSON string but got " + data['ftpHost']);
        }
        // ensure the json data is a string
        if (data['ftpPassword'] && !(typeof data['ftpPassword'] === 'string' || data['ftpPassword'] instanceof String)) {
            throw new Error("Expected the field `ftpPassword` to be a primitive type in the JSON string but got " + data['ftpPassword']);
        }
        // ensure the json data is a string
        if (data['ftpUsername'] && !(typeof data['ftpUsername'] === 'string' || data['ftpUsername'] instanceof String)) {
            throw new Error("Expected the field `ftpUsername` to be a primitive type in the JSON string but got " + data['ftpUsername']);
        }
        // ensure the json data is a string
        if (data['$t'] && !(typeof data['$t'] === 'string' || data['$t'] instanceof String)) {
            throw new Error("Expected the field `$t` to be a primitive type in the JSON string but got " + data['$t']);
        }

        return true;
    }


}

RunFTPUploadTaskVM.RequiredProperties = ["$t"];

/**
 * @member {Boolean} archive
 */
RunFTPUploadTaskVM.prototype['archive'] = undefined;

/**
 * @member {String} archiveName
 */
RunFTPUploadTaskVM.prototype['archiveName'] = undefined;

/**
 * @member {String} destinationFolder
 */
RunFTPUploadTaskVM.prototype['destinationFolder'] = undefined;

/**
 * @member {String} ftpHost
 */
RunFTPUploadTaskVM.prototype['ftpHost'] = undefined;

/**
 * @member {String} ftpPassword
 */
RunFTPUploadTaskVM.prototype['ftpPassword'] = undefined;

/**
 * @member {Number} ftpPort
 */
RunFTPUploadTaskVM.prototype['ftpPort'] = undefined;

/**
 * @member {String} ftpUsername
 */
RunFTPUploadTaskVM.prototype['ftpUsername'] = undefined;

/**
 * @member {Boolean} useSFTP
 */
RunFTPUploadTaskVM.prototype['useSFTP'] = undefined;

/**
 * @member {String} $t
 */
RunFTPUploadTaskVM.prototype['$t'] = undefined;


// Implement RunTransportTaskBaseVM interface:
/**
 * @member {String} subscriptionId
 */
RunTransportTaskBaseVM.prototype['subscriptionId'] = undefined;
/**
 * @member {String} $t
 */
RunTransportTaskBaseVM.prototype['$t'] = undefined;




export default RunFTPUploadTaskVM;

