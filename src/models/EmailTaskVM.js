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
import TaskType from './TaskType';
import TransportTaskBaseVM from './TransportTaskBaseVM';

/**
 * The EmailTaskVM model module.
 * @module models/EmailTaskVM
 * @version v1
 */
class EmailTaskVM {
    /**
     * Constructs a new <code>EmailTaskVM</code>.
     * @alias module:models/EmailTaskVM
     * @implements module:models/TransportTaskBaseVM
     */
    constructor() { 
        TransportTaskBaseVM.initialize(this);
        EmailTaskVM.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailTaskVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/EmailTaskVM} obj Optional instance to populate.
     * @return {module:models/EmailTaskVM} The populated <code>EmailTaskVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailTaskVM();
            TransportTaskBaseVM.constructFromObject(data, obj);

            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('isBodyHtml')) {
                obj['isBodyHtml'] = ApiClient.convertToType(data['isBodyHtml'], 'Boolean');
            }
            if (data.hasOwnProperty('subject')) {
                obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], ['String']);
            }
            if (data.hasOwnProperty('from')) {
                obj['from'] = ApiClient.convertToType(data['from'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('server')) {
                obj['server'] = ApiClient.convertToType(data['server'], 'String');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'Number');
            }
            if (data.hasOwnProperty('enableSsl')) {
                obj['enableSsl'] = ApiClient.convertToType(data['enableSsl'], 'Boolean');
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
 * @member {String} body
 */
EmailTaskVM.prototype['body'] = undefined;

/**
 * @member {Boolean} isBodyHtml
 */
EmailTaskVM.prototype['isBodyHtml'] = undefined;

/**
 * @member {String} subject
 */
EmailTaskVM.prototype['subject'] = undefined;

/**
 * @member {Array.<String>} to
 */
EmailTaskVM.prototype['to'] = undefined;

/**
 * @member {String} from
 */
EmailTaskVM.prototype['from'] = undefined;

/**
 * @member {String} username
 */
EmailTaskVM.prototype['username'] = undefined;

/**
 * @member {String} server
 */
EmailTaskVM.prototype['server'] = undefined;

/**
 * @member {Number} port
 */
EmailTaskVM.prototype['port'] = undefined;

/**
 * @member {Boolean} enableSsl
 */
EmailTaskVM.prototype['enableSsl'] = undefined;

/**
 * @member {String} name
 */
EmailTaskVM.prototype['name'] = undefined;

/**
 * @member {String} subscriptionId
 */
EmailTaskVM.prototype['subscriptionId'] = undefined;

/**
 * @member {module:models/TaskType} type
 */
EmailTaskVM.prototype['type'] = undefined;

/**
 * @member {Date} delayedRunTime
 */
EmailTaskVM.prototype['delayedRunTime'] = undefined;

/**
 * @member {String} cronExpression
 */
EmailTaskVM.prototype['cronExpression'] = undefined;


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




export default EmailTaskVM;

