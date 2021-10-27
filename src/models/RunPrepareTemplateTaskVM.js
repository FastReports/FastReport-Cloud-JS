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
import RunExportReportTaskVM from './RunExportReportTaskVM';
import RunTransformTaskBaseVM from './RunTransformTaskBaseVM';
import TaskType from './TaskType';

/**
 * The RunPrepareTemplateTaskVM model module.
 * @module models/RunPrepareTemplateTaskVM
 * @version v1
 */
class RunPrepareTemplateTaskVM {
    /**
     * Constructs a new <code>RunPrepareTemplateTaskVM</code>.
     * @alias module:models/RunPrepareTemplateTaskVM
     * @implements module:models/RunTransformTaskBaseVM
     */
    constructor() { 
        RunTransformTaskBaseVM.initialize(this);
        RunPrepareTemplateTaskVM.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RunPrepareTemplateTaskVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/RunPrepareTemplateTaskVM} obj Optional instance to populate.
     * @return {module:models/RunPrepareTemplateTaskVM} The populated <code>RunPrepareTemplateTaskVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RunPrepareTemplateTaskVM();
            RunTransformTaskBaseVM.constructFromObject(data, obj);

            if (data.hasOwnProperty('exports')) {
                obj['exports'] = ApiClient.convertToType(data['exports'], [RunExportReportTaskVM]);
            }
            if (data.hasOwnProperty('pagesCount')) {
                obj['pagesCount'] = ApiClient.convertToType(data['pagesCount'], 'Number');
            }
            if (data.hasOwnProperty('reportParameters')) {
                obj['reportParameters'] = ApiClient.convertToType(data['reportParameters'], {'String': 'String'});
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
 * @member {Array.<module:models/RunExportReportTaskVM>} exports
 */
RunPrepareTemplateTaskVM.prototype['exports'] = undefined;

/**
 * @member {Number} pagesCount
 */
RunPrepareTemplateTaskVM.prototype['pagesCount'] = undefined;

/**
 * @member {Object.<String, String>} reportParameters
 */
RunPrepareTemplateTaskVM.prototype['reportParameters'] = undefined;

/**
 * @member {String} subscriptionId
 */
RunPrepareTemplateTaskVM.prototype['subscriptionId'] = undefined;

/**
 * @member {module:models/TaskType} type
 */
RunPrepareTemplateTaskVM.prototype['type'] = undefined;


// Implement RunTransformTaskBaseVM interface:
/**
 * @member {String} subscriptionId
 */
RunTransformTaskBaseVM.prototype['subscriptionId'] = undefined;
/**
 * @member {module:models/TaskType} type
 */
RunTransformTaskBaseVM.prototype['type'] = undefined;




export default RunPrepareTemplateTaskVM;

