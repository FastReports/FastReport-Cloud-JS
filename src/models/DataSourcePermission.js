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
 * The DataSourcePermission model module.
 * @module models/DataSourcePermission
 * @version v1
 */
class DataSourcePermission {
    /**
     * Constructs a new <code>DataSourcePermission</code>.
     * @alias module:models/DataSourcePermission
     */
    constructor() { 
        
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

            if (data.hasOwnProperty('create')) {
                obj['create'] = ApiClient.convertToType(data['create'], 'Number');
            }
            if (data.hasOwnProperty('delete')) {
                obj['delete'] = ApiClient.convertToType(data['delete'], 'Number');
            }
            if (data.hasOwnProperty('execute')) {
                obj['execute'] = ApiClient.convertToType(data['execute'], 'Number');
            }
            if (data.hasOwnProperty('get')) {
                obj['get'] = ApiClient.convertToType(data['get'], 'Number');
            }
            if (data.hasOwnProperty('update')) {
                obj['update'] = ApiClient.convertToType(data['update'], 'Number');
            }
            if (data.hasOwnProperty('administrate')) {
                obj['administrate'] = ApiClient.convertToType(data['administrate'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {module:models/DataSourcePermission.CreateEnum} create
 */
DataSourcePermission.prototype['create'] = undefined;

/**
 * @member {module:models/DataSourcePermission.DeleteEnum} delete
 */
DataSourcePermission.prototype['delete'] = undefined;

/**
 * @member {module:models/DataSourcePermission.ExecuteEnum} execute
 */
DataSourcePermission.prototype['execute'] = undefined;

/**
 * @member {module:models/DataSourcePermission.GetEnum} get
 */
DataSourcePermission.prototype['get'] = undefined;

/**
 * @member {module:models/DataSourcePermission.UpdateEnum} update
 */
DataSourcePermission.prototype['update'] = undefined;

/**
 * @member {module:models/DataSourcePermission.AdministrateEnum} administrate
 */
DataSourcePermission.prototype['administrate'] = undefined;





/**
 * Allowed values for the <code>create</code> property.
 * @enum {Number}
 * @readonly
 */
DataSourcePermission['CreateEnum'] = {

    /**
     * value: 0
     * @const
     */
    "0": 0,

    /**
     * value: -1
     * @const
     */
    "-1": -1
};


/**
 * Allowed values for the <code>delete</code> property.
 * @enum {Number}
 * @readonly
 */
DataSourcePermission['DeleteEnum'] = {

    /**
     * value: 0
     * @const
     */
    "0": 0,

    /**
     * value: 1
     * @const
     */
    "1": 1,

    /**
     * value: -1
     * @const
     */
    "-1": -1
};


/**
 * Allowed values for the <code>execute</code> property.
 * @enum {Number}
 * @readonly
 */
DataSourcePermission['ExecuteEnum'] = {

    /**
     * value: 0
     * @const
     */
    "0": 0,

    /**
     * value: -1
     * @const
     */
    "-1": -1
};


/**
 * Allowed values for the <code>get</code> property.
 * @enum {Number}
 * @readonly
 */
DataSourcePermission['GetEnum'] = {

    /**
     * value: 0
     * @const
     */
    "0": 0,

    /**
     * value: 1
     * @const
     */
    "1": 1,

    /**
     * value: 2
     * @const
     */
    "2": 2,

    /**
     * value: -1
     * @const
     */
    "-1": -1
};


/**
 * Allowed values for the <code>update</code> property.
 * @enum {Number}
 * @readonly
 */
DataSourcePermission['UpdateEnum'] = {

    /**
     * value: 0
     * @const
     */
    "0": 0,

    /**
     * value: 1
     * @const
     */
    "1": 1,

    /**
     * value: 2
     * @const
     */
    "2": 2,

    /**
     * value: 4
     * @const
     */
    "4": 4,

    /**
     * value: 8
     * @const
     */
    "8": 8,

    /**
     * value: -1
     * @const
     */
    "-1": -1
};


/**
 * Allowed values for the <code>administrate</code> property.
 * @enum {Number}
 * @readonly
 */
DataSourcePermission['AdministrateEnum'] = {

    /**
     * value: 0
     * @const
     */
    "0": 0,

    /**
     * value: 1
     * @const
     */
    "1": 1,

    /**
     * value: 2
     * @const
     */
    "2": 2,

    /**
     * value: 4
     * @const
     */
    "4": 4,

    /**
     * value: 8
     * @const
     */
    "8": 8,

    /**
     * value: -1
     * @const
     */
    "-1": -1
};



export default DataSourcePermission;
