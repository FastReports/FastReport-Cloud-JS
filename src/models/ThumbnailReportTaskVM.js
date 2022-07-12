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
import TransformTaskBaseVM from './TransformTaskBaseVM';

/**
 * The ThumbnailReportTaskVM model module.
 * @module models/ThumbnailReportTaskVM
 * @version v1
 */
class ThumbnailReportTaskVM {
    /**
     * Constructs a new <code>ThumbnailReportTaskVM</code>.
     * @alias module:models/ThumbnailReportTaskVM
     * @implements module:models/TransformTaskBaseVM
     */
    constructor() { 
        TransformTaskBaseVM.initialize(this);
        ThumbnailReportTaskVM.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ThumbnailReportTaskVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ThumbnailReportTaskVM} obj Optional instance to populate.
     * @return {module:models/ThumbnailReportTaskVM} The populated <code>ThumbnailReportTaskVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ThumbnailReportTaskVM();
            TransformTaskBaseVM.constructFromObject(data, obj);

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
ThumbnailReportTaskVM.prototype['name'] = undefined;

/**
 * @member {String} subscriptionId
 */
ThumbnailReportTaskVM.prototype['subscriptionId'] = undefined;

/**
 * @member {module:models/TaskType} type
 */
ThumbnailReportTaskVM.prototype['type'] = undefined;

/**
 * @member {Date} delayedRunTime
 */
ThumbnailReportTaskVM.prototype['delayedRunTime'] = undefined;

/**
 * @member {String} cronExpression
 */
ThumbnailReportTaskVM.prototype['cronExpression'] = undefined;


// Implement TransformTaskBaseVM interface:
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




export default ThumbnailReportTaskVM;

