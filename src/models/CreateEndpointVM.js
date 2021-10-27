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
 * The CreateEndpointVM model module.
 * @module models/CreateEndpointVM
 * @version v1
 */
class CreateEndpointVM {
    /**
     * Constructs a new <code>CreateEndpointVM</code>.
     * @alias module:models/CreateEndpointVM
     * @implements module:models/EndpointVM
     */
    constructor() { 
        EndpointVM.initialize(this);
        CreateEndpointVM.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateEndpointVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/CreateEndpointVM} obj Optional instance to populate.
     * @return {module:models/CreateEndpointVM} The populated <code>CreateEndpointVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateEndpointVM();
            EndpointVM.constructFromObject(data, obj);

            if (data.hasOwnProperty('bearerToken')) {
                obj['bearerToken'] = ApiClient.convertToType(data['bearerToken'], 'String');
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
CreateEndpointVM.prototype['bearerToken'] = undefined;

/**
 * @member {String} url
 */
CreateEndpointVM.prototype['url'] = undefined;


// Implement EndpointVM interface:
/**
 * @member {String} url
 */
EndpointVM.prototype['url'] = undefined;




export default CreateEndpointVM;

