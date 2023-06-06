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
* Enum class AuditType.
* @enum {}
* @readonly
*/
export default class AuditType {
    
        /**
         * value: "Task_Created_ExportTemplate"
         * @const
         */
        "Task_Created_ExportTemplate" = "Task_Created_ExportTemplate";

    
        /**
         * value: "Task_Created_ExportReport"
         * @const
         */
        "Task_Created_ExportReport" = "Task_Created_ExportReport";

    
        /**
         * value: "Task_Created_PrepareTemplate"
         * @const
         */
        "Task_Created_PrepareTemplate" = "Task_Created_PrepareTemplate";

    
        /**
         * value: "Task_Created_Fetch"
         * @const
         */
        "Task_Created_Fetch" = "Task_Created_Fetch";

    
        /**
         * value: "Task_Created_Email"
         * @const
         */
        "Task_Created_Email" = "Task_Created_Email";

    
        /**
         * value: "Task_Created_Webhook"
         * @const
         */
        "Task_Created_Webhook" = "Task_Created_Webhook";

    
        /**
         * value: "Task_Deleted_ExportTemplate"
         * @const
         */
        "Task_Deleted_ExportTemplate" = "Task_Deleted_ExportTemplate";

    
        /**
         * value: "Task_Deleted_ExportReport"
         * @const
         */
        "Task_Deleted_ExportReport" = "Task_Deleted_ExportReport";

    
        /**
         * value: "Task_Deleted_PrepareTemplate"
         * @const
         */
        "Task_Deleted_PrepareTemplate" = "Task_Deleted_PrepareTemplate";

    
        /**
         * value: "Task_Deleted_Fetch"
         * @const
         */
        "Task_Deleted_Fetch" = "Task_Deleted_Fetch";

    
        /**
         * value: "Task_Deleted_Email"
         * @const
         */
        "Task_Deleted_Email" = "Task_Deleted_Email";

    
        /**
         * value: "Task_Deleted_Webhook"
         * @const
         */
        "Task_Deleted_Webhook" = "Task_Deleted_Webhook";

    
        /**
         * value: "Task_Updated_ExportTemplate"
         * @const
         */
        "Task_Updated_ExportTemplate" = "Task_Updated_ExportTemplate";

    
        /**
         * value: "Task_Updated_ExportReport"
         * @const
         */
        "Task_Updated_ExportReport" = "Task_Updated_ExportReport";

    
        /**
         * value: "Task_Updated_PrepareTemplate"
         * @const
         */
        "Task_Updated_PrepareTemplate" = "Task_Updated_PrepareTemplate";

    
        /**
         * value: "Task_Updated_Fetch"
         * @const
         */
        "Task_Updated_Fetch" = "Task_Updated_Fetch";

    
        /**
         * value: "Task_Updated_Email"
         * @const
         */
        "Task_Updated_Email" = "Task_Updated_Email";

    
        /**
         * value: "Task_Updated_Webhook"
         * @const
         */
        "Task_Updated_Webhook" = "Task_Updated_Webhook";

    
        /**
         * value: "Task_InQueue_ExportTemplate"
         * @const
         */
        "Task_InQueue_ExportTemplate" = "Task_InQueue_ExportTemplate";

    
        /**
         * value: "Task_InQueue_ExportReport"
         * @const
         */
        "Task_InQueue_ExportReport" = "Task_InQueue_ExportReport";

    
        /**
         * value: "Task_InQueue_PrepareTemplate"
         * @const
         */
        "Task_InQueue_PrepareTemplate" = "Task_InQueue_PrepareTemplate";

    
        /**
         * value: "Task_InQueue_Fetch"
         * @const
         */
        "Task_InQueue_Fetch" = "Task_InQueue_Fetch";

    
        /**
         * value: "Task_InQueue_Email"
         * @const
         */
        "Task_InQueue_Email" = "Task_InQueue_Email";

    
        /**
         * value: "Task_InQueue_Webhook"
         * @const
         */
        "Task_InQueue_Webhook" = "Task_InQueue_Webhook";

    
        /**
         * value: "Task_InProcess_ExportTemplate"
         * @const
         */
        "Task_InProcess_ExportTemplate" = "Task_InProcess_ExportTemplate";

    
        /**
         * value: "Task_InProcess_ExportReport"
         * @const
         */
        "Task_InProcess_ExportReport" = "Task_InProcess_ExportReport";

    
        /**
         * value: "Task_InProcess_PrepareTemplate"
         * @const
         */
        "Task_InProcess_PrepareTemplate" = "Task_InProcess_PrepareTemplate";

    
        /**
         * value: "Task_InProcess_Fetch"
         * @const
         */
        "Task_InProcess_Fetch" = "Task_InProcess_Fetch";

    
        /**
         * value: "Task_InProcess_Email"
         * @const
         */
        "Task_InProcess_Email" = "Task_InProcess_Email";

    
        /**
         * value: "Task_InProcess_Webhook"
         * @const
         */
        "Task_InProcess_Webhook" = "Task_InProcess_Webhook";

    
        /**
         * value: "Task_Success_ExportTemplate"
         * @const
         */
        "Task_Success_ExportTemplate" = "Task_Success_ExportTemplate";

    
        /**
         * value: "Task_Success_ExportReport"
         * @const
         */
        "Task_Success_ExportReport" = "Task_Success_ExportReport";

    
        /**
         * value: "Task_Success_PrepareTemplate"
         * @const
         */
        "Task_Success_PrepareTemplate" = "Task_Success_PrepareTemplate";

    
        /**
         * value: "Task_Success_Fetch"
         * @const
         */
        "Task_Success_Fetch" = "Task_Success_Fetch";

    
        /**
         * value: "Task_Success_Email"
         * @const
         */
        "Task_Success_Email" = "Task_Success_Email";

    
        /**
         * value: "Task_Success_Webhook"
         * @const
         */
        "Task_Success_Webhook" = "Task_Success_Webhook";

    
        /**
         * value: "Task_Failed_ExportTemplate"
         * @const
         */
        "Task_Failed_ExportTemplate" = "Task_Failed_ExportTemplate";

    
        /**
         * value: "Task_Failed_ExportReport"
         * @const
         */
        "Task_Failed_ExportReport" = "Task_Failed_ExportReport";

    
        /**
         * value: "Task_Failed_PrepareTemplate"
         * @const
         */
        "Task_Failed_PrepareTemplate" = "Task_Failed_PrepareTemplate";

    
        /**
         * value: "Task_Failed_Fetch"
         * @const
         */
        "Task_Failed_Fetch" = "Task_Failed_Fetch";

    
        /**
         * value: "Task_Failed_Email"
         * @const
         */
        "Task_Failed_Email" = "Task_Failed_Email";

    
        /**
         * value: "Task_Failed_Webhook"
         * @const
         */
        "Task_Failed_Webhook" = "Task_Failed_Webhook";

    
        /**
         * value: "Task_Created_ThumbnailReport"
         * @const
         */
        "Task_Created_ThumbnailReport" = "Task_Created_ThumbnailReport";

    
        /**
         * value: "Task_Deleted_ThumbnailReport"
         * @const
         */
        "Task_Deleted_ThumbnailReport" = "Task_Deleted_ThumbnailReport";

    
        /**
         * value: "Task_Updated_ThumbnailReport"
         * @const
         */
        "Task_Updated_ThumbnailReport" = "Task_Updated_ThumbnailReport";

    
        /**
         * value: "Task_InQueue_ThumbnailReport"
         * @const
         */
        "Task_InQueue_ThumbnailReport" = "Task_InQueue_ThumbnailReport";

    
        /**
         * value: "Task_InProcess_ThumbnailReport"
         * @const
         */
        "Task_InProcess_ThumbnailReport" = "Task_InProcess_ThumbnailReport";

    
        /**
         * value: "Task_Success_ThumbnailReport"
         * @const
         */
        "Task_Success_ThumbnailReport" = "Task_Success_ThumbnailReport";

    
        /**
         * value: "Task_Fail_ThumbnailReport"
         * @const
         */
        "Task_Fail_ThumbnailReport" = "Task_Fail_ThumbnailReport";

    
        /**
         * value: "Task_Created_ThumbnailTemplate"
         * @const
         */
        "Task_Created_ThumbnailTemplate" = "Task_Created_ThumbnailTemplate";

    
        /**
         * value: "Task_Deleted_ThumbnailTemplate"
         * @const
         */
        "Task_Deleted_ThumbnailTemplate" = "Task_Deleted_ThumbnailTemplate";

    
        /**
         * value: "Task_Updated_ThumbnailTemplate"
         * @const
         */
        "Task_Updated_ThumbnailTemplate" = "Task_Updated_ThumbnailTemplate";

    
        /**
         * value: "Task_InQueue_ThumbnailTemplate"
         * @const
         */
        "Task_InQueue_ThumbnailTemplate" = "Task_InQueue_ThumbnailTemplate";

    
        /**
         * value: "Task_InProcess_ThumbnailTemplate"
         * @const
         */
        "Task_InProcess_ThumbnailTemplate" = "Task_InProcess_ThumbnailTemplate";

    
        /**
         * value: "Task_Success_ThumbnailTemplate"
         * @const
         */
        "Task_Success_ThumbnailTemplate" = "Task_Success_ThumbnailTemplate";

    
        /**
         * value: "Task_Fail_ThumbnailTemplate"
         * @const
         */
        "Task_Fail_ThumbnailTemplate" = "Task_Fail_ThumbnailTemplate";

    
        /**
         * value: "Subscription_Renewed"
         * @const
         */
        "Subscription_Renewed" = "Subscription_Renewed";

    
        /**
         * value: "Subscription_Created"
         * @const
         */
        "Subscription_Created" = "Subscription_Created";

    
        /**
         * value: "File_Renamed"
         * @const
         */
        "File_Renamed" = "File_Renamed";

    
        /**
         * value: "File_Content_Updated"
         * @const
         */
        "File_Content_Updated" = "File_Content_Updated";

    
        /**
         * value: "File_Deleted"
         * @const
         */
        "File_Deleted" = "File_Deleted";

    
        /**
         * value: "File_Moved"
         * @const
         */
        "File_Moved" = "File_Moved";

    
        /**
         * value: "File_Copied"
         * @const
         */
        "File_Copied" = "File_Copied";

    
        /**
         * value: "File_Tags_Updated"
         * @const
         */
        "File_Tags_Updated" = "File_Tags_Updated";

    
        /**
         * value: "File_Permissions_Updated"
         * @const
         */
        "File_Permissions_Updated" = "File_Permissions_Updated";

    
        /**
         * value: "File_Restored"
         * @const
         */
        "File_Restored" = "File_Restored";

    
        /**
         * value: "File_MovedToBin"
         * @const
         */
        "File_MovedToBin" = "File_MovedToBin";

    
        /**
         * value: "File_Updated"
         * @const
         */
        "File_Updated" = "File_Updated";

    
        /**
         * value: "Task_Created_FTPUpload"
         * @const
         */
        "Task_Created_FTPUpload" = "Task_Created_FTPUpload";

    
        /**
         * value: "Task_Deleted_FTPUpload"
         * @const
         */
        "Task_Deleted_FTPUpload" = "Task_Deleted_FTPUpload";

    
        /**
         * value: "Task_Updated_FTPUpload"
         * @const
         */
        "Task_Updated_FTPUpload" = "Task_Updated_FTPUpload";

    
        /**
         * value: "Task_InQueue_FTPUpload"
         * @const
         */
        "Task_InQueue_FTPUpload" = "Task_InQueue_FTPUpload";

    
        /**
         * value: "Task_InProcess_FTPUpload"
         * @const
         */
        "Task_InProcess_FTPUpload" = "Task_InProcess_FTPUpload";

    
        /**
         * value: "Task_Success_FTPUpload"
         * @const
         */
        "Task_Success_FTPUpload" = "Task_Success_FTPUpload";

    
        /**
         * value: "Task_Fail_FTPUpload"
         * @const
         */
        "Task_Fail_FTPUpload" = "Task_Fail_FTPUpload";

    
        /**
         * value: "File_Created"
         * @const
         */
        "File_Created" = "File_Created";

    

    /**
    * Returns a <code>AuditType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:models/AuditType} The enum <code>AuditType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

