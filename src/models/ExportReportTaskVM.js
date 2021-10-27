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
import TaskType from './TaskType';
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
     * @implements module:models/TransformTaskBaseVM
     */
    constructor() { 
        TransformTaskBaseVM.initialize(this);
        ExportReportTaskVM.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
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

            if (data.hasOwnProperty('exportParameters')) {
                obj['exportParameters'] = ApiClient.convertToType(data['exportParameters'], {'String': 'String'});
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = ExportFormat.constructFromObject(data['format']);
            }
            if (data.hasOwnProperty('pagesCount')) {
                obj['pagesCount'] = ApiClient.convertToType(data['pagesCount'], 'Number');
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
        }
        return obj;
    }


}

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
 * @member {String} name
 */
ExportReportTaskVM.prototype['name'] = undefined;

/**
 * @member {String} subscriptionId
 */
ExportReportTaskVM.prototype['subscriptionId'] = undefined;

/**
 * @member {module:models/TaskType} type
 */
ExportReportTaskVM.prototype['type'] = undefined;


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




export default ExportReportTaskVM;

