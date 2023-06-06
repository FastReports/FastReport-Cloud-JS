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
* Enum class EntityType.
* @enum {}
* @readonly
*/
export default class EntityType {
    
        /**
         * value: "None"
         * @const
         */
        "None" = "None";

    
        /**
         * value: "Template"
         * @const
         */
        "Template" = "Template";

    
        /**
         * value: "TemplateFolder"
         * @const
         */
        "TemplateFolder" = "TemplateFolder";

    
        /**
         * value: "Report"
         * @const
         */
        "Report" = "Report";

    
        /**
         * value: "ReportFolder"
         * @const
         */
        "ReportFolder" = "ReportFolder";

    
        /**
         * value: "Export"
         * @const
         */
        "Export" = "Export";

    
        /**
         * value: "ExportFolder"
         * @const
         */
        "ExportFolder" = "ExportFolder";

    

    /**
    * Returns a <code>EntityType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:models/EntityType} The enum <code>EntityType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
