# FastreportCloudSdk.AdminUsersApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adminUsersDeleteUser**](AdminUsersApi.md#adminUsersDeleteUser) | **DELETE** /api/admin/v1/Users/{id} | Delete a user from cloud database by id
[**adminUsersGetNewUsersPerMonth**](AdminUsersApi.md#adminUsersGetNewUsersPerMonth) | **GET** /api/admin/v1/Users/stat/new/{from}/{to} | Returns a key-value pair of new users count per month for a specified time span: (month, number of new users)
[**adminUsersGetUser**](AdminUsersApi.md#adminUsersGetUser) | **GET** /api/admin/v1/Users/{id} | Returns a user view model by id
[**adminUsersGetUsers**](AdminUsersApi.md#adminUsersGetUsers) | **GET** /api/admin/v1/Users | Returns a list of users
[**adminUsersRegisterUser**](AdminUsersApi.md#adminUsersRegisterUser) | **POST** /api/admin/v1/Users | Register a new user in the cloud with specified id, returns a new model
[**adminUsersUpdateUser**](AdminUsersApi.md#adminUsersUpdateUser) | **PUT** /api/admin/v1/Users/{id} | Update an user by id



## adminUsersDeleteUser

> adminUsersDeleteUser(id)

Delete a user from cloud database by id

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

let apiInstance = new FastreportCloudSdk.AdminUsersApi();
let id = "id_example"; // String | Identifier of user
apiInstance.adminUsersDeleteUser(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Identifier of user | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## adminUsersGetNewUsersPerMonth

> {String: Number} adminUsersGetNewUsersPerMonth(from, to)

Returns a key-value pair of new users count per month for a specified time span: (month, number of new users)

If no users, then the endpoint will return empty dic

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

let apiInstance = new FastreportCloudSdk.AdminUsersApi();
let from = new Date("2013-10-20T19:20:30+01:00"); // Date | A starting date for stats calculation
let to = new Date("2013-10-20T19:20:30+01:00"); // Date | An ending date for stats calculation
apiInstance.adminUsersGetNewUsersPerMonth(from, to).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | **Date**| A starting date for stats calculation | 
 **to** | **Date**| An ending date for stats calculation | 

### Return type

**{String: Number}**

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## adminUsersGetUser

> UserVM adminUsersGetUser(id)

Returns a user view model by id

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

let apiInstance = new FastreportCloudSdk.AdminUsersApi();
let id = "id_example"; // String | Identifier of user
apiInstance.adminUsersGetUser(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Identifier of user | 

### Return type

[**UserVM**](UserVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## adminUsersGetUsers

> UsersVM adminUsersGetUsers(opts)

Returns a list of users

If no users, then the endpoint will return empty list

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

let apiInstance = new FastreportCloudSdk.AdminUsersApi();
let opts = {
  'skip': 0, // Number | Variable for pagination, defautl value is 0
  'take': 10 // Number | Variable for pagination, default value is 10
};
apiInstance.adminUsersGetUsers(opts).then((data) => {
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

### Return type

[**UsersVM**](UsersVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## adminUsersRegisterUser

> UserVM adminUsersRegisterUser(opts)

Register a new user in the cloud with specified id, returns a new model

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

let apiInstance = new FastreportCloudSdk.AdminUsersApi();
let opts = {
  'viewModel': new FastreportCloudSdk.RegisterUserVM() // RegisterUserVM | 
};
apiInstance.adminUsersRegisterUser(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewModel** | [**RegisterUserVM**](RegisterUserVM.md)|  | [optional] 

### Return type

[**UserVM**](UserVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json


## adminUsersUpdateUser

> UserVM adminUsersUpdateUser(id, opts)

Update an user by id

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

let apiInstance = new FastreportCloudSdk.AdminUsersApi();
let id = "id_example"; // String | Identifier of the user
let opts = {
  'viewModel': new FastreportCloudSdk.UpdateUserVM() // UpdateUserVM | update VM
};
apiInstance.adminUsersUpdateUser(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Identifier of the user | 
 **viewModel** | [**UpdateUserVM**](UpdateUserVM.md)| update VM | [optional] 

### Return type

[**UserVM**](UserVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

