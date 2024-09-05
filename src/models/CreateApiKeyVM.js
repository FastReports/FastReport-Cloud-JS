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
import CloudBaseVM from './CloudBaseVM';

/**
 * The CreateApiKeyVM model module.
 * @module models/CreateApiKeyVM
 * @version v1
 */
class CreateApiKeyVM {
    /**
     * Constructs a new <code>CreateApiKeyVM</code>.
     * @alias module:models/CreateApiKeyVM
     * @extends module:models/CloudBaseVM
     * @implements module:models/CloudBaseVM
     * @param t {String} 
     */
    constructor(t) { 
        CloudBaseVM.initialize(this, t);
        CreateApiKeyVM.initialize(this, t);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, t) { 
        obj['expired'] = expired;
        obj['$t'] = t;
    }

    /**
     * Constructs a <code>CreateApiKeyVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CreateApiKeyVM} obj Optional instance to populate.
     * @return {module:models/CreateApiKeyVM} The populated <code>CreateApiKeyVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateApiKeyVM();
            CloudBaseVM.constructFromObject(data, obj);
            CloudBaseVM.constructFromObject(data, obj);

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('expired')) {
                obj['expired'] = ApiClient.convertToType(data['expired'], 'Date');
            }
            if (data.hasOwnProperty('$t')) {
                obj['$t'] = ApiClient.convertToType(data['$t'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateApiKeyVM</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateApiKeyVM</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateApiKeyVM.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['$t'] && !(typeof data['$t'] === 'string' || data['$t'] instanceof String)) {
            throw new Error("Expected the field `$t` to be a primitive type in the JSON string but got " + data['$t']);
        }

        return true;
    }


}

CreateApiKeyVM.RequiredProperties = ["expired", "$t"];

/**
 * @member {String} description
 */
CreateApiKeyVM.prototype['description'] = undefined;

/**
 * @member {Date} expired
 */
CreateApiKeyVM.prototype['expired'] = undefined;

/**
 * @member {String} $t
 */
CreateApiKeyVM.prototype['$t'] = undefined;


// Implement CloudBaseVM interface:
/**
 * @member {String} $t
 */
CloudBaseVM.prototype['$t'] = undefined;




export default CreateApiKeyVM;

