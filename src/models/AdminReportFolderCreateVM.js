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
import AdminFolderCreateVM from './AdminFolderCreateVM';

/**
 * The AdminReportFolderCreateVM model module.
 * @module models/AdminReportFolderCreateVM
 * @version v1
 */
class AdminReportFolderCreateVM {
    /**
     * Constructs a new <code>AdminReportFolderCreateVM</code>.
     * @alias module:models/AdminReportFolderCreateVM
     * @extends module:models/AdminFolderCreateVM
     * @implements module:models/AdminFolderCreateVM
     * @param parentId {String} 
     * @param ownerId {String} 
     * @param t {String} 
     */
    constructor(parentId, ownerId, t) { 
        AdminFolderCreateVM.initialize(this, t);
        AdminReportFolderCreateVM.initialize(this, parentId, ownerId, t);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, parentId, ownerId, t) { 
        obj['$t'] = t;
    }

    /**
     * Constructs a <code>AdminReportFolderCreateVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/AdminReportFolderCreateVM} obj Optional instance to populate.
     * @return {module:models/AdminReportFolderCreateVM} The populated <code>AdminReportFolderCreateVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AdminReportFolderCreateVM();
            AdminFolderCreateVM.constructFromObject(data, obj);
            AdminFolderCreateVM.constructFromObject(data, obj);

            if (data.hasOwnProperty('$t')) {
                obj['$t'] = ApiClient.convertToType(data['$t'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AdminReportFolderCreateVM</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AdminReportFolderCreateVM</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AdminReportFolderCreateVM.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['$t'] && !(typeof data['$t'] === 'string' || data['$t'] instanceof String)) {
            throw new Error("Expected the field `$t` to be a primitive type in the JSON string but got " + data['$t']);
        }

        return true;
    }


}

AdminReportFolderCreateVM.RequiredProperties = ["$t", "parentId", "ownerId"];

/**
 * @member {String} $t
 */
AdminReportFolderCreateVM.prototype['$t'] = undefined;


// Implement AdminFolderCreateVM interface:
/**
 * @member {String} name
 */
AdminFolderCreateVM.prototype['name'] = undefined;
/**
 * @member {Array.<String>} tags
 */
AdminFolderCreateVM.prototype['tags'] = undefined;
/**
 * @member {Blob} icon
 */
AdminFolderCreateVM.prototype['icon'] = undefined;
/**
 * @member {String} $t
 */
AdminFolderCreateVM.prototype['$t'] = undefined;




export default AdminReportFolderCreateVM;

