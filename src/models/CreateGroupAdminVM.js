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
import CreateGroupVM from './CreateGroupVM';

/**
 * The CreateGroupAdminVM model module.
 * @module models/CreateGroupAdminVM
 * @version v1
 */
class CreateGroupAdminVM {
    /**
     * Constructs a new <code>CreateGroupAdminVM</code>.
     * @alias module:models/CreateGroupAdminVM
     * @implements module:models/CreateGroupVM
     * @param name {String} 
     */
    constructor(name) { 
        CreateGroupVM.initialize(this, name);
        CreateGroupAdminVM.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>CreateGroupAdminVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CreateGroupAdminVM} obj Optional instance to populate.
     * @return {module:models/CreateGroupAdminVM} The populated <code>CreateGroupAdminVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateGroupAdminVM();
            CreateGroupVM.constructFromObject(data, obj);

            if (data.hasOwnProperty('ownerId')) {
                obj['ownerId'] = ApiClient.convertToType(data['ownerId'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('subscriptionId')) {
                obj['subscriptionId'] = ApiClient.convertToType(data['subscriptionId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} ownerId
 */
CreateGroupAdminVM.prototype['ownerId'] = undefined;

/**
 * @member {String} name
 */
CreateGroupAdminVM.prototype['name'] = undefined;

/**
 * @member {String} subscriptionId
 */
CreateGroupAdminVM.prototype['subscriptionId'] = undefined;


// Implement CreateGroupVM interface:
/**
 * @member {String} name
 */
CreateGroupVM.prototype['name'] = undefined;
/**
 * @member {String} subscriptionId
 */
CreateGroupVM.prototype['subscriptionId'] = undefined;




export default CreateGroupAdminVM;

