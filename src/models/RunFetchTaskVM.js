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
import RunTransformTaskBaseVM from './RunTransformTaskBaseVM';
import TaskType from './TaskType';

/**
 * The RunFetchTaskVM model module.
 * @module models/RunFetchTaskVM
 * @version v1
 */
class RunFetchTaskVM {
    /**
     * Constructs a new <code>RunFetchTaskVM</code>.
     * @alias module:models/RunFetchTaskVM
     * @implements module:models/RunTransformTaskBaseVM
     */
    constructor() { 
        RunTransformTaskBaseVM.initialize(this);
        RunFetchTaskVM.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RunFetchTaskVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/RunFetchTaskVM} obj Optional instance to populate.
     * @return {module:models/RunFetchTaskVM} The populated <code>RunFetchTaskVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RunFetchTaskVM();
            RunTransformTaskBaseVM.constructFromObject(data, obj);

            if (data.hasOwnProperty('subscriptionId')) {
                obj['subscriptionId'] = ApiClient.convertToType(data['subscriptionId'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = TaskType.constructFromObject(data['type']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} subscriptionId
 */
RunFetchTaskVM.prototype['subscriptionId'] = undefined;

/**
 * @member {module:models/TaskType} type
 */
RunFetchTaskVM.prototype['type'] = undefined;


// Implement RunTransformTaskBaseVM interface:
/**
 * @member {String} subscriptionId
 */
RunTransformTaskBaseVM.prototype['subscriptionId'] = undefined;
/**
 * @member {module:models/TaskType} type
 */
RunTransformTaskBaseVM.prototype['type'] = undefined;




export default RunFetchTaskVM;

