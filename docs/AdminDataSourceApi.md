# FastreportCloudSdk.AdminDataSourceApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adminDataSourceCreateDataSource**](AdminDataSourceApi.md#adminDataSourceCreateDataSource) | **POST** /api/admin/v1/DataSource | Create new data source
[**adminDataSourceDeleteDataSource**](AdminDataSourceApi.md#adminDataSourceDeleteDataSource) | **DELETE** /api/admin/v1/DataSource/{id} | Delete datasource by id
[**adminDataSourceFetchData**](AdminDataSourceApi.md#adminDataSourceFetchData) | **GET** /api/admin/v1/DataSource/{id}/fetch | This should connect to a database and set data structure
[**adminDataSourceGetDataSource**](AdminDataSourceApi.md#adminDataSourceGetDataSource) | **GET** /api/admin/v1/DataSource/{id} | Get datasource by id
[**adminDataSourceGetDataSources**](AdminDataSourceApi.md#adminDataSourceGetDataSources) | **GET** /api/admin/v1/DataSource | Get list of datasources from database
[**adminDataSourceGetPermissions**](AdminDataSourceApi.md#adminDataSourceGetPermissions) | **GET** /api/admin/v1/DataSource/{id}/permissions | Get all Data source permissions
[**adminDataSourceUpdateDataSource**](AdminDataSourceApi.md#adminDataSourceUpdateDataSource) | **PUT** /api/admin/v1/DataSource/{id} | Update datasource with update VM
[**adminDataSourceUpdatePermissions**](AdminDataSourceApi.md#adminDataSourceUpdatePermissions) | **POST** /api/admin/v1/DataSource/{dataSourceId}/permissions | Update permissions to datasource



## adminDataSourceCreateDataSource

> DataSourceVM adminDataSourceCreateDataSource(opts)

Create new data source

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

let apiInstance = new FastreportCloudSdk.AdminDataSourceApi();
let opts = {
  'createVM': new FastreportCloudSdk.CreateDataSourceAdminVM() // CreateDataSourceAdminVM | create VM
};
apiInstance.adminDataSourceCreateDataSource(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createVM** | [**CreateDataSourceAdminVM**](CreateDataSourceAdminVM.md)| create VM | [optional] 

### Return type

[**DataSourceVM**](DataSourceVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json


## adminDataSourceDeleteDataSource

> adminDataSourceDeleteDataSource(id)

Delete datasource by id

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

let apiInstance = new FastreportCloudSdk.AdminDataSourceApi();
let id = "id_example"; // String | datasource's id
apiInstance.adminDataSourceDeleteDataSource(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| datasource&#39;s id | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## adminDataSourceFetchData

> adminDataSourceFetchData(id)

This should connect to a database and set data structure

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

let apiInstance = new FastreportCloudSdk.AdminDataSourceApi();
let id = "id_example"; // String | datasource's id
apiInstance.adminDataSourceFetchData(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| datasource&#39;s id | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## adminDataSourceGetDataSource

> DataSourceVM adminDataSourceGetDataSource(id)

Get datasource by id

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

let apiInstance = new FastreportCloudSdk.AdminDataSourceApi();
let id = "id_example"; // String | datasource's id
apiInstance.adminDataSourceGetDataSource(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| datasource&#39;s id | 

### Return type

[**DataSourceVM**](DataSourceVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## adminDataSourceGetDataSources

> DataSourcesVM adminDataSourceGetDataSources(opts)

Get list of datasources from database

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

let apiInstance = new FastreportCloudSdk.AdminDataSourceApi();
let opts = {
  'skip': 56, // Number | how many datasources will be skiped
  'take': 56, // Number | how many datasources will be taken
  'subscriptionId': "subscriptionId_example" // String | Allow filters by subscription ID
};
apiInstance.adminDataSourceGetDataSources(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Number**| how many datasources will be skiped | [optional] 
 **take** | **Number**| how many datasources will be taken | [optional] 
 **subscriptionId** | **String**| Allow filters by subscription ID | [optional] 

### Return type

[**DataSourcesVM**](DataSourcesVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## adminDataSourceGetPermissions

> DataSourcePermissionsVM adminDataSourceGetPermissions(id)

Get all Data source permissions

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

let apiInstance = new FastreportCloudSdk.AdminDataSourceApi();
let id = "id_example"; // String | data source id
apiInstance.adminDataSourceGetPermissions(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| data source id | 

### Return type

[**DataSourcePermissionsVM**](DataSourcePermissionsVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## adminDataSourceUpdateDataSource

> DataSourceVM adminDataSourceUpdateDataSource(id, opts)

Update datasource with update VM

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

let apiInstance = new FastreportCloudSdk.AdminDataSourceApi();
let id = "id_example"; // String | datasource's id
let opts = {
  'updateVM': new FastreportCloudSdk.UpdateDataSourceVM() // UpdateDataSourceVM | update VM
};
apiInstance.adminDataSourceUpdateDataSource(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| datasource&#39;s id | 
 **updateVM** | [**UpdateDataSourceVM**](UpdateDataSourceVM.md)| update VM | [optional] 

### Return type

[**DataSourceVM**](DataSourceVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json


## adminDataSourceUpdatePermissions

> adminDataSourceUpdatePermissions(dataSourceId, opts)

Update permissions to datasource

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

let apiInstance = new FastreportCloudSdk.AdminDataSourceApi();
let dataSourceId = "dataSourceId_example"; // String | 
let opts = {
  'newPermissions': new FastreportCloudSdk.UpdateDataSourcePermissionsVM() // UpdateDataSourcePermissionsVM | 
};
apiInstance.adminDataSourceUpdatePermissions(dataSourceId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataSourceId** | **String**|  | 
 **newPermissions** | [**UpdateDataSourcePermissionsVM**](UpdateDataSourcePermissionsVM.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

