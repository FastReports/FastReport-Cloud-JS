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
* Enum class FileStatusReason.
* @enum {}
* @readonly
*/
export default class FileStatusReason {
    
        /**
         * value: "None"
         * @const
         */
        "None" = "None";

    
        /**
         * value: "AllRight"
         * @const
         */
        "AllRight" = "AllRight";

    
        /**
         * value: "Hang"
         * @const
         */
        "Hang" = "Hang";

    
        /**
         * value: "Error"
         * @const
         */
        "Error" = "Error";

    
        /**
         * value: "NotFound"
         * @const
         */
        "NotFound" = "NotFound";

    
        /**
         * value: "NotEnoughSpace"
         * @const
         */
        "NotEnoughSpace" = "NotEnoughSpace";

    
        /**
         * value: "ExportStarted"
         * @const
         */
        "ExportStarted" = "ExportStarted";

    
        /**
         * value: "PreparationStarted"
         * @const
         */
        "PreparationStarted" = "PreparationStarted";

    
        /**
         * value: "CrashLoop"
         * @const
         */
        "CrashLoop" = "CrashLoop";

    

    /**
    * Returns a <code>FileStatusReason</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:models/FileStatusReason} The enum <code>FileStatusReason</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

