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
* Enum class TimePeriodType.
* @enum {}
* @readonly
*/
export default class TimePeriodType {
    
        /**
         * value: "Second"
         * @const
         */
        "Second" = "Second";

    
        /**
         * value: "Minute"
         * @const
         */
        "Minute" = "Minute";

    
        /**
         * value: "Hour"
         * @const
         */
        "Hour" = "Hour";

    
        /**
         * value: "Day"
         * @const
         */
        "Day" = "Day";

    
        /**
         * value: "Week"
         * @const
         */
        "Week" = "Week";

    
        /**
         * value: "Month"
         * @const
         */
        "Month" = "Month";

    
        /**
         * value: "Year"
         * @const
         */
        "Year" = "Year";

    

    /**
    * Returns a <code>TimePeriodType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:models/TimePeriodType} The enum <code>TimePeriodType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
