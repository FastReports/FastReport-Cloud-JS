# FastreportCloudSdk.AdminReportsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adminReportFoldersDeleteFolder**](AdminReportsApi.md#adminReportFoldersDeleteFolder) | **DELETE** /api/admin/v1/ReportFolders/{id} | Delete specified folder
[**adminReportFoldersGetFolder**](AdminReportsApi.md#adminReportFoldersGetFolder) | **GET** /api/admin/v1/ReportFolders/{id} | Returns a folder by id
[**adminReportFoldersGetFolders**](AdminReportsApi.md#adminReportFoldersGetFolders) | **GET** /api/admin/v1/ReportFolders | Returns a list of folders
[**adminReportFoldersGetPermissions**](AdminReportsApi.md#adminReportFoldersGetPermissions) | **GET** /api/admin/v1/ReportFolders/{id}/permissions | Get all folder permissions
[**adminReportFoldersPostFolder**](AdminReportsApi.md#adminReportFoldersPostFolder) | **POST** /api/admin/v1/ReportFolders | Create a folder
[**adminReportFoldersUpdateFolder**](AdminReportsApi.md#adminReportFoldersUpdateFolder) | **PUT** /api/admin/v1/ReportFolders/{id} | Update a folder
[**adminReportFoldersUpdatePermissions**](AdminReportsApi.md#adminReportFoldersUpdatePermissions) | **POST** /api/admin/v1/ReportFolders/{id}/permissions | Revoke permission
[**adminReportsDeleteFile**](AdminReportsApi.md#adminReportsDeleteFile) | **DELETE** /api/admin/v1/Reports/{id} | Delete specified file
[**adminReportsGetFile**](AdminReportsApi.md#adminReportsGetFile) | **GET** /api/admin/v1/Reports/{id} | Returns a file by id
[**adminReportsGetFiles**](AdminReportsApi.md#adminReportsGetFiles) | **GET** /api/admin/v1/Reports | Returns a list of files
[**adminReportsGetPermissions**](AdminReportsApi.md#adminReportsGetPermissions) | **GET** /api/admin/v1/Reports/{id}/permissions | Get all file permissions
[**adminReportsUpdateFile**](AdminReportsApi.md#adminReportsUpdateFile) | **PUT** /api/admin/v1/Reports/{id} | Update a file
[**adminReportsUpdatePermissions**](AdminReportsApi.md#adminReportsUpdatePermissions) | **POST** /api/admin/v1/Reports/{id}/permissions | Update permissions to file
[**adminReportsUploadFile**](AdminReportsApi.md#adminReportsUploadFile) | **POST** /api/admin/v1/Reports | Upload a file to the specified folder



## adminReportFoldersDeleteFolder

> adminReportFoldersDeleteFolder(id, opts)

Delete specified folder

User with Delete permission can access the method.

### Example

```javascript
import FastreportCloudSdk from 'fastreport-cloud-sdk';
let defaultClient = FastreportCloudSdk.ApiClient.instance;
// Configure HTTP basic authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.username = 'YOUR USERNAME';
ApiKey.password = 'YOUR PASSWORD';
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new FastreportCloudSdk.AdminReportsApi();
let id = "id_example"; // String | folder id
let opts = {
  'recursive': true // Boolean | delete folder's content
};
apiInstance.adminReportFoldersDeleteFolder(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| folder id | 
 **recursive** | **Boolean**| delete folder&#39;s content | [optional] [default to true]

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## adminReportFoldersGetFolder

> FileVM adminReportFoldersGetFolder(id)

Returns a folder by id

### Example

```javascript
import FastreportCloudSdk from 'fastreport-cloud-sdk';
let defaultClient = FastreportCloudSdk.ApiClient.instance;
// Configure HTTP basic authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.username = 'YOUR USERNAME';
ApiKey.password = 'YOUR PASSWORD';
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new FastreportCloudSdk.AdminReportsApi();
let id = "id_example"; // String | Identifier of a folder
apiInstance.adminReportFoldersGetFolder(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Identifier of a folder | 

### Return type

[**FileVM**](FileVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## adminReportFoldersGetFolders

> FilesVM adminReportFoldersGetFolders(opts)

Returns a list of folders

If no folders, then the endpoint will return empty list

### Example

```javascript
import FastreportCloudSdk from 'fastreport-cloud-sdk';
let defaultClient = FastreportCloudSdk.ApiClient.instance;
// Configure HTTP basic authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.username = 'YOUR USERNAME';
ApiKey.password = 'YOUR PASSWORD';
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new FastreportCloudSdk.AdminReportsApi();
let opts = {
  'skip': 0, // Number | Variable for pagination, defautl value is 0
  'take': 10, // Number | Variable for pagination, default value is 10
  'subscriptionId': "subscriptionId_example" // String | Allows to filter by subscriptions ID
};
apiInstance.adminReportFoldersGetFolders(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Number**| Variable for pagination, defautl value is 0 | [optional] [default to 0]
 **take** | **Number**| Variable for pagination, default value is 10 | [optional] [default to 10]
 **subscriptionId** | **String**| Allows to filter by subscriptions ID | [optional] 

### Return type

[**FilesVM**](FilesVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## adminReportFoldersGetPermissions

> FilePermissionsVM adminReportFoldersGetPermissions(id)

Get all folder permissions

### Example

```javascript
import FastreportCloudSdk from 'fastreport-cloud-sdk';
let defaultClient = FastreportCloudSdk.ApiClient.instance;
// Configure HTTP basic authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.username = 'YOUR USERNAME';
ApiKey.password = 'YOUR PASSWORD';
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new FastreportCloudSdk.AdminReportsApi();
let id = "id_example"; // String | folder id
apiInstance.adminReportFoldersGetPermissions(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| folder id | 

### Return type

[**FilePermissionsVM**](FilePermissionsVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## adminReportFoldersPostFolder

> FileVM adminReportFoldersPostFolder(opts)

Create a folder

User with a Create File permisison can access this method.

### Example

```javascript
import FastreportCloudSdk from 'fastreport-cloud-sdk';
let defaultClient = FastreportCloudSdk.ApiClient.instance;
// Configure HTTP basic authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.username = 'YOUR USERNAME';
ApiKey.password = 'YOUR PASSWORD';
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new FastreportCloudSdk.AdminReportsApi();
let opts = {
  'folderVm': new FastreportCloudSdk.AdminReportFolderCreateVM() // AdminReportFolderCreateVM | folder create vm
};
apiInstance.adminReportFoldersPostFolder(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folderVm** | [**AdminReportFolderCreateVM**](AdminReportFolderCreateVM.md)| folder create vm | [optional] 

### Return type

[**FileVM**](FileVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json


## adminReportFoldersUpdateFolder

> FileVM adminReportFoldersUpdateFolder(id, opts)

Update a folder

User with Create File permission can access this method.

### Example

```javascript
import FastreportCloudSdk from 'fastreport-cloud-sdk';
let defaultClient = FastreportCloudSdk.ApiClient.instance;
// Configure HTTP basic authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.username = 'YOUR USERNAME';
ApiKey.password = 'YOUR PASSWORD';
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new FastreportCloudSdk.AdminReportsApi();
let id = "id_example"; // String | folder id
let opts = {
  'folderVM': new FastreportCloudSdk.FileUpdateVM() // FileUpdateVM | folder's view model
};
apiInstance.adminReportFoldersUpdateFolder(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| folder id | 
 **folderVM** | [**FileUpdateVM**](FileUpdateVM.md)| folder&#39;s view model | [optional] 

### Return type

[**FileVM**](FileVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json


## adminReportFoldersUpdatePermissions

> adminReportFoldersUpdatePermissions(id, opts)

Revoke permission

### Example

```javascript
import FastreportCloudSdk from 'fastreport-cloud-sdk';
let defaultClient = FastreportCloudSdk.ApiClient.instance;
// Configure HTTP basic authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.username = 'YOUR USERNAME';
ApiKey.password = 'YOUR PASSWORD';
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new FastreportCloudSdk.AdminReportsApi();
let id = "id_example"; // String | folder id
let opts = {
  'newPermissions': new FastreportCloudSdk.UpdateFilePermissionsVM() // UpdateFilePermissionsVM | 
};
apiInstance.adminReportFoldersUpdatePermissions(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| folder id | 
 **newPermissions** | [**UpdateFilePermissionsVM**](UpdateFilePermissionsVM.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json


## adminReportsDeleteFile

> adminReportsDeleteFile(id)

Delete specified file

User with Delete permission can access the method.

### Example

```javascript
import FastreportCloudSdk from 'fastreport-cloud-sdk';
let defaultClient = FastreportCloudSdk.ApiClient.instance;
// Configure HTTP basic authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.username = 'YOUR USERNAME';
ApiKey.password = 'YOUR PASSWORD';
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new FastreportCloudSdk.AdminReportsApi();
let id = "id_example"; // String | file id
apiInstance.adminReportsDeleteFile(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| file id | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## adminReportsGetFile

> ReportVM adminReportsGetFile(id)

Returns a file by id

### Example

```javascript
import FastreportCloudSdk from 'fastreport-cloud-sdk';
let defaultClient = FastreportCloudSdk.ApiClient.instance;
// Configure HTTP basic authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.username = 'YOUR USERNAME';
ApiKey.password = 'YOUR PASSWORD';
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new FastreportCloudSdk.AdminReportsApi();
let id = "id_example"; // String | Identifier of file
apiInstance.adminReportsGetFile(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Identifier of file | 

### Return type

[**ReportVM**](ReportVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## adminReportsGetFiles

> ReportsVM adminReportsGetFiles(opts)

Returns a list of files

If no files, then the endpoint will return empty list

### Example

```javascript
import FastreportCloudSdk from 'fastreport-cloud-sdk';
let defaultClient = FastreportCloudSdk.ApiClient.instance;
// Configure HTTP basic authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.username = 'YOUR USERNAME';
ApiKey.password = 'YOUR PASSWORD';
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new FastreportCloudSdk.AdminReportsApi();
let opts = {
  'skip': 0, // Number | Variable for pagination, defautl value is 0
  'take': 10, // Number | Variable for pagination, default value is 10
  'subscriptionId': "subscriptionId_example" // String | Subscription Id
};
apiInstance.adminReportsGetFiles(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Number**| Variable for pagination, defautl value is 0 | [optional] [default to 0]
 **take** | **Number**| Variable for pagination, default value is 10 | [optional] [default to 10]
 **subscriptionId** | **String**| Subscription Id | [optional] 

### Return type

[**ReportsVM**](ReportsVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## adminReportsGetPermissions

> FilePermissionsVM adminReportsGetPermissions(id)

Get all file permissions

### Example

```javascript
import FastreportCloudSdk from 'fastreport-cloud-sdk';
let defaultClient = FastreportCloudSdk.ApiClient.instance;
// Configure HTTP basic authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.username = 'YOUR USERNAME';
ApiKey.password = 'YOUR PASSWORD';
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new FastreportCloudSdk.AdminReportsApi();
let id = "id_example"; // String | 
apiInstance.adminReportsGetPermissions(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**FilePermissionsVM**](FilePermissionsVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## adminReportsUpdateFile

> ReportVM adminReportsUpdateFile(id, opts)

Update a file

User with Create Entity permission can access this method.

### Example

```javascript
import FastreportCloudSdk from 'fastreport-cloud-sdk';
let defaultClient = FastreportCloudSdk.ApiClient.instance;
// Configure HTTP basic authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.username = 'YOUR USERNAME';
ApiKey.password = 'YOUR PASSWORD';
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new FastreportCloudSdk.AdminReportsApi();
let id = "id_example"; // String | file id
let opts = {
  'fileVM': new FastreportCloudSdk.FileUpdateVM() // FileUpdateVM | file's view model
};
apiInstance.adminReportsUpdateFile(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| file id | 
 **fileVM** | [**FileUpdateVM**](FileUpdateVM.md)| file&#39;s view model | [optional] 

### Return type

[**ReportVM**](ReportVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json


## adminReportsUpdatePermissions

> adminReportsUpdatePermissions(id, opts)

Update permissions to file

### Example

```javascript
import FastreportCloudSdk from 'fastreport-cloud-sdk';
let defaultClient = FastreportCloudSdk.ApiClient.instance;
// Configure HTTP basic authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.username = 'YOUR USERNAME';
ApiKey.password = 'YOUR PASSWORD';
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new FastreportCloudSdk.AdminReportsApi();
let id = "id_example"; // String | 
let opts = {
  'newPermissions': new FastreportCloudSdk.UpdateFilePermissionsVM() // UpdateFilePermissionsVM | 
};
apiInstance.adminReportsUpdatePermissions(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **newPermissions** | [**UpdateFilePermissionsVM**](UpdateFilePermissionsVM.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json


## adminReportsUploadFile

> ReportVM adminReportsUploadFile(opts)

Upload a file to the specified folder

User with Create Entity permission can access this method.

### Example

```javascript
import FastreportCloudSdk from 'fastreport-cloud-sdk';
let defaultClient = FastreportCloudSdk.ApiClient.instance;
// Configure HTTP basic authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.username = 'YOUR USERNAME';
ApiKey.password = 'YOUR PASSWORD';
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new FastreportCloudSdk.AdminReportsApi();
let opts = {
  'fileVM': new FastreportCloudSdk.ReportCreateAdminVM() // ReportCreateAdminVM | file's view model
};
apiInstance.adminReportsUploadFile(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileVM** | [**ReportCreateAdminVM**](ReportCreateAdminVM.md)| file&#39;s view model | [optional] 

### Return type

[**ReportVM**](ReportVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

