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
* Enum class DataSourceStatus.
* @enum {}
* @readonly
*/
export default class DataSourceStatus {
    
        /**
         * value: "Connected"
         * @const
         */
        "Connected" = "Connected";

    
        /**
         * value: "Error"
         * @const
         */
        "Error" = "Error";

    
        /**
         * value: "Updating"
         * @const
         */
        "Updating" = "Updating";

    

    /**
    * Returns a <code>DataSourceStatus</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:models/DataSourceStatus} The enum <code>DataSourceStatus</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
