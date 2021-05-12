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
import AdminExportFolderCreateVM from '../models/AdminExportFolderCreateVM';
import ExportCreateAdminVM from '../models/ExportCreateAdminVM';
import ExportVM from '../models/ExportVM';
import ExportsVM from '../models/ExportsVM';
import FilePermissionsVM from '../models/FilePermissionsVM';
import FileUpdateVM from '../models/FileUpdateVM';
import FileVM from '../models/FileVM';
import FilesVM from '../models/FilesVM';
import ProblemDetails from '../models/ProblemDetails';
import UpdateFilePermissionsVM from '../models/UpdateFilePermissionsVM';

/**
* AdminExports service.
* @module client/AdminExportsApi
* @version v1
*/
export default class AdminExportsApi {

    /**
    * Constructs a new AdminExportsApi. 
    * @alias module:client/AdminExportsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Delete specified folder
     * User with Delete permission can access the method.
     * @param {String} id folder id
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.recursive delete folder's content (default to true)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    adminExportFoldersDeleteFolderWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling adminExportFoldersDeleteFolder");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'recursive': opts['recursive']
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
        '/api/admin/v1/ExportFolders/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete specified folder
     * User with Delete permission can access the method.
     * @param {String} id folder id
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.recursive delete folder's content (default to true)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    adminExportFoldersDeleteFolder(id, opts) {
      return this.adminExportFoldersDeleteFolderWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns a folder by id
     * @param {String} id Identifier of a folder
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/FileVM} and HTTP response
     */
    adminExportFoldersGetFolderWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling adminExportFoldersGetFolder");
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
      let returnType = FileVM;
      return this.apiClient.callApi(
        '/api/admin/v1/ExportFolders/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns a folder by id
     * @param {String} id Identifier of a folder
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/FileVM}
     */
    adminExportFoldersGetFolder(id) {
      return this.adminExportFoldersGetFolderWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns a list of folders
     * If no folders, then the endpoint will return empty list
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Variable for pagination, defautl value is 0 (default to 0)
     * @param {Number} opts.take Variable for pagination, default value is 10 (default to 10)
     * @param {String} opts.subscriptionId Allows to filter by subscriptions ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/FilesVM} and HTTP response
     */
    adminExportFoldersGetFoldersWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'skip': opts['skip'],
        'take': opts['take'],
        'subscriptionId': opts['subscriptionId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey', 'JWT'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = FilesVM;
      return this.apiClient.callApi(
        '/api/admin/v1/ExportFolders', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns a list of folders
     * If no folders, then the endpoint will return empty list
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Variable for pagination, defautl value is 0 (default to 0)
     * @param {Number} opts.take Variable for pagination, default value is 10 (default to 10)
     * @param {String} opts.subscriptionId Allows to filter by subscriptions ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/FilesVM}
     */
    adminExportFoldersGetFolders(opts) {
      return this.adminExportFoldersGetFoldersWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all folder permissions
     * @param {String} id folder id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/FilePermissionsVM} and HTTP response
     */
    adminExportFoldersGetPermissionsWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling adminExportFoldersGetPermissions");
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
      let returnType = FilePermissionsVM;
      return this.apiClient.callApi(
        '/api/admin/v1/ExportFolders/{id}/permissions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all folder permissions
     * @param {String} id folder id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/FilePermissionsVM}
     */
    adminExportFoldersGetPermissions(id) {
      return this.adminExportFoldersGetPermissionsWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a folder
     * User with a Create File permisison can access this method.
     * @param {Object} opts Optional parameters
     * @param {module:models/AdminExportFolderCreateVM} opts.folderVm folder create vm
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/FileVM} and HTTP response
     */
    adminExportFoldersPostFolderWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['folderVm'];

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
      let returnType = FileVM;
      return this.apiClient.callApi(
        '/api/admin/v1/ExportFolders', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a folder
     * User with a Create File permisison can access this method.
     * @param {Object} opts Optional parameters
     * @param {module:models/AdminExportFolderCreateVM} opts.folderVm folder create vm
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/FileVM}
     */
    adminExportFoldersPostFolder(opts) {
      return this.adminExportFoldersPostFolderWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a folder
     * User with Create File permission can access this method.
     * @param {String} id folder id
     * @param {Object} opts Optional parameters
     * @param {module:models/FileUpdateVM} opts.folderVM folder's view model
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/FileVM} and HTTP response
     */
    adminExportFoldersUpdateFolderWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['folderVM'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling adminExportFoldersUpdateFolder");
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
      let returnType = FileVM;
      return this.apiClient.callApi(
        '/api/admin/v1/ExportFolders/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a folder
     * User with Create File permission can access this method.
     * @param {String} id folder id
     * @param {Object} opts Optional parameters
     * @param {module:models/FileUpdateVM} opts.folderVM folder's view model
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/FileVM}
     */
    adminExportFoldersUpdateFolder(id, opts) {
      return this.adminExportFoldersUpdateFolderWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Revoke permission
     * @param {String} id folder id
     * @param {Object} opts Optional parameters
     * @param {module:models/UpdateFilePermissionsVM} opts.newPermissions 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    adminExportFoldersUpdatePermissionsWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['newPermissions'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling adminExportFoldersUpdatePermissions");
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
        '/api/admin/v1/ExportFolders/{id}/permissions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Revoke permission
     * @param {String} id folder id
     * @param {Object} opts Optional parameters
     * @param {module:models/UpdateFilePermissionsVM} opts.newPermissions 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    adminExportFoldersUpdatePermissions(id, opts) {
      return this.adminExportFoldersUpdatePermissionsWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete specified file
     * User with Delete permission can access the method.
     * @param {String} id file id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    adminExportsDeleteFileWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling adminExportsDeleteFile");
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
        '/api/admin/v1/Exports/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete specified file
     * User with Delete permission can access the method.
     * @param {String} id file id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    adminExportsDeleteFile(id) {
      return this.adminExportsDeleteFileWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns a file by id
     * @param {String} id Identifier of file
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/ExportVM} and HTTP response
     */
    adminExportsGetFileWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling adminExportsGetFile");
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
      let returnType = ExportVM;
      return this.apiClient.callApi(
        '/api/admin/v1/Exports/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns a file by id
     * @param {String} id Identifier of file
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/ExportVM}
     */
    adminExportsGetFile(id) {
      return this.adminExportsGetFileWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns a list of files
     * If no files, then the endpoint will return empty list
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Variable for pagination, defautl value is 0 (default to 0)
     * @param {Number} opts.take Variable for pagination, default value is 10 (default to 10)
     * @param {String} opts.subscriptionId Subscription Id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/ExportsVM} and HTTP response
     */
    adminExportsGetFilesWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'skip': opts['skip'],
        'take': opts['take'],
        'subscriptionId': opts['subscriptionId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey', 'JWT'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = ExportsVM;
      return this.apiClient.callApi(
        '/api/admin/v1/Exports', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns a list of files
     * If no files, then the endpoint will return empty list
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Variable for pagination, defautl value is 0 (default to 0)
     * @param {Number} opts.take Variable for pagination, default value is 10 (default to 10)
     * @param {String} opts.subscriptionId Subscription Id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/ExportsVM}
     */
    adminExportsGetFiles(opts) {
      return this.adminExportsGetFilesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all file permissions
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/FilePermissionsVM} and HTTP response
     */
    adminExportsGetPermissionsWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling adminExportsGetPermissions");
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
      let returnType = FilePermissionsVM;
      return this.apiClient.callApi(
        '/api/admin/v1/Exports/{id}/permissions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all file permissions
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/FilePermissionsVM}
     */
    adminExportsGetPermissions(id) {
      return this.adminExportsGetPermissionsWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a file
     * User with Create Entity permission can access this method.
     * @param {String} id file id
     * @param {Object} opts Optional parameters
     * @param {module:models/FileUpdateVM} opts.fileVM file's view model
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/ExportVM} and HTTP response
     */
    adminExportsUpdateFileWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['fileVM'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling adminExportsUpdateFile");
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
      let returnType = ExportVM;
      return this.apiClient.callApi(
        '/api/admin/v1/Exports/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a file
     * User with Create Entity permission can access this method.
     * @param {String} id file id
     * @param {Object} opts Optional parameters
     * @param {module:models/FileUpdateVM} opts.fileVM file's view model
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/ExportVM}
     */
    adminExportsUpdateFile(id, opts) {
      return this.adminExportsUpdateFileWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update permissions to file
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:models/UpdateFilePermissionsVM} opts.newPermissions 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    adminExportsUpdatePermissionsWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['newPermissions'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling adminExportsUpdatePermissions");
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
        '/api/admin/v1/Exports/{id}/permissions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update permissions to file
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:models/UpdateFilePermissionsVM} opts.newPermissions 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    adminExportsUpdatePermissions(id, opts) {
      return this.adminExportsUpdatePermissionsWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Upload a file to the specified folder
     * User with Create Entity permission can access this method.
     * @param {Object} opts Optional parameters
     * @param {module:models/ExportCreateAdminVM} opts.fileVM file's view model
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/ExportVM} and HTTP response
     */
    adminExportsUploadFileWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['fileVM'];

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
      let returnType = ExportVM;
      return this.apiClient.callApi(
        '/api/admin/v1/Exports', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Upload a file to the specified folder
     * User with Create Entity permission can access this method.
     * @param {Object} opts Optional parameters
     * @param {module:models/ExportCreateAdminVM} opts.fileVM file's view model
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/ExportVM}
     */
    adminExportsUploadFile(opts) {
      return this.adminExportsUploadFileWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
