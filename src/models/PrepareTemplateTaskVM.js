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
import TransformTaskBaseVM from './TransformTaskBaseVM';

/**
 * The PrepareTemplateTaskVM model module.
 * @module models/PrepareTemplateTaskVM
 * @version v1
 */
class PrepareTemplateTaskVM {
    /**
     * Constructs a new <code>PrepareTemplateTaskVM</code>.
     * @alias module:models/PrepareTemplateTaskVM
     * @extends module:models/TransformTaskBaseVM
     * @implements module:models/TransformTaskBaseVM
     * @param t {String} 
     */
    constructor(t) { 
        TransformTaskBaseVM.initialize(this, t);
        PrepareTemplateTaskVM.initialize(this, t);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, t) { 
    }

    /**
     * Constructs a <code>PrepareTemplateTaskVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/PrepareTemplateTaskVM} obj Optional instance to populate.
     * @return {module:models/PrepareTemplateTaskVM} The populated <code>PrepareTemplateTaskVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PrepareTemplateTaskVM();
            TransformTaskBaseVM.constructFromObject(data, obj);
            TransformTaskBaseVM.constructFromObject(data, obj);

            if (data.hasOwnProperty('exportIds')) {
                obj['exportIds'] = ApiClient.convertToType(data['exportIds'], ['String']);
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
     * Validates the JSON data with respect to <code>PrepareTemplateTaskVM</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PrepareTemplateTaskVM</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PrepareTemplateTaskVM.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['exportIds'])) {
            throw new Error("Expected the field `exportIds` to be an array in the JSON data but got " + data['exportIds']);
        }

        return true;
    }


}

PrepareTemplateTaskVM.RequiredProperties = ["$t"];

/**
 * @member {Array.<String>} exportIds
 */
PrepareTemplateTaskVM.prototype['exportIds'] = undefined;

/**
 * @member {Number} pagesCount
 */
PrepareTemplateTaskVM.prototype['pagesCount'] = undefined;

/**
 * @member {Object.<String, String>} reportParameters
 */
PrepareTemplateTaskVM.prototype['reportParameters'] = undefined;


// Implement TransformTaskBaseVM interface:
/**
 * @member {String} cronExpression
 */
TransformTaskBaseVM.prototype['cronExpression'] = undefined;
/**
 * @member {Date} delayedRunTime
 */
TransformTaskBaseVM.prototype['delayedRunTime'] = undefined;
/**
 * @member {Date} delayedWasRunTime
 */
TransformTaskBaseVM.prototype['delayedWasRunTime'] = undefined;
/**
 * @member {String} id
 */
TransformTaskBaseVM.prototype['id'] = undefined;
/**
 * @member {String} name
 */
TransformTaskBaseVM.prototype['name'] = undefined;
/**
 * @member {Date} recurrentRunTime
 */
TransformTaskBaseVM.prototype['recurrentRunTime'] = undefined;
/**
 * @member {Date} recurrentWasRunTime
 */
TransformTaskBaseVM.prototype['recurrentWasRunTime'] = undefined;
/**
 * @member {String} subscriptionId
 */
TransformTaskBaseVM.prototype['subscriptionId'] = undefined;
/**
 * @member {String} $t
 */
TransformTaskBaseVM.prototype['$t'] = undefined;




export default PrepareTemplateTaskVM;

