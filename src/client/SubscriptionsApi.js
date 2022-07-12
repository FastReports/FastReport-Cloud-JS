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
import DefaultPermissionsVM from '../models/DefaultPermissionsVM';
import MyPermissionsVM from '../models/MyPermissionsVM';
import ProblemDetails from '../models/ProblemDetails';
import RenameSubscriptionVM from '../models/RenameSubscriptionVM';
import SubscriptionPermissionsVM from '../models/SubscriptionPermissionsVM';
import SubscriptionVM from '../models/SubscriptionVM';
import SubscriptionsVM from '../models/SubscriptionsVM';
import UpdateDefaultPermissionsVM from '../models/UpdateDefaultPermissionsVM';
import UpdateSubscriptionLocaleVM from '../models/UpdateSubscriptionLocaleVM';
import UpdateSubscriptionPermissionsVM from '../models/UpdateSubscriptionPermissionsVM';

/**
* Subscriptions service.
* @module client/SubscriptionsApi
* @version v1
*/
export default class SubscriptionsApi {

    /**
    * Constructs a new SubscriptionsApi. 
    * @alias module:client/SubscriptionsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get subscription's default permissions for new entities
     * @param {String} subscriptionId id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/DefaultPermissionsVM} and HTTP response
     */
    subscriptionsGetDefaultPermissionsWithHttpInfo(subscriptionId) {
      let postBody = null;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling subscriptionsGetDefaultPermissions");
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
      let returnType = DefaultPermissionsVM;
      if(!returnType) returnType = 'Blob';
      return this.apiClient.callApi(
        '/api/manage/v1/Subscriptions/{subscriptionId}/defaultPermissions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get subscription's default permissions for new entities
     * @param {String} subscriptionId id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/DefaultPermissionsVM}
     */
    subscriptionsGetDefaultPermissions(subscriptionId) {
      return this.subscriptionsGetDefaultPermissionsWithHttpInfo(subscriptionId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get user's permissions for a subscription by id
     * @param {String} subId subscription id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/MyPermissionsVM} and HTTP response
     */
    subscriptionsGetMyPermissionsWithHttpInfo(subId) {
      let postBody = null;
      // verify the required parameter 'subId' is set
      if (subId === undefined || subId === null) {
        throw new Error("Missing the required parameter 'subId' when calling subscriptionsGetMyPermissions");
      }

      let pathParams = {
        'subId': subId
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
      let returnType = MyPermissionsVM;
      if(!returnType) returnType = 'Blob';
      return this.apiClient.callApi(
        '/api/manage/v1/Subscriptions/{subId}/mypermissions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get user's permissions for a subscription by id
     * @param {String} subId subscription id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/MyPermissionsVM}
     */
    subscriptionsGetMyPermissions(subId) {
      return this.subscriptionsGetMyPermissionsWithHttpInfo(subId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get permissions for a subscription by id
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/SubscriptionPermissionsVM} and HTTP response
     */
    subscriptionsGetPermissionsWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling subscriptionsGetPermissions");
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
      let returnType = SubscriptionPermissionsVM;
      if(!returnType) returnType = 'Blob';
      return this.apiClient.callApi(
        '/api/manage/v1/Subscriptions/{id}/permissions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get permissions for a subscription by id
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/SubscriptionPermissionsVM}
     */
    subscriptionsGetPermissions(id) {
      return this.subscriptionsGetPermissionsWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns the subscription by id
     * @param {String} id Identifier of subscription
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/SubscriptionVM} and HTTP response
     */
    subscriptionsGetSubscriptionWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling subscriptionsGetSubscription");
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
      let returnType = SubscriptionVM;
      if(!returnType) returnType = 'Blob';
      return this.apiClient.callApi(
        '/api/manage/v1/Subscriptions/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns the subscription by id
     * @param {String} id Identifier of subscription
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/SubscriptionVM}
     */
    subscriptionsGetSubscription(id) {
      return this.subscriptionsGetSubscriptionWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns a list of all subscriptions of current user
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Variable for pagination, defautl value is 0 (default to 0)
     * @param {Number} opts.take Variable for pagination, default value is 10 (default to 10)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/SubscriptionsVM} and HTTP response
     */
    subscriptionsGetSubscriptionsWithHttpInfo(opts) {
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
      let returnType = SubscriptionsVM;
      if(!returnType) returnType = 'Blob';
      return this.apiClient.callApi(
        '/api/manage/v1/Subscriptions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns a list of all subscriptions of current user
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Variable for pagination, defautl value is 0 (default to 0)
     * @param {Number} opts.take Variable for pagination, default value is 10 (default to 10)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/SubscriptionsVM}
     */
    subscriptionsGetSubscriptions(opts) {
      return this.subscriptionsGetSubscriptionsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Rename subscription
     * @param {String} subscriptionId id
     * @param {module:models/RenameSubscriptionVM} renameSubscriptionVM rename VM
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/SubscriptionVM} and HTTP response
     */
    subscriptionsRenameSubscriptionWithHttpInfo(subscriptionId, renameSubscriptionVM) {
      let postBody = renameSubscriptionVM;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling subscriptionsRenameSubscription");
      }
      // verify the required parameter 'renameSubscriptionVM' is set
      if (renameSubscriptionVM === undefined || renameSubscriptionVM === null) {
        throw new Error("Missing the required parameter 'renameSubscriptionVM' when calling subscriptionsRenameSubscription");
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
      let contentTypes = ['application/json', 'text/json', 'application/_*+json'];
      let accepts = ['application/json'];
      let returnType = SubscriptionVM;
      if(!returnType) returnType = 'Blob';
      return this.apiClient.callApi(
        '/api/manage/v1/Subscriptions/{subscriptionId}/rename', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Rename subscription
     * @param {String} subscriptionId id
     * @param {module:models/RenameSubscriptionVM} renameSubscriptionVM rename VM
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/SubscriptionVM}
     */
    subscriptionsRenameSubscription(subscriptionId, renameSubscriptionVM) {
      return this.subscriptionsRenameSubscriptionWithHttpInfo(subscriptionId, renameSubscriptionVM)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Change subscription's default permissions for new entities
     * @param {String} subscriptionId id
     * @param {module:models/UpdateDefaultPermissionsVM} updateDefaultPermissionsVM update default permissions VM
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/DefaultPermissionsVM} and HTTP response
     */
    subscriptionsUpdateDefaultPermissionsWithHttpInfo(subscriptionId, updateDefaultPermissionsVM) {
      let postBody = updateDefaultPermissionsVM;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling subscriptionsUpdateDefaultPermissions");
      }
      // verify the required parameter 'updateDefaultPermissionsVM' is set
      if (updateDefaultPermissionsVM === undefined || updateDefaultPermissionsVM === null) {
        throw new Error("Missing the required parameter 'updateDefaultPermissionsVM' when calling subscriptionsUpdateDefaultPermissions");
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
      let contentTypes = ['application/json', 'text/json', 'application/_*+json'];
      let accepts = ['application/json'];
      let returnType = DefaultPermissionsVM;
      if(!returnType) returnType = 'Blob';
      return this.apiClient.callApi(
        '/api/manage/v1/Subscriptions/{subscriptionId}/defaultPermissions', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Change subscription's default permissions for new entities
     * @param {String} subscriptionId id
     * @param {module:models/UpdateDefaultPermissionsVM} updateDefaultPermissionsVM update default permissions VM
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/DefaultPermissionsVM}
     */
    subscriptionsUpdateDefaultPermissions(subscriptionId, updateDefaultPermissionsVM) {
      return this.subscriptionsUpdateDefaultPermissionsWithHttpInfo(subscriptionId, updateDefaultPermissionsVM)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update subscription's default locale
     * @param {String} subscriptionId id
     * @param {module:models/UpdateSubscriptionLocaleVM} updateSubscriptionLocaleVM update VM
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/SubscriptionVM} and HTTP response
     */
    subscriptionsUpdateLocaleWithHttpInfo(subscriptionId, updateSubscriptionLocaleVM) {
      let postBody = updateSubscriptionLocaleVM;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling subscriptionsUpdateLocale");
      }
      // verify the required parameter 'updateSubscriptionLocaleVM' is set
      if (updateSubscriptionLocaleVM === undefined || updateSubscriptionLocaleVM === null) {
        throw new Error("Missing the required parameter 'updateSubscriptionLocaleVM' when calling subscriptionsUpdateLocale");
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
      let contentTypes = ['application/json', 'text/json', 'application/_*+json'];
      let accepts = ['application/json'];
      let returnType = SubscriptionVM;
      if(!returnType) returnType = 'Blob';
      return this.apiClient.callApi(
        '/api/manage/v1/Subscriptions/{subscriptionId}/Locale', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update subscription's default locale
     * @param {String} subscriptionId id
     * @param {module:models/UpdateSubscriptionLocaleVM} updateSubscriptionLocaleVM update VM
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/SubscriptionVM}
     */
    subscriptionsUpdateLocale(subscriptionId, updateSubscriptionLocaleVM) {
      return this.subscriptionsUpdateLocaleWithHttpInfo(subscriptionId, updateSubscriptionLocaleVM)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update permissions
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:models/UpdateSubscriptionPermissionsVM} opts.updateSubscriptionPermissionsVM 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    subscriptionsUpdatePermissionsWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['updateSubscriptionPermissionsVM'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling subscriptionsUpdatePermissions");
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
      let contentTypes = ['application/json', 'text/json', 'application/_*+json'];
      let accepts = ['application/json'];
      let returnType = null;
      if(!returnType) returnType = 'Blob';
      return this.apiClient.callApi(
        '/api/manage/v1/Subscriptions/{id}/permissions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update permissions
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:models/UpdateSubscriptionPermissionsVM} opts.updateSubscriptionPermissionsVM 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    subscriptionsUpdatePermissions(id, opts) {
      return this.subscriptionsUpdatePermissionsWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
