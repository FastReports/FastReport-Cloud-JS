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
import TaskType from './TaskType';

/**
 * The UpdateTaskBaseVM model module.
 * @module models/UpdateTaskBaseVM
 * @version v1
 */
class UpdateTaskBaseVM {
    /**
     * Constructs a new <code>UpdateTaskBaseVM</code>.
     * @alias module:models/UpdateTaskBaseVM
     */
    constructor() { 
        
        UpdateTaskBaseVM.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateTaskBaseVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/UpdateTaskBaseVM} obj Optional instance to populate.
     * @return {module:models/UpdateTaskBaseVM} The populated <code>UpdateTaskBaseVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateTaskBaseVM();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('subscriptionId')) {
                obj['subscriptionId'] = ApiClient.convertToType(data['subscriptionId'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = TaskType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('delayedRunTime')) {
                obj['delayedRunTime'] = ApiClient.convertToType(data['delayedRunTime'], 'Date');
            }
            if (data.hasOwnProperty('cronExpression')) {
                obj['cronExpression'] = ApiClient.convertToType(data['cronExpression'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
UpdateTaskBaseVM.prototype['name'] = undefined;

/**
 * @member {String} subscriptionId
 */
UpdateTaskBaseVM.prototype['subscriptionId'] = undefined;

/**
 * @member {module:models/TaskType} type
 */
UpdateTaskBaseVM.prototype['type'] = undefined;

/**
 * @member {Date} delayedRunTime
 */
UpdateTaskBaseVM.prototype['delayedRunTime'] = undefined;

/**
 * @member {String} cronExpression
 */
UpdateTaskBaseVM.prototype['cronExpression'] = undefined;






export default UpdateTaskBaseVM;
