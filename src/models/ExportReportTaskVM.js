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
import ExportFormat from './ExportFormat';
import InputFileVM from './InputFileVM';
import OutputFileVM from './OutputFileVM';
import TaskEnd from './TaskEnd';
import TransformTaskBaseVM from './TransformTaskBaseVM';

/**
 * The ExportReportTaskVM model module.
 * @module models/ExportReportTaskVM
 * @version v1
 */
class ExportReportTaskVM {
    /**
     * Constructs a new <code>ExportReportTaskVM</code>.
     * @alias module:models/ExportReportTaskVM
     * @extends module:models/TransformTaskBaseVM
     * @implements module:models/TransformTaskBaseVM
     * @param t {String} 
     */
    constructor(t) { 
        TransformTaskBaseVM.initialize(this, t);
        ExportReportTaskVM.initialize(this, t);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, t) { 
        obj['$t'] = t;
    }

    /**
     * Constructs a <code>ExportReportTaskVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ExportReportTaskVM} obj Optional instance to populate.
     * @return {module:models/ExportReportTaskVM} The populated <code>ExportReportTaskVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExportReportTaskVM();
            TransformTaskBaseVM.constructFromObject(data, obj);
            TransformTaskBaseVM.constructFromObject(data, obj);

            if (data.hasOwnProperty('exportParameters')) {
                obj['exportParameters'] = ApiClient.convertToType(data['exportParameters'], {'String': 'String'});
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = ExportFormat.constructFromObject(data['format']);
            }
            if (data.hasOwnProperty('pagesCount')) {
                obj['pagesCount'] = ApiClient.convertToType(data['pagesCount'], 'Number');
            }
            if (data.hasOwnProperty('$t')) {
                obj['$t'] = ApiClient.convertToType(data['$t'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExportReportTaskVM</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExportReportTaskVM</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ExportReportTaskVM.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['$t'] && !(typeof data['$t'] === 'string' || data['$t'] instanceof String)) {
            throw new Error("Expected the field `$t` to be a primitive type in the JSON string but got " + data['$t']);
        }

        return true;
    }


}

ExportReportTaskVM.RequiredProperties = ["$t"];

/**
 * @member {Object.<String, String>} exportParameters
 */
ExportReportTaskVM.prototype['exportParameters'] = undefined;

/**
 * @member {module:models/ExportFormat} format
 */
ExportReportTaskVM.prototype['format'] = undefined;

/**
 * @member {Number} pagesCount
 */
ExportReportTaskVM.prototype['pagesCount'] = undefined;

/**
 * @member {String} $t
 */
ExportReportTaskVM.prototype['$t'] = undefined;


// Implement TransformTaskBaseVM interface:
/**
 * @member {String} cronExpression
 */
TransformTaskBaseVM.prototype['cronExpression'] = undefined;
/**
 * @member {Date} startsOn
 */
TransformTaskBaseVM.prototype['startsOn'] = undefined;
/**
 * @member {module:models/TaskEnd} ends
 */
TransformTaskBaseVM.prototype['ends'] = undefined;
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




export default ExportReportTaskVM;

