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
import InputFileVM from './InputFileVM';
import OutputFileVM from './OutputFileVM';
import UpdateTaskBaseVM from './UpdateTaskBaseVM';

/**
 * The UpdateTransformTaskBaseVM model module.
 * @module models/UpdateTransformTaskBaseVM
 * @version v1
 */
class UpdateTransformTaskBaseVM {
    /**
     * Constructs a new <code>UpdateTransformTaskBaseVM</code>.
     * @alias module:models/UpdateTransformTaskBaseVM
     * @extends module:models/UpdateTaskBaseVM
     * @implements module:models/UpdateTaskBaseVM
     * @param t {String} 
     */
    constructor(t) { 
        UpdateTaskBaseVM.initialize(this, t);
        UpdateTransformTaskBaseVM.initialize(this, t);
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
     * Constructs a <code>UpdateTransformTaskBaseVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/UpdateTransformTaskBaseVM} obj Optional instance to populate.
     * @return {module:models/UpdateTransformTaskBaseVM} The populated <code>UpdateTransformTaskBaseVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateTransformTaskBaseVM();
            UpdateTaskBaseVM.constructFromObject(data, obj);
            UpdateTaskBaseVM.constructFromObject(data, obj);

            if (data.hasOwnProperty('inputFile')) {
                obj['inputFile'] = InputFileVM.constructFromObject(data['inputFile']);
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('outputFile')) {
                obj['outputFile'] = OutputFileVM.constructFromObject(data['outputFile']);
            }
            if (data.hasOwnProperty('transportIds')) {
                obj['transportIds'] = ApiClient.convertToType(data['transportIds'], ['String']);
            }
            if (data.hasOwnProperty('$t')) {
                obj['$t'] = ApiClient.convertToType(data['$t'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateTransformTaskBaseVM</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateTransformTaskBaseVM</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UpdateTransformTaskBaseVM.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `inputFile`
        if (data['inputFile']) { // data not null
          InputFileVM.validateJSON(data['inputFile']);
        }
        // ensure the json data is a string
        if (data['locale'] && !(typeof data['locale'] === 'string' || data['locale'] instanceof String)) {
            throw new Error("Expected the field `locale` to be a primitive type in the JSON string but got " + data['locale']);
        }
        // validate the optional field `outputFile`
        if (data['outputFile']) { // data not null
          OutputFileVM.validateJSON(data['outputFile']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['transportIds'])) {
            throw new Error("Expected the field `transportIds` to be an array in the JSON data but got " + data['transportIds']);
        }
        // ensure the json data is a string
        if (data['$t'] && !(typeof data['$t'] === 'string' || data['$t'] instanceof String)) {
            throw new Error("Expected the field `$t` to be a primitive type in the JSON string but got " + data['$t']);
        }

        return true;
    }


}

UpdateTransformTaskBaseVM.RequiredProperties = ["$t"];

/**
 * @member {module:models/InputFileVM} inputFile
 */
UpdateTransformTaskBaseVM.prototype['inputFile'] = undefined;

/**
 * @member {String} locale
 */
UpdateTransformTaskBaseVM.prototype['locale'] = undefined;

/**
 * @member {module:models/OutputFileVM} outputFile
 */
UpdateTransformTaskBaseVM.prototype['outputFile'] = undefined;

/**
 * @member {Array.<String>} transportIds
 */
UpdateTransformTaskBaseVM.prototype['transportIds'] = undefined;

/**
 * @member {String} $t
 */
UpdateTransformTaskBaseVM.prototype['$t'] = undefined;


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




export default UpdateTransformTaskBaseVM;

