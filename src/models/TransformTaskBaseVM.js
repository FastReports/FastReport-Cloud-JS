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
import InputFileVM from './InputFileVM';
import OutputFileVM from './OutputFileVM';
import TaskBaseVM from './TaskBaseVM';
import TaskType from './TaskType';
import TransportTaskBaseVM from './TransportTaskBaseVM';

/**
 * The TransformTaskBaseVM model module.
 * @module models/TransformTaskBaseVM
 * @version v1
 */
class TransformTaskBaseVM {
    /**
     * Constructs a new <code>TransformTaskBaseVM</code>.
     * @alias module:models/TransformTaskBaseVM
     * @implements module:models/TaskBaseVM
     */
    constructor() { 
        TaskBaseVM.initialize(this);
        TransformTaskBaseVM.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TransformTaskBaseVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/TransformTaskBaseVM} obj Optional instance to populate.
     * @return {module:models/TransformTaskBaseVM} The populated <code>TransformTaskBaseVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransformTaskBaseVM();
            TaskBaseVM.constructFromObject(data, obj);

            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('inputFile')) {
                obj['inputFile'] = InputFileVM.constructFromObject(data['inputFile']);
            }
            if (data.hasOwnProperty('outputFile')) {
                obj['outputFile'] = OutputFileVM.constructFromObject(data['outputFile']);
            }
            if (data.hasOwnProperty('transports')) {
                obj['transports'] = ApiClient.convertToType(data['transports'], [TransportTaskBaseVM]);
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
 * @member {String} locale
 */
TransformTaskBaseVM.prototype['locale'] = undefined;

/**
 * @member {module:models/InputFileVM} inputFile
 */
TransformTaskBaseVM.prototype['inputFile'] = undefined;

/**
 * @member {module:models/OutputFileVM} outputFile
 */
TransformTaskBaseVM.prototype['outputFile'] = undefined;

/**
 * @member {Array.<module:models/TransportTaskBaseVM>} transports
 */
TransformTaskBaseVM.prototype['transports'] = undefined;

/**
 * @member {String} name
 */
TransformTaskBaseVM.prototype['name'] = undefined;

/**
 * @member {String} subscriptionId
 */
TransformTaskBaseVM.prototype['subscriptionId'] = undefined;

/**
 * @member {module:models/TaskType} type
 */
TransformTaskBaseVM.prototype['type'] = undefined;

/**
 * @member {Date} delayedRunTime
 */
TransformTaskBaseVM.prototype['delayedRunTime'] = undefined;

/**
 * @member {String} cronExpression
 */
TransformTaskBaseVM.prototype['cronExpression'] = undefined;


// Implement TaskBaseVM interface:
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
/**
 * @member {Date} delayedRunTime
 */
TaskBaseVM.prototype['delayedRunTime'] = undefined;
/**
 * @member {String} cronExpression
 */
TaskBaseVM.prototype['cronExpression'] = undefined;




export default TransformTaskBaseVM;

