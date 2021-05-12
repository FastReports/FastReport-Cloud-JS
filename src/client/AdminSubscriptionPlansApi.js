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
import CreateSubscriptionPlanVM from '../models/CreateSubscriptionPlanVM';
import ProblemDetails from '../models/ProblemDetails';
import SubscriptionPlanVM from '../models/SubscriptionPlanVM';
import SubscriptionPlansVM from '../models/SubscriptionPlansVM';
import UpdateSubscriptionPlanVM from '../models/UpdateSubscriptionPlanVM';

/**
* AdminSubscriptionPlans service.
* @module client/AdminSubscriptionPlansApi
* @version v1
*/
export default class AdminSubscriptionPlansApi {

    /**
    * Constructs a new AdminSubscriptionPlansApi. 
    * @alias module:client/AdminSubscriptionPlansApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create a new subscription plan, returns a new model
     * @param {Object} opts Optional parameters
     * @param {module:models/CreateSubscriptionPlanVM} opts.viewModel 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/SubscriptionPlanVM} and HTTP response
     */
    adminSubscriptionPlansCreateSubscriptionPlanWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['viewModel'];

      let pathParams = {
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
      let returnType = SubscriptionPlanVM;
      return this.apiClient.callApi(
        '/api/admin/v1/SubscriptionPlans', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a new subscription plan, returns a new model
     * @param {Object} opts Optional parameters
     * @param {module:models/CreateSubscriptionPlanVM} opts.viewModel 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/SubscriptionPlanVM}
     */
    adminSubscriptionPlansCreateSubscriptionPlan(opts) {
      return this.adminSubscriptionPlansCreateSubscriptionPlanWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a subscription plan.
     * @param {String} id Identifier of subsctiption plan
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    adminSubscriptionPlansDeleteSubscriptionPlanWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling adminSubscriptionPlansDeleteSubscriptionPlan");
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
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/admin/v1/SubscriptionPlans/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a subscription plan.
     * @param {String} id Identifier of subsctiption plan
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    adminSubscriptionPlansDeleteSubscriptionPlan(id) {
      return this.adminSubscriptionPlansDeleteSubscriptionPlanWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns a subscription plan. Not all subscriptions can be issued for customer.
     * @param {String} id Identifier of subsctiption plan
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/SubscriptionPlanVM} and HTTP response
     */
    adminSubscriptionPlansGetSubscriptionPlanWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling adminSubscriptionPlansGetSubscriptionPlan");
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
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = SubscriptionPlanVM;
      return this.apiClient.callApi(
        '/api/admin/v1/SubscriptionPlans/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns a subscription plan. Not all subscriptions can be issued for customer.
     * @param {String} id Identifier of subsctiption plan
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/SubscriptionPlanVM}
     */
    adminSubscriptionPlansGetSubscriptionPlan(id) {
      return this.adminSubscriptionPlansGetSubscriptionPlanWithHttpInfo(id)
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
    adminSubscriptionPlansGetSubscriptionPlansWithHttpInfo(opts) {
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
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = SubscriptionPlansVM;
      return this.apiClient.callApi(
        '/api/admin/v1/SubscriptionPlans', 'GET',
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
    adminSubscriptionPlansGetSubscriptionPlans(opts) {
      return this.adminSubscriptionPlansGetSubscriptionPlansWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a subscription plan.
     * @param {String} id Identifier of subsctiption plan
     * @param {Object} opts Optional parameters
     * @param {module:models/UpdateSubscriptionPlanVM} opts.viewModel Update VM
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/SubscriptionPlanVM} and HTTP response
     */
    adminSubscriptionPlansUpdateSubscriptionPlanWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['viewModel'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling adminSubscriptionPlansUpdateSubscriptionPlan");
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
      let contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = SubscriptionPlanVM;
      return this.apiClient.callApi(
        '/api/admin/v1/SubscriptionPlans/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a subscription plan.
     * @param {String} id Identifier of subsctiption plan
     * @param {Object} opts Optional parameters
     * @param {module:models/UpdateSubscriptionPlanVM} opts.viewModel Update VM
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/SubscriptionPlanVM}
     */
    adminSubscriptionPlansUpdateSubscriptionPlan(id, opts) {
      return this.adminSubscriptionPlansUpdateSubscriptionPlanWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
