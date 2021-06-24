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
import CreateGroupVM from '../models/CreateGroupVM';
import GroupPermissionsVM from '../models/GroupPermissionsVM';
import GroupVM from '../models/GroupVM';
import GroupsVM from '../models/GroupsVM';
import ProblemDetails from '../models/ProblemDetails';
import RenameGroupVM from '../models/RenameGroupVM';
import UpdateGroupPermissionsVM from '../models/UpdateGroupPermissionsVM';

/**
* Groups service.
* @module client/GroupsApi
* @version v1
*/
export default class GroupsApi {

    /**
    * Constructs a new GroupsApi. 
    * @alias module:client/GroupsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create a new user group
     * @param {Object} opts Optional parameters
     * @param {module:models/CreateGroupVM} opts.viewModel Model for creating
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/GroupVM} and HTTP response
     */
    groupsCreateGroupWithHttpInfo(opts) {
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
      let accepts = ['application/json', 'text/json', 'text/plain'];
      let returnType = GroupVM;
      if(!returnType) returnType = 'Blob';
      return this.apiClient.callApi(
        '/api/manage/v1/Groups', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a new user group
     * @param {Object} opts Optional parameters
     * @param {module:models/CreateGroupVM} opts.viewModel Model for creating
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/GroupVM}
     */
    groupsCreateGroup(opts) {
      return this.groupsCreateGroupWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete group by identifier
     * @param {String} id Identifier of group
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    groupsDeleteGroupWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling groupsDeleteGroup");
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
      let accepts = ['application/json', 'text/json', 'text/plain'];
      let returnType = null;
      if(!returnType) returnType = 'Blob';
      return this.apiClient.callApi(
        '/api/manage/v1/Groups/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete group by identifier
     * @param {String} id Identifier of group
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    groupsDeleteGroup(id) {
      return this.groupsDeleteGroupWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Gets group by identifier
     * @param {String} id Identifier of group
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/GroupVM} and HTTP response
     */
    groupsGetGroupWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling groupsGetGroup");
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
      let accepts = ['application/json', 'text/json', 'text/plain'];
      let returnType = GroupVM;
      if(!returnType) returnType = 'Blob';
      return this.apiClient.callApi(
        '/api/manage/v1/Groups/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Gets group by identifier
     * @param {String} id Identifier of group
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/GroupVM}
     */
    groupsGetGroup(id) {
      return this.groupsGetGroupWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Gets list of user groups
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip How many groups need to skip (default to 0)
     * @param {Number} opts.take How many groups need to take (default to 10)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/GroupsVM} and HTTP response
     */
    groupsGetGroupListWithHttpInfo(opts) {
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
      let accepts = ['application/json', 'text/json', 'text/plain'];
      let returnType = GroupsVM;
      if(!returnType) returnType = 'Blob';
      return this.apiClient.callApi(
        '/api/manage/v1/Groups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Gets list of user groups
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip How many groups need to skip (default to 0)
     * @param {Number} opts.take How many groups need to take (default to 10)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/GroupsVM}
     */
    groupsGetGroupList(opts) {
      return this.groupsGetGroupListWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Gets group permissions by identifier
     * @param {String} id Identifier of group
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/GroupPermissionsVM} and HTTP response
     */
    groupsGetPermissionsWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling groupsGetPermissions");
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
      let accepts = ['application/json', 'text/json', 'text/plain'];
      let returnType = GroupPermissionsVM;
      if(!returnType) returnType = 'Blob';
      return this.apiClient.callApi(
        '/api/manage/v1/Groups/{id}/permissions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Gets group permissions by identifier
     * @param {String} id Identifier of group
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/GroupPermissionsVM}
     */
    groupsGetPermissions(id) {
      return this.groupsGetPermissionsWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Rename group by identifier
     * @param {String} id Identifier of group
     * @param {module:models/RenameGroupVM} viewModel Model for renaming
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/GroupVM} and HTTP response
     */
    groupsRenameGroupWithHttpInfo(id, viewModel) {
      let postBody = viewModel;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling groupsRenameGroup");
      }
      // verify the required parameter 'viewModel' is set
      if (viewModel === undefined || viewModel === null) {
        throw new Error("Missing the required parameter 'viewModel' when calling groupsRenameGroup");
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
      let accepts = ['application/json', 'text/json', 'text/plain'];
      let returnType = GroupVM;
      if(!returnType) returnType = 'Blob';
      return this.apiClient.callApi(
        '/api/manage/v1/Groups/{id}/rename', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Rename group by identifier
     * @param {String} id Identifier of group
     * @param {module:models/RenameGroupVM} viewModel Model for renaming
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/GroupVM}
     */
    groupsRenameGroup(id, viewModel) {
      return this.groupsRenameGroupWithHttpInfo(id, viewModel)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update permissions
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:models/UpdateGroupPermissionsVM} opts.permissionsVM 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    groupsUpdatePermissionsWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['permissionsVM'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling groupsUpdatePermissions");
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
      let accepts = ['application/json', 'text/json', 'text/plain'];
      let returnType = null;
      if(!returnType) returnType = 'Blob';
      return this.apiClient.callApi(
        '/api/manage/v1/Groups/{id}/permissions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update permissions
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:models/UpdateGroupPermissionsVM} opts.permissionsVM 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    groupsUpdatePermissions(id, opts) {
      return this.groupsUpdatePermissionsWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
