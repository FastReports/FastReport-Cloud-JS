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
import FileCreateFormVM from './FileCreateFormVM';

/**
 * The ReportCreateFormVM model module.
 * @module models/ReportCreateFormVM
 * @version v1
 */
class ReportCreateFormVM {
    /**
     * Constructs a new <code>ReportCreateFormVM</code>.
     * @alias module:models/ReportCreateFormVM
     * @extends module:models/FileCreateFormVM
     * @implements module:models/FileCreateFormVM
     * @param fileContent {File} 
     * @param t {String} 
     */
    constructor(fileContent, t) { 
        FileCreateFormVM.initialize(this, t);
        ReportCreateFormVM.initialize(this, fileContent, t);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fileContent, t) { 
        obj['$t'] = t;
    }

    /**
     * Constructs a <code>ReportCreateFormVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ReportCreateFormVM} obj Optional instance to populate.
     * @return {module:models/ReportCreateFormVM} The populated <code>ReportCreateFormVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReportCreateFormVM();
            FileCreateFormVM.constructFromObject(data, obj);
            FileCreateFormVM.constructFromObject(data, obj);

            if (data.hasOwnProperty('templateId')) {
                obj['templateId'] = ApiClient.convertToType(data['templateId'], 'String');
            }
            if (data.hasOwnProperty('$t')) {
                obj['$t'] = ApiClient.convertToType(data['$t'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReportCreateFormVM</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReportCreateFormVM</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ReportCreateFormVM.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['templateId'] && !(typeof data['templateId'] === 'string' || data['templateId'] instanceof String)) {
            throw new Error("Expected the field `templateId` to be a primitive type in the JSON string but got " + data['templateId']);
        }
        // ensure the json data is a string
        if (data['$t'] && !(typeof data['$t'] === 'string' || data['$t'] instanceof String)) {
            throw new Error("Expected the field `$t` to be a primitive type in the JSON string but got " + data['$t']);
        }

        return true;
    }


}

ReportCreateFormVM.RequiredProperties = ["$t", "fileContent"];

/**
 * @member {String} templateId
 */
ReportCreateFormVM.prototype['templateId'] = undefined;

/**
 * @member {String} $t
 */
ReportCreateFormVM.prototype['$t'] = undefined;


// Implement FileCreateFormVM interface:
/**
 * @member {String} $t
 */
FileCreateFormVM.prototype['$t'] = undefined;




export default ReportCreateFormVM;

