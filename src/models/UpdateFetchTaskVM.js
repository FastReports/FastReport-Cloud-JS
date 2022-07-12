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
import UpdateTransformTaskBaseVM from './UpdateTransformTaskBaseVM';

/**
 * The UpdateFetchTaskVM model module.
 * @module models/UpdateFetchTaskVM
 * @version v1
 */
class UpdateFetchTaskVM {
    /**
     * Constructs a new <code>UpdateFetchTaskVM</code>.
     * @alias module:models/UpdateFetchTaskVM
     * @implements module:models/UpdateTransformTaskBaseVM
     */
    constructor() { 
        UpdateTransformTaskBaseVM.initialize(this);
        UpdateFetchTaskVM.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateFetchTaskVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/UpdateFetchTaskVM} obj Optional instance to populate.
     * @return {module:models/UpdateFetchTaskVM} The populated <code>UpdateFetchTaskVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateFetchTaskVM();
            UpdateTransformTaskBaseVM.constructFromObject(data, obj);

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
UpdateFetchTaskVM.prototype['name'] = undefined;

/**
 * @member {String} subscriptionId
 */
UpdateFetchTaskVM.prototype['subscriptionId'] = undefined;

/**
 * @member {module:models/TaskType} type
 */
UpdateFetchTaskVM.prototype['type'] = undefined;

/**
 * @member {Date} delayedRunTime
 */
UpdateFetchTaskVM.prototype['delayedRunTime'] = undefined;

/**
 * @member {String} cronExpression
 */
UpdateFetchTaskVM.prototype['cronExpression'] = undefined;


// Implement UpdateTransformTaskBaseVM interface:
/**
 * @member {String} name
 */
UpdateTransformTaskBaseVM.prototype['name'] = undefined;
/**
 * @member {String} subscriptionId
 */
UpdateTransformTaskBaseVM.prototype['subscriptionId'] = undefined;
/**
 * @member {module:models/TaskType} type
 */
UpdateTransformTaskBaseVM.prototype['type'] = undefined;
/**
 * @member {Date} delayedRunTime
 */
UpdateTransformTaskBaseVM.prototype['delayedRunTime'] = undefined;
/**
 * @member {String} cronExpression
 */
UpdateTransformTaskBaseVM.prototype['cronExpression'] = undefined;




export default UpdateFetchTaskVM;
