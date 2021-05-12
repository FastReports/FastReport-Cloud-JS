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
import CreateSubscriptionInviteVM from '../models/CreateSubscriptionInviteVM';
import ProblemDetails from '../models/ProblemDetails';
import SubscriptionInvitesVM from '../models/SubscriptionInvitesVM';
import SubscriptionVM from '../models/SubscriptionVM';

/**
* SubscriptionInvites service.
* @module client/SubscriptionInvitesApi
* @version v1
*/
export default class SubscriptionInvitesApi {

    /**
    * Constructs a new SubscriptionInvitesApi. 
    * @alias module:client/SubscriptionInvitesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Add a user to the subscription using invite,  the added users will be displayed in the list of users of the subscription,  and these users will also have an active subscription.
     * @param {String} subscriptionId Idenitifier of subscription
     * @param {String} accessToken access token of the subscription
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    subscriptionInvitesAcceptInviteWithHttpInfo(subscriptionId, accessToken) {
      let postBody = null;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling subscriptionInvitesAcceptInvite");
      }
      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling subscriptionInvitesAcceptInvite");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'accessToken': accessToken
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey', 'JWT'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/manage/v1/Subscriptions/{subscriptionId}/invite/{accessToken}/accept', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add a user to the subscription using invite,  the added users will be displayed in the list of users of the subscription,  and these users will also have an active subscription.
     * @param {String} subscriptionId Idenitifier of subscription
     * @param {String} accessToken access token of the subscription
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    subscriptionInvitesAcceptInvite(subscriptionId, accessToken) {
      return this.subscriptionInvitesAcceptInviteWithHttpInfo(subscriptionId, accessToken)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create invite to subscription
     * @param {String} subscriptionId id
     * @param {Object} opts Optional parameters
     * @param {module:models/CreateSubscriptionInviteVM} opts.createInviteVM create VM
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/SubscriptionVM} and HTTP response
     */
    subscriptionInvitesCreateInviteWithHttpInfo(subscriptionId, opts) {
      opts = opts || {};
      let postBody = opts['createInviteVM'];
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling subscriptionInvitesCreateInvite");
      }

      let pathParams = {
        'subscriptionId': subscriptionId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey', 'JWT'];
      let contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = SubscriptionVM;
      return this.apiClient.callApi(
        '/api/manage/v1/Subscriptions/{subscriptionId}/invite', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create invite to subscription
     * @param {String} subscriptionId id
     * @param {Object} opts Optional parameters
     * @param {module:models/CreateSubscriptionInviteVM} opts.createInviteVM create VM
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/SubscriptionVM}
     */
    subscriptionInvitesCreateInvite(subscriptionId, opts) {
      return this.subscriptionInvitesCreateInviteWithHttpInfo(subscriptionId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Rename subscription
     * @param {String} subscriptionId id
     * @param {String} accesstoken invite's token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    subscriptionInvitesDeleteInviteWithHttpInfo(subscriptionId, accesstoken) {
      let postBody = null;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling subscriptionInvitesDeleteInvite");
      }
      // verify the required parameter 'accesstoken' is set
      if (accesstoken === undefined || accesstoken === null) {
        throw new Error("Missing the required parameter 'accesstoken' when calling subscriptionInvitesDeleteInvite");
      }

      let pathParams = {
        'subscriptionId': subscriptionId,
        'accesstoken': accesstoken
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey', 'JWT'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/manage/v1/Subscriptions/{subscriptionId}/invite/{accesstoken}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Rename subscription
     * @param {String} subscriptionId id
     * @param {String} accesstoken invite's token
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    subscriptionInvitesDeleteInvite(subscriptionId, accesstoken) {
      return this.subscriptionInvitesDeleteInviteWithHttpInfo(subscriptionId, accesstoken)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get list of invites in a subscription,  the added users will be displayed in the list of users of the subscription,  and these users will also have an active subscription.
     * @param {String} subscriptionId Idenitifier of subscription
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/SubscriptionInvitesVM} and HTTP response
     */
    subscriptionInvitesGetInvitesWithHttpInfo(subscriptionId) {
      let postBody = null;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling subscriptionInvitesGetInvites");
      }

      let pathParams = {
        'subscriptionId': subscriptionId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey', 'JWT'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = SubscriptionInvitesVM;
      return this.apiClient.callApi(
        '/api/manage/v1/Subscriptions/{subscriptionId}/invites', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get list of invites in a subscription,  the added users will be displayed in the list of users of the subscription,  and these users will also have an active subscription.
     * @param {String} subscriptionId Idenitifier of subscription
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/SubscriptionInvitesVM}
     */
    subscriptionInvitesGetInvites(subscriptionId) {
      return this.subscriptionInvitesGetInvitesWithHttpInfo(subscriptionId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
