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
import DataSourcePermissionsCRUDVM from './DataSourcePermissionsCRUDVM';
import FilePermissionsCRUDVM from './FilePermissionsCRUDVM';
import GroupPermissionsCRUDVM from './GroupPermissionsCRUDVM';
import TaskPermissionsCRUDVM from './TaskPermissionsCRUDVM';

/**
 * The DefaultPermissionsVM model module.
 * @module models/DefaultPermissionsVM
 * @version v1
 */
class DefaultPermissionsVM {
    /**
     * Constructs a new <code>DefaultPermissionsVM</code>.
     * @alias module:models/DefaultPermissionsVM
     * @extends module:models/CloudBaseVM
     * @implements module:models/CloudBaseVM
     * @param t {String} 
     */
    constructor(t) { 
        CloudBaseVM.initialize(this, t);
        DefaultPermissionsVM.initialize(this, t);
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
     * Constructs a <code>DefaultPermissionsVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/DefaultPermissionsVM} obj Optional instance to populate.
     * @return {module:models/DefaultPermissionsVM} The populated <code>DefaultPermissionsVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DefaultPermissionsVM();
            CloudBaseVM.constructFromObject(data, obj);
            CloudBaseVM.constructFromObject(data, obj);

            if (data.hasOwnProperty('filePermissions')) {
                obj['filePermissions'] = FilePermissionsCRUDVM.constructFromObject(data['filePermissions']);
            }
            if (data.hasOwnProperty('dataSourcePermissions')) {
                obj['dataSourcePermissions'] = DataSourcePermissionsCRUDVM.constructFromObject(data['dataSourcePermissions']);
            }
            if (data.hasOwnProperty('groupPermissions')) {
                obj['groupPermissions'] = GroupPermissionsCRUDVM.constructFromObject(data['groupPermissions']);
            }
            if (data.hasOwnProperty('taskPermissions')) {
                obj['taskPermissions'] = TaskPermissionsCRUDVM.constructFromObject(data['taskPermissions']);
            }
            if (data.hasOwnProperty('$t')) {
                obj['$t'] = ApiClient.convertToType(data['$t'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DefaultPermissionsVM</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DefaultPermissionsVM</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DefaultPermissionsVM.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `filePermissions`
        if (data['filePermissions']) { // data not null
          FilePermissionsCRUDVM.validateJSON(data['filePermissions']);
        }
        // validate the optional field `dataSourcePermissions`
        if (data['dataSourcePermissions']) { // data not null
          DataSourcePermissionsCRUDVM.validateJSON(data['dataSourcePermissions']);
        }
        // validate the optional field `groupPermissions`
        if (data['groupPermissions']) { // data not null
          GroupPermissionsCRUDVM.validateJSON(data['groupPermissions']);
        }
        // validate the optional field `taskPermissions`
        if (data['taskPermissions']) { // data not null
          TaskPermissionsCRUDVM.validateJSON(data['taskPermissions']);
        }
        // ensure the json data is a string
        if (data['$t'] && !(typeof data['$t'] === 'string' || data['$t'] instanceof String)) {
            throw new Error("Expected the field `$t` to be a primitive type in the JSON string but got " + data['$t']);
        }

        return true;
    }


}

DefaultPermissionsVM.RequiredProperties = ["$t"];

/**
 * @member {module:models/FilePermissionsCRUDVM} filePermissions
 */
DefaultPermissionsVM.prototype['filePermissions'] = undefined;

/**
 * @member {module:models/DataSourcePermissionsCRUDVM} dataSourcePermissions
 */
DefaultPermissionsVM.prototype['dataSourcePermissions'] = undefined;

/**
 * @member {module:models/GroupPermissionsCRUDVM} groupPermissions
 */
DefaultPermissionsVM.prototype['groupPermissions'] = undefined;

/**
 * @member {module:models/TaskPermissionsCRUDVM} taskPermissions
 */
DefaultPermissionsVM.prototype['taskPermissions'] = undefined;

/**
 * @member {String} $t
 */
DefaultPermissionsVM.prototype['$t'] = undefined;


// Implement CloudBaseVM interface:
/**
 * @member {String} $t
 */
CloudBaseVM.prototype['$t'] = undefined;




export default DefaultPermissionsVM;

