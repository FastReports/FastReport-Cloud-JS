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
import UpdateTaskBaseVM from './UpdateTaskBaseVM';

/**
 * The UpdateThumbnailReportTaskVM model module.
 * @module models/UpdateThumbnailReportTaskVM
 * @version v1
 */
class UpdateThumbnailReportTaskVM {
    /**
     * Constructs a new <code>UpdateThumbnailReportTaskVM</code>.
     * @alias module:models/UpdateThumbnailReportTaskVM
     * @extends module:models/UpdateTaskBaseVM
     * @implements module:models/UpdateTaskBaseVM
     * @param t {String} 
     */
    constructor(t) { 
        UpdateTaskBaseVM.initialize(this, t);
        UpdateThumbnailReportTaskVM.initialize(this, t);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, t) { 
    }

    /**
     * Constructs a <code>UpdateThumbnailReportTaskVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/UpdateThumbnailReportTaskVM} obj Optional instance to populate.
     * @return {module:models/UpdateThumbnailReportTaskVM} The populated <code>UpdateThumbnailReportTaskVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateThumbnailReportTaskVM();
            UpdateTaskBaseVM.constructFromObject(data, obj);
            UpdateTaskBaseVM.constructFromObject(data, obj);

            if (data.hasOwnProperty('reportId')) {
                obj['reportId'] = ApiClient.convertToType(data['reportId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateThumbnailReportTaskVM</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateThumbnailReportTaskVM</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UpdateThumbnailReportTaskVM.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['reportId'] && !(typeof data['reportId'] === 'string' || data['reportId'] instanceof String)) {
            throw new Error("Expected the field `reportId` to be a primitive type in the JSON string but got " + data['reportId']);
        }

        return true;
    }


}

UpdateThumbnailReportTaskVM.RequiredProperties = ["$t"];

/**
 * @member {String} reportId
 */
UpdateThumbnailReportTaskVM.prototype['reportId'] = undefined;


// Implement UpdateTaskBaseVM interface:
/**
 * @member {String} cronExpression
 */
UpdateTaskBaseVM.prototype['cronExpression'] = undefined;
/**
 * @member {Date} delayedRunTime
 */
UpdateTaskBaseVM.prototype['delayedRunTime'] = undefined;
/**
 * @member {String} name
 */
UpdateTaskBaseVM.prototype['name'] = undefined;
/**
 * @member {String} $t
 */
UpdateTaskBaseVM.prototype['$t'] = undefined;




export default UpdateThumbnailReportTaskVM;

