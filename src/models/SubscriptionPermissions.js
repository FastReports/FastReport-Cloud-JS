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
import SubscriptionPermission from './SubscriptionPermission';
import SubscriptionPermissionSubscriptionCreateSubscriptionGetSubscriptionUpdateSubscriptionDeleteSubscriptionExecuteSubscriptionAdministratePermissions from './SubscriptionPermissionSubscriptionCreateSubscriptionGetSubscriptionUpdateSubscriptionDeleteSubscriptionExecuteSubscriptionAdministratePermissions';

/**
 * The SubscriptionPermissions model module.
 * @module models/SubscriptionPermissions
 * @version v1
 */
class SubscriptionPermissions {
    /**
     * Constructs a new <code>SubscriptionPermissions</code>.
     * @alias module:models/SubscriptionPermissions
     * @implements module:models/SubscriptionPermissionSubscriptionCreateSubscriptionGetSubscriptionUpdateSubscriptionDeleteSubscriptionExecuteSubscriptionAdministratePermissions
     */
    constructor() { 
        SubscriptionPermissionSubscriptionCreateSubscriptionGetSubscriptionUpdateSubscriptionDeleteSubscriptionExecuteSubscriptionAdministratePermissions.initialize(this);
        SubscriptionPermissions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SubscriptionPermissions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/SubscriptionPermissions} obj Optional instance to populate.
     * @return {module:models/SubscriptionPermissions} The populated <code>SubscriptionPermissions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubscriptionPermissions();
            SubscriptionPermissionSubscriptionCreateSubscriptionGetSubscriptionUpdateSubscriptionDeleteSubscriptionExecuteSubscriptionAdministratePermissions.constructFromObject(data, obj);

            if (data.hasOwnProperty('ownerId')) {
                obj['ownerId'] = ApiClient.convertToType(data['ownerId'], 'String');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = SubscriptionPermission.constructFromObject(data['owner']);
            }
            if (data.hasOwnProperty('groups')) {
                obj['groups'] = ApiClient.convertToType(data['groups'], {'String': SubscriptionPermission});
            }
            if (data.hasOwnProperty('other')) {
                obj['other'] = SubscriptionPermission.constructFromObject(data['other']);
            }
            if (data.hasOwnProperty('anon')) {
                obj['anon'] = SubscriptionPermission.constructFromObject(data['anon']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} ownerId
 */
SubscriptionPermissions.prototype['ownerId'] = undefined;

/**
 * @member {module:models/SubscriptionPermission} owner
 */
SubscriptionPermissions.prototype['owner'] = undefined;

/**
 * @member {Object.<String, module:models/SubscriptionPermission>} groups
 */
SubscriptionPermissions.prototype['groups'] = undefined;

/**
 * @member {module:models/SubscriptionPermission} other
 */
SubscriptionPermissions.prototype['other'] = undefined;

/**
 * @member {module:models/SubscriptionPermission} anon
 */
SubscriptionPermissions.prototype['anon'] = undefined;


// Implement SubscriptionPermissionSubscriptionCreateSubscriptionGetSubscriptionUpdateSubscriptionDeleteSubscriptionExecuteSubscriptionAdministratePermissions interface:
/**
 * @member {String} ownerId
 */
SubscriptionPermissionSubscriptionCreateSubscriptionGetSubscriptionUpdateSubscriptionDeleteSubscriptionExecuteSubscriptionAdministratePermissions.prototype['ownerId'] = undefined;
/**
 * @member {module:models/SubscriptionPermission} owner
 */
SubscriptionPermissionSubscriptionCreateSubscriptionGetSubscriptionUpdateSubscriptionDeleteSubscriptionExecuteSubscriptionAdministratePermissions.prototype['owner'] = undefined;
/**
 * @member {Object.<String, module:models/SubscriptionPermission>} groups
 */
SubscriptionPermissionSubscriptionCreateSubscriptionGetSubscriptionUpdateSubscriptionDeleteSubscriptionExecuteSubscriptionAdministratePermissions.prototype['groups'] = undefined;
/**
 * @member {module:models/SubscriptionPermission} other
 */
SubscriptionPermissionSubscriptionCreateSubscriptionGetSubscriptionUpdateSubscriptionDeleteSubscriptionExecuteSubscriptionAdministratePermissions.prototype['other'] = undefined;
/**
 * @member {module:models/SubscriptionPermission} anon
 */
SubscriptionPermissionSubscriptionCreateSubscriptionGetSubscriptionUpdateSubscriptionDeleteSubscriptionExecuteSubscriptionAdministratePermissions.prototype['anon'] = undefined;




export default SubscriptionPermissions;

