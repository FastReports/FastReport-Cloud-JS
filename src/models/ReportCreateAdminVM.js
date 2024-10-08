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
import ReportCreateVM from './ReportCreateVM';

/**
 * The ReportCreateAdminVM model module.
 * @module models/ReportCreateAdminVM
 * @version v1
 */
class ReportCreateAdminVM {
    /**
     * Constructs a new <code>ReportCreateAdminVM</code>.
     * @alias module:models/ReportCreateAdminVM
     * @extends module:models/ReportCreateVM
     * @implements module:models/ReportCreateVM
     * @param t {String} 
     */
    constructor(t) { 
        ReportCreateVM.initialize(this, t);
        ReportCreateAdminVM.initialize(this, t);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, t) { 
        obj['ownerId'] = ownerId;
        obj['parentId'] = parentId;
        obj['$t'] = t;
    }

    /**
     * Constructs a <code>ReportCreateAdminVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ReportCreateAdminVM} obj Optional instance to populate.
     * @return {module:models/ReportCreateAdminVM} The populated <code>ReportCreateAdminVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReportCreateAdminVM();
            ReportCreateVM.constructFromObject(data, obj);
            ReportCreateVM.constructFromObject(data, obj);

            if (data.hasOwnProperty('ownerId')) {
                obj['ownerId'] = ApiClient.convertToType(data['ownerId'], 'String');
            }
            if (data.hasOwnProperty('parentId')) {
                obj['parentId'] = ApiClient.convertToType(data['parentId'], 'String');
            }
            if (data.hasOwnProperty('$t')) {
                obj['$t'] = ApiClient.convertToType(data['$t'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReportCreateAdminVM</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReportCreateAdminVM</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ReportCreateAdminVM.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['ownerId'] && !(typeof data['ownerId'] === 'string' || data['ownerId'] instanceof String)) {
            throw new Error("Expected the field `ownerId` to be a primitive type in the JSON string but got " + data['ownerId']);
        }
        // ensure the json data is a string
        if (data['parentId'] && !(typeof data['parentId'] === 'string' || data['parentId'] instanceof String)) {
            throw new Error("Expected the field `parentId` to be a primitive type in the JSON string but got " + data['parentId']);
        }
        // ensure the json data is a string
        if (data['$t'] && !(typeof data['$t'] === 'string' || data['$t'] instanceof String)) {
            throw new Error("Expected the field `$t` to be a primitive type in the JSON string but got " + data['$t']);
        }

        return true;
    }


}

ReportCreateAdminVM.RequiredProperties = ["ownerId", "parentId", "$t"];

/**
 * @member {String} ownerId
 */
ReportCreateAdminVM.prototype['ownerId'] = undefined;

/**
 * @member {String} parentId
 */
ReportCreateAdminVM.prototype['parentId'] = undefined;

/**
 * @member {String} $t
 */
ReportCreateAdminVM.prototype['$t'] = undefined;


// Implement ReportCreateVM interface:
/**
 * @member {String} name
 */
ReportCreateVM.prototype['name'] = undefined;
/**
 * @member {Array.<String>} tags
 */
ReportCreateVM.prototype['tags'] = undefined;
/**
 * @member {Blob} icon
 */
ReportCreateVM.prototype['icon'] = undefined;
/**
 * @member {Blob} content
 */
ReportCreateVM.prototype['content'] = undefined;
/**
 * @member {String} $t
 */
ReportCreateVM.prototype['$t'] = undefined;




export default ReportCreateAdminVM;

