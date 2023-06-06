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
import CreateDataSourceVM from '../models/CreateDataSourceVM';
import DataSourcePermissionsVM from '../models/DataSourcePermissionsVM';
import DataSourceSorting from '../models/DataSourceSorting';
import DataSourceVM from '../models/DataSourceVM';
import DataSourcesVM from '../models/DataSourcesVM';
import ProblemDetails from '../models/ProblemDetails';
import RenameDataSourceVM from '../models/RenameDataSourceVM';
import UpdateDataSourceConnectionStringVM from '../models/UpdateDataSourceConnectionStringVM';
import UpdateDataSourcePermissionsVM from '../models/UpdateDataSourcePermissionsVM';
import UpdateDataSourceSubscriptionVM from '../models/UpdateDataSourceSubscriptionVM';

/**
* DataSources service.
* @module client/DataSourcesApi
* @version v1
*/
export default class DataSourcesApi {

    /**
    * Constructs a new DataSourcesApi. 
    * @alias module:client/DataSourcesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Returns a number of data sources in subscription
     * @param {String} subscriptionId subscripiton id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Number} and HTTP response
     */
    dataSourcesCountDataSourcesAsyncWithHttpInfo(subscriptionId) {
      let postBody = null;
      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling dataSourcesCountDataSourcesAsync");
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
        '/api/data/v1/DataSources/{subscriptionId}/count', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns a number of data sources in subscription
     * @param {String} subscriptionId subscripiton id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Number}
     */
    dataSourcesCountDataSourcesAsync(subscriptionId) {
      return this.dataSourcesCountDataSourcesAsyncWithHttpInfo(subscriptionId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create new data source
     * @param {Object} opts Optional parameters
     * @param {module:models/CreateDataSourceVM} opts.createDataSourceVM create viewmodel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/DataSourceVM} and HTTP response
     */
    dataSourcesCreateDataSourceWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['createDataSourceVM'];

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
      let returnType = DataSourceVM;
      if(!returnType) returnType = 'Blob';
      return this.apiClient.callApi(
        '/api/data/v1/DataSources', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create new data source
     * @param {Object} opts Optional parameters
     * @param {module:models/CreateDataSourceVM} opts.createDataSourceVM create viewmodel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/DataSourceVM}
     */
    dataSourcesCreateDataSource(opts) {
      return this.dataSourcesCreateDataSourceWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete data source by id
     * @param {String} id data source id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    dataSourcesDeleteDataSourceWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling dataSourcesDeleteDataSource");
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
      let returnType = null;
      if(!returnType) returnType = 'Blob';
      return this.apiClient.callApi(
        '/api/data/v1/DataSources/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete data source by id
     * @param {String} id data source id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    dataSourcesDeleteDataSource(id) {
      return this.dataSourcesDeleteDataSourceWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * This should connect to a database and set data structure
     * @param {String} id datasource's id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    dataSourcesFetchDataWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling dataSourcesFetchData");
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
      let returnType = null;
      if(!returnType) returnType = 'Blob';
      return this.apiClient.callApi(
        '/api/data/v1/DataSources/{id}/fetch', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * This should connect to a database and set data structure
     * @param {String} id datasource's id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    dataSourcesFetchData(id) {
      return this.dataSourcesFetchDataWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns all of the data sources, that current user have permission for in a subscription <br />  The method will return minimal infomration about the datasources: <br />  id, name, editedTime, status.
     * @param {Object} opts Optional parameters
     * @param {String} opts.subscriptionId subscription id
     * @param {Number} opts.skip how many data sources will be skipped (default to 0)
     * @param {Number} opts.take how many data sources will be taken (default to 10)
     * @param {module:models/DataSourceSorting} opts.orderBy field to order by
     * @param {Boolean} opts.desc descending sort (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/DataSourcesVM} and HTTP response
     */
    dataSourcesGetAvailableDataSourcesWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'subscriptionId': opts['subscriptionId'],
        'skip': opts['skip'],
        'take': opts['take'],
        'orderBy': opts['orderBy'],
        'desc': opts['desc']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey', 'JWT'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DataSourcesVM;
      if(!returnType) returnType = 'Blob';
      return this.apiClient.callApi(
        '/api/data/v1/DataSources', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns all of the data sources, that current user have permission for in a subscription <br />  The method will return minimal infomration about the datasources: <br />  id, name, editedTime, status.
     * @param {Object} opts Optional parameters
     * @param {String} opts.subscriptionId subscription id
     * @param {Number} opts.skip how many data sources will be skipped (default to 0)
     * @param {Number} opts.take how many data sources will be taken (default to 10)
     * @param {module:models/DataSourceSorting} opts.orderBy field to order by
     * @param {Boolean} opts.desc descending sort (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/DataSourcesVM}
     */
    dataSourcesGetAvailableDataSources(opts) {
      return this.dataSourcesGetAvailableDataSourcesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get data source by id
     * @param {String} id data source id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/DataSourceVM} and HTTP response
     */
    dataSourcesGetDataSourceWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling dataSourcesGetDataSource");
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
      let returnType = DataSourceVM;
      if(!returnType) returnType = 'Blob';
      return this.apiClient.callApi(
        '/api/data/v1/DataSources/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get data source by id
     * @param {String} id data source id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/DataSourceVM}
     */
    dataSourcesGetDataSource(id) {
      return this.dataSourcesGetDataSourceWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all Data source permissions
     * @param {String} id data source id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/DataSourcePermissionsVM} and HTTP response
     */
    dataSourcesGetPermissionsWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling dataSourcesGetPermissions");
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
      let returnType = DataSourcePermissionsVM;
      if(!returnType) returnType = 'Blob';
      return this.apiClient.callApi(
        '/api/data/v1/DataSources/{id}/permissions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all Data source permissions
     * @param {String} id data source id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/DataSourcePermissionsVM}
     */
    dataSourcesGetPermissions(id) {
      return this.dataSourcesGetPermissionsWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Rename data source by id
     * @param {String} id data source id
     * @param {Object} opts Optional parameters
     * @param {module:models/RenameDataSourceVM} opts.renameDataSourceVM rename viewmodel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/DataSourceVM} and HTTP response
     */
    dataSourcesRenameDataSourceWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['renameDataSourceVM'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling dataSourcesRenameDataSource");
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
      let contentTypes = ['application/json', 'text/json', 'application/*+json'];
      let accepts = ['application/json'];
      let returnType = DataSourceVM;
      if(!returnType) returnType = 'Blob';
      return this.apiClient.callApi(
        '/api/data/v1/DataSources/{id}/rename', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Rename data source by id
     * @param {String} id data source id
     * @param {Object} opts Optional parameters
     * @param {module:models/RenameDataSourceVM} opts.renameDataSourceVM rename viewmodel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/DataSourceVM}
     */
    dataSourcesRenameDataSource(id, opts) {
      return this.dataSourcesRenameDataSourceWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update data source's connection string by id
     * @param {String} id data source id
     * @param {Object} opts Optional parameters
     * @param {module:models/UpdateDataSourceConnectionStringVM} opts.updateDataSourceConnectionStringVM update viewmodel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/DataSourceVM} and HTTP response
     */
    dataSourcesUpdateConnectionStringWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['updateDataSourceConnectionStringVM'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling dataSourcesUpdateConnectionString");
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
      let contentTypes = ['application/json', 'text/json', 'application/*+json'];
      let accepts = ['application/json'];
      let returnType = DataSourceVM;
      if(!returnType) returnType = 'Blob';
      return this.apiClient.callApi(
        '/api/data/v1/DataSources/{id}/ConnectionString', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update data source's connection string by id
     * @param {String} id data source id
     * @param {Object} opts Optional parameters
     * @param {module:models/UpdateDataSourceConnectionStringVM} opts.updateDataSourceConnectionStringVM update viewmodel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/DataSourceVM}
     */
    dataSourcesUpdateConnectionString(id, opts) {
      return this.dataSourcesUpdateConnectionStringWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update permissions
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:models/UpdateDataSourcePermissionsVM} opts.updateDataSourcePermissionsVM 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    dataSourcesUpdatePermissionsWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['updateDataSourcePermissionsVM'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling dataSourcesUpdatePermissions");
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
      let contentTypes = ['application/json', 'text/json', 'application/*+json'];
      let accepts = ['application/json'];
      let returnType = null;
      if(!returnType) returnType = 'Blob';
      return this.apiClient.callApi(
        '/api/data/v1/DataSources/{id}/permissions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update permissions
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:models/UpdateDataSourcePermissionsVM} opts.updateDataSourcePermissionsVM 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    dataSourcesUpdatePermissions(id, opts) {
      return this.dataSourcesUpdatePermissionsWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update data source's subscription
     * @param {String} id data source id
     * @param {Object} opts Optional parameters
     * @param {module:models/UpdateDataSourceSubscriptionVM} opts.updateDataSourceSubscriptionVM update subscription viewmodel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    dataSourcesUpdateSubscriptionDataSourceWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['updateDataSourceSubscriptionVM'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling dataSourcesUpdateSubscriptionDataSource");
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
      let contentTypes = ['application/json', 'text/json', 'application/*+json'];
      let accepts = ['application/json'];
      let returnType = null;
      if(!returnType) returnType = 'Blob';
      return this.apiClient.callApi(
        '/api/data/v1/DataSources/{id}/updateSubscription', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update data source's subscription
     * @param {String} id data source id
     * @param {Object} opts Optional parameters
     * @param {module:models/UpdateDataSourceSubscriptionVM} opts.updateDataSourceSubscriptionVM update subscription viewmodel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    dataSourcesUpdateSubscriptionDataSource(id, opts) {
      return this.dataSourcesUpdateSubscriptionDataSourceWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
