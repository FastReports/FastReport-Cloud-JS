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

/**
 * The RunPrepareTemplateTaskVM model module.
 * @module models/RunPrepareTemplateTaskVM
 * @version v1
 */
class RunPrepareTemplateTaskVM {
    /**
     * Constructs a new <code>RunPrepareTemplateTaskVM</code>.
     * @alias module:models/RunPrepareTemplateTaskVM
     * @extends module:models/RunTransformTaskBaseVM
     * @implements module:models/RunTransformTaskBaseVM
     * @param t {String} 
     */
    constructor(t) { 
        RunTransformTaskBaseVM.initialize(this, t);
        RunPrepareTemplateTaskVM.initialize(this, t);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, t) { 
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
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RunPrepareTemplateTaskVM</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RunPrepareTemplateTaskVM</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RunPrepareTemplateTaskVM.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['exports']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['exports'])) {
                throw new Error("Expected the field `exports` to be an array in the JSON data but got " + data['exports']);
            }
            // validate the optional field `exports` (array)
            for (const item of data['exports']) {
                RunExportReportTaskVM.validateJSON(item);
            };
        }

        return true;
    }


}

RunPrepareTemplateTaskVM.RequiredProperties = ["$t"];

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


// Implement RunTransformTaskBaseVM interface:
/**
 * @member {String} subscriptionId
 */
RunTransformTaskBaseVM.prototype['subscriptionId'] = undefined;
/**
 * @member {String} $t
 */
RunTransformTaskBaseVM.prototype['$t'] = undefined;




export default RunPrepareTemplateTaskVM;

