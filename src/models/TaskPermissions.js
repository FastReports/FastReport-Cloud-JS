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
import TaskPermission from './TaskPermission';
import TaskPermissionTaskCreateTaskGetTaskUpdateTaskDeleteTaskExecuteTaskAdministratePermissions from './TaskPermissionTaskCreateTaskGetTaskUpdateTaskDeleteTaskExecuteTaskAdministratePermissions';

/**
 * The TaskPermissions model module.
 * @module models/TaskPermissions
 * @version v1
 */
class TaskPermissions {
    /**
     * Constructs a new <code>TaskPermissions</code>.
     * @alias module:models/TaskPermissions
     * @extends module:models/TaskPermissionTaskCreateTaskGetTaskUpdateTaskDeleteTaskExecuteTaskAdministratePermissions
     * @implements module:models/TaskPermissionTaskCreateTaskGetTaskUpdateTaskDeleteTaskExecuteTaskAdministratePermissions
     */
    constructor() { 
        TaskPermissionTaskCreateTaskGetTaskUpdateTaskDeleteTaskExecuteTaskAdministratePermissions.initialize(this);
        TaskPermissions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TaskPermissions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/TaskPermissions} obj Optional instance to populate.
     * @return {module:models/TaskPermissions} The populated <code>TaskPermissions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaskPermissions();
            TaskPermissionTaskCreateTaskGetTaskUpdateTaskDeleteTaskExecuteTaskAdministratePermissions.constructFromObject(data, obj);
            TaskPermissionTaskCreateTaskGetTaskUpdateTaskDeleteTaskExecuteTaskAdministratePermissions.constructFromObject(data, obj);

        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TaskPermissions</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TaskPermissions</code>.
     */
    static validateJSON(data) {

        return true;
    }


}




// Implement TaskPermissionTaskCreateTaskGetTaskUpdateTaskDeleteTaskExecuteTaskAdministratePermissions interface:
/**
 * @member {String} ownerId
 */
TaskPermissionTaskCreateTaskGetTaskUpdateTaskDeleteTaskExecuteTaskAdministratePermissions.prototype['ownerId'] = undefined;
/**
 * @member {module:models/TaskPermission} owner
 */
TaskPermissionTaskCreateTaskGetTaskUpdateTaskDeleteTaskExecuteTaskAdministratePermissions.prototype['owner'] = undefined;
/**
 * @member {Object.<String, module:models/TaskPermission>} groups
 */
TaskPermissionTaskCreateTaskGetTaskUpdateTaskDeleteTaskExecuteTaskAdministratePermissions.prototype['groups'] = undefined;
/**
 * @member {module:models/TaskPermission} other
 */
TaskPermissionTaskCreateTaskGetTaskUpdateTaskDeleteTaskExecuteTaskAdministratePermissions.prototype['other'] = undefined;
/**
 * @member {module:models/TaskPermission} anon
 */
TaskPermissionTaskCreateTaskGetTaskUpdateTaskDeleteTaskExecuteTaskAdministratePermissions.prototype['anon'] = undefined;




export default TaskPermissions;

