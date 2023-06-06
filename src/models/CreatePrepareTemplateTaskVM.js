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
import CreateExportReportTaskVM from './CreateExportReportTaskVM';
import CreateTransformTaskBaseVM from './CreateTransformTaskBaseVM';

/**
 * The CreatePrepareTemplateTaskVM model module.
 * @module models/CreatePrepareTemplateTaskVM
 * @version v1
 */
class CreatePrepareTemplateTaskVM {
    /**
     * Constructs a new <code>CreatePrepareTemplateTaskVM</code>.
     * @alias module:models/CreatePrepareTemplateTaskVM
     * @extends module:models/CreateTransformTaskBaseVM
     * @implements module:models/CreateTransformTaskBaseVM
     * @param t {String} 
     */
    constructor(t) { 
        CreateTransformTaskBaseVM.initialize(this, t);
        CreatePrepareTemplateTaskVM.initialize(this, t);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, t) { 
    }

    /**
     * Constructs a <code>CreatePrepareTemplateTaskVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CreatePrepareTemplateTaskVM} obj Optional instance to populate.
     * @return {module:models/CreatePrepareTemplateTaskVM} The populated <code>CreatePrepareTemplateTaskVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreatePrepareTemplateTaskVM();
            CreateTransformTaskBaseVM.constructFromObject(data, obj);
            CreateTransformTaskBaseVM.constructFromObject(data, obj);

            if (data.hasOwnProperty('exports')) {
                obj['exports'] = ApiClient.convertToType(data['exports'], [CreateExportReportTaskVM]);
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
     * Validates the JSON data with respect to <code>CreatePrepareTemplateTaskVM</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreatePrepareTemplateTaskVM</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreatePrepareTemplateTaskVM.RequiredProperties) {
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
                CreateExportReportTaskVM.validateJSON(item);
            };
        }

        return true;
    }


}

CreatePrepareTemplateTaskVM.RequiredProperties = ["$t"];

/**
 * @member {Array.<module:models/CreateExportReportTaskVM>} exports
 */
CreatePrepareTemplateTaskVM.prototype['exports'] = undefined;

/**
 * @member {Number} pagesCount
 */
CreatePrepareTemplateTaskVM.prototype['pagesCount'] = undefined;

/**
 * @member {Object.<String, String>} reportParameters
 */
CreatePrepareTemplateTaskVM.prototype['reportParameters'] = undefined;


// Implement CreateTransformTaskBaseVM interface:
/**
 * @member {String} cronExpression
 */
CreateTransformTaskBaseVM.prototype['cronExpression'] = undefined;
/**
 * @member {Date} delayedRunTime
 */
CreateTransformTaskBaseVM.prototype['delayedRunTime'] = undefined;
/**
 * @member {String} name
 */
CreateTransformTaskBaseVM.prototype['name'] = undefined;
/**
 * @member {String} subscriptionId
 */
CreateTransformTaskBaseVM.prototype['subscriptionId'] = undefined;
/**
 * @member {String} $t
 */
CreateTransformTaskBaseVM.prototype['$t'] = undefined;




export default CreatePrepareTemplateTaskVM;

