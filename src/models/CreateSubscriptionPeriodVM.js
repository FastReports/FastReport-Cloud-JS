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
 * The CreateSubscriptionPeriodVM model module.
 * @module models/CreateSubscriptionPeriodVM
 * @version v1
 */
class CreateSubscriptionPeriodVM {
    /**
     * Constructs a new <code>CreateSubscriptionPeriodVM</code>.
     * @alias module:models/CreateSubscriptionPeriodVM
     */
    constructor() { 
        
        CreateSubscriptionPeriodVM.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateSubscriptionPeriodVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CreateSubscriptionPeriodVM} obj Optional instance to populate.
     * @return {module:models/CreateSubscriptionPeriodVM} The populated <code>CreateSubscriptionPeriodVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateSubscriptionPeriodVM();

            if (data.hasOwnProperty('planId')) {
                obj['planId'] = ApiClient.convertToType(data['planId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} planId
 */
CreateSubscriptionPeriodVM.prototype['planId'] = undefined;






export default CreateSubscriptionPeriodVM;

