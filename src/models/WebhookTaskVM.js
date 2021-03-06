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
import TaskType from './TaskType';
import TransportTaskBaseVM from './TransportTaskBaseVM';

/**
 * The WebhookTaskVM model module.
 * @module models/WebhookTaskVM
 * @version v1
 */
class WebhookTaskVM {
    /**
     * Constructs a new <code>WebhookTaskVM</code>.
     * @alias module:models/WebhookTaskVM
     * @implements module:models/TransportTaskBaseVM
     */
    constructor() { 
        TransportTaskBaseVM.initialize(this);
        WebhookTaskVM.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhookTaskVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/WebhookTaskVM} obj Optional instance to populate.
     * @return {module:models/WebhookTaskVM} The populated <code>WebhookTaskVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookTaskVM();
            TransportTaskBaseVM.constructFromObject(data, obj);

            if (data.hasOwnProperty('endpoints')) {
                obj['endpoints'] = ApiClient.convertToType(data['endpoints'], [EndpointVM]);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('subscriptionId')) {
                obj['subscriptionId'] = ApiClient.convertToType(data['subscriptionId'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = TaskType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('delayedRunTime')) {
                obj['delayedRunTime'] = ApiClient.convertToType(data['delayedRunTime'], 'Date');
            }
            if (data.hasOwnProperty('cronExpression')) {
                obj['cronExpression'] = ApiClient.convertToType(data['cronExpression'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:models/EndpointVM>} endpoints
 */
WebhookTaskVM.prototype['endpoints'] = undefined;

/**
 * @member {String} name
 */
WebhookTaskVM.prototype['name'] = undefined;

/**
 * @member {String} subscriptionId
 */
WebhookTaskVM.prototype['subscriptionId'] = undefined;

/**
 * @member {module:models/TaskType} type
 */
WebhookTaskVM.prototype['type'] = undefined;

/**
 * @member {Date} delayedRunTime
 */
WebhookTaskVM.prototype['delayedRunTime'] = undefined;

/**
 * @member {String} cronExpression
 */
WebhookTaskVM.prototype['cronExpression'] = undefined;


// Implement TransportTaskBaseVM interface:
/**
 * @member {String} name
 */
TransportTaskBaseVM.prototype['name'] = undefined;
/**
 * @member {String} subscriptionId
 */
TransportTaskBaseVM.prototype['subscriptionId'] = undefined;
/**
 * @member {module:models/TaskType} type
 */
TransportTaskBaseVM.prototype['type'] = undefined;
/**
 * @member {Date} delayedRunTime
 */
TransportTaskBaseVM.prototype['delayedRunTime'] = undefined;
/**
 * @member {String} cronExpression
 */
TransportTaskBaseVM.prototype['cronExpression'] = undefined;




export default WebhookTaskVM;

