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

/**
 * The TemplateCreateVM model module.
 * @module models/TemplateCreateVM
 * @version v1
 */
class TemplateCreateVM {
    /**
     * Constructs a new <code>TemplateCreateVM</code>.
     * @alias module:models/TemplateCreateVM
     */
    constructor() { 
        
        TemplateCreateVM.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TemplateCreateVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/TemplateCreateVM} obj Optional instance to populate.
     * @return {module:models/TemplateCreateVM} The populated <code>TemplateCreateVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TemplateCreateVM();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('icon')) {
                obj['icon'] = ApiClient.convertToType(data['icon'], 'Blob');
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'Blob');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
TemplateCreateVM.prototype['name'] = undefined;

/**
 * @member {Array.<String>} tags
 */
TemplateCreateVM.prototype['tags'] = undefined;

/**
 * @member {Blob} icon
 */
TemplateCreateVM.prototype['icon'] = undefined;

/**
 * @member {Blob} content
 */
TemplateCreateVM.prototype['content'] = undefined;






export default TemplateCreateVM;

