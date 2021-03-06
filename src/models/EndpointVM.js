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
 * The EndpointVM model module.
 * @module models/EndpointVM
 * @version v1
 */
class EndpointVM {
    /**
     * Constructs a new <code>EndpointVM</code>.
     * @alias module:models/EndpointVM
     */
    constructor() { 
        
        EndpointVM.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EndpointVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/EndpointVM} obj Optional instance to populate.
     * @return {module:models/EndpointVM} The populated <code>EndpointVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EndpointVM();

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} url
 */
EndpointVM.prototype['url'] = undefined;






export default EndpointVM;

