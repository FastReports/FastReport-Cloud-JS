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

/**
 * The FileIconVM model module.
 * @module models/FileIconVM
 * @version v1
 */
class FileIconVM {
    /**
     * Constructs a new <code>FileIconVM</code>.
     * @alias module:models/FileIconVM
     */
    constructor() { 
        
        FileIconVM.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FileIconVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/FileIconVM} obj Optional instance to populate.
     * @return {module:models/FileIconVM} The populated <code>FileIconVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FileIconVM();

            if (data.hasOwnProperty('icon')) {
                obj['icon'] = ApiClient.convertToType(data['icon'], 'Blob');
            }
        }
        return obj;
    }


}

/**
 * @member {Blob} icon
 */
FileIconVM.prototype['icon'] = undefined;






export default FileIconVM;

