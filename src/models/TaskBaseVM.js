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
import CreateTaskBaseVM from './CreateTaskBaseVM';
import TaskType from './TaskType';

/**
 * The TaskBaseVM model module.
 * @module models/TaskBaseVM
 * @version v1
 */
class TaskBaseVM {
    /**
     * Constructs a new <code>TaskBaseVM</code>.
     * @alias module:models/TaskBaseVM
     * @implements module:models/CreateTaskBaseVM
     */
    constructor() { 
        CreateTaskBaseVM.initialize(this);
        TaskBaseVM.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TaskBaseVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/TaskBaseVM} obj Optional instance to populate.
     * @return {module:models/TaskBaseVM} The populated <code>TaskBaseVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaskBaseVM();
            CreateTaskBaseVM.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('subscriptionId')) {
                obj['subscriptionId'] = ApiClient.convertToType(data['subscriptionId'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = TaskType.constructFromObject(data['type']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
TaskBaseVM.prototype['id'] = undefined;

/**
 * @member {String} name
 */
TaskBaseVM.prototype['name'] = undefined;

/**
 * @member {String} subscriptionId
 */
TaskBaseVM.prototype['subscriptionId'] = undefined;

/**
 * @member {module:models/TaskType} type
 */
TaskBaseVM.prototype['type'] = undefined;


// Implement CreateTaskBaseVM interface:
/**
 * @member {String} name
 */
CreateTaskBaseVM.prototype['name'] = undefined;
/**
 * @member {String} subscriptionId
 */
CreateTaskBaseVM.prototype['subscriptionId'] = undefined;
/**
 * @member {module:models/TaskType} type
 */
CreateTaskBaseVM.prototype['type'] = undefined;




export default TaskBaseVM;
