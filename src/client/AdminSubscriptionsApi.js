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
import AdminSubscriptionVM from '../models/AdminSubscriptionVM';
import AdminSubscriptionsVM from '../models/AdminSubscriptionsVM';
import CreateSubscriptionVM from '../models/CreateSubscriptionVM';
import ProblemDetails from '../models/ProblemDetails';
import SubscriptionPermissionsVM from '../models/SubscriptionPermissionsVM';
import UpdateSubscriptionPermissionsVM from '../models/UpdateSubscriptionPermissionsVM';
import UpdateSubscriptionVM from '../models/UpdateSubscriptionVM';

/**
* AdminSubscriptions service.
* @module client/AdminSubscriptionsApi
* @version v1
*/
export default class AdminSubscriptionsApi {

    /**
    * Constructs a new AdminSubscriptionsApi. 
    * @alias module:client/AdminSubscriptionsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create a new subscription based on some plan
     * @param {Object} opts Optional parameters
     * @param {module:models/CreateSubscriptionVM} opts.viewModel View model
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/AdminSubscriptionVM} and HTTP response
     */
    adminSubscriptionsCreateSubscriptionWithHttpInfo(opts) {
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
      let returnType = AdminSubscriptionVM;
      return this.apiClient.callApi(
        '/api/admin/v1/Subscriptions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a new subscription based on some plan
     * @param {Object} opts Optional parameters
     * @param {module:models/CreateSubscriptionVM} opts.viewModel View model
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/AdminSubscriptionVM}
     */
    adminSubscriptionsCreateSubscription(opts) {
      return this.adminSubscriptionsCreateSubscriptionWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete the subscription by id
     * @param {String} id Identifier of subscription
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    adminSubscriptionsDeleteSubscriptionWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling adminSubscriptionsDeleteSubscription");
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
        '/api/admin/v1/Subscriptions/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete the subscription by id
     * @param {String} id Identifier of subscription
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    adminSubscriptionsDeleteSubscription(id) {
      return this.adminSubscriptionsDeleteSubscriptionWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns a key-value pair of new(renew) subscriptions count per month for a specified time span: (month, number of new subscriptions)
     * If no subscriptions, then the endpoint will return empty dic
     * @param {Date} from A starting date for stats calculation
     * @param {Date} to An ending date for stats calculation
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, {String: Number}>} and HTTP response
     */
    adminSubscriptionsGetNewSibscriptionsPerMonthWithHttpInfo(from, to) {
      let postBody = null;
      // verify the required parameter 'from' is set
      if (from === undefined || from === null) {
        throw new Error("Missing the required parameter 'from' when calling adminSubscriptionsGetNewSibscriptionsPerMonth");
      }
      // verify the required parameter 'to' is set
      if (to === undefined || to === null) {
        throw new Error("Missing the required parameter 'to' when calling adminSubscriptionsGetNewSibscriptionsPerMonth");
      }

      let pathParams = {
        'from': from,
        'to': to
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
      let returnType = {'String': 'Number'};
      return this.apiClient.callApi(
        '/api/admin/v1/Subscriptions/stat/new/{from}/{to}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns a key-value pair of new(renew) subscriptions count per month for a specified time span: (month, number of new subscriptions)
     * If no subscriptions, then the endpoint will return empty dic
     * @param {Date} from A starting date for stats calculation
     * @param {Date} to An ending date for stats calculation
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, {String: Number}>}
     */
    adminSubscriptionsGetNewSibscriptionsPerMonth(from, to) {
      return this.adminSubscriptionsGetNewSibscriptionsPerMonthWithHttpInfo(from, to)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all subscription permissions
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/SubscriptionPermissionsVM} and HTTP response
     */
    adminSubscriptionsGetPermissionsWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling adminSubscriptionsGetPermissions");
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
      let returnType = SubscriptionPermissionsVM;
      return this.apiClient.callApi(
        '/api/admin/v1/Subscriptions/{id}/permissions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all subscription permissions
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/SubscriptionPermissionsVM}
     */
    adminSubscriptionsGetPermissions(id) {
      return this.adminSubscriptionsGetPermissionsWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns the subscription by id
     * @param {String} id Identifier of subscription
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/AdminSubscriptionVM} and HTTP response
     */
    adminSubscriptionsGetSubscriptionWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling adminSubscriptionsGetSubscription");
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
      let returnType = AdminSubscriptionVM;
      return this.apiClient.callApi(
        '/api/admin/v1/Subscriptions/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns the subscription by id
     * @param {String} id Identifier of subscription
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/AdminSubscriptionVM}
     */
    adminSubscriptionsGetSubscription(id) {
      return this.adminSubscriptionsGetSubscriptionWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns a list of all subscriptions
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Variable for pagination, defautl value is 0 (default to 0)
     * @param {Number} opts.take Variable for pagination, default value is 10 (default to 10)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/AdminSubscriptionsVM} and HTTP response
     */
    adminSubscriptionsGetSubscriptionsWithHttpInfo(opts) {
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
      let returnType = AdminSubscriptionsVM;
      return this.apiClient.callApi(
        '/api/admin/v1/Subscriptions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns a list of all subscriptions
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Variable for pagination, defautl value is 0 (default to 0)
     * @param {Number} opts.take Variable for pagination, default value is 10 (default to 10)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/AdminSubscriptionsVM}
     */
    adminSubscriptionsGetSubscriptions(opts) {
      return this.adminSubscriptionsGetSubscriptionsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Recount subscription's files and folders sizes.
     * @param {String} id Identifier of subscription
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    adminSubscriptionsReCountSubscriptionWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling adminSubscriptionsReCountSubscription");
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
        '/api/admin/v1/Subscriptions/{id}/recount', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Recount subscription's files and folders sizes.
     * @param {String} id Identifier of subscription
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    adminSubscriptionsReCountSubscription(id) {
      return this.adminSubscriptionsReCountSubscriptionWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update permissions to subscription
     * @param {String} id subscription id
     * @param {Object} opts Optional parameters
     * @param {module:models/UpdateSubscriptionPermissionsVM} opts.permissionsVM permissions VM
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    adminSubscriptionsUpdatePermissionsWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['permissionsVM'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling adminSubscriptionsUpdatePermissions");
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
      let returnType = null;
      return this.apiClient.callApi(
        '/api/admin/v1/Subscriptions/{id}/permissions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update permissions to subscription
     * @param {String} id subscription id
     * @param {Object} opts Optional parameters
     * @param {module:models/UpdateSubscriptionPermissionsVM} opts.permissionsVM permissions VM
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    adminSubscriptionsUpdatePermissions(id, opts) {
      return this.adminSubscriptionsUpdatePermissionsWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update the subscription by id
     * @param {String} id Identifier of subscription
     * @param {Object} opts Optional parameters
     * @param {module:models/UpdateSubscriptionVM} opts.viewModel View model
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/AdminSubscriptionVM} and HTTP response
     */
    adminSubscriptionsUpdateSubscriptionWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['viewModel'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling adminSubscriptionsUpdateSubscription");
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
      let returnType = AdminSubscriptionVM;
      return this.apiClient.callApi(
        '/api/admin/v1/Subscriptions/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update the subscription by id
     * @param {String} id Identifier of subscription
     * @param {Object} opts Optional parameters
     * @param {module:models/UpdateSubscriptionVM} opts.viewModel View model
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/AdminSubscriptionVM}
     */
    adminSubscriptionsUpdateSubscription(id, opts) {
      return this.adminSubscriptionsUpdateSubscriptionWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
