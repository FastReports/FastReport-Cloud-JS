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
import DataSourceAdministrate from './DataSourceAdministrate';
import DataSourcePermissions from './DataSourcePermissions';

/**
 * The UpdateDataSourcePermissionsVM model module.
 * @module models/UpdateDataSourcePermissionsVM
 * @version v1
 */
class UpdateDataSourcePermissionsVM {
    /**
     * Constructs a new <code>UpdateDataSourcePermissionsVM</code>.
     * @alias module:models/UpdateDataSourcePermissionsVM
     * @param newPermissions {module:models/DataSourcePermissions} 
     * @param administrate {module:models/DataSourceAdministrate} 
     */
    constructor(newPermissions, administrate) { 
        
        UpdateDataSourcePermissionsVM.initialize(this, newPermissions, administrate);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, newPermissions, administrate) { 
        obj['newPermissions'] = newPermissions;
        obj['administrate'] = administrate;
    }

    /**
     * Constructs a <code>UpdateDataSourcePermissionsVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/UpdateDataSourcePermissionsVM} obj Optional instance to populate.
     * @return {module:models/UpdateDataSourcePermissionsVM} The populated <code>UpdateDataSourcePermissionsVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateDataSourcePermissionsVM();

            if (data.hasOwnProperty('newPermissions')) {
                obj['newPermissions'] = DataSourcePermissions.constructFromObject(data['newPermissions']);
            }
            if (data.hasOwnProperty('administrate')) {
                obj['administrate'] = DataSourceAdministrate.constructFromObject(data['administrate']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:models/DataSourcePermissions} newPermissions
 */
UpdateDataSourcePermissionsVM.prototype['newPermissions'] = undefined;

/**
 * @member {module:models/DataSourceAdministrate} administrate
 */
UpdateDataSourcePermissionsVM.prototype['administrate'] = undefined;






export default UpdateDataSourcePermissionsVM;

