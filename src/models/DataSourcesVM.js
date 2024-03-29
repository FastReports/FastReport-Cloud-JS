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
import DataSourceVM from './DataSourceVM';

/**
 * The DataSourcesVM model module.
 * @module models/DataSourcesVM
 * @version v1
 */
class DataSourcesVM {
    /**
     * Constructs a new <code>DataSourcesVM</code>.
     * @alias module:models/DataSourcesVM
     */
    constructor() { 
        
        DataSourcesVM.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DataSourcesVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/DataSourcesVM} obj Optional instance to populate.
     * @return {module:models/DataSourcesVM} The populated <code>DataSourcesVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DataSourcesVM();

            if (data.hasOwnProperty('dataSources')) {
                obj['dataSources'] = ApiClient.convertToType(data['dataSources'], [DataSourceVM]);
            }
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('skip')) {
                obj['skip'] = ApiClient.convertToType(data['skip'], 'Number');
            }
            if (data.hasOwnProperty('take')) {
                obj['take'] = ApiClient.convertToType(data['take'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DataSourcesVM</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DataSourcesVM</code>.
     */
    static validateJSON(data) {
        if (data['dataSources']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['dataSources'])) {
                throw new Error("Expected the field `dataSources` to be an array in the JSON data but got " + data['dataSources']);
            }
            // validate the optional field `dataSources` (array)
            for (const item of data['dataSources']) {
                DataSourceVM.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:models/DataSourceVM>} dataSources
 */
DataSourcesVM.prototype['dataSources'] = undefined;

/**
 * @member {Number} count
 */
DataSourcesVM.prototype['count'] = undefined;

/**
 * @member {Number} skip
 */
DataSourcesVM.prototype['skip'] = undefined;

/**
 * @member {Number} take
 */
DataSourcesVM.prototype['take'] = undefined;






export default DataSourcesVM;

