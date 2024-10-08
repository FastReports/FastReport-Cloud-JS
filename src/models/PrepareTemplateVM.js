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
 * The PrepareTemplateVM model module.
 * @module models/PrepareTemplateVM
 * @version v1
 */
class PrepareTemplateVM {
    /**
     * Constructs a new <code>PrepareTemplateVM</code>.
     * @alias module:models/PrepareTemplateVM
     * @extends module:models/CloudBaseVM
     * @implements module:models/CloudBaseVM
     * @param t {String} 
     */
    constructor(t) { 
        CloudBaseVM.initialize(this, t);
        PrepareTemplateVM.initialize(this, t);
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
     * Constructs a <code>PrepareTemplateVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/PrepareTemplateVM} obj Optional instance to populate.
     * @return {module:models/PrepareTemplateVM} The populated <code>PrepareTemplateVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PrepareTemplateVM();
            CloudBaseVM.constructFromObject(data, obj);
            CloudBaseVM.constructFromObject(data, obj);

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('folderId')) {
                obj['folderId'] = ApiClient.convertToType(data['folderId'], 'String');
            }
            if (data.hasOwnProperty('pagesCount')) {
                obj['pagesCount'] = ApiClient.convertToType(data['pagesCount'], 'Number');
            }
            if (data.hasOwnProperty('reportParameters')) {
                obj['reportParameters'] = ApiClient.convertToType(data['reportParameters'], {'String': 'String'});
            }
            if (data.hasOwnProperty('$t')) {
                obj['$t'] = ApiClient.convertToType(data['$t'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PrepareTemplateVM</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PrepareTemplateVM</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PrepareTemplateVM.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['locale'] && !(typeof data['locale'] === 'string' || data['locale'] instanceof String)) {
            throw new Error("Expected the field `locale` to be a primitive type in the JSON string but got " + data['locale']);
        }
        // ensure the json data is a string
        if (data['folderId'] && !(typeof data['folderId'] === 'string' || data['folderId'] instanceof String)) {
            throw new Error("Expected the field `folderId` to be a primitive type in the JSON string but got " + data['folderId']);
        }
        // ensure the json data is a string
        if (data['$t'] && !(typeof data['$t'] === 'string' || data['$t'] instanceof String)) {
            throw new Error("Expected the field `$t` to be a primitive type in the JSON string but got " + data['$t']);
        }

        return true;
    }


}

PrepareTemplateVM.RequiredProperties = ["$t"];

/**
 * @member {String} name
 */
PrepareTemplateVM.prototype['name'] = undefined;

/**
 * @member {String} locale
 */
PrepareTemplateVM.prototype['locale'] = undefined;

/**
 * @member {String} folderId
 */
PrepareTemplateVM.prototype['folderId'] = undefined;

/**
 * @member {Number} pagesCount
 */
PrepareTemplateVM.prototype['pagesCount'] = undefined;

/**
 * @member {Object.<String, String>} reportParameters
 */
PrepareTemplateVM.prototype['reportParameters'] = undefined;

/**
 * @member {String} $t
 */
PrepareTemplateVM.prototype['$t'] = undefined;


// Implement CloudBaseVM interface:
/**
 * @member {String} $t
 */
CloudBaseVM.prototype['$t'] = undefined;




export default PrepareTemplateVM;

