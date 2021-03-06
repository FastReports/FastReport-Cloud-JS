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
import CreateTransformTaskBaseVM from './CreateTransformTaskBaseVM';
import TaskType from './TaskType';

/**
 * The CreateFetchTaskVM model module.
 * @module models/CreateFetchTaskVM
 * @version v1
 */
class CreateFetchTaskVM {
    /**
     * Constructs a new <code>CreateFetchTaskVM</code>.
     * @alias module:models/CreateFetchTaskVM
     * @implements module:models/CreateTransformTaskBaseVM
     */
    constructor() { 
        CreateTransformTaskBaseVM.initialize(this);
        CreateFetchTaskVM.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateFetchTaskVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CreateFetchTaskVM} obj Optional instance to populate.
     * @return {module:models/CreateFetchTaskVM} The populated <code>CreateFetchTaskVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateFetchTaskVM();
            CreateTransformTaskBaseVM.constructFromObject(data, obj);

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
CreateFetchTaskVM.prototype['name'] = undefined;

/**
 * @member {String} subscriptionId
 */
CreateFetchTaskVM.prototype['subscriptionId'] = undefined;

/**
 * @member {module:models/TaskType} type
 */
CreateFetchTaskVM.prototype['type'] = undefined;

/**
 * @member {Date} delayedRunTime
 */
CreateFetchTaskVM.prototype['delayedRunTime'] = undefined;

/**
 * @member {String} cronExpression
 */
CreateFetchTaskVM.prototype['cronExpression'] = undefined;


// Implement CreateTransformTaskBaseVM interface:
/**
 * @member {String} name
 */
CreateTransformTaskBaseVM.prototype['name'] = undefined;
/**
 * @member {String} subscriptionId
 */
CreateTransformTaskBaseVM.prototype['subscriptionId'] = undefined;
/**
 * @member {module:models/TaskType} type
 */
CreateTransformTaskBaseVM.prototype['type'] = undefined;
/**
 * @member {Date} delayedRunTime
 */
CreateTransformTaskBaseVM.prototype['delayedRunTime'] = undefined;
/**
 * @member {String} cronExpression
 */
CreateTransformTaskBaseVM.prototype['cronExpression'] = undefined;




export default CreateFetchTaskVM;

