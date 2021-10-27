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
import SubscriptionAdministrate from './SubscriptionAdministrate';
import SubscriptionCreate from './SubscriptionCreate';
import SubscriptionDelete from './SubscriptionDelete';
import SubscriptionExecute from './SubscriptionExecute';
import SubscriptionGet from './SubscriptionGet';
import SubscriptionUpdate from './SubscriptionUpdate';

/**
 * The SubscriptionCreateSubscriptionGetSubscriptionUpdateSubscriptionDeleteSubscriptionExecuteSubscriptionAdministratePermission model module.
 * @module models/SubscriptionCreateSubscriptionGetSubscriptionUpdateSubscriptionDeleteSubscriptionExecuteSubscriptionAdministratePermission
 * @version v1
 */
class SubscriptionCreateSubscriptionGetSubscriptionUpdateSubscriptionDeleteSubscriptionExecuteSubscriptionAdministratePermission {
    /**
     * Constructs a new <code>SubscriptionCreateSubscriptionGetSubscriptionUpdateSubscriptionDeleteSubscriptionExecuteSubscriptionAdministratePermission</code>.
     * @alias module:models/SubscriptionCreateSubscriptionGetSubscriptionUpdateSubscriptionDeleteSubscriptionExecuteSubscriptionAdministratePermission
     */
    constructor() { 
        
        SubscriptionCreateSubscriptionGetSubscriptionUpdateSubscriptionDeleteSubscriptionExecuteSubscriptionAdministratePermission.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SubscriptionCreateSubscriptionGetSubscriptionUpdateSubscriptionDeleteSubscriptionExecuteSubscriptionAdministratePermission</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/SubscriptionCreateSubscriptionGetSubscriptionUpdateSubscriptionDeleteSubscriptionExecuteSubscriptionAdministratePermission} obj Optional instance to populate.
     * @return {module:models/SubscriptionCreateSubscriptionGetSubscriptionUpdateSubscriptionDeleteSubscriptionExecuteSubscriptionAdministratePermission} The populated <code>SubscriptionCreateSubscriptionGetSubscriptionUpdateSubscriptionDeleteSubscriptionExecuteSubscriptionAdministratePermission</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubscriptionCreateSubscriptionGetSubscriptionUpdateSubscriptionDeleteSubscriptionExecuteSubscriptionAdministratePermission();

            if (data.hasOwnProperty('create')) {
                obj['create'] = SubscriptionCreate.constructFromObject(data['create']);
            }
            if (data.hasOwnProperty('delete')) {
                obj['delete'] = SubscriptionDelete.constructFromObject(data['delete']);
            }
            if (data.hasOwnProperty('execute')) {
                obj['execute'] = SubscriptionExecute.constructFromObject(data['execute']);
            }
            if (data.hasOwnProperty('get')) {
                obj['get'] = SubscriptionGet.constructFromObject(data['get']);
            }
            if (data.hasOwnProperty('update')) {
                obj['update'] = SubscriptionUpdate.constructFromObject(data['update']);
            }
            if (data.hasOwnProperty('administrate')) {
                obj['administrate'] = SubscriptionAdministrate.constructFromObject(data['administrate']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:models/SubscriptionCreate} create
 */
SubscriptionCreateSubscriptionGetSubscriptionUpdateSubscriptionDeleteSubscriptionExecuteSubscriptionAdministratePermission.prototype['create'] = undefined;

/**
 * @member {module:models/SubscriptionDelete} delete
 */
SubscriptionCreateSubscriptionGetSubscriptionUpdateSubscriptionDeleteSubscriptionExecuteSubscriptionAdministratePermission.prototype['delete'] = undefined;

/**
 * @member {module:models/SubscriptionExecute} execute
 */
SubscriptionCreateSubscriptionGetSubscriptionUpdateSubscriptionDeleteSubscriptionExecuteSubscriptionAdministratePermission.prototype['execute'] = undefined;

/**
 * @member {module:models/SubscriptionGet} get
 */
SubscriptionCreateSubscriptionGetSubscriptionUpdateSubscriptionDeleteSubscriptionExecuteSubscriptionAdministratePermission.prototype['get'] = undefined;

/**
 * @member {module:models/SubscriptionUpdate} update
 */
SubscriptionCreateSubscriptionGetSubscriptionUpdateSubscriptionDeleteSubscriptionExecuteSubscriptionAdministratePermission.prototype['update'] = undefined;

/**
 * @member {module:models/SubscriptionAdministrate} administrate
 */
SubscriptionCreateSubscriptionGetSubscriptionUpdateSubscriptionDeleteSubscriptionExecuteSubscriptionAdministratePermission.prototype['administrate'] = undefined;






export default SubscriptionCreateSubscriptionGetSubscriptionUpdateSubscriptionDeleteSubscriptionExecuteSubscriptionAdministratePermission;
