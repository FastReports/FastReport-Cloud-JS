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
import FileVM from './FileVM';
import ReportInfo from './ReportInfo';

/**
 * The TemplateVM model module.
 * @module models/TemplateVM
 * @version v1
 */
class TemplateVM {
    /**
     * Constructs a new <code>TemplateVM</code>.
     * @alias module:models/TemplateVM
     * @extends module:models/FileVM
     * @implements module:models/FileVM
     */
    constructor() { 
        FileVM.initialize(this);
        TemplateVM.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TemplateVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/TemplateVM} obj Optional instance to populate.
     * @return {module:models/TemplateVM} The populated <code>TemplateVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TemplateVM();
            FileVM.constructFromObject(data, obj);
            FileVM.constructFromObject(data, obj);

            if (data.hasOwnProperty('reportInfo')) {
                obj['reportInfo'] = ReportInfo.constructFromObject(data['reportInfo']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TemplateVM</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TemplateVM</code>.
     */
    static validateJSON(data) {
        // validate the optional field `reportInfo`
        if (data['reportInfo']) { // data not null
          ReportInfo.validateJSON(data['reportInfo']);
        }

        return true;
    }


}



/**
 * @member {module:models/ReportInfo} reportInfo
 */
TemplateVM.prototype['reportInfo'] = undefined;


// Implement FileVM interface:
/**
 * @member {String} id
 */
FileVM.prototype['id'] = undefined;
/**
 * @member {Date} createdTime
 */
FileVM.prototype['createdTime'] = undefined;
/**
 * @member {String} creatorUserId
 */
FileVM.prototype['creatorUserId'] = undefined;
/**
 * @member {Date} editedTime
 */
FileVM.prototype['editedTime'] = undefined;
/**
 * @member {String} editorUserId
 */
FileVM.prototype['editorUserId'] = undefined;




export default TemplateVM;

