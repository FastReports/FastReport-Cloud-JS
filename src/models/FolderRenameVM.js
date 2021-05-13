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
 * The FolderRenameVM model module.
 * @module models/FolderRenameVM
 * @version v1
 */
class FolderRenameVM {
    /**
     * Constructs a new <code>FolderRenameVM</code>.
     * @alias module:models/FolderRenameVM
     */
    constructor() { 
        
        FolderRenameVM.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FolderRenameVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/FolderRenameVM} obj Optional instance to populate.
     * @return {module:models/FolderRenameVM} The populated <code>FolderRenameVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FolderRenameVM();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
FolderRenameVM.prototype['name'] = undefined;






export default FolderRenameVM;
