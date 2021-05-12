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
import GroupUserVM from './GroupUserVM';

/**
 * The GroupUsersVM model module.
 * @module models/GroupUsersVM
 * @version v1
 */
class GroupUsersVM {
    /**
     * Constructs a new <code>GroupUsersVM</code>.
     * @alias module:models/GroupUsersVM
     */
    constructor() { 
        
        GroupUsersVM.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GroupUsersVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/GroupUsersVM} obj Optional instance to populate.
     * @return {module:models/GroupUsersVM} The populated <code>GroupUsersVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GroupUsersVM();

            if (data.hasOwnProperty('users')) {
                obj['users'] = ApiClient.convertToType(data['users'], [GroupUserVM]);
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
 * @member {Array.<module:models/GroupUserVM>} users
 */
GroupUsersVM.prototype['users'] = undefined;

/**
 * @member {Number} count
 */
GroupUsersVM.prototype['count'] = undefined;

/**
 * @member {Number} take
 */
GroupUsersVM.prototype['take'] = undefined;

/**
 * @member {Number} skip
 */
GroupUsersVM.prototype['skip'] = undefined;






export default GroupUsersVM;

