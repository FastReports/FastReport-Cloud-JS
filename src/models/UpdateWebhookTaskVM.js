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
import CreateTaskEndVM from './CreateTaskEndVM';
import InputFileVM from './InputFileVM';
import UpdateTransportTaskBaseVM from './UpdateTransportTaskBaseVM';

/**
 * The UpdateWebhookTaskVM model module.
 * @module models/UpdateWebhookTaskVM
 * @version v1
 */
class UpdateWebhookTaskVM {
    /**
     * Constructs a new <code>UpdateWebhookTaskVM</code>.
     * @alias module:models/UpdateWebhookTaskVM
     * @extends module:models/UpdateTransportTaskBaseVM
     * @implements module:models/UpdateTransportTaskBaseVM
     * @param t {String} 
     */
    constructor(t) { 
        UpdateTransportTaskBaseVM.initialize(this, t);
        UpdateWebhookTaskVM.initialize(this, t);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, t) { 
        obj['$t'] = t;
    }

    /**
     * Constructs a <code>UpdateWebhookTaskVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/UpdateWebhookTaskVM} obj Optional instance to populate.
     * @return {module:models/UpdateWebhookTaskVM} The populated <code>UpdateWebhookTaskVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateWebhookTaskVM();
            UpdateTransportTaskBaseVM.constructFromObject(data, obj);
            UpdateTransportTaskBaseVM.constructFromObject(data, obj);

            if (data.hasOwnProperty('headers')) {
                obj['headers'] = ApiClient.convertToType(data['headers'], {'String': 'String'});
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('$t')) {
                obj['$t'] = ApiClient.convertToType(data['$t'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateWebhookTaskVM</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateWebhookTaskVM</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UpdateWebhookTaskVM.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['$t'] && !(typeof data['$t'] === 'string' || data['$t'] instanceof String)) {
            throw new Error("Expected the field `$t` to be a primitive type in the JSON string but got " + data['$t']);
        }

        return true;
    }


}

UpdateWebhookTaskVM.RequiredProperties = ["$t"];

/**
 * @member {Object.<String, String>} headers
 */
UpdateWebhookTaskVM.prototype['headers'] = undefined;

/**
 * @member {String} url
 */
UpdateWebhookTaskVM.prototype['url'] = undefined;

/**
 * @member {String} $t
 */
UpdateWebhookTaskVM.prototype['$t'] = undefined;


// Implement UpdateTransportTaskBaseVM interface:
/**
 * @member {String} cronExpression
 */
UpdateTransportTaskBaseVM.prototype['cronExpression'] = undefined;
/**
 * @member {Date} startsOn
 */
UpdateTransportTaskBaseVM.prototype['startsOn'] = undefined;
/**
 * @member {module:models/CreateTaskEndVM} ends
 */
UpdateTransportTaskBaseVM.prototype['ends'] = undefined;
/**
 * @member {String} name
 */
UpdateTransportTaskBaseVM.prototype['name'] = undefined;
/**
 * @member {String} $t
 */
UpdateTransportTaskBaseVM.prototype['$t'] = undefined;




export default UpdateWebhookTaskVM;

