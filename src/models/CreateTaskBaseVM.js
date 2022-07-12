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
 * The CreateTaskBaseVM model module.
 * @module models/CreateTaskBaseVM
 * @version v1
 */
class CreateTaskBaseVM {
    /**
     * Constructs a new <code>CreateTaskBaseVM</code>.
     * @alias module:models/CreateTaskBaseVM
     */
    constructor() { 
        
        CreateTaskBaseVM.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateTaskBaseVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CreateTaskBaseVM} obj Optional instance to populate.
     * @return {module:models/CreateTaskBaseVM} The populated <code>CreateTaskBaseVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateTaskBaseVM();

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
CreateTaskBaseVM.prototype['name'] = undefined;

/**
 * @member {String} subscriptionId
 */
CreateTaskBaseVM.prototype['subscriptionId'] = undefined;

/**
 * @member {module:models/TaskType} type
 */
CreateTaskBaseVM.prototype['type'] = undefined;

/**
 * @member {Date} delayedRunTime
 */
CreateTaskBaseVM.prototype['delayedRunTime'] = undefined;

/**
 * @member {String} cronExpression
 */
CreateTaskBaseVM.prototype['cronExpression'] = undefined;






export default CreateTaskBaseVM;

