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
import DataSourcePermission from './DataSourcePermission';
import FilePermission from './FilePermission';
import GroupPermission from './GroupPermission';
import SubscriptionPermission from './SubscriptionPermission';
import TaskPermission from './TaskPermission';

/**
 * The MyPermissionsVM model module.
 * @module models/MyPermissionsVM
 * @version v1
 */
class MyPermissionsVM {
    /**
     * Constructs a new <code>MyPermissionsVM</code>.
     * @alias module:models/MyPermissionsVM
     */
    constructor() { 
        
        MyPermissionsVM.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MyPermissionsVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/MyPermissionsVM} obj Optional instance to populate.
     * @return {module:models/MyPermissionsVM} The populated <code>MyPermissionsVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MyPermissionsVM();

            if (data.hasOwnProperty('subscription')) {
                obj['subscription'] = SubscriptionPermission.constructFromObject(data['subscription']);
            }
            if (data.hasOwnProperty('files')) {
                obj['files'] = FilePermission.constructFromObject(data['files']);
            }
            if (data.hasOwnProperty('datasources')) {
                obj['datasources'] = DataSourcePermission.constructFromObject(data['datasources']);
            }
            if (data.hasOwnProperty('groups')) {
                obj['groups'] = GroupPermission.constructFromObject(data['groups']);
            }
            if (data.hasOwnProperty('tasks')) {
                obj['tasks'] = TaskPermission.constructFromObject(data['tasks']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MyPermissionsVM</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MyPermissionsVM</code>.
     */
    static validateJSON(data) {
        // validate the optional field `subscription`
        if (data['subscription']) { // data not null
          SubscriptionPermission.validateJSON(data['subscription']);
        }
        // validate the optional field `files`
        if (data['files']) { // data not null
          FilePermission.validateJSON(data['files']);
        }
        // validate the optional field `datasources`
        if (data['datasources']) { // data not null
          DataSourcePermission.validateJSON(data['datasources']);
        }
        // validate the optional field `groups`
        if (data['groups']) { // data not null
          GroupPermission.validateJSON(data['groups']);
        }
        // validate the optional field `tasks`
        if (data['tasks']) { // data not null
          TaskPermission.validateJSON(data['tasks']);
        }

        return true;
    }


}



/**
 * @member {module:models/SubscriptionPermission} subscription
 */
MyPermissionsVM.prototype['subscription'] = undefined;

/**
 * @member {module:models/FilePermission} files
 */
MyPermissionsVM.prototype['files'] = undefined;

/**
 * @member {module:models/DataSourcePermission} datasources
 */
MyPermissionsVM.prototype['datasources'] = undefined;

/**
 * @member {module:models/GroupPermission} groups
 */
MyPermissionsVM.prototype['groups'] = undefined;

/**
 * @member {module:models/TaskPermission} tasks
 */
MyPermissionsVM.prototype['tasks'] = undefined;






export default MyPermissionsVM;

