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
 * The TaskSettingsVM model module.
 * @module models/TaskSettingsVM
 * @version v1
 */
class TaskSettingsVM {
    /**
     * Constructs a new <code>TaskSettingsVM</code>.
     * @alias module:models/TaskSettingsVM
     */
    constructor() { 
        
        TaskSettingsVM.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TaskSettingsVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/TaskSettingsVM} obj Optional instance to populate.
     * @return {module:models/TaskSettingsVM} The populated <code>TaskSettingsVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaskSettingsVM();

            if (data.hasOwnProperty('prepare')) {
                obj['prepare'] = ApiClient.convertToType(data['prepare'], 'Boolean');
            }
            if (data.hasOwnProperty('exportTemplate')) {
                obj['exportTemplate'] = ApiClient.convertToType(data['exportTemplate'], 'Boolean');
            }
            if (data.hasOwnProperty('exportReport')) {
                obj['exportReport'] = ApiClient.convertToType(data['exportReport'], 'Boolean');
            }
            if (data.hasOwnProperty('sendViaEmail')) {
                obj['sendViaEmail'] = ApiClient.convertToType(data['sendViaEmail'], 'Boolean');
            }
            if (data.hasOwnProperty('uploadToFTP')) {
                obj['uploadToFTP'] = ApiClient.convertToType(data['uploadToFTP'], 'Boolean');
            }
            if (data.hasOwnProperty('sendViaWebhook')) {
                obj['sendViaWebhook'] = ApiClient.convertToType(data['sendViaWebhook'], 'Boolean');
            }
            if (data.hasOwnProperty('fetchData')) {
                obj['fetchData'] = ApiClient.convertToType(data['fetchData'], 'Boolean');
            }
            if (data.hasOwnProperty('thumbnailReport')) {
                obj['thumbnailReport'] = ApiClient.convertToType(data['thumbnailReport'], 'Boolean');
            }
            if (data.hasOwnProperty('thumbnailTemplate')) {
                obj['thumbnailTemplate'] = ApiClient.convertToType(data['thumbnailTemplate'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TaskSettingsVM</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TaskSettingsVM</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Boolean} prepare
 */
TaskSettingsVM.prototype['prepare'] = undefined;

/**
 * @member {Boolean} exportTemplate
 */
TaskSettingsVM.prototype['exportTemplate'] = undefined;

/**
 * @member {Boolean} exportReport
 */
TaskSettingsVM.prototype['exportReport'] = undefined;

/**
 * @member {Boolean} sendViaEmail
 */
TaskSettingsVM.prototype['sendViaEmail'] = undefined;

/**
 * @member {Boolean} uploadToFTP
 */
TaskSettingsVM.prototype['uploadToFTP'] = undefined;

/**
 * @member {Boolean} sendViaWebhook
 */
TaskSettingsVM.prototype['sendViaWebhook'] = undefined;

/**
 * @member {Boolean} fetchData
 */
TaskSettingsVM.prototype['fetchData'] = undefined;

/**
 * @member {Boolean} thumbnailReport
 */
TaskSettingsVM.prototype['thumbnailReport'] = undefined;

/**
 * @member {Boolean} thumbnailTemplate
 */
TaskSettingsVM.prototype['thumbnailTemplate'] = undefined;






export default TaskSettingsVM;

