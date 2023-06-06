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
import DefaultPermissionsVM from './DefaultPermissionsVM';
import SubscriptionFolder from './SubscriptionFolder';
import SubscriptionPeriodVM from './SubscriptionPeriodVM';
import SubscriptionVM from './SubscriptionVM';

/**
 * The AdminSubscriptionVM model module.
 * @module models/AdminSubscriptionVM
 * @version v1
 */
class AdminSubscriptionVM {
    /**
     * Constructs a new <code>AdminSubscriptionVM</code>.
     * @alias module:models/AdminSubscriptionVM
     * @extends module:models/SubscriptionVM
     * @implements module:models/SubscriptionVM
     */
    constructor() { 
        SubscriptionVM.initialize(this);
        AdminSubscriptionVM.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AdminSubscriptionVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/AdminSubscriptionVM} obj Optional instance to populate.
     * @return {module:models/AdminSubscriptionVM} The populated <code>AdminSubscriptionVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AdminSubscriptionVM();
            SubscriptionVM.constructFromObject(data, obj);
            SubscriptionVM.constructFromObject(data, obj);

            if (data.hasOwnProperty('defaultPermissions')) {
                obj['defaultPermissions'] = DefaultPermissionsVM.constructFromObject(data['defaultPermissions']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AdminSubscriptionVM</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AdminSubscriptionVM</code>.
     */
    static validateJSON(data) {
        // validate the optional field `defaultPermissions`
        if (data['defaultPermissions']) { // data not null
          DefaultPermissionsVM.validateJSON(data['defaultPermissions']);
        }

        return true;
    }


}



/**
 * @member {module:models/DefaultPermissionsVM} defaultPermissions
 */
AdminSubscriptionVM.prototype['defaultPermissions'] = undefined;


// Implement SubscriptionVM interface:
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




export default AdminSubscriptionVM;

