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
import DataSourcePermissionCRUDVM from './DataSourcePermissionCRUDVM';

/**
 * The DataSourcePermissionsCRUDVM model module.
 * @module models/DataSourcePermissionsCRUDVM
 * @version v1
 */
class DataSourcePermissionsCRUDVM {
    /**
     * Constructs a new <code>DataSourcePermissionsCRUDVM</code>.
     * @alias module:models/DataSourcePermissionsCRUDVM
     * @extends module:models/CloudBaseVM
     * @implements module:models/CloudBaseVM
     * @param t {String} 
     */
    constructor(t) { 
        CloudBaseVM.initialize(this, t);
        DataSourcePermissionsCRUDVM.initialize(this, t);
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
     * Constructs a <code>DataSourcePermissionsCRUDVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/DataSourcePermissionsCRUDVM} obj Optional instance to populate.
     * @return {module:models/DataSourcePermissionsCRUDVM} The populated <code>DataSourcePermissionsCRUDVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DataSourcePermissionsCRUDVM();
            CloudBaseVM.constructFromObject(data, obj);
            CloudBaseVM.constructFromObject(data, obj);

            if (data.hasOwnProperty('ownerId')) {
                obj['ownerId'] = ApiClient.convertToType(data['ownerId'], 'String');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = DataSourcePermissionCRUDVM.constructFromObject(data['owner']);
            }
            if (data.hasOwnProperty('groups')) {
                obj['groups'] = ApiClient.convertToType(data['groups'], {'String': DataSourcePermissionCRUDVM});
            }
            if (data.hasOwnProperty('other')) {
                obj['other'] = DataSourcePermissionCRUDVM.constructFromObject(data['other']);
            }
            if (data.hasOwnProperty('anon')) {
                obj['anon'] = DataSourcePermissionCRUDVM.constructFromObject(data['anon']);
            }
            if (data.hasOwnProperty('$t')) {
                obj['$t'] = ApiClient.convertToType(data['$t'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DataSourcePermissionsCRUDVM</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DataSourcePermissionsCRUDVM</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DataSourcePermissionsCRUDVM.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['ownerId'] && !(typeof data['ownerId'] === 'string' || data['ownerId'] instanceof String)) {
            throw new Error("Expected the field `ownerId` to be a primitive type in the JSON string but got " + data['ownerId']);
        }
        // validate the optional field `owner`
        if (data['owner']) { // data not null
          DataSourcePermissionCRUDVM.validateJSON(data['owner']);
        }
        // validate the optional field `other`
        if (data['other']) { // data not null
          DataSourcePermissionCRUDVM.validateJSON(data['other']);
        }
        // validate the optional field `anon`
        if (data['anon']) { // data not null
          DataSourcePermissionCRUDVM.validateJSON(data['anon']);
        }
        // ensure the json data is a string
        if (data['$t'] && !(typeof data['$t'] === 'string' || data['$t'] instanceof String)) {
            throw new Error("Expected the field `$t` to be a primitive type in the JSON string but got " + data['$t']);
        }

        return true;
    }


}

DataSourcePermissionsCRUDVM.RequiredProperties = ["$t"];

/**
 * @member {String} ownerId
 */
DataSourcePermissionsCRUDVM.prototype['ownerId'] = undefined;

/**
 * @member {module:models/DataSourcePermissionCRUDVM} owner
 */
DataSourcePermissionsCRUDVM.prototype['owner'] = undefined;

/**
 * @member {Object.<String, module:models/DataSourcePermissionCRUDVM>} groups
 */
DataSourcePermissionsCRUDVM.prototype['groups'] = undefined;

/**
 * @member {module:models/DataSourcePermissionCRUDVM} other
 */
DataSourcePermissionsCRUDVM.prototype['other'] = undefined;

/**
 * @member {module:models/DataSourcePermissionCRUDVM} anon
 */
DataSourcePermissionsCRUDVM.prototype['anon'] = undefined;

/**
 * @member {String} $t
 */
DataSourcePermissionsCRUDVM.prototype['$t'] = undefined;


// Implement CloudBaseVM interface:
/**
 * @member {String} $t
 */
CloudBaseVM.prototype['$t'] = undefined;




export default DataSourcePermissionsCRUDVM;

