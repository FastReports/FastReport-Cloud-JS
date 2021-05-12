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
import ReportVM from './ReportVM';

/**
 * The ReportsVM model module.
 * @module models/ReportsVM
 * @version v1
 */
class ReportsVM {
    /**
     * Constructs a new <code>ReportsVM</code>.
     * @alias module:models/ReportsVM
     */
    constructor() { 
        
        ReportsVM.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReportsVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ReportsVM} obj Optional instance to populate.
     * @return {module:models/ReportsVM} The populated <code>ReportsVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReportsVM();

            if (data.hasOwnProperty('files')) {
                obj['files'] = ApiClient.convertToType(data['files'], [ReportVM]);
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


}

/**
 * @member {Array.<module:models/ReportVM>} files
 */
ReportsVM.prototype['files'] = undefined;

/**
 * @member {Number} count
 */
ReportsVM.prototype['count'] = undefined;

/**
 * @member {Number} skip
 */
ReportsVM.prototype['skip'] = undefined;

/**
 * @member {Number} take
 */
ReportsVM.prototype['take'] = undefined;






export default ReportsVM;

