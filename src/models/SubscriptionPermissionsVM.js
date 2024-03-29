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
import SubscriptionPermissions from './SubscriptionPermissions';

/**
 * The SubscriptionPermissionsVM model module.
 * @module models/SubscriptionPermissionsVM
 * @version v1
 */
class SubscriptionPermissionsVM {
    /**
     * Constructs a new <code>SubscriptionPermissionsVM</code>.
     * @alias module:models/SubscriptionPermissionsVM
     */
    constructor() { 
        
        SubscriptionPermissionsVM.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SubscriptionPermissionsVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/SubscriptionPermissionsVM} obj Optional instance to populate.
     * @return {module:models/SubscriptionPermissionsVM} The populated <code>SubscriptionPermissionsVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubscriptionPermissionsVM();

            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = SubscriptionPermissions.constructFromObject(data['permissions']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SubscriptionPermissionsVM</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SubscriptionPermissionsVM</code>.
     */
    static validateJSON(data) {
        // validate the optional field `permissions`
        if (data['permissions']) { // data not null
          SubscriptionPermissions.validateJSON(data['permissions']);
        }

        return true;
    }


}



/**
 * @member {module:models/SubscriptionPermissions} permissions
 */
SubscriptionPermissionsVM.prototype['permissions'] = undefined;






export default SubscriptionPermissionsVM;

