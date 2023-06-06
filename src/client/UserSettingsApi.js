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


import ApiClient from "../ApiClient";
import AcceptAgreementsVM from '../models/AcceptAgreementsVM';
import ProblemDetails from '../models/ProblemDetails';
import UpdateUserSettingsVM from '../models/UpdateUserSettingsVM';
import UserSettingsVM from '../models/UserSettingsVM';

/**
* UserSettings service.
* @module client/UserSettingsApi
* @version v1
*/
export default class UserSettingsApi {

    /**
    * Constructs a new UserSettingsApi. 
    * @alias module:client/UserSettingsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Use this endpoint to accept current version of service license agreement
     * @param {Object} opts Optional parameters
     * @param {module:models/AcceptAgreementsVM} opts.acceptAgreementsVM 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    userSettingsAcceptAgreementsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['acceptAgreementsVM'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey', 'JWT'];
      let contentTypes = ['application/json', 'text/json', 'application/*+json'];
      let accepts = [];
      let returnType = null;
      if(!returnType) returnType = 'Blob';
      return this.apiClient.callApi(
        '/api/manage/v1/UserSettings/accept', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Use this endpoint to accept current version of service license agreement
     * @param {Object} opts Optional parameters
     * @param {module:models/AcceptAgreementsVM} opts.acceptAgreementsVM 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    userSettingsAcceptAgreements(opts) {
      return this.userSettingsAcceptAgreementsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Return current user settings.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/UserSettingsVM} and HTTP response
     */
    userSettingsGetCurrentUserSettingsWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey', 'JWT'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = UserSettingsVM;
      if(!returnType) returnType = 'Blob';
      return this.apiClient.callApi(
        '/api/manage/v1/UserSettings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Return current user settings.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/UserSettingsVM}
     */
    userSettingsGetCurrentUserSettings() {
      return this.userSettingsGetCurrentUserSettingsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update settings of the current user
     * @param {Object} opts Optional parameters
     * @param {module:models/UpdateUserSettingsVM} opts.updateUserSettingsVM 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/UserSettingsVM} and HTTP response
     */
    userSettingsUpdateMySettingsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['updateUserSettingsVM'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey', 'JWT'];
      let contentTypes = ['application/json', 'text/json', 'application/*+json'];
      let accepts = ['application/json'];
      let returnType = UserSettingsVM;
      if(!returnType) returnType = 'Blob';
      return this.apiClient.callApi(
        '/api/manage/v1/UserSettings', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update settings of the current user
     * @param {Object} opts Optional parameters
     * @param {module:models/UpdateUserSettingsVM} opts.updateUserSettingsVM 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/UserSettingsVM}
     */
    userSettingsUpdateMySettings(opts) {
      return this.userSettingsUpdateMySettingsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
