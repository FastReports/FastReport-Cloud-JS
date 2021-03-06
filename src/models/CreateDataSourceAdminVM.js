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
import CreateDataSourceVM from './CreateDataSourceVM';
import DataSourceConnectionType from './DataSourceConnectionType';

/**
 * The CreateDataSourceAdminVM model module.
 * @module models/CreateDataSourceAdminVM
 * @version v1
 */
class CreateDataSourceAdminVM {
    /**
     * Constructs a new <code>CreateDataSourceAdminVM</code>.
     * @alias module:models/CreateDataSourceAdminVM
     * @implements module:models/CreateDataSourceVM
     * @param connectionString {String} 
     * @param subscriptionId {String} 
     */
    constructor(connectionString, subscriptionId) { 
        CreateDataSourceVM.initialize(this, connectionString, subscriptionId);
        CreateDataSourceAdminVM.initialize(this, connectionString, subscriptionId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, connectionString, subscriptionId) { 
        obj['ownerId'] = ownerId;
        obj['connectionString'] = connectionString;
        obj['subscriptionId'] = subscriptionId;
    }

    /**
     * Constructs a <code>CreateDataSourceAdminVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CreateDataSourceAdminVM} obj Optional instance to populate.
     * @return {module:models/CreateDataSourceAdminVM} The populated <code>CreateDataSourceAdminVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateDataSourceAdminVM();
            CreateDataSourceVM.constructFromObject(data, obj);

            if (data.hasOwnProperty('ownerId')) {
                obj['ownerId'] = ApiClient.convertToType(data['ownerId'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('connectionString')) {
                obj['connectionString'] = ApiClient.convertToType(data['connectionString'], 'String');
            }
            if (data.hasOwnProperty('subscriptionId')) {
                obj['subscriptionId'] = ApiClient.convertToType(data['subscriptionId'], 'String');
            }
            if (data.hasOwnProperty('connectionType')) {
                obj['connectionType'] = DataSourceConnectionType.constructFromObject(data['connectionType']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} ownerId
 */
CreateDataSourceAdminVM.prototype['ownerId'] = undefined;

/**
 * @member {String} name
 */
CreateDataSourceAdminVM.prototype['name'] = undefined;

/**
 * @member {String} connectionString
 */
CreateDataSourceAdminVM.prototype['connectionString'] = undefined;

/**
 * @member {String} subscriptionId
 */
CreateDataSourceAdminVM.prototype['subscriptionId'] = undefined;

/**
 * @member {module:models/DataSourceConnectionType} connectionType
 */
CreateDataSourceAdminVM.prototype['connectionType'] = undefined;


// Implement CreateDataSourceVM interface:
/**
 * @member {String} name
 */
CreateDataSourceVM.prototype['name'] = undefined;
/**
 * @member {String} connectionString
 */
CreateDataSourceVM.prototype['connectionString'] = undefined;
/**
 * @member {String} subscriptionId
 */
CreateDataSourceVM.prototype['subscriptionId'] = undefined;
/**
 * @member {module:models/DataSourceConnectionType} connectionType
 */
CreateDataSourceVM.prototype['connectionType'] = undefined;




export default CreateDataSourceAdminVM;

