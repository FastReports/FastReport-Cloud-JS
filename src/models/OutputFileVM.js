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
import FileKind from './FileKind';

/**
 * The OutputFileVM model module.
 * @module models/OutputFileVM
 * @version v1
 */
class OutputFileVM {
    /**
     * Constructs a new <code>OutputFileVM</code>.
     * @alias module:models/OutputFileVM
     */
    constructor() { 
        
        OutputFileVM.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OutputFileVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/OutputFileVM} obj Optional instance to populate.
     * @return {module:models/OutputFileVM} The populated <code>OutputFileVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OutputFileVM();

            if (data.hasOwnProperty('fileName')) {
                obj['fileName'] = ApiClient.convertToType(data['fileName'], 'String');
            }
            if (data.hasOwnProperty('folderId')) {
                obj['folderId'] = ApiClient.convertToType(data['folderId'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = FileKind.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('isTemporary')) {
                obj['isTemporary'] = ApiClient.convertToType(data['isTemporary'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OutputFileVM</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OutputFileVM</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['fileName'] && !(typeof data['fileName'] === 'string' || data['fileName'] instanceof String)) {
            throw new Error("Expected the field `fileName` to be a primitive type in the JSON string but got " + data['fileName']);
        }
        // ensure the json data is a string
        if (data['folderId'] && !(typeof data['folderId'] === 'string' || data['folderId'] instanceof String)) {
            throw new Error("Expected the field `folderId` to be a primitive type in the JSON string but got " + data['folderId']);
        }

        return true;
    }


}



/**
 * @member {String} fileName
 */
OutputFileVM.prototype['fileName'] = undefined;

/**
 * @member {String} folderId
 */
OutputFileVM.prototype['folderId'] = undefined;

/**
 * @member {module:models/FileKind} type
 */
OutputFileVM.prototype['type'] = undefined;

/**
 * @member {Boolean} isTemporary
 */
OutputFileVM.prototype['isTemporary'] = undefined;






export default OutputFileVM;

