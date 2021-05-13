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
 * The CreateDataSourceVM model module.
 * @module models/CreateDataSourceVM
 * @version v1
 */
class CreateDataSourceVM {
    /**
     * Constructs a new <code>CreateDataSourceVM</code>.
     * @alias module:models/CreateDataSourceVM
     */
    constructor() { 
        
        CreateDataSourceVM.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateDataSourceVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CreateDataSourceVM} obj Optional instance to populate.
     * @return {module:models/CreateDataSourceVM} The populated <code>CreateDataSourceVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateDataSourceVM();

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
                obj['connectionType'] = ApiClient.convertToType(data['connectionType'], 'String');
            }
        }
        return obj;
    }


}

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
 * @member {module:models/CreateDataSourceVM.ConnectionTypeEnum} connectionType
 */
CreateDataSourceVM.prototype['connectionType'] = undefined;





/**
 * Allowed values for the <code>connectionType</code> property.
 * @enum {String}
 * @readonly
 */
CreateDataSourceVM['ConnectionTypeEnum'] = {

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



export default CreateDataSourceVM;
