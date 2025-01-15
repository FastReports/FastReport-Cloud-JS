# FastreportCloudSdk.DataSourcesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dataSourcesCountDataSourcesAsync**](DataSourcesApi.md#dataSourcesCountDataSourcesAsync) | **GET** /api/data/v1/DataSources/{subscriptionId}/count | Returns a number of data sources in subscription
[**dataSourcesCreateDataSource**](DataSourcesApi.md#dataSourcesCreateDataSource) | **POST** /api/data/v1/DataSources | Create new data source
[**dataSourcesDeleteDataSource**](DataSourcesApi.md#dataSourcesDeleteDataSource) | **DELETE** /api/data/v1/DataSources/{id} | Delete data source by id
[**dataSourcesFetchData**](DataSourcesApi.md#dataSourcesFetchData) | **GET** /api/data/v1/DataSources/{id}/fetch | This should connect to a database and set data structure
[**dataSourcesGetAvailableDataSources**](DataSourcesApi.md#dataSourcesGetAvailableDataSources) | **GET** /api/data/v1/DataSources | Returns all of the data sources, that current user have permission for in a subscription &lt;br /&gt;  The method will return minimal infomration about the datasources: &lt;br /&gt;  id, name, editedTime, status.
[**dataSourcesGetDataSource**](DataSourcesApi.md#dataSourcesGetDataSource) | **GET** /api/data/v1/DataSources/{id} | Get data source by id
[**dataSourcesGetMyPermissions**](DataSourcesApi.md#dataSourcesGetMyPermissions) | **GET** /api/data/v1/DataSources/{id}/mypermissions | Get current user&#39;s permissions to Data source
[**dataSourcesGetParameterTypes**](DataSourcesApi.md#dataSourcesGetParameterTypes) | **GET** /api/data/v1/DataSources/parameterTypes/{dataSourceType} | Get data source parameter DataType&#39;s
[**dataSourcesGetPermissions**](DataSourcesApi.md#dataSourcesGetPermissions) | **GET** /api/data/v1/DataSources/{id}/permissions | Get all Data source permissions
[**dataSourcesRenameDataSource**](DataSourcesApi.md#dataSourcesRenameDataSource) | **PUT** /api/data/v1/DataSources/{id}/rename | Rename data source by id
[**dataSourcesUpdateConnectionString**](DataSourcesApi.md#dataSourcesUpdateConnectionString) | **PUT** /api/data/v1/DataSources/{id}/connectionString | Update data source&#39;s connection string by id
[**dataSourcesUpdatePermissions**](DataSourcesApi.md#dataSourcesUpdatePermissions) | **POST** /api/data/v1/DataSources/{id}/permissions | Update permissions
[**dataSourcesUpdateSelectCommands**](DataSourcesApi.md#dataSourcesUpdateSelectCommands) | **PUT** /api/data/v1/DataSources/{id}/selectCommands | Update data source&#39;s select commands by id
[**dataSourcesUpdateSubscriptionDataSource**](DataSourcesApi.md#dataSourcesUpdateSubscriptionDataSource) | **PUT** /api/data/v1/DataSources/{id}/updateSubscription | Update data source&#39;s subscription



## dataSourcesCountDataSourcesAsync

> Number dataSourcesCountDataSourcesAsync(subscriptionId)

Returns a number of data sources in subscription

### Example

```javascript
import FastreportCloudSdk from 'fastreport-cloud-sdk';
let defaultClient = FastreportCloudSdk.ApiClient.instance;
// Configure HTTP basic authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.username = 'YOUR USERNAME';
ApiKey.password = 'YOUR PASSWORD';
// Configure Bearer (JWT) access token for authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new FastreportCloudSdk.DataSourcesApi();
let subscriptionId = "subscriptionId_example"; // String | subscripiton id
apiInstance.dataSourcesCountDataSourcesAsync(subscriptionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **String**| subscripiton id | 

### Return type

**Number**

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## dataSourcesCreateDataSource

> DataSourceVM dataSourcesCreateDataSource(opts)

Create new data source

### Example

```javascript
import FastreportCloudSdk from 'fastreport-cloud-sdk';
let defaultClient = FastreportCloudSdk.ApiClient.instance;
// Configure HTTP basic authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.username = 'YOUR USERNAME';
ApiKey.password = 'YOUR PASSWORD';
// Configure Bearer (JWT) access token for authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new FastreportCloudSdk.DataSourcesApi();
let opts = {
  'createDataSourceVM': new FastreportCloudSdk.CreateDataSourceVM() // CreateDataSourceVM | create viewmodel
};
apiInstance.dataSourcesCreateDataSource(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createDataSourceVM** | [**CreateDataSourceVM**](CreateDataSourceVM.md)| create viewmodel | [optional] 

### Return type

[**DataSourceVM**](DataSourceVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json


## dataSourcesDeleteDataSource

> dataSourcesDeleteDataSource(id)

Delete data source by id

### Example

```javascript
import FastreportCloudSdk from 'fastreport-cloud-sdk';
let defaultClient = FastreportCloudSdk.ApiClient.instance;
// Configure HTTP basic authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.username = 'YOUR USERNAME';
ApiKey.password = 'YOUR PASSWORD';
// Configure Bearer (JWT) access token for authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new FastreportCloudSdk.DataSourcesApi();
let id = "id_example"; // String | data source id
apiInstance.dataSourcesDeleteDataSource(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| data source id | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## dataSourcesFetchData

> dataSourcesFetchData(id)

This should connect to a database and set data structure

### Example

```javascript
import FastreportCloudSdk from 'fastreport-cloud-sdk';
let defaultClient = FastreportCloudSdk.ApiClient.instance;
// Configure HTTP basic authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.username = 'YOUR USERNAME';
ApiKey.password = 'YOUR PASSWORD';
// Configure Bearer (JWT) access token for authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new FastreportCloudSdk.DataSourcesApi();
let id = "id_example"; // String | datasource's id
apiInstance.dataSourcesFetchData(id).then(() => {
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
- **Accept**: application/json


## dataSourcesGetAvailableDataSources

> DataSourcesVM dataSourcesGetAvailableDataSources(opts)

Returns all of the data sources, that current user have permission for in a subscription &lt;br /&gt;  The method will return minimal infomration about the datasources: &lt;br /&gt;  id, name, editedTime, status.

### Example

```javascript
import FastreportCloudSdk from 'fastreport-cloud-sdk';
let defaultClient = FastreportCloudSdk.ApiClient.instance;
// Configure HTTP basic authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.username = 'YOUR USERNAME';
ApiKey.password = 'YOUR PASSWORD';
// Configure Bearer (JWT) access token for authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new FastreportCloudSdk.DataSourcesApi();
let opts = {
  'subscriptionId': "subscriptionId_example", // String | id of subscription where the datasources are located
  'skip': 0, // Number | how many data sources will be skipped
  'take': 10, // Number | how many data sources will be taken
  'orderBy': new FastreportCloudSdk.DataSourceSorting(), // DataSourceSorting | field to order by
  'desc': false // Boolean | descending sort
};
apiInstance.dataSourcesGetAvailableDataSources(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **String**| id of subscription where the datasources are located | [optional] 
 **skip** | **Number**| how many data sources will be skipped | [optional] [default to 0]
 **take** | **Number**| how many data sources will be taken | [optional] [default to 10]
 **orderBy** | [**DataSourceSorting**](.md)| field to order by | [optional] 
 **desc** | **Boolean**| descending sort | [optional] [default to false]

### Return type

[**DataSourcesVM**](DataSourcesVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## dataSourcesGetDataSource

> DataSourceVM dataSourcesGetDataSource(id)

Get data source by id

### Example

```javascript
import FastreportCloudSdk from 'fastreport-cloud-sdk';
let defaultClient = FastreportCloudSdk.ApiClient.instance;
// Configure HTTP basic authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.username = 'YOUR USERNAME';
ApiKey.password = 'YOUR PASSWORD';
// Configure Bearer (JWT) access token for authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new FastreportCloudSdk.DataSourcesApi();
let id = "id_example"; // String | data source id
apiInstance.dataSourcesGetDataSource(id).then((data) => {
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

[**DataSourceVM**](DataSourceVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## dataSourcesGetMyPermissions

> DataSourcePermissionCRUDVM dataSourcesGetMyPermissions(id)

Get current user&#39;s permissions to Data source

### Example

```javascript
import FastreportCloudSdk from 'fastreport-cloud-sdk';
let defaultClient = FastreportCloudSdk.ApiClient.instance;
// Configure HTTP basic authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.username = 'YOUR USERNAME';
ApiKey.password = 'YOUR PASSWORD';
// Configure Bearer (JWT) access token for authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new FastreportCloudSdk.DataSourcesApi();
let id = "id_example"; // String | data source id
apiInstance.dataSourcesGetMyPermissions(id).then((data) => {
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

[**DataSourcePermissionCRUDVM**](DataSourcePermissionCRUDVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## dataSourcesGetParameterTypes

> DataSourceParameterTypesVM dataSourcesGetParameterTypes(dataSourceType)

Get data source parameter DataType&#39;s

### Example

```javascript
import FastreportCloudSdk from 'fastreport-cloud-sdk';
let defaultClient = FastreportCloudSdk.ApiClient.instance;
// Configure HTTP basic authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.username = 'YOUR USERNAME';
ApiKey.password = 'YOUR PASSWORD';
// Configure Bearer (JWT) access token for authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new FastreportCloudSdk.DataSourcesApi();
let dataSourceType = new FastreportCloudSdk.DataSourceConnectionType(); // DataSourceConnectionType | data source type (MsSql, MySql, etc.)
apiInstance.dataSourcesGetParameterTypes(dataSourceType).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataSourceType** | [**DataSourceConnectionType**](.md)| data source type (MsSql, MySql, etc.) | 

### Return type

[**DataSourceParameterTypesVM**](DataSourceParameterTypesVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## dataSourcesGetPermissions

> DataSourcePermissionsVM dataSourcesGetPermissions(id)

Get all Data source permissions

### Example

```javascript
import FastreportCloudSdk from 'fastreport-cloud-sdk';
let defaultClient = FastreportCloudSdk.ApiClient.instance;
// Configure HTTP basic authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.username = 'YOUR USERNAME';
ApiKey.password = 'YOUR PASSWORD';
// Configure Bearer (JWT) access token for authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new FastreportCloudSdk.DataSourcesApi();
let id = "id_example"; // String | data source id
apiInstance.dataSourcesGetPermissions(id).then((data) => {
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
- **Accept**: application/json


## dataSourcesRenameDataSource

> DataSourceVM dataSourcesRenameDataSource(id, opts)

Rename data source by id

### Example

```javascript
import FastreportCloudSdk from 'fastreport-cloud-sdk';
let defaultClient = FastreportCloudSdk.ApiClient.instance;
// Configure HTTP basic authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.username = 'YOUR USERNAME';
ApiKey.password = 'YOUR PASSWORD';
// Configure Bearer (JWT) access token for authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new FastreportCloudSdk.DataSourcesApi();
let id = "id_example"; // String | data source id
let opts = {
  'renameDataSourceVM': new FastreportCloudSdk.RenameDataSourceVM() // RenameDataSourceVM | rename viewmodel
};
apiInstance.dataSourcesRenameDataSource(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| data source id | 
 **renameDataSourceVM** | [**RenameDataSourceVM**](RenameDataSourceVM.md)| rename viewmodel | [optional] 

### Return type

[**DataSourceVM**](DataSourceVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json


## dataSourcesUpdateConnectionString

> DataSourceVM dataSourcesUpdateConnectionString(id, opts)

Update data source&#39;s connection string by id

### Example

```javascript
import FastreportCloudSdk from 'fastreport-cloud-sdk';
let defaultClient = FastreportCloudSdk.ApiClient.instance;
// Configure HTTP basic authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.username = 'YOUR USERNAME';
ApiKey.password = 'YOUR PASSWORD';
// Configure Bearer (JWT) access token for authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new FastreportCloudSdk.DataSourcesApi();
let id = "id_example"; // String | data source id
let opts = {
  'updateDataSourceConnectionStringVM': new FastreportCloudSdk.UpdateDataSourceConnectionStringVM() // UpdateDataSourceConnectionStringVM | update viewmodel
};
apiInstance.dataSourcesUpdateConnectionString(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| data source id | 
 **updateDataSourceConnectionStringVM** | [**UpdateDataSourceConnectionStringVM**](UpdateDataSourceConnectionStringVM.md)| update viewmodel | [optional] 

### Return type

[**DataSourceVM**](DataSourceVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json


## dataSourcesUpdatePermissions

> dataSourcesUpdatePermissions(id, opts)

Update permissions

### Example

```javascript
import FastreportCloudSdk from 'fastreport-cloud-sdk';
let defaultClient = FastreportCloudSdk.ApiClient.instance;
// Configure HTTP basic authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.username = 'YOUR USERNAME';
ApiKey.password = 'YOUR PASSWORD';
// Configure Bearer (JWT) access token for authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new FastreportCloudSdk.DataSourcesApi();
let id = "id_example"; // String | 
let opts = {
  'updateDataSourcePermissionsVM': new FastreportCloudSdk.UpdateDataSourcePermissionsVM() // UpdateDataSourcePermissionsVM | 
};
apiInstance.dataSourcesUpdatePermissions(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **updateDataSourcePermissionsVM** | [**UpdateDataSourcePermissionsVM**](UpdateDataSourcePermissionsVM.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json


## dataSourcesUpdateSelectCommands

> DataSourceVM dataSourcesUpdateSelectCommands(id, opts)

Update data source&#39;s select commands by id

### Example

```javascript
import FastreportCloudSdk from 'fastreport-cloud-sdk';
let defaultClient = FastreportCloudSdk.ApiClient.instance;
// Configure HTTP basic authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.username = 'YOUR USERNAME';
ApiKey.password = 'YOUR PASSWORD';
// Configure Bearer (JWT) access token for authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new FastreportCloudSdk.DataSourcesApi();
let id = "id_example"; // String | data source id
let opts = {
  'updateDataSourceSelectCommandsVM': new FastreportCloudSdk.UpdateDataSourceSelectCommandsVM() // UpdateDataSourceSelectCommandsVM | update viewmodel
};
apiInstance.dataSourcesUpdateSelectCommands(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| data source id | 
 **updateDataSourceSelectCommandsVM** | [**UpdateDataSourceSelectCommandsVM**](UpdateDataSourceSelectCommandsVM.md)| update viewmodel | [optional] 

### Return type

[**DataSourceVM**](DataSourceVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json


## dataSourcesUpdateSubscriptionDataSource

> dataSourcesUpdateSubscriptionDataSource(id, opts)

Update data source&#39;s subscription

### Example

```javascript
import FastreportCloudSdk from 'fastreport-cloud-sdk';
let defaultClient = FastreportCloudSdk.ApiClient.instance;
// Configure HTTP basic authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.username = 'YOUR USERNAME';
ApiKey.password = 'YOUR PASSWORD';
// Configure Bearer (JWT) access token for authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new FastreportCloudSdk.DataSourcesApi();
let id = "id_example"; // String | data source id
let opts = {
  'updateDataSourceSubscriptionVM': new FastreportCloudSdk.UpdateDataSourceSubscriptionVM() // UpdateDataSourceSubscriptionVM | update subscription viewmodel
};
apiInstance.dataSourcesUpdateSubscriptionDataSource(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| data source id | 
 **updateDataSourceSubscriptionVM** | [**UpdateDataSourceSubscriptionVM**](UpdateDataSourceSubscriptionVM.md)| update subscription viewmodel | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json

