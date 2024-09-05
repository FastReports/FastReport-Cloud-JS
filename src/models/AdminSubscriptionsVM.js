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
import AdminSubscriptionVM from './AdminSubscriptionVM';
import CloudBaseVM from './CloudBaseVM';

/**
 * The AdminSubscriptionsVM model module.
 * @module models/AdminSubscriptionsVM
 * @version v1
 */
class AdminSubscriptionsVM {
    /**
     * Constructs a new <code>AdminSubscriptionsVM</code>.
     * @alias module:models/AdminSubscriptionsVM
     * @extends module:models/CloudBaseVM
     * @implements module:models/CloudBaseVM
     * @param t {String} 
     */
    constructor(t) { 
        CloudBaseVM.initialize(this, t);
        AdminSubscriptionsVM.initialize(this, t);
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
     * Constructs a <code>AdminSubscriptionsVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/AdminSubscriptionsVM} obj Optional instance to populate.
     * @return {module:models/AdminSubscriptionsVM} The populated <code>AdminSubscriptionsVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AdminSubscriptionsVM();
            CloudBaseVM.constructFromObject(data, obj);
            CloudBaseVM.constructFromObject(data, obj);

            if (data.hasOwnProperty('subscriptions')) {
                obj['subscriptions'] = ApiClient.convertToType(data['subscriptions'], [AdminSubscriptionVM]);
            }
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('skip')) {
                obj['skip'] = ApiClient.convertToType(data['skip'], 'Number');
            }
            if (data.hasOwnProperty('take')) {
                obj['take'] = ApiClient.convertToType(data['take'], 'Number');
            }
            if (data.hasOwnProperty('$t')) {
                obj['$t'] = ApiClient.convertToType(data['$t'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AdminSubscriptionsVM</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AdminSubscriptionsVM</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AdminSubscriptionsVM.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['subscriptions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['subscriptions'])) {
                throw new Error("Expected the field `subscriptions` to be an array in the JSON data but got " + data['subscriptions']);
            }
            // validate the optional field `subscriptions` (array)
            for (const item of data['subscriptions']) {
                AdminSubscriptionVM.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['$t'] && !(typeof data['$t'] === 'string' || data['$t'] instanceof String)) {
            throw new Error("Expected the field `$t` to be a primitive type in the JSON string but got " + data['$t']);
        }

        return true;
    }


}

AdminSubscriptionsVM.RequiredProperties = ["$t"];

/**
 * @member {Array.<module:models/AdminSubscriptionVM>} subscriptions
 */
AdminSubscriptionsVM.prototype['subscriptions'] = undefined;

/**
 * @member {Number} count
 */
AdminSubscriptionsVM.prototype['count'] = undefined;

/**
 * @member {Number} skip
 */
AdminSubscriptionsVM.prototype['skip'] = undefined;

/**
 * @member {Number} take
 */
AdminSubscriptionsVM.prototype['take'] = undefined;

/**
 * @member {String} $t
 */
AdminSubscriptionsVM.prototype['$t'] = undefined;


// Implement CloudBaseVM interface:
/**
 * @member {String} $t
 */
CloudBaseVM.prototype['$t'] = undefined;




export default AdminSubscriptionsVM;

