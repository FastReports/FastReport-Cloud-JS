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
import CloudBaseVM from './CloudBaseVM';
import UserVM from './UserVM';

/**
 * The UsersVM model module.
 * @module models/UsersVM
 * @version v1
 */
class UsersVM {
    /**
     * Constructs a new <code>UsersVM</code>.
     * @alias module:models/UsersVM
     * @extends module:models/CloudBaseVM
     * @implements module:models/CloudBaseVM
     * @param t {String} 
     */
    constructor(t) { 
        CloudBaseVM.initialize(this, t);
        UsersVM.initialize(this, t);
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
     * Constructs a <code>UsersVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/UsersVM} obj Optional instance to populate.
     * @return {module:models/UsersVM} The populated <code>UsersVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UsersVM();
            CloudBaseVM.constructFromObject(data, obj);
            CloudBaseVM.constructFromObject(data, obj);

            if (data.hasOwnProperty('users')) {
                obj['users'] = ApiClient.convertToType(data['users'], [UserVM]);
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
     * Validates the JSON data with respect to <code>UsersVM</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UsersVM</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UsersVM.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['users']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['users'])) {
                throw new Error("Expected the field `users` to be an array in the JSON data but got " + data['users']);
            }
            // validate the optional field `users` (array)
            for (const item of data['users']) {
                UserVM.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['$t'] && !(typeof data['$t'] === 'string' || data['$t'] instanceof String)) {
            throw new Error("Expected the field `$t` to be a primitive type in the JSON string but got " + data['$t']);
        }

        return true;
    }


}

UsersVM.RequiredProperties = ["$t"];

/**
 * @member {Array.<module:models/UserVM>} users
 */
UsersVM.prototype['users'] = undefined;

/**
 * @member {Number} count
 */
UsersVM.prototype['count'] = undefined;

/**
 * @member {Number} skip
 */
UsersVM.prototype['skip'] = undefined;

/**
 * @member {Number} take
 */
UsersVM.prototype['take'] = undefined;

/**
 * @member {String} $t
 */
UsersVM.prototype['$t'] = undefined;


// Implement CloudBaseVM interface:
/**
 * @member {String} $t
 */
CloudBaseVM.prototype['$t'] = undefined;




export default UsersVM;

