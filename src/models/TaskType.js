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
* Enum class TaskType.
* @enum {}
* @readonly
*/
export default class TaskType {
    
        /**
         * value: "ExportTemplate"
         * @const
         */
        "ExportTemplate" = "ExportTemplate";

    
        /**
         * value: "ExportReport"
         * @const
         */
        "ExportReport" = "ExportReport";

    
        /**
         * value: "Prepare"
         * @const
         */
        "Prepare" = "Prepare";

    
        /**
         * value: "Fetch"
         * @const
         */
        "Fetch" = "Fetch";

    
        /**
         * value: "Email"
         * @const
         */
        "Email" = "Email";

    
        /**
         * value: "Webhook"
         * @const
         */
        "Webhook" = "Webhook";

    
        /**
         * value: "ThumbnailTemplate"
         * @const
         */
        "ThumbnailTemplate" = "ThumbnailTemplate";

    
        /**
         * value: "ThumbnailReport"
         * @const
         */
        "ThumbnailReport" = "ThumbnailReport";

    

    /**
    * Returns a <code>TaskType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:models/TaskType} The enum <code>TaskType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

