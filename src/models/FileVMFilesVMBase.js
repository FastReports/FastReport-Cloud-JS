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
import FileVM from './FileVM';

/**
 * The FileVMFilesVMBase model module.
 * @module models/FileVMFilesVMBase
 * @version v1
 */
class FileVMFilesVMBase {
    /**
     * Constructs a new <code>FileVMFilesVMBase</code>.
     * @alias module:models/FileVMFilesVMBase
     */
    constructor() { 
        
        FileVMFilesVMBase.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FileVMFilesVMBase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/FileVMFilesVMBase} obj Optional instance to populate.
     * @return {module:models/FileVMFilesVMBase} The populated <code>FileVMFilesVMBase</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FileVMFilesVMBase();

            if (data.hasOwnProperty('files')) {
                obj['files'] = ApiClient.convertToType(data['files'], [FileVM]);
            }
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('skip')) {
                obj['skip'] = ApiClient.convertToType(data['skip'], 'Number');
            }
            if (data.hasOwnProperty('take')) {
                obj['take'] = ApiClient.convertToType(data['take'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FileVMFilesVMBase</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FileVMFilesVMBase</code>.
     */
    static validateJSON(data) {
        if (data['files']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['files'])) {
                throw new Error("Expected the field `files` to be an array in the JSON data but got " + data['files']);
            }
            // validate the optional field `files` (array)
            for (const item of data['files']) {
                FileVM.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:models/FileVM>} files
 */
FileVMFilesVMBase.prototype['files'] = undefined;

/**
 * @member {Number} count
 */
FileVMFilesVMBase.prototype['count'] = undefined;

/**
 * @member {Number} skip
 */
FileVMFilesVMBase.prototype['skip'] = undefined;

/**
 * @member {Number} take
 */
FileVMFilesVMBase.prototype['take'] = undefined;






export default FileVMFilesVMBase;

