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
import FolderCreateVM from './FolderCreateVM';

/**
 * The ExportFolderCreateVM model module.
 * @module models/ExportFolderCreateVM
 * @version v1
 */
class ExportFolderCreateVM {
    /**
     * Constructs a new <code>ExportFolderCreateVM</code>.
     * @alias module:models/ExportFolderCreateVM
     * @extends module:models/FolderCreateVM
     * @implements module:models/FolderCreateVM
     */
    constructor() { 
        FolderCreateVM.initialize(this);
        ExportFolderCreateVM.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ExportFolderCreateVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ExportFolderCreateVM} obj Optional instance to populate.
     * @return {module:models/ExportFolderCreateVM} The populated <code>ExportFolderCreateVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExportFolderCreateVM();
            FolderCreateVM.constructFromObject(data, obj);
            FolderCreateVM.constructFromObject(data, obj);

        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExportFolderCreateVM</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExportFolderCreateVM</code>.
     */
    static validateJSON(data) {

        return true;
    }


}




// Implement FolderCreateVM interface:
/**
 * @member {String} name
 */
FolderCreateVM.prototype['name'] = undefined;
/**
 * @member {Array.<String>} tags
 */
FolderCreateVM.prototype['tags'] = undefined;
/**
 * @member {Blob} icon
 */
FolderCreateVM.prototype['icon'] = undefined;




export default ExportFolderCreateVM;

