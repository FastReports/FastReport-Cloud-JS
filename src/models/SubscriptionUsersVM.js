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
import SubscriptionUserVM from './SubscriptionUserVM';

/**
 * The SubscriptionUsersVM model module.
 * @module models/SubscriptionUsersVM
 * @version v1
 */
class SubscriptionUsersVM {
    /**
     * Constructs a new <code>SubscriptionUsersVM</code>.
     * @alias module:models/SubscriptionUsersVM
     */
    constructor() { 
        
        SubscriptionUsersVM.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SubscriptionUsersVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/SubscriptionUsersVM} obj Optional instance to populate.
     * @return {module:models/SubscriptionUsersVM} The populated <code>SubscriptionUsersVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubscriptionUsersVM();

            if (data.hasOwnProperty('users')) {
                obj['users'] = ApiClient.convertToType(data['users'], [SubscriptionUserVM]);
            }
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('take')) {
                obj['take'] = ApiClient.convertToType(data['take'], 'Number');
            }
            if (data.hasOwnProperty('skip')) {
                obj['skip'] = ApiClient.convertToType(data['skip'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:models/SubscriptionUserVM>} users
 */
SubscriptionUsersVM.prototype['users'] = undefined;

/**
 * @member {Number} count
 */
SubscriptionUsersVM.prototype['count'] = undefined;

/**
 * @member {Number} take
 */
SubscriptionUsersVM.prototype['take'] = undefined;

/**
 * @member {Number} skip
 */
SubscriptionUsersVM.prototype['skip'] = undefined;






export default SubscriptionUsersVM;

