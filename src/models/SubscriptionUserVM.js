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
import GroupVM from './GroupVM';

/**
 * The SubscriptionUserVM model module.
 * @module models/SubscriptionUserVM
 * @version v1
 */
class SubscriptionUserVM {
    /**
     * Constructs a new <code>SubscriptionUserVM</code>.
     * @alias module:models/SubscriptionUserVM
     */
    constructor() { 
        
        SubscriptionUserVM.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SubscriptionUserVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/SubscriptionUserVM} obj Optional instance to populate.
     * @return {module:models/SubscriptionUserVM} The populated <code>SubscriptionUserVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubscriptionUserVM();

            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
            }
            if (data.hasOwnProperty('groups')) {
                obj['groups'] = ApiClient.convertToType(data['groups'], [GroupVM]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} userId
 */
SubscriptionUserVM.prototype['userId'] = undefined;

/**
 * @member {Array.<module:models/GroupVM>} groups
 */
SubscriptionUserVM.prototype['groups'] = undefined;






export default SubscriptionUserVM;

