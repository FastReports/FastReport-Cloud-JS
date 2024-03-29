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
import GroupPermission from './GroupPermission';

/**
 * The GroupPermissionGroupCreateGroupGetGroupUpdateGroupDeleteGroupExecuteGroupAdministratePermissions model module.
 * @module models/GroupPermissionGroupCreateGroupGetGroupUpdateGroupDeleteGroupExecuteGroupAdministratePermissions
 * @version v1
 */
class GroupPermissionGroupCreateGroupGetGroupUpdateGroupDeleteGroupExecuteGroupAdministratePermissions {
    /**
     * Constructs a new <code>GroupPermissionGroupCreateGroupGetGroupUpdateGroupDeleteGroupExecuteGroupAdministratePermissions</code>.
     * @alias module:models/GroupPermissionGroupCreateGroupGetGroupUpdateGroupDeleteGroupExecuteGroupAdministratePermissions
     */
    constructor() { 
        
        GroupPermissionGroupCreateGroupGetGroupUpdateGroupDeleteGroupExecuteGroupAdministratePermissions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GroupPermissionGroupCreateGroupGetGroupUpdateGroupDeleteGroupExecuteGroupAdministratePermissions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/GroupPermissionGroupCreateGroupGetGroupUpdateGroupDeleteGroupExecuteGroupAdministratePermissions} obj Optional instance to populate.
     * @return {module:models/GroupPermissionGroupCreateGroupGetGroupUpdateGroupDeleteGroupExecuteGroupAdministratePermissions} The populated <code>GroupPermissionGroupCreateGroupGetGroupUpdateGroupDeleteGroupExecuteGroupAdministratePermissions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GroupPermissionGroupCreateGroupGetGroupUpdateGroupDeleteGroupExecuteGroupAdministratePermissions();

            if (data.hasOwnProperty('ownerId')) {
                obj['ownerId'] = ApiClient.convertToType(data['ownerId'], 'String');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = GroupPermission.constructFromObject(data['owner']);
            }
            if (data.hasOwnProperty('groups')) {
                obj['groups'] = ApiClient.convertToType(data['groups'], {'String': GroupPermission});
            }
            if (data.hasOwnProperty('other')) {
                obj['other'] = GroupPermission.constructFromObject(data['other']);
            }
            if (data.hasOwnProperty('anon')) {
                obj['anon'] = GroupPermission.constructFromObject(data['anon']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GroupPermissionGroupCreateGroupGetGroupUpdateGroupDeleteGroupExecuteGroupAdministratePermissions</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GroupPermissionGroupCreateGroupGetGroupUpdateGroupDeleteGroupExecuteGroupAdministratePermissions</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['ownerId'] && !(typeof data['ownerId'] === 'string' || data['ownerId'] instanceof String)) {
            throw new Error("Expected the field `ownerId` to be a primitive type in the JSON string but got " + data['ownerId']);
        }
        // validate the optional field `owner`
        if (data['owner']) { // data not null
          GroupPermission.validateJSON(data['owner']);
        }
        // validate the optional field `other`
        if (data['other']) { // data not null
          GroupPermission.validateJSON(data['other']);
        }
        // validate the optional field `anon`
        if (data['anon']) { // data not null
          GroupPermission.validateJSON(data['anon']);
        }

        return true;
    }


}



/**
 * @member {String} ownerId
 */
GroupPermissionGroupCreateGroupGetGroupUpdateGroupDeleteGroupExecuteGroupAdministratePermissions.prototype['ownerId'] = undefined;

/**
 * @member {module:models/GroupPermission} owner
 */
GroupPermissionGroupCreateGroupGetGroupUpdateGroupDeleteGroupExecuteGroupAdministratePermissions.prototype['owner'] = undefined;

/**
 * @member {Object.<String, module:models/GroupPermission>} groups
 */
GroupPermissionGroupCreateGroupGetGroupUpdateGroupDeleteGroupExecuteGroupAdministratePermissions.prototype['groups'] = undefined;

/**
 * @member {module:models/GroupPermission} other
 */
GroupPermissionGroupCreateGroupGetGroupUpdateGroupDeleteGroupExecuteGroupAdministratePermissions.prototype['other'] = undefined;

/**
 * @member {module:models/GroupPermission} anon
 */
GroupPermissionGroupCreateGroupGetGroupUpdateGroupDeleteGroupExecuteGroupAdministratePermissions.prototype['anon'] = undefined;






export default GroupPermissionGroupCreateGroupGetGroupUpdateGroupDeleteGroupExecuteGroupAdministratePermissions;

