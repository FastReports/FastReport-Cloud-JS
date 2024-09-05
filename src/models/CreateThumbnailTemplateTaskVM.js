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
import CreateTaskBaseVM from './CreateTaskBaseVM';
import CreateTaskEndVM from './CreateTaskEndVM';

/**
 * The CreateThumbnailTemplateTaskVM model module.
 * @module models/CreateThumbnailTemplateTaskVM
 * @version v1
 */
class CreateThumbnailTemplateTaskVM {
    /**
     * Constructs a new <code>CreateThumbnailTemplateTaskVM</code>.
     * @alias module:models/CreateThumbnailTemplateTaskVM
     * @extends module:models/CreateTaskBaseVM
     * @implements module:models/CreateTaskBaseVM
     * @param t {String} 
     */
    constructor(t) { 
        CreateTaskBaseVM.initialize(this, t);
        CreateThumbnailTemplateTaskVM.initialize(this, t);
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
     * Constructs a <code>CreateThumbnailTemplateTaskVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CreateThumbnailTemplateTaskVM} obj Optional instance to populate.
     * @return {module:models/CreateThumbnailTemplateTaskVM} The populated <code>CreateThumbnailTemplateTaskVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateThumbnailTemplateTaskVM();
            CreateTaskBaseVM.constructFromObject(data, obj);
            CreateTaskBaseVM.constructFromObject(data, obj);

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
     * Validates the JSON data with respect to <code>CreateThumbnailTemplateTaskVM</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateThumbnailTemplateTaskVM</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateThumbnailTemplateTaskVM.RequiredProperties) {
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

CreateThumbnailTemplateTaskVM.RequiredProperties = ["$t"];

/**
 * @member {String} templateId
 */
CreateThumbnailTemplateTaskVM.prototype['templateId'] = undefined;

/**
 * @member {String} $t
 */
CreateThumbnailTemplateTaskVM.prototype['$t'] = undefined;


// Implement CreateTaskBaseVM interface:
/**
 * @member {String} $t
 */
CreateTaskBaseVM.prototype['$t'] = undefined;




export default CreateThumbnailTemplateTaskVM;

