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
import DataSourceAdministrate from './DataSourceAdministrate';
import DataSourcePermissionsCRUDVM from './DataSourcePermissionsCRUDVM';

/**
 * The UpdateDataSourcePermissionsVM model module.
 * @module models/UpdateDataSourcePermissionsVM
 * @version v1
 */
class UpdateDataSourcePermissionsVM {
    /**
     * Constructs a new <code>UpdateDataSourcePermissionsVM</code>.
     * @alias module:models/UpdateDataSourcePermissionsVM
     * @extends module:models/CloudBaseVM
     * @implements module:models/CloudBaseVM
     * @param t {String} 
     */
    constructor(t) { 
        CloudBaseVM.initialize(this, t);
        UpdateDataSourcePermissionsVM.initialize(this, t);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, t) { 
        obj['newPermissions'] = newPermissions;
        obj['administrate'] = administrate;
        obj['$t'] = t;
    }

    /**
     * Constructs a <code>UpdateDataSourcePermissionsVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/UpdateDataSourcePermissionsVM} obj Optional instance to populate.
     * @return {module:models/UpdateDataSourcePermissionsVM} The populated <code>UpdateDataSourcePermissionsVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateDataSourcePermissionsVM();
            CloudBaseVM.constructFromObject(data, obj);
            CloudBaseVM.constructFromObject(data, obj);

            if (data.hasOwnProperty('newPermissions')) {
                obj['newPermissions'] = DataSourcePermissionsCRUDVM.constructFromObject(data['newPermissions']);
            }
            if (data.hasOwnProperty('administrate')) {
                obj['administrate'] = DataSourceAdministrate.constructFromObject(data['administrate']);
            }
            if (data.hasOwnProperty('$t')) {
                obj['$t'] = ApiClient.convertToType(data['$t'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateDataSourcePermissionsVM</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateDataSourcePermissionsVM</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UpdateDataSourcePermissionsVM.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `newPermissions`
        if (data['newPermissions']) { // data not null
          DataSourcePermissionsCRUDVM.validateJSON(data['newPermissions']);
        }
        // ensure the json data is a string
        if (data['$t'] && !(typeof data['$t'] === 'string' || data['$t'] instanceof String)) {
            throw new Error("Expected the field `$t` to be a primitive type in the JSON string but got " + data['$t']);
        }

        return true;
    }


}

UpdateDataSourcePermissionsVM.RequiredProperties = ["newPermissions", "administrate", "$t"];

/**
 * @member {module:models/DataSourcePermissionsCRUDVM} newPermissions
 */
UpdateDataSourcePermissionsVM.prototype['newPermissions'] = undefined;

/**
 * @member {module:models/DataSourceAdministrate} administrate
 */
UpdateDataSourcePermissionsVM.prototype['administrate'] = undefined;

/**
 * @member {String} $t
 */
UpdateDataSourcePermissionsVM.prototype['$t'] = undefined;


// Implement CloudBaseVM interface:
/**
 * @member {String} $t
 */
CloudBaseVM.prototype['$t'] = undefined;




export default UpdateDataSourcePermissionsVM;

