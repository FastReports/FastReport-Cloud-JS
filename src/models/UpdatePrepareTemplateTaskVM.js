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
import UpdateExportReportTaskVM from './UpdateExportReportTaskVM';
import UpdateTransformTaskBaseVM from './UpdateTransformTaskBaseVM';

/**
 * The UpdatePrepareTemplateTaskVM model module.
 * @module models/UpdatePrepareTemplateTaskVM
 * @version v1
 */
class UpdatePrepareTemplateTaskVM {
    /**
     * Constructs a new <code>UpdatePrepareTemplateTaskVM</code>.
     * @alias module:models/UpdatePrepareTemplateTaskVM
     * @implements module:models/UpdateTransformTaskBaseVM
     */
    constructor() { 
        UpdateTransformTaskBaseVM.initialize(this);
        UpdatePrepareTemplateTaskVM.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdatePrepareTemplateTaskVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/UpdatePrepareTemplateTaskVM} obj Optional instance to populate.
     * @return {module:models/UpdatePrepareTemplateTaskVM} The populated <code>UpdatePrepareTemplateTaskVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdatePrepareTemplateTaskVM();
            UpdateTransformTaskBaseVM.constructFromObject(data, obj);

            if (data.hasOwnProperty('exports')) {
                obj['exports'] = ApiClient.convertToType(data['exports'], [UpdateExportReportTaskVM]);
            }
            if (data.hasOwnProperty('pagesCount')) {
                obj['pagesCount'] = ApiClient.convertToType(data['pagesCount'], 'Number');
            }
            if (data.hasOwnProperty('reportParameters')) {
                obj['reportParameters'] = ApiClient.convertToType(data['reportParameters'], {'String': 'String'});
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
 * @member {Array.<module:models/UpdateExportReportTaskVM>} exports
 */
UpdatePrepareTemplateTaskVM.prototype['exports'] = undefined;

/**
 * @member {Number} pagesCount
 */
UpdatePrepareTemplateTaskVM.prototype['pagesCount'] = undefined;

/**
 * @member {Object.<String, String>} reportParameters
 */
UpdatePrepareTemplateTaskVM.prototype['reportParameters'] = undefined;

/**
 * @member {String} name
 */
UpdatePrepareTemplateTaskVM.prototype['name'] = undefined;

/**
 * @member {String} subscriptionId
 */
UpdatePrepareTemplateTaskVM.prototype['subscriptionId'] = undefined;

/**
 * @member {module:models/TaskType} type
 */
UpdatePrepareTemplateTaskVM.prototype['type'] = undefined;

/**
 * @member {Date} delayedRunTime
 */
UpdatePrepareTemplateTaskVM.prototype['delayedRunTime'] = undefined;

/**
 * @member {String} cronExpression
 */
UpdatePrepareTemplateTaskVM.prototype['cronExpression'] = undefined;


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




export default UpdatePrepareTemplateTaskVM;

