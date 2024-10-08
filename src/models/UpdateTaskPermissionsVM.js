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
import TaskAdministrate from './TaskAdministrate';
import TaskPermissionsCRUDVM from './TaskPermissionsCRUDVM';

/**
 * The UpdateTaskPermissionsVM model module.
 * @module models/UpdateTaskPermissionsVM
 * @version v1
 */
class UpdateTaskPermissionsVM {
    /**
     * Constructs a new <code>UpdateTaskPermissionsVM</code>.
     * @alias module:models/UpdateTaskPermissionsVM
     * @extends module:models/CloudBaseVM
     * @implements module:models/CloudBaseVM
     * @param t {String} 
     */
    constructor(t) { 
        CloudBaseVM.initialize(this, t);
        UpdateTaskPermissionsVM.initialize(this, t);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, t) { 
        obj['administrate'] = administrate;
        obj['newPermissions'] = newPermissions;
        obj['$t'] = t;
    }

    /**
     * Constructs a <code>UpdateTaskPermissionsVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/UpdateTaskPermissionsVM} obj Optional instance to populate.
     * @return {module:models/UpdateTaskPermissionsVM} The populated <code>UpdateTaskPermissionsVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateTaskPermissionsVM();
            CloudBaseVM.constructFromObject(data, obj);
            CloudBaseVM.constructFromObject(data, obj);

            if (data.hasOwnProperty('administrate')) {
                obj['administrate'] = TaskAdministrate.constructFromObject(data['administrate']);
            }
            if (data.hasOwnProperty('newPermissions')) {
                obj['newPermissions'] = TaskPermissionsCRUDVM.constructFromObject(data['newPermissions']);
            }
            if (data.hasOwnProperty('$t')) {
                obj['$t'] = ApiClient.convertToType(data['$t'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateTaskPermissionsVM</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateTaskPermissionsVM</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UpdateTaskPermissionsVM.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `newPermissions`
        if (data['newPermissions']) { // data not null
          TaskPermissionsCRUDVM.validateJSON(data['newPermissions']);
        }
        // ensure the json data is a string
        if (data['$t'] && !(typeof data['$t'] === 'string' || data['$t'] instanceof String)) {
            throw new Error("Expected the field `$t` to be a primitive type in the JSON string but got " + data['$t']);
        }

        return true;
    }


}

UpdateTaskPermissionsVM.RequiredProperties = ["administrate", "newPermissions", "$t"];

/**
 * @member {module:models/TaskAdministrate} administrate
 */
UpdateTaskPermissionsVM.prototype['administrate'] = undefined;

/**
 * @member {module:models/TaskPermissionsCRUDVM} newPermissions
 */
UpdateTaskPermissionsVM.prototype['newPermissions'] = undefined;

/**
 * @member {String} $t
 */
UpdateTaskPermissionsVM.prototype['$t'] = undefined;


// Implement CloudBaseVM interface:
/**
 * @member {String} $t
 */
CloudBaseVM.prototype['$t'] = undefined;




export default UpdateTaskPermissionsVM;

