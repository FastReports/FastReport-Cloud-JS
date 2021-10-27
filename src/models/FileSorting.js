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
* Enum class FileSorting.
* @enum {}
* @readonly
*/
export default class FileSorting {
    
        /**
         * value: "None"
         * @const
         */
        "None" = "None";

    
        /**
         * value: "CreatedTime"
         * @const
         */
        "CreatedTime" = "CreatedTime";

    
        /**
         * value: "EditedTime"
         * @const
         */
        "EditedTime" = "EditedTime";

    
        /**
         * value: "Size"
         * @const
         */
        "Size" = "Size";

    
        /**
         * value: "Name"
         * @const
         */
        "Name" = "Name";

    

    /**
    * Returns a <code>FileSorting</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:models/FileSorting} The enum <code>FileSorting</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
