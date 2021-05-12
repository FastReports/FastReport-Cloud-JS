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
 * The UserProfileUpdateVM model module.
 * @module models/UserProfileUpdateVM
 * @version v1
 */
class UserProfileUpdateVM {
    /**
     * Constructs a new <code>UserProfileUpdateVM</code>.
     * @alias module:models/UserProfileUpdateVM
     */
    constructor() { 
        
        UserProfileUpdateVM.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserProfileUpdateVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/UserProfileUpdateVM} obj Optional instance to populate.
     * @return {module:models/UserProfileUpdateVM} The populated <code>UserProfileUpdateVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserProfileUpdateVM();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('passwordNew')) {
                obj['passwordNew'] = ApiClient.convertToType(data['passwordNew'], 'String');
            }
            if (data.hasOwnProperty('passwordNew2')) {
                obj['passwordNew2'] = ApiClient.convertToType(data['passwordNew2'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
UserProfileUpdateVM.prototype['name'] = undefined;

/**
 * @member {String} username
 */
UserProfileUpdateVM.prototype['username'] = undefined;

/**
 * @member {String} email
 */
UserProfileUpdateVM.prototype['email'] = undefined;

/**
 * @member {String} passwordNew
 */
UserProfileUpdateVM.prototype['passwordNew'] = undefined;

/**
 * @member {String} passwordNew2
 */
UserProfileUpdateVM.prototype['passwordNew2'] = undefined;






export default UserProfileUpdateVM;

