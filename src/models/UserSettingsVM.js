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
 * The UserSettingsVM model module.
 * @module models/UserSettingsVM
 * @version v1
 */
class UserSettingsVM {
    /**
     * Constructs a new <code>UserSettingsVM</code>.
     * @alias module:models/UserSettingsVM
     */
    constructor() { 
        
        UserSettingsVM.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserSettingsVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/UserSettingsVM} obj Optional instance to populate.
     * @return {module:models/UserSettingsVM} The populated <code>UserSettingsVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserSettingsVM();

            if (data.hasOwnProperty('profileVisibility')) {
                obj['profileVisibility'] = ProfileVisibility.constructFromObject(data['profileVisibility']);
            }
            if (data.hasOwnProperty('defaultSubscription')) {
                obj['defaultSubscription'] = ApiClient.convertToType(data['defaultSubscription'], 'String');
            }
            if (data.hasOwnProperty('showHiddenFilesAndFolders')) {
                obj['showHiddenFilesAndFolders'] = ApiClient.convertToType(data['showHiddenFilesAndFolders'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {module:models/ProfileVisibility} profileVisibility
 */
UserSettingsVM.prototype['profileVisibility'] = undefined;

/**
 * @member {String} defaultSubscription
 */
UserSettingsVM.prototype['defaultSubscription'] = undefined;

/**
 * @member {Boolean} showHiddenFilesAndFolders
 */
UserSettingsVM.prototype['showHiddenFilesAndFolders'] = undefined;






export default UserSettingsVM;

