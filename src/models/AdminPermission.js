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
import AdminAdministrate from './AdminAdministrate';
import AdminCreate from './AdminCreate';
import AdminCreateAdminGetAdminUpdateAdminDeleteAdminExecuteAdminAdministratePermission from './AdminCreateAdminGetAdminUpdateAdminDeleteAdminExecuteAdminAdministratePermission';
import AdminDelete from './AdminDelete';
import AdminExecute from './AdminExecute';
import AdminGet from './AdminGet';
import AdminUpdate from './AdminUpdate';

/**
 * The AdminPermission model module.
 * @module models/AdminPermission
 * @version v1
 */
class AdminPermission {
    /**
     * Constructs a new <code>AdminPermission</code>.
     * @alias module:models/AdminPermission
     * @implements module:models/AdminCreateAdminGetAdminUpdateAdminDeleteAdminExecuteAdminAdministratePermission
     */
    constructor() { 
        AdminCreateAdminGetAdminUpdateAdminDeleteAdminExecuteAdminAdministratePermission.initialize(this);
        AdminPermission.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AdminPermission</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/AdminPermission} obj Optional instance to populate.
     * @return {module:models/AdminPermission} The populated <code>AdminPermission</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AdminPermission();
            AdminCreateAdminGetAdminUpdateAdminDeleteAdminExecuteAdminAdministratePermission.constructFromObject(data, obj);

            if (data.hasOwnProperty('create')) {
                obj['create'] = AdminCreate.constructFromObject(data['create']);
            }
            if (data.hasOwnProperty('delete')) {
                obj['delete'] = AdminDelete.constructFromObject(data['delete']);
            }
            if (data.hasOwnProperty('execute')) {
                obj['execute'] = AdminExecute.constructFromObject(data['execute']);
            }
            if (data.hasOwnProperty('get')) {
                obj['get'] = AdminGet.constructFromObject(data['get']);
            }
            if (data.hasOwnProperty('update')) {
                obj['update'] = AdminUpdate.constructFromObject(data['update']);
            }
            if (data.hasOwnProperty('administrate')) {
                obj['administrate'] = AdminAdministrate.constructFromObject(data['administrate']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AdminPermission</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AdminPermission</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {module:models/AdminCreate} create
 */
AdminPermission.prototype['create'] = undefined;

/**
 * @member {module:models/AdminDelete} delete
 */
AdminPermission.prototype['delete'] = undefined;

/**
 * @member {module:models/AdminExecute} execute
 */
AdminPermission.prototype['execute'] = undefined;

/**
 * @member {module:models/AdminGet} get
 */
AdminPermission.prototype['get'] = undefined;

/**
 * @member {module:models/AdminUpdate} update
 */
AdminPermission.prototype['update'] = undefined;

/**
 * @member {module:models/AdminAdministrate} administrate
 */
AdminPermission.prototype['administrate'] = undefined;


// Implement AdminCreateAdminGetAdminUpdateAdminDeleteAdminExecuteAdminAdministratePermission interface:
/**
 * @member {module:models/AdminCreate} create
 */
AdminCreateAdminGetAdminUpdateAdminDeleteAdminExecuteAdminAdministratePermission.prototype['create'] = undefined;
/**
 * @member {module:models/AdminDelete} delete
 */
AdminCreateAdminGetAdminUpdateAdminDeleteAdminExecuteAdminAdministratePermission.prototype['delete'] = undefined;
/**
 * @member {module:models/AdminExecute} execute
 */
AdminCreateAdminGetAdminUpdateAdminDeleteAdminExecuteAdminAdministratePermission.prototype['execute'] = undefined;
/**
 * @member {module:models/AdminGet} get
 */
AdminCreateAdminGetAdminUpdateAdminDeleteAdminExecuteAdminAdministratePermission.prototype['get'] = undefined;
/**
 * @member {module:models/AdminUpdate} update
 */
AdminCreateAdminGetAdminUpdateAdminDeleteAdminExecuteAdminAdministratePermission.prototype['update'] = undefined;
/**
 * @member {module:models/AdminAdministrate} administrate
 */
AdminCreateAdminGetAdminUpdateAdminDeleteAdminExecuteAdminAdministratePermission.prototype['administrate'] = undefined;




export default AdminPermission;

