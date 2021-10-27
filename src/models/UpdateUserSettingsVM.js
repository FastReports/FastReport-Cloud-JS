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
import ProfileVisibility from './ProfileVisibility';

/**
 * The UpdateUserSettingsVM model module.
 * @module models/UpdateUserSettingsVM
 * @version v1
 */
class UpdateUserSettingsVM {
    /**
     * Constructs a new <code>UpdateUserSettingsVM</code>.
     * @alias module:models/UpdateUserSettingsVM
     */
    constructor() { 
        
        UpdateUserSettingsVM.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateUserSettingsVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/UpdateUserSettingsVM} obj Optional instance to populate.
     * @return {module:models/UpdateUserSettingsVM} The populated <code>UpdateUserSettingsVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateUserSettingsVM();

            if (data.hasOwnProperty('profileVisibility')) {
                obj['profileVisibility'] = ProfileVisibility.constructFromObject(data['profileVisibility']);
            }
            if (data.hasOwnProperty('defaultSubscription')) {
                obj['defaultSubscription'] = ApiClient.convertToType(data['defaultSubscription'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:models/ProfileVisibility} profileVisibility
 */
UpdateUserSettingsVM.prototype['profileVisibility'] = undefined;

/**
 * @member {String} defaultSubscription
 */
UpdateUserSettingsVM.prototype['defaultSubscription'] = undefined;






export default UpdateUserSettingsVM;

