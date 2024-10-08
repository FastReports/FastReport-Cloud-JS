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
import RunInputFileVM from './RunInputFileVM';
import RunTransportTaskBaseVM from './RunTransportTaskBaseVM';

/**
 * The RunEmailTaskVM model module.
 * @module models/RunEmailTaskVM
 * @version v1
 */
class RunEmailTaskVM {
    /**
     * Constructs a new <code>RunEmailTaskVM</code>.
     * @alias module:models/RunEmailTaskVM
     * @extends module:models/RunTransportTaskBaseVM
     * @implements module:models/RunTransportTaskBaseVM
     * @param t {String} 
     */
    constructor(t) { 
        RunTransportTaskBaseVM.initialize(this, t);
        RunEmailTaskVM.initialize(this, t);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, t) { 
        obj['to'] = to;
        obj['$t'] = t;
    }

    /**
     * Constructs a <code>RunEmailTaskVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/RunEmailTaskVM} obj Optional instance to populate.
     * @return {module:models/RunEmailTaskVM} The populated <code>RunEmailTaskVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RunEmailTaskVM();
            RunTransportTaskBaseVM.constructFromObject(data, obj);
            RunTransportTaskBaseVM.constructFromObject(data, obj);

            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('enableSsl')) {
                obj['enableSsl'] = ApiClient.convertToType(data['enableSsl'], 'Boolean');
            }
            if (data.hasOwnProperty('from')) {
                obj['from'] = ApiClient.convertToType(data['from'], 'String');
            }
            if (data.hasOwnProperty('isBodyHtml')) {
                obj['isBodyHtml'] = ApiClient.convertToType(data['isBodyHtml'], 'Boolean');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'Number');
            }
            if (data.hasOwnProperty('server')) {
                obj['server'] = ApiClient.convertToType(data['server'], 'String');
            }
            if (data.hasOwnProperty('subject')) {
                obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], ['String']);
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('$t')) {
                obj['$t'] = ApiClient.convertToType(data['$t'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RunEmailTaskVM</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RunEmailTaskVM</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RunEmailTaskVM.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['body'] && !(typeof data['body'] === 'string' || data['body'] instanceof String)) {
            throw new Error("Expected the field `body` to be a primitive type in the JSON string but got " + data['body']);
        }
        // ensure the json data is a string
        if (data['from'] && !(typeof data['from'] === 'string' || data['from'] instanceof String)) {
            throw new Error("Expected the field `from` to be a primitive type in the JSON string but got " + data['from']);
        }
        // ensure the json data is a string
        if (data['password'] && !(typeof data['password'] === 'string' || data['password'] instanceof String)) {
            throw new Error("Expected the field `password` to be a primitive type in the JSON string but got " + data['password']);
        }
        // ensure the json data is a string
        if (data['server'] && !(typeof data['server'] === 'string' || data['server'] instanceof String)) {
            throw new Error("Expected the field `server` to be a primitive type in the JSON string but got " + data['server']);
        }
        // ensure the json data is a string
        if (data['subject'] && !(typeof data['subject'] === 'string' || data['subject'] instanceof String)) {
            throw new Error("Expected the field `subject` to be a primitive type in the JSON string but got " + data['subject']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['to'])) {
            throw new Error("Expected the field `to` to be an array in the JSON data but got " + data['to']);
        }
        // ensure the json data is a string
        if (data['username'] && !(typeof data['username'] === 'string' || data['username'] instanceof String)) {
            throw new Error("Expected the field `username` to be a primitive type in the JSON string but got " + data['username']);
        }
        // ensure the json data is a string
        if (data['$t'] && !(typeof data['$t'] === 'string' || data['$t'] instanceof String)) {
            throw new Error("Expected the field `$t` to be a primitive type in the JSON string but got " + data['$t']);
        }

        return true;
    }


}

RunEmailTaskVM.RequiredProperties = ["to", "$t"];

/**
 * @member {String} body
 */
RunEmailTaskVM.prototype['body'] = undefined;

/**
 * @member {Boolean} enableSsl
 */
RunEmailTaskVM.prototype['enableSsl'] = undefined;

/**
 * @member {String} from
 */
RunEmailTaskVM.prototype['from'] = undefined;

/**
 * @member {Boolean} isBodyHtml
 */
RunEmailTaskVM.prototype['isBodyHtml'] = undefined;

/**
 * @member {String} password
 */
RunEmailTaskVM.prototype['password'] = undefined;

/**
 * @member {Number} port
 */
RunEmailTaskVM.prototype['port'] = undefined;

/**
 * @member {String} server
 */
RunEmailTaskVM.prototype['server'] = undefined;

/**
 * @member {String} subject
 */
RunEmailTaskVM.prototype['subject'] = undefined;

/**
 * @member {Array.<String>} to
 */
RunEmailTaskVM.prototype['to'] = undefined;

/**
 * @member {String} username
 */
RunEmailTaskVM.prototype['username'] = undefined;

/**
 * @member {String} $t
 */
RunEmailTaskVM.prototype['$t'] = undefined;


// Implement RunTransportTaskBaseVM interface:
/**
 * @member {String} subscriptionId
 */
RunTransportTaskBaseVM.prototype['subscriptionId'] = undefined;
/**
 * @member {String} $t
 */
RunTransportTaskBaseVM.prototype['$t'] = undefined;




export default RunEmailTaskVM;

