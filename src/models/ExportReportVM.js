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

/**
 * The ExportReportVM model module.
 * @module models/ExportReportVM
 * @version v1
 */
class ExportReportVM {
    /**
     * Constructs a new <code>ExportReportVM</code>.
     * @alias module:models/ExportReportVM
     */
    constructor() { 
        
        ExportReportVM.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ExportReportVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ExportReportVM} obj Optional instance to populate.
     * @return {module:models/ExportReportVM} The populated <code>ExportReportVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExportReportVM();

            if (data.hasOwnProperty('fileName')) {
                obj['fileName'] = ApiClient.convertToType(data['fileName'], 'String');
            }
            if (data.hasOwnProperty('folderId')) {
                obj['folderId'] = ApiClient.convertToType(data['folderId'], 'String');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('pagesCount')) {
                obj['pagesCount'] = ApiClient.convertToType(data['pagesCount'], 'Number');
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = ExportFormat.constructFromObject(data['format']);
            }
            if (data.hasOwnProperty('exportParameters')) {
                obj['exportParameters'] = ApiClient.convertToType(data['exportParameters'], {'String': 'String'});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExportReportVM</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExportReportVM</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['fileName'] && !(typeof data['fileName'] === 'string' || data['fileName'] instanceof String)) {
            throw new Error("Expected the field `fileName` to be a primitive type in the JSON string but got " + data['fileName']);
        }
        // ensure the json data is a string
        if (data['folderId'] && !(typeof data['folderId'] === 'string' || data['folderId'] instanceof String)) {
            throw new Error("Expected the field `folderId` to be a primitive type in the JSON string but got " + data['folderId']);
        }
        // ensure the json data is a string
        if (data['locale'] && !(typeof data['locale'] === 'string' || data['locale'] instanceof String)) {
            throw new Error("Expected the field `locale` to be a primitive type in the JSON string but got " + data['locale']);
        }

        return true;
    }


}



/**
 * @member {String} fileName
 */
ExportReportVM.prototype['fileName'] = undefined;

/**
 * @member {String} folderId
 */
ExportReportVM.prototype['folderId'] = undefined;

/**
 * @member {String} locale
 */
ExportReportVM.prototype['locale'] = undefined;

/**
 * @member {Number} pagesCount
 */
ExportReportVM.prototype['pagesCount'] = undefined;

/**
 * @member {module:models/ExportFormat} format
 */
ExportReportVM.prototype['format'] = undefined;

/**
 * @member {Object.<String, String>} exportParameters
 */
ExportReportVM.prototype['exportParameters'] = undefined;






export default ExportReportVM;

