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
import GroupAdministrate from './GroupAdministrate';
import GroupCreate from './GroupCreate';
import GroupDelete from './GroupDelete';
import GroupExecute from './GroupExecute';
import GroupGet from './GroupGet';
import GroupUpdate from './GroupUpdate';

/**
 * The GroupCreateGroupGetGroupUpdateGroupDeleteGroupExecuteGroupAdministratePermission model module.
 * @module models/GroupCreateGroupGetGroupUpdateGroupDeleteGroupExecuteGroupAdministratePermission
 * @version v1
 */
class GroupCreateGroupGetGroupUpdateGroupDeleteGroupExecuteGroupAdministratePermission {
    /**
     * Constructs a new <code>GroupCreateGroupGetGroupUpdateGroupDeleteGroupExecuteGroupAdministratePermission</code>.
     * @alias module:models/GroupCreateGroupGetGroupUpdateGroupDeleteGroupExecuteGroupAdministratePermission
     */
    constructor() { 
        
        GroupCreateGroupGetGroupUpdateGroupDeleteGroupExecuteGroupAdministratePermission.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GroupCreateGroupGetGroupUpdateGroupDeleteGroupExecuteGroupAdministratePermission</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/GroupCreateGroupGetGroupUpdateGroupDeleteGroupExecuteGroupAdministratePermission} obj Optional instance to populate.
     * @return {module:models/GroupCreateGroupGetGroupUpdateGroupDeleteGroupExecuteGroupAdministratePermission} The populated <code>GroupCreateGroupGetGroupUpdateGroupDeleteGroupExecuteGroupAdministratePermission</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GroupCreateGroupGetGroupUpdateGroupDeleteGroupExecuteGroupAdministratePermission();

            if (data.hasOwnProperty('create')) {
                obj['create'] = GroupCreate.constructFromObject(data['create']);
            }
            if (data.hasOwnProperty('delete')) {
                obj['delete'] = GroupDelete.constructFromObject(data['delete']);
            }
            if (data.hasOwnProperty('execute')) {
                obj['execute'] = GroupExecute.constructFromObject(data['execute']);
            }
            if (data.hasOwnProperty('get')) {
                obj['get'] = GroupGet.constructFromObject(data['get']);
            }
            if (data.hasOwnProperty('update')) {
                obj['update'] = GroupUpdate.constructFromObject(data['update']);
            }
            if (data.hasOwnProperty('administrate')) {
                obj['administrate'] = GroupAdministrate.constructFromObject(data['administrate']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GroupCreateGroupGetGroupUpdateGroupDeleteGroupExecuteGroupAdministratePermission</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GroupCreateGroupGetGroupUpdateGroupDeleteGroupExecuteGroupAdministratePermission</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {module:models/GroupCreate} create
 */
GroupCreateGroupGetGroupUpdateGroupDeleteGroupExecuteGroupAdministratePermission.prototype['create'] = undefined;

/**
 * @member {module:models/GroupDelete} delete
 */
GroupCreateGroupGetGroupUpdateGroupDeleteGroupExecuteGroupAdministratePermission.prototype['delete'] = undefined;

/**
 * @member {module:models/GroupExecute} execute
 */
GroupCreateGroupGetGroupUpdateGroupDeleteGroupExecuteGroupAdministratePermission.prototype['execute'] = undefined;

/**
 * @member {module:models/GroupGet} get
 */
GroupCreateGroupGetGroupUpdateGroupDeleteGroupExecuteGroupAdministratePermission.prototype['get'] = undefined;

/**
 * @member {module:models/GroupUpdate} update
 */
GroupCreateGroupGetGroupUpdateGroupDeleteGroupExecuteGroupAdministratePermission.prototype['update'] = undefined;

/**
 * @member {module:models/GroupAdministrate} administrate
 */
GroupCreateGroupGetGroupUpdateGroupDeleteGroupExecuteGroupAdministratePermission.prototype['administrate'] = undefined;






export default GroupCreateGroupGetGroupUpdateGroupDeleteGroupExecuteGroupAdministratePermission;

