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
import EndpointVM from './EndpointVM';

/**
 * The UpdateEndpointVM model module.
 * @module models/UpdateEndpointVM
 * @version v1
 */
class UpdateEndpointVM {
    /**
     * Constructs a new <code>UpdateEndpointVM</code>.
     * @alias module:models/UpdateEndpointVM
     * @implements module:models/EndpointVM
     */
    constructor() { 
        EndpointVM.initialize(this);
        UpdateEndpointVM.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateEndpointVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/UpdateEndpointVM} obj Optional instance to populate.
     * @return {module:models/UpdateEndpointVM} The populated <code>UpdateEndpointVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateEndpointVM();
            EndpointVM.constructFromObject(data, obj);

            if (data.hasOwnProperty('bearerToken')) {
                obj['bearerToken'] = ApiClient.convertToType(data['bearerToken'], 'String');
            }
            if (data.hasOwnProperty('headers')) {
                obj['headers'] = ApiClient.convertToType(data['headers'], {'String': 'String'});
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} bearerToken
 */
UpdateEndpointVM.prototype['bearerToken'] = undefined;

/**
 * @member {Object.<String, String>} headers
 */
UpdateEndpointVM.prototype['headers'] = undefined;

/**
 * @member {String} url
 */
UpdateEndpointVM.prototype['url'] = undefined;


// Implement EndpointVM interface:
/**
 * @member {String} url
 */
EndpointVM.prototype['url'] = undefined;




export default UpdateEndpointVM;

