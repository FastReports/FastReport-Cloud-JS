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
import CloudBaseVM from './CloudBaseVM';
import FileStatus from './FileStatus';
import FileStatusReason from './FileStatusReason';

/**
 * The FileStatusUpdateInternalVM model module.
 * @module models/FileStatusUpdateInternalVM
 * @version v1
 */
class FileStatusUpdateInternalVM {
    /**
     * Constructs a new <code>FileStatusUpdateInternalVM</code>.
     * @alias module:models/FileStatusUpdateInternalVM
     * @extends module:models/CloudBaseVM
     * @implements module:models/CloudBaseVM
     * @param t {String} 
     */
    constructor(t) { 
        CloudBaseVM.initialize(this, t);
        FileStatusUpdateInternalVM.initialize(this, t);
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
     * Constructs a <code>FileStatusUpdateInternalVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/FileStatusUpdateInternalVM} obj Optional instance to populate.
     * @return {module:models/FileStatusUpdateInternalVM} The populated <code>FileStatusUpdateInternalVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FileStatusUpdateInternalVM();
            CloudBaseVM.constructFromObject(data, obj);
            CloudBaseVM.constructFromObject(data, obj);

            if (data.hasOwnProperty('status')) {
                obj['status'] = FileStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = FileStatusReason.constructFromObject(data['reason']);
            }
            if (data.hasOwnProperty('editorId')) {
                obj['editorId'] = ApiClient.convertToType(data['editorId'], 'String');
            }
            if (data.hasOwnProperty('errorMessage')) {
                obj['errorMessage'] = ApiClient.convertToType(data['errorMessage'], 'String');
            }
            if (data.hasOwnProperty('$t')) {
                obj['$t'] = ApiClient.convertToType(data['$t'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FileStatusUpdateInternalVM</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FileStatusUpdateInternalVM</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of FileStatusUpdateInternalVM.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['editorId'] && !(typeof data['editorId'] === 'string' || data['editorId'] instanceof String)) {
            throw new Error("Expected the field `editorId` to be a primitive type in the JSON string but got " + data['editorId']);
        }
        // ensure the json data is a string
        if (data['errorMessage'] && !(typeof data['errorMessage'] === 'string' || data['errorMessage'] instanceof String)) {
            throw new Error("Expected the field `errorMessage` to be a primitive type in the JSON string but got " + data['errorMessage']);
        }
        // ensure the json data is a string
        if (data['$t'] && !(typeof data['$t'] === 'string' || data['$t'] instanceof String)) {
            throw new Error("Expected the field `$t` to be a primitive type in the JSON string but got " + data['$t']);
        }

        return true;
    }


}

FileStatusUpdateInternalVM.RequiredProperties = ["$t"];

/**
 * @member {module:models/FileStatus} status
 */
FileStatusUpdateInternalVM.prototype['status'] = undefined;

/**
 * @member {module:models/FileStatusReason} reason
 */
FileStatusUpdateInternalVM.prototype['reason'] = undefined;

/**
 * @member {String} editorId
 */
FileStatusUpdateInternalVM.prototype['editorId'] = undefined;

/**
 * @member {String} errorMessage
 */
FileStatusUpdateInternalVM.prototype['errorMessage'] = undefined;

/**
 * @member {String} $t
 */
FileStatusUpdateInternalVM.prototype['$t'] = undefined;


// Implement CloudBaseVM interface:
/**
 * @member {String} $t
 */
CloudBaseVM.prototype['$t'] = undefined;




export default FileStatusUpdateInternalVM;

