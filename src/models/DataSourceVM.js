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
 * The DataSourceVM model module.
 * @module models/DataSourceVM
 * @version v1
 */
class DataSourceVM {
    /**
     * Constructs a new <code>DataSourceVM</code>.
     * @alias module:models/DataSourceVM
     */
    constructor() { 
        
        DataSourceVM.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DataSourceVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/DataSourceVM} obj Optional instance to populate.
     * @return {module:models/DataSourceVM} The populated <code>DataSourceVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DataSourceVM();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('connectionType')) {
                obj['connectionType'] = ApiClient.convertToType(data['connectionType'], 'String');
            }
            if (data.hasOwnProperty('connectionString')) {
                obj['connectionString'] = ApiClient.convertToType(data['connectionString'], 'String');
            }
            if (data.hasOwnProperty('dataStructure')) {
                obj['dataStructure'] = ApiClient.convertToType(data['dataStructure'], 'String');
            }
            if (data.hasOwnProperty('subscriptionId')) {
                obj['subscriptionId'] = ApiClient.convertToType(data['subscriptionId'], 'String');
            }
            if (data.hasOwnProperty('editedTime')) {
                obj['editedTime'] = ApiClient.convertToType(data['editedTime'], 'Date');
            }
            if (data.hasOwnProperty('editorUserId')) {
                obj['editorUserId'] = ApiClient.convertToType(data['editorUserId'], 'String');
            }
            if (data.hasOwnProperty('createdTime')) {
                obj['createdTime'] = ApiClient.convertToType(data['createdTime'], 'Date');
            }
            if (data.hasOwnProperty('creatorUserId')) {
                obj['creatorUserId'] = ApiClient.convertToType(data['creatorUserId'], 'String');
            }
            if (data.hasOwnProperty('isConnected')) {
                obj['isConnected'] = ApiClient.convertToType(data['isConnected'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
DataSourceVM.prototype['id'] = undefined;

/**
 * @member {String} name
 */
DataSourceVM.prototype['name'] = undefined;

/**
 * @member {module:models/DataSourceVM.ConnectionTypeEnum} connectionType
 */
DataSourceVM.prototype['connectionType'] = undefined;

/**
 * @member {String} connectionString
 */
DataSourceVM.prototype['connectionString'] = undefined;

/**
 * @member {String} dataStructure
 */
DataSourceVM.prototype['dataStructure'] = undefined;

/**
 * @member {String} subscriptionId
 */
DataSourceVM.prototype['subscriptionId'] = undefined;

/**
 * @member {Date} editedTime
 */
DataSourceVM.prototype['editedTime'] = undefined;

/**
 * @member {String} editorUserId
 */
DataSourceVM.prototype['editorUserId'] = undefined;

/**
 * @member {Date} createdTime
 */
DataSourceVM.prototype['createdTime'] = undefined;

/**
 * @member {String} creatorUserId
 */
DataSourceVM.prototype['creatorUserId'] = undefined;

/**
 * @member {Boolean} isConnected
 */
DataSourceVM.prototype['isConnected'] = undefined;





/**
 * Allowed values for the <code>connectionType</code> property.
 * @enum {String}
 * @readonly
 */
DataSourceVM['ConnectionTypeEnum'] = {

    /**
     * value: "JSON"
     * @const
     */
    "JSON": "JSON",

    /**
     * value: "MSSQL"
     * @const
     */
    "MSSQL": "MSSQL",

    /**
     * value: "CSV"
     * @const
     */
    "CSV": "CSV",

    /**
     * value: "XML"
     * @const
     */
    "XML": "XML",

    /**
     * value: "MySQL"
     * @const
     */
    "MySQL": "MySQL",

    /**
     * value: "Postgres"
     * @const
     */
    "Postgres": "Postgres"
};



export default DataSourceVM;
