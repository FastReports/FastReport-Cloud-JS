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
import DataSourceCreate from './DataSourceCreate';
import DataSourceCreateDataSourceGetDataSourceUpdateDataSourceDeleteDataSourceExecuteDataSourceAdministratePermission from './DataSourceCreateDataSourceGetDataSourceUpdateDataSourceDeleteDataSourceExecuteDataSourceAdministratePermission';
import DataSourceDelete from './DataSourceDelete';
import DataSourceExecute from './DataSourceExecute';
import DataSourceGet from './DataSourceGet';
import DataSourceUpdate from './DataSourceUpdate';

/**
 * The DataSourcePermission model module.
 * @module models/DataSourcePermission
 * @version v1
 */
class DataSourcePermission {
    /**
     * Constructs a new <code>DataSourcePermission</code>.
     * @alias module:models/DataSourcePermission
     * @extends module:models/DataSourceCreateDataSourceGetDataSourceUpdateDataSourceDeleteDataSourceExecuteDataSourceAdministratePermission
     * @implements module:models/DataSourceCreateDataSourceGetDataSourceUpdateDataSourceDeleteDataSourceExecuteDataSourceAdministratePermission
     */
    constructor() { 
        DataSourceCreateDataSourceGetDataSourceUpdateDataSourceDeleteDataSourceExecuteDataSourceAdministratePermission.initialize(this);
        DataSourcePermission.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DataSourcePermission</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/DataSourcePermission} obj Optional instance to populate.
     * @return {module:models/DataSourcePermission} The populated <code>DataSourcePermission</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DataSourcePermission();
            DataSourceCreateDataSourceGetDataSourceUpdateDataSourceDeleteDataSourceExecuteDataSourceAdministratePermission.constructFromObject(data, obj);
            DataSourceCreateDataSourceGetDataSourceUpdateDataSourceDeleteDataSourceExecuteDataSourceAdministratePermission.constructFromObject(data, obj);

        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DataSourcePermission</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DataSourcePermission</code>.
     */
    static validateJSON(data) {

        return true;
    }


}




// Implement DataSourceCreateDataSourceGetDataSourceUpdateDataSourceDeleteDataSourceExecuteDataSourceAdministratePermission interface:
/**
 * @member {module:models/DataSourceCreate} create
 */
DataSourceCreateDataSourceGetDataSourceUpdateDataSourceDeleteDataSourceExecuteDataSourceAdministratePermission.prototype['create'] = undefined;
/**
 * @member {module:models/DataSourceDelete} delete
 */
DataSourceCreateDataSourceGetDataSourceUpdateDataSourceDeleteDataSourceExecuteDataSourceAdministratePermission.prototype['delete'] = undefined;
/**
 * @member {module:models/DataSourceExecute} execute
 */
DataSourceCreateDataSourceGetDataSourceUpdateDataSourceDeleteDataSourceExecuteDataSourceAdministratePermission.prototype['execute'] = undefined;
/**
 * @member {module:models/DataSourceGet} get
 */
DataSourceCreateDataSourceGetDataSourceUpdateDataSourceDeleteDataSourceExecuteDataSourceAdministratePermission.prototype['get'] = undefined;
/**
 * @member {module:models/DataSourceUpdate} update
 */
DataSourceCreateDataSourceGetDataSourceUpdateDataSourceDeleteDataSourceExecuteDataSourceAdministratePermission.prototype['update'] = undefined;
/**
 * @member {module:models/DataSourceAdministrate} administrate
 */
DataSourceCreateDataSourceGetDataSourceUpdateDataSourceDeleteDataSourceExecuteDataSourceAdministratePermission.prototype['administrate'] = undefined;




export default DataSourcePermission;

