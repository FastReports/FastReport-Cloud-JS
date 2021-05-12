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
 * The TemplateCreateAdminVM model module.
 * @module models/TemplateCreateAdminVM
 * @version v1
 */
class TemplateCreateAdminVM {
    /**
     * Constructs a new <code>TemplateCreateAdminVM</code>.
     * @alias module:models/TemplateCreateAdminVM
     */
    constructor() { 
        
        TemplateCreateAdminVM.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TemplateCreateAdminVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/TemplateCreateAdminVM} obj Optional instance to populate.
     * @return {module:models/TemplateCreateAdminVM} The populated <code>TemplateCreateAdminVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TemplateCreateAdminVM();

            if (data.hasOwnProperty('ownerId')) {
                obj['ownerId'] = ApiClient.convertToType(data['ownerId'], 'String');
            }
            if (data.hasOwnProperty('parentId')) {
                obj['parentId'] = ApiClient.convertToType(data['parentId'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('icon')) {
                obj['icon'] = ApiClient.convertToType(data['icon'], 'String');
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} ownerId
 */
TemplateCreateAdminVM.prototype['ownerId'] = undefined;

/**
 * @member {String} parentId
 */
TemplateCreateAdminVM.prototype['parentId'] = undefined;

/**
 * @member {String} name
 */
TemplateCreateAdminVM.prototype['name'] = undefined;

/**
 * @member {Array.<String>} tags
 */
TemplateCreateAdminVM.prototype['tags'] = undefined;

/**
 * @member {String} icon
 */
TemplateCreateAdminVM.prototype['icon'] = undefined;

/**
 * @member {String} content
 */
TemplateCreateAdminVM.prototype['content'] = undefined;






export default TemplateCreateAdminVM;

