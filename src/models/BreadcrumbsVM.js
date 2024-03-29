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
import BreadcrumbsModel from './BreadcrumbsModel';

/**
 * The BreadcrumbsVM model module.
 * @module models/BreadcrumbsVM
 * @version v1
 */
class BreadcrumbsVM {
    /**
     * Constructs a new <code>BreadcrumbsVM</code>.
     * @alias module:models/BreadcrumbsVM
     */
    constructor() { 
        
        BreadcrumbsVM.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BreadcrumbsVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/BreadcrumbsVM} obj Optional instance to populate.
     * @return {module:models/BreadcrumbsVM} The populated <code>BreadcrumbsVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BreadcrumbsVM();

            if (data.hasOwnProperty('breadcrumbs')) {
                obj['breadcrumbs'] = ApiClient.convertToType(data['breadcrumbs'], [BreadcrumbsModel]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BreadcrumbsVM</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BreadcrumbsVM</code>.
     */
    static validateJSON(data) {
        if (data['breadcrumbs']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['breadcrumbs'])) {
                throw new Error("Expected the field `breadcrumbs` to be an array in the JSON data but got " + data['breadcrumbs']);
            }
            // validate the optional field `breadcrumbs` (array)
            for (const item of data['breadcrumbs']) {
                BreadcrumbsModel.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:models/BreadcrumbsModel>} breadcrumbs
 */
BreadcrumbsVM.prototype['breadcrumbs'] = undefined;






export default BreadcrumbsVM;

