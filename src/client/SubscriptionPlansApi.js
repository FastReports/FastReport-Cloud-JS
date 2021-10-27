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
import ProblemDetails from '../models/ProblemDetails';
import SubscriptionPlanVM from '../models/SubscriptionPlanVM';
import SubscriptionPlansVM from '../models/SubscriptionPlansVM';

/**
* SubscriptionPlans service.
* @module client/SubscriptionPlansApi
* @version v1
*/
export default class SubscriptionPlansApi {

    /**
    * Constructs a new SubscriptionPlansApi. 
    * @alias module:client/SubscriptionPlansApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Returns a subscription plan. Not all subscriptions can be issued for customer.
     * @param {String} id Identifier of subsctiption plan
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/SubscriptionPlanVM} and HTTP response
     */
    subscriptionPlansGetSubscriptionPlanWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling subscriptionPlansGetSubscriptionPlan");
      }

      let pathParams = {
        'id': id
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
      let returnType = SubscriptionPlanVM;
      if(!returnType) returnType = 'Blob';
      return this.apiClient.callApi(
        '/api/manage/v1/SubscriptionPlans/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns a subscription plan. Not all subscriptions can be issued for customer.
     * @param {String} id Identifier of subsctiption plan
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/SubscriptionPlanVM}
     */
    subscriptionPlansGetSubscriptionPlan(id) {
      return this.subscriptionPlansGetSubscriptionPlanWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns a list of active subscription plans that can be issued to the user.
     * If no active subscription plans, then the endpoint will return empty list
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Variable for pagination, defautl value is 0 (default to 0)
     * @param {Number} opts.take Variable for pagination, default value is 10 (default to 10)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/SubscriptionPlansVM} and HTTP response
     */
    subscriptionPlansGetSubscriptionPlansWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'skip': opts['skip'],
        'take': opts['take']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey', 'JWT'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SubscriptionPlansVM;
      if(!returnType) returnType = 'Blob';
      return this.apiClient.callApi(
        '/api/manage/v1/SubscriptionPlans', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns a list of active subscription plans that can be issued to the user.
     * If no active subscription plans, then the endpoint will return empty list
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Variable for pagination, defautl value is 0 (default to 0)
     * @param {Number} opts.take Variable for pagination, default value is 10 (default to 10)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/SubscriptionPlansVM}
     */
    subscriptionPlansGetSubscriptionPlans(opts) {
      return this.subscriptionPlansGetSubscriptionPlansWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
