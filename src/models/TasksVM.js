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
import TaskBaseVM from './TaskBaseVM';

/**
 * The TasksVM model module.
 * @module models/TasksVM
 * @version v1
 */
class TasksVM {
    /**
     * Constructs a new <code>TasksVM</code>.
     * @alias module:models/TasksVM
     * @extends module:models/CloudBaseVM
     * @implements module:models/CloudBaseVM
     * @param t {String} 
     */
    constructor(t) { 
        CloudBaseVM.initialize(this, t);
        TasksVM.initialize(this, t);
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
     * Constructs a <code>TasksVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/TasksVM} obj Optional instance to populate.
     * @return {module:models/TasksVM} The populated <code>TasksVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TasksVM();
            CloudBaseVM.constructFromObject(data, obj);
            CloudBaseVM.constructFromObject(data, obj);

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('skip')) {
                obj['skip'] = ApiClient.convertToType(data['skip'], 'Number');
            }
            if (data.hasOwnProperty('take')) {
                obj['take'] = ApiClient.convertToType(data['take'], 'Number');
            }
            if (data.hasOwnProperty('tasks')) {
                obj['tasks'] = ApiClient.convertToType(data['tasks'], [TaskBaseVM]);
            }
            if (data.hasOwnProperty('$t')) {
                obj['$t'] = ApiClient.convertToType(data['$t'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TasksVM</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TasksVM</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TasksVM.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['tasks']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['tasks'])) {
                throw new Error("Expected the field `tasks` to be an array in the JSON data but got " + data['tasks']);
            }
            // validate the optional field `tasks` (array)
            for (const item of data['tasks']) {
                TaskBaseVM.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['$t'] && !(typeof data['$t'] === 'string' || data['$t'] instanceof String)) {
            throw new Error("Expected the field `$t` to be a primitive type in the JSON string but got " + data['$t']);
        }

        return true;
    }


}

TasksVM.RequiredProperties = ["$t"];

/**
 * @member {Number} count
 */
TasksVM.prototype['count'] = undefined;

/**
 * @member {Number} skip
 */
TasksVM.prototype['skip'] = undefined;

/**
 * @member {Number} take
 */
TasksVM.prototype['take'] = undefined;

/**
 * @member {Array.<module:models/TaskBaseVM>} tasks
 */
TasksVM.prototype['tasks'] = undefined;

/**
 * @member {String} $t
 */
TasksVM.prototype['$t'] = undefined;


// Implement CloudBaseVM interface:
/**
 * @member {String} $t
 */
CloudBaseVM.prototype['$t'] = undefined;




export default TasksVM;

