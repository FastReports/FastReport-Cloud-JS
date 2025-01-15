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
import AuthConfigVM from './AuthConfigVM';
import CloudBaseVM from './CloudBaseVM';
import FrontendAppVM from './FrontendAppVM';

/**
 * The ServerConfigurationVM model module.
 * @module models/ServerConfigurationVM
 * @version v1
 */
class ServerConfigurationVM {
    /**
     * Constructs a new <code>ServerConfigurationVM</code>.
     * @alias module:models/ServerConfigurationVM
     * @extends module:models/CloudBaseVM
     * @implements module:models/CloudBaseVM
     * @param t {String} 
     */
    constructor(t) { 
        CloudBaseVM.initialize(this, t);
        ServerConfigurationVM.initialize(this, t);
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
     * Constructs a <code>ServerConfigurationVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ServerConfigurationVM} obj Optional instance to populate.
     * @return {module:models/ServerConfigurationVM} The populated <code>ServerConfigurationVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServerConfigurationVM();
            CloudBaseVM.constructFromObject(data, obj);
            CloudBaseVM.constructFromObject(data, obj);

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('companyName')) {
                obj['companyName'] = ApiClient.convertToType(data['companyName'], 'String');
            }
            if (data.hasOwnProperty('logoLink')) {
                obj['logoLink'] = ApiClient.convertToType(data['logoLink'], 'String');
            }
            if (data.hasOwnProperty('copyright')) {
                obj['copyright'] = ApiClient.convertToType(data['copyright'], 'String');
            }
            if (data.hasOwnProperty('corporateServerMode')) {
                obj['corporateServerMode'] = ApiClient.convertToType(data['corporateServerMode'], 'Boolean');
            }
            if (data.hasOwnProperty('lastSLAVersion')) {
                obj['lastSLAVersion'] = ApiClient.convertToType(data['lastSLAVersion'], 'Date');
            }
            if (data.hasOwnProperty('isDisabled')) {
                obj['isDisabled'] = ApiClient.convertToType(data['isDisabled'], 'Boolean');
            }
            if (data.hasOwnProperty('frontend')) {
                obj['frontend'] = FrontendAppVM.constructFromObject(data['frontend']);
            }
            if (data.hasOwnProperty('invariantLocale')) {
                obj['invariantLocale'] = ApiClient.convertToType(data['invariantLocale'], 'String');
            }
            if (data.hasOwnProperty('auth')) {
                obj['auth'] = AuthConfigVM.constructFromObject(data['auth']);
            }
            if (data.hasOwnProperty('designerForAnons')) {
                obj['designerForAnons'] = ApiClient.convertToType(data['designerForAnons'], 'Boolean');
            }
            if (data.hasOwnProperty('slaLink')) {
                obj['slaLink'] = ApiClient.convertToType(data['slaLink'], 'String');
            }
            if (data.hasOwnProperty('firstStepsVideoLink')) {
                obj['firstStepsVideoLink'] = ApiClient.convertToType(data['firstStepsVideoLink'], 'String');
            }
            if (data.hasOwnProperty('aboutLink')) {
                obj['aboutLink'] = ApiClient.convertToType(data['aboutLink'], 'String');
            }
            if (data.hasOwnProperty('homePageLink')) {
                obj['homePageLink'] = ApiClient.convertToType(data['homePageLink'], 'String');
            }
            if (data.hasOwnProperty('authServerName')) {
                obj['authServerName'] = ApiClient.convertToType(data['authServerName'], 'String');
            }
            if (data.hasOwnProperty('updateWorkspaceLink')) {
                obj['updateWorkspaceLink'] = ApiClient.convertToType(data['updateWorkspaceLink'], 'String');
            }
            if (data.hasOwnProperty('sharingEnabled')) {
                obj['sharingEnabled'] = ApiClient.convertToType(data['sharingEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('$t')) {
                obj['$t'] = ApiClient.convertToType(data['$t'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ServerConfigurationVM</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ServerConfigurationVM</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ServerConfigurationVM.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['companyName'] && !(typeof data['companyName'] === 'string' || data['companyName'] instanceof String)) {
            throw new Error("Expected the field `companyName` to be a primitive type in the JSON string but got " + data['companyName']);
        }
        // ensure the json data is a string
        if (data['logoLink'] && !(typeof data['logoLink'] === 'string' || data['logoLink'] instanceof String)) {
            throw new Error("Expected the field `logoLink` to be a primitive type in the JSON string but got " + data['logoLink']);
        }
        // ensure the json data is a string
        if (data['copyright'] && !(typeof data['copyright'] === 'string' || data['copyright'] instanceof String)) {
            throw new Error("Expected the field `copyright` to be a primitive type in the JSON string but got " + data['copyright']);
        }
        // validate the optional field `frontend`
        if (data['frontend']) { // data not null
          FrontendAppVM.validateJSON(data['frontend']);
        }
        // ensure the json data is a string
        if (data['invariantLocale'] && !(typeof data['invariantLocale'] === 'string' || data['invariantLocale'] instanceof String)) {
            throw new Error("Expected the field `invariantLocale` to be a primitive type in the JSON string but got " + data['invariantLocale']);
        }
        // validate the optional field `auth`
        if (data['auth']) { // data not null
          AuthConfigVM.validateJSON(data['auth']);
        }
        // ensure the json data is a string
        if (data['slaLink'] && !(typeof data['slaLink'] === 'string' || data['slaLink'] instanceof String)) {
            throw new Error("Expected the field `slaLink` to be a primitive type in the JSON string but got " + data['slaLink']);
        }
        // ensure the json data is a string
        if (data['firstStepsVideoLink'] && !(typeof data['firstStepsVideoLink'] === 'string' || data['firstStepsVideoLink'] instanceof String)) {
            throw new Error("Expected the field `firstStepsVideoLink` to be a primitive type in the JSON string but got " + data['firstStepsVideoLink']);
        }
        // ensure the json data is a string
        if (data['aboutLink'] && !(typeof data['aboutLink'] === 'string' || data['aboutLink'] instanceof String)) {
            throw new Error("Expected the field `aboutLink` to be a primitive type in the JSON string but got " + data['aboutLink']);
        }
        // ensure the json data is a string
        if (data['homePageLink'] && !(typeof data['homePageLink'] === 'string' || data['homePageLink'] instanceof String)) {
            throw new Error("Expected the field `homePageLink` to be a primitive type in the JSON string but got " + data['homePageLink']);
        }
        // ensure the json data is a string
        if (data['authServerName'] && !(typeof data['authServerName'] === 'string' || data['authServerName'] instanceof String)) {
            throw new Error("Expected the field `authServerName` to be a primitive type in the JSON string but got " + data['authServerName']);
        }
        // ensure the json data is a string
        if (data['updateWorkspaceLink'] && !(typeof data['updateWorkspaceLink'] === 'string' || data['updateWorkspaceLink'] instanceof String)) {
            throw new Error("Expected the field `updateWorkspaceLink` to be a primitive type in the JSON string but got " + data['updateWorkspaceLink']);
        }
        // ensure the json data is a string
        if (data['$t'] && !(typeof data['$t'] === 'string' || data['$t'] instanceof String)) {
            throw new Error("Expected the field `$t` to be a primitive type in the JSON string but got " + data['$t']);
        }

        return true;
    }


}

ServerConfigurationVM.RequiredProperties = ["$t"];

/**
 * @member {String} title
 */
ServerConfigurationVM.prototype['title'] = undefined;

/**
 * @member {String} companyName
 */
ServerConfigurationVM.prototype['companyName'] = undefined;

/**
 * @member {String} logoLink
 */
ServerConfigurationVM.prototype['logoLink'] = undefined;

/**
 * @member {String} copyright
 */
ServerConfigurationVM.prototype['copyright'] = undefined;

/**
 * @member {Boolean} corporateServerMode
 */
ServerConfigurationVM.prototype['corporateServerMode'] = undefined;

/**
 * @member {Date} lastSLAVersion
 */
ServerConfigurationVM.prototype['lastSLAVersion'] = undefined;

/**
 * @member {Boolean} isDisabled
 */
ServerConfigurationVM.prototype['isDisabled'] = undefined;

/**
 * @member {module:models/FrontendAppVM} frontend
 */
ServerConfigurationVM.prototype['frontend'] = undefined;

/**
 * @member {String} invariantLocale
 */
ServerConfigurationVM.prototype['invariantLocale'] = undefined;

/**
 * @member {module:models/AuthConfigVM} auth
 */
ServerConfigurationVM.prototype['auth'] = undefined;

/**
 * @member {Boolean} designerForAnons
 */
ServerConfigurationVM.prototype['designerForAnons'] = undefined;

/**
 * @member {String} slaLink
 */
ServerConfigurationVM.prototype['slaLink'] = undefined;

/**
 * @member {String} firstStepsVideoLink
 */
ServerConfigurationVM.prototype['firstStepsVideoLink'] = undefined;

/**
 * @member {String} aboutLink
 */
ServerConfigurationVM.prototype['aboutLink'] = undefined;

/**
 * @member {String} homePageLink
 */
ServerConfigurationVM.prototype['homePageLink'] = undefined;

/**
 * @member {String} authServerName
 */
ServerConfigurationVM.prototype['authServerName'] = undefined;

/**
 * @member {String} updateWorkspaceLink
 */
ServerConfigurationVM.prototype['updateWorkspaceLink'] = undefined;

/**
 * @member {Boolean} sharingEnabled
 */
ServerConfigurationVM.prototype['sharingEnabled'] = undefined;

/**
 * @member {String} $t
 */
ServerConfigurationVM.prototype['$t'] = undefined;


// Implement CloudBaseVM interface:
/**
 * @member {String} $t
 */
CloudBaseVM.prototype['$t'] = undefined;




export default ServerConfigurationVM;

