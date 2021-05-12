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
import DataSourcePermissions from './DataSourcePermissions';
import FilePermissions from './FilePermissions';
import GroupPermissions from './GroupPermissions';

/**
 * The DefaultPermissionsVM model module.
 * @module models/DefaultPermissionsVM
 * @version v1
 */
class DefaultPermissionsVM {
    /**
     * Constructs a new <code>DefaultPermissionsVM</code>.
     * @alias module:models/DefaultPermissionsVM
     */
    constructor() { 
        
        DefaultPermissionsVM.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DefaultPermissionsVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/DefaultPermissionsVM} obj Optional instance to populate.
     * @return {module:models/DefaultPermissionsVM} The populated <code>DefaultPermissionsVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DefaultPermissionsVM();

            if (data.hasOwnProperty('filePermissions')) {
                obj['filePermissions'] = FilePermissions.constructFromObject(data['filePermissions']);
            }
            if (data.hasOwnProperty('dataSourcePermissions')) {
                obj['dataSourcePermissions'] = DataSourcePermissions.constructFromObject(data['dataSourcePermissions']);
            }
            if (data.hasOwnProperty('groupPermissions')) {
                obj['groupPermissions'] = GroupPermissions.constructFromObject(data['groupPermissions']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:models/FilePermissions} filePermissions
 */
DefaultPermissionsVM.prototype['filePermissions'] = undefined;

/**
 * @member {module:models/DataSourcePermissions} dataSourcePermissions
 */
DefaultPermissionsVM.prototype['dataSourcePermissions'] = undefined;

/**
 * @member {module:models/GroupPermissions} groupPermissions
 */
DefaultPermissionsVM.prototype['groupPermissions'] = undefined;






export default DefaultPermissionsVM;

