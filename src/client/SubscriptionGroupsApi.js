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
import GroupsVM from '../models/GroupsVM';
import ProblemDetails from '../models/ProblemDetails';

/**
* SubscriptionGroups service.
* @module client/SubscriptionGroupsApi
* @version v1
*/
export default class SubscriptionGroupsApi {

    /**
    * Constructs a new SubscriptionGroupsApi. 
    * @alias module:client/SubscriptionGroupsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Returns a number of groups in subscription
     * @param {String} subscriptionId subscripiton id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Number} and HTTP response
     */
    subscriptionGroupsCountGroupsAsyncWithHttpInfo(subscriptionId) {
      let postBody = null;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling subscriptionGroupsCountGroupsAsync");
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
      let accepts = ['application/json'];
      let returnType = 'Number';
      if(!returnType) returnType = 'Blob';
      return this.apiClient.callApi(
        '/api/manage/v1/Subscriptions/{subscriptionId}/count', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns a number of groups in subscription
     * @param {String} subscriptionId subscripiton id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Number}
     */
    subscriptionGroupsCountGroupsAsync(subscriptionId) {
      return this.subscriptionGroupsCountGroupsAsyncWithHttpInfo(subscriptionId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * returns groups of the subscription or subscription user
     * @param {String} subscriptionId subscripiton id
     * @param {Object} opts Optional parameters
     * @param {String} opts.userId user Id (optional)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/GroupsVM} and HTTP response
     */
    subscriptionGroupsGetGroupsListWithHttpInfo(subscriptionId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling subscriptionGroupsGetGroupsList");
      }

      let pathParams = {
        'subscriptionId': subscriptionId
      };
      let queryParams = {
        'userId': opts['userId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey', 'JWT'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GroupsVM;
      if(!returnType) returnType = 'Blob';
      return this.apiClient.callApi(
        '/api/manage/v1/Subscriptions/{subscriptionId}/groups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * returns groups of the subscription or subscription user
     * @param {String} subscriptionId subscripiton id
     * @param {Object} opts Optional parameters
     * @param {String} opts.userId user Id (optional)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/GroupsVM}
     */
    subscriptionGroupsGetGroupsList(subscriptionId, opts) {
      return this.subscriptionGroupsGetGroupsListWithHttpInfo(subscriptionId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
