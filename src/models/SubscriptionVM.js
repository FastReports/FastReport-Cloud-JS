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
import SubscriptionFolder from './SubscriptionFolder';
import SubscriptionPeriodVM from './SubscriptionPeriodVM';

/**
 * The SubscriptionVM model module.
 * @module models/SubscriptionVM
 * @version v1
 */
class SubscriptionVM {
    /**
     * Constructs a new <code>SubscriptionVM</code>.
     * @alias module:models/SubscriptionVM
     */
    constructor() { 
        
        SubscriptionVM.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SubscriptionVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/SubscriptionVM} obj Optional instance to populate.
     * @return {module:models/SubscriptionVM} The populated <code>SubscriptionVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubscriptionVM();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('current')) {
                obj['current'] = SubscriptionPeriodVM.constructFromObject(data['current']);
            }
            if (data.hasOwnProperty('old')) {
                obj['old'] = ApiClient.convertToType(data['old'], [SubscriptionPeriodVM]);
            }
            if (data.hasOwnProperty('templatesFolder')) {
                obj['templatesFolder'] = SubscriptionFolder.constructFromObject(data['templatesFolder']);
            }
            if (data.hasOwnProperty('reportsFolder')) {
                obj['reportsFolder'] = SubscriptionFolder.constructFromObject(data['reportsFolder']);
            }
            if (data.hasOwnProperty('exportsFolder')) {
                obj['exportsFolder'] = SubscriptionFolder.constructFromObject(data['exportsFolder']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SubscriptionVM</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SubscriptionVM</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['locale'] && !(typeof data['locale'] === 'string' || data['locale'] instanceof String)) {
            throw new Error("Expected the field `locale` to be a primitive type in the JSON string but got " + data['locale']);
        }
        // validate the optional field `current`
        if (data['current']) { // data not null
          SubscriptionPeriodVM.validateJSON(data['current']);
        }
        if (data['old']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['old'])) {
                throw new Error("Expected the field `old` to be an array in the JSON data but got " + data['old']);
            }
            // validate the optional field `old` (array)
            for (const item of data['old']) {
                SubscriptionPeriodVM.validateJSON(item);
            };
        }
        // validate the optional field `templatesFolder`
        if (data['templatesFolder']) { // data not null
          SubscriptionFolder.validateJSON(data['templatesFolder']);
        }
        // validate the optional field `reportsFolder`
        if (data['reportsFolder']) { // data not null
          SubscriptionFolder.validateJSON(data['reportsFolder']);
        }
        // validate the optional field `exportsFolder`
        if (data['exportsFolder']) { // data not null
          SubscriptionFolder.validateJSON(data['exportsFolder']);
        }

        return true;
    }


}



/**
 * @member {String} id
 */
SubscriptionVM.prototype['id'] = undefined;

/**
 * @member {String} name
 */
SubscriptionVM.prototype['name'] = undefined;

/**
 * @member {String} locale
 */
SubscriptionVM.prototype['locale'] = undefined;

/**
 * @member {module:models/SubscriptionPeriodVM} current
 */
SubscriptionVM.prototype['current'] = undefined;

/**
 * @member {Array.<module:models/SubscriptionPeriodVM>} old
 */
SubscriptionVM.prototype['old'] = undefined;

/**
 * @member {module:models/SubscriptionFolder} templatesFolder
 */
SubscriptionVM.prototype['templatesFolder'] = undefined;

/**
 * @member {module:models/SubscriptionFolder} reportsFolder
 */
SubscriptionVM.prototype['reportsFolder'] = undefined;

/**
 * @member {module:models/SubscriptionFolder} exportsFolder
 */
SubscriptionVM.prototype['exportsFolder'] = undefined;






export default SubscriptionVM;

