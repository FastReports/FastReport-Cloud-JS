# FastreportCloudSdk.AdminTemplatesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adminTemplateFoldersDeleteFolder**](AdminTemplatesApi.md#adminTemplateFoldersDeleteFolder) | **DELETE** /api/admin/v1/TemplateFolders/{id} | Delete specified folder
[**adminTemplateFoldersGetFolder**](AdminTemplatesApi.md#adminTemplateFoldersGetFolder) | **GET** /api/admin/v1/TemplateFolders/{id} | Returns a folder by id
[**adminTemplateFoldersGetFolders**](AdminTemplatesApi.md#adminTemplateFoldersGetFolders) | **GET** /api/admin/v1/TemplateFolders | Returns a list of folders
[**adminTemplateFoldersGetPermissions**](AdminTemplatesApi.md#adminTemplateFoldersGetPermissions) | **GET** /api/admin/v1/TemplateFolders/{id}/permissions | Get all folder permissions
[**adminTemplateFoldersPostFolder**](AdminTemplatesApi.md#adminTemplateFoldersPostFolder) | **POST** /api/admin/v1/TemplateFolders | Create a folder
[**adminTemplateFoldersUpdateFolder**](AdminTemplatesApi.md#adminTemplateFoldersUpdateFolder) | **PUT** /api/admin/v1/TemplateFolders/{id} | Update a folder
[**adminTemplateFoldersUpdatePermissions**](AdminTemplatesApi.md#adminTemplateFoldersUpdatePermissions) | **POST** /api/admin/v1/TemplateFolders/{id}/permissions | Revoke permission
[**adminTemplatesDeleteFile**](AdminTemplatesApi.md#adminTemplatesDeleteFile) | **DELETE** /api/admin/v1/Templates/{id} | Delete specified file
[**adminTemplatesGetFile**](AdminTemplatesApi.md#adminTemplatesGetFile) | **GET** /api/admin/v1/Templates/{id} | Returns a file by id
[**adminTemplatesGetFiles**](AdminTemplatesApi.md#adminTemplatesGetFiles) | **GET** /api/admin/v1/Templates | Returns a list of files
[**adminTemplatesGetPermissions**](AdminTemplatesApi.md#adminTemplatesGetPermissions) | **GET** /api/admin/v1/Templates/{id}/permissions | Get all file permissions
[**adminTemplatesUpdateFile**](AdminTemplatesApi.md#adminTemplatesUpdateFile) | **PUT** /api/admin/v1/Templates/{id} | Update a file
[**adminTemplatesUpdatePermissions**](AdminTemplatesApi.md#adminTemplatesUpdatePermissions) | **POST** /api/admin/v1/Templates/{id}/permissions | Update permissions to file
[**adminTemplatesUploadFile**](AdminTemplatesApi.md#adminTemplatesUploadFile) | **POST** /api/admin/v1/Templates | Upload a file to the specified folder



## adminTemplateFoldersDeleteFolder

> adminTemplateFoldersDeleteFolder(id, opts)

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

let apiInstance = new FastreportCloudSdk.AdminTemplatesApi();
let id = "id_example"; // String | folder id
let opts = {
  'recursive': true // Boolean | delete folder's content
};
apiInstance.adminTemplateFoldersDeleteFolder(id, opts).then(() => {
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


## adminTemplateFoldersGetFolder

> FileVM adminTemplateFoldersGetFolder(id)

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

let apiInstance = new FastreportCloudSdk.AdminTemplatesApi();
let id = "id_example"; // String | Identifier of a folder
apiInstance.adminTemplateFoldersGetFolder(id).then((data) => {
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


## adminTemplateFoldersGetFolders

> FilesVM adminTemplateFoldersGetFolders(opts)

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

let apiInstance = new FastreportCloudSdk.AdminTemplatesApi();
let opts = {
  'skip': 0, // Number | Variable for pagination, defautl value is 0
  'take': 10, // Number | Variable for pagination, default value is 10
  'subscriptionId': "subscriptionId_example" // String | Allows to filter by subscriptions ID
};
apiInstance.adminTemplateFoldersGetFolders(opts).then((data) => {
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


## adminTemplateFoldersGetPermissions

> FilePermissionsVM adminTemplateFoldersGetPermissions(id)

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

let apiInstance = new FastreportCloudSdk.AdminTemplatesApi();
let id = "id_example"; // String | folder id
apiInstance.adminTemplateFoldersGetPermissions(id).then((data) => {
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


## adminTemplateFoldersPostFolder

> FileVM adminTemplateFoldersPostFolder(opts)

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

let apiInstance = new FastreportCloudSdk.AdminTemplatesApi();
let opts = {
  'folderVm': new FastreportCloudSdk.AdminTemplateFolderCreateVM() // AdminTemplateFolderCreateVM | folder create vm
};
apiInstance.adminTemplateFoldersPostFolder(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folderVm** | [**AdminTemplateFolderCreateVM**](AdminTemplateFolderCreateVM.md)| folder create vm | [optional] 

### Return type

[**FileVM**](FileVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json


## adminTemplateFoldersUpdateFolder

> FileVM adminTemplateFoldersUpdateFolder(id, opts)

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

let apiInstance = new FastreportCloudSdk.AdminTemplatesApi();
let id = "id_example"; // String | folder id
let opts = {
  'folderVM': new FastreportCloudSdk.FileUpdateVM() // FileUpdateVM | folder's view model
};
apiInstance.adminTemplateFoldersUpdateFolder(id, opts).then((data) => {
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


## adminTemplateFoldersUpdatePermissions

> adminTemplateFoldersUpdatePermissions(id, opts)

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

let apiInstance = new FastreportCloudSdk.AdminTemplatesApi();
let id = "id_example"; // String | folder id
let opts = {
  'newPermissions': new FastreportCloudSdk.UpdateFilePermissionsVM() // UpdateFilePermissionsVM | 
};
apiInstance.adminTemplateFoldersUpdatePermissions(id, opts).then(() => {
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


## adminTemplatesDeleteFile

> adminTemplatesDeleteFile(id)

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

let apiInstance = new FastreportCloudSdk.AdminTemplatesApi();
let id = "id_example"; // String | file id
apiInstance.adminTemplatesDeleteFile(id).then(() => {
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


## adminTemplatesGetFile

> TemplateVM adminTemplatesGetFile(id)

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

let apiInstance = new FastreportCloudSdk.AdminTemplatesApi();
let id = "id_example"; // String | Identifier of file
apiInstance.adminTemplatesGetFile(id).then((data) => {
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

[**TemplateVM**](TemplateVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## adminTemplatesGetFiles

> TemplatesVM adminTemplatesGetFiles(opts)

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

let apiInstance = new FastreportCloudSdk.AdminTemplatesApi();
let opts = {
  'skip': 0, // Number | Variable for pagination, defautl value is 0
  'take': 10, // Number | Variable for pagination, default value is 10
  'subscriptionId': "subscriptionId_example" // String | Subscription Id
};
apiInstance.adminTemplatesGetFiles(opts).then((data) => {
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

[**TemplatesVM**](TemplatesVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## adminTemplatesGetPermissions

> FilePermissionsVM adminTemplatesGetPermissions(id)

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

let apiInstance = new FastreportCloudSdk.AdminTemplatesApi();
let id = "id_example"; // String | 
apiInstance.adminTemplatesGetPermissions(id).then((data) => {
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


## adminTemplatesUpdateFile

> TemplateVM adminTemplatesUpdateFile(id, opts)

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

let apiInstance = new FastreportCloudSdk.AdminTemplatesApi();
let id = "id_example"; // String | file id
let opts = {
  'fileVM': new FastreportCloudSdk.FileUpdateVM() // FileUpdateVM | file's view model
};
apiInstance.adminTemplatesUpdateFile(id, opts).then((data) => {
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

[**TemplateVM**](TemplateVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json


## adminTemplatesUpdatePermissions

> adminTemplatesUpdatePermissions(id, opts)

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

let apiInstance = new FastreportCloudSdk.AdminTemplatesApi();
let id = "id_example"; // String | 
let opts = {
  'newPermissions': new FastreportCloudSdk.UpdateFilePermissionsVM() // UpdateFilePermissionsVM | 
};
apiInstance.adminTemplatesUpdatePermissions(id, opts).then(() => {
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


## adminTemplatesUploadFile

> TemplateVM adminTemplatesUploadFile(opts)

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

let apiInstance = new FastreportCloudSdk.AdminTemplatesApi();
let opts = {
  'fileVM': new FastreportCloudSdk.TemplateCreateAdminVM() // TemplateCreateAdminVM | file's view model
};
apiInstance.adminTemplatesUploadFile(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileVM** | [**TemplateCreateAdminVM**](TemplateCreateAdminVM.md)| file&#39;s view model | [optional] 

### Return type

[**TemplateVM**](TemplateVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

