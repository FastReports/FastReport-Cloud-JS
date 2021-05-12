# FastreportCloudSdk.SubscriptionsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscriptionsGetDefaultPermissions**](SubscriptionsApi.md#subscriptionsGetDefaultPermissions) | **GET** /api/manage/v1/Subscriptions/{subscriptionId}/defaultPermissions | Get subscription&#39;s default permissions for new entities
[**subscriptionsGetPermissions**](SubscriptionsApi.md#subscriptionsGetPermissions) | **GET** /api/manage/v1/Subscriptions/{id}/permissions | Get permissions for a subscription by id
[**subscriptionsGetSubscription**](SubscriptionsApi.md#subscriptionsGetSubscription) | **GET** /api/manage/v1/Subscriptions/{id} | Returns the subscription by id
[**subscriptionsGetSubscriptions**](SubscriptionsApi.md#subscriptionsGetSubscriptions) | **GET** /api/manage/v1/Subscriptions | Returns a list of all subscriptions of current user
[**subscriptionsRenameSubscription**](SubscriptionsApi.md#subscriptionsRenameSubscription) | **PUT** /api/manage/v1/Subscriptions/{subscriptionId}/rename | Rename subscription
[**subscriptionsUpdateDefaultPermissions**](SubscriptionsApi.md#subscriptionsUpdateDefaultPermissions) | **PUT** /api/manage/v1/Subscriptions/{subscriptionId}/defaultPermissions | Change subscription&#39;s default permissions for new entities
[**subscriptionsUpdateLocale**](SubscriptionsApi.md#subscriptionsUpdateLocale) | **PUT** /api/manage/v1/Subscriptions/{subscriptionId}/Locale | Update subscription&#39;s default locale
[**subscriptionsUpdatePermissions**](SubscriptionsApi.md#subscriptionsUpdatePermissions) | **POST** /api/manage/v1/Subscriptions/{id}/permissions | Update permissions



## subscriptionsGetDefaultPermissions

> DefaultPermissions subscriptionsGetDefaultPermissions(subscriptionId)

Get subscription&#39;s default permissions for new entities

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

let apiInstance = new FastreportCloudSdk.SubscriptionsApi();
let subscriptionId = "subscriptionId_example"; // String | id
apiInstance.subscriptionsGetDefaultPermissions(subscriptionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **String**| id | 

### Return type

[**DefaultPermissions**](DefaultPermissions.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## subscriptionsGetPermissions

> SubscriptionPermissionsVM subscriptionsGetPermissions(id)

Get permissions for a subscription by id

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

let apiInstance = new FastreportCloudSdk.SubscriptionsApi();
let id = "id_example"; // String | 
apiInstance.subscriptionsGetPermissions(id).then((data) => {
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

[**SubscriptionPermissionsVM**](SubscriptionPermissionsVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## subscriptionsGetSubscription

> SubscriptionVM subscriptionsGetSubscription(id)

Returns the subscription by id

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

let apiInstance = new FastreportCloudSdk.SubscriptionsApi();
let id = "id_example"; // String | Identifier of subscription
apiInstance.subscriptionsGetSubscription(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Identifier of subscription | 

### Return type

[**SubscriptionVM**](SubscriptionVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## subscriptionsGetSubscriptions

> SubscriptionsVM subscriptionsGetSubscriptions(opts)

Returns a list of all subscriptions of current user

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

let apiInstance = new FastreportCloudSdk.SubscriptionsApi();
let opts = {
  'skip': 0, // Number | Variable for pagination, defautl value is 0
  'take': 10 // Number | Variable for pagination, default value is 10
};
apiInstance.subscriptionsGetSubscriptions(opts).then((data) => {
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

[**SubscriptionsVM**](SubscriptionsVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## subscriptionsRenameSubscription

> SubscriptionVM subscriptionsRenameSubscription(subscriptionId, renameSubscriptionVM)

Rename subscription

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

let apiInstance = new FastreportCloudSdk.SubscriptionsApi();
let subscriptionId = "subscriptionId_example"; // String | id
let renameSubscriptionVM = new FastreportCloudSdk.RenameSubscriptionVM(); // RenameSubscriptionVM | rename VM
apiInstance.subscriptionsRenameSubscription(subscriptionId, renameSubscriptionVM).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **String**| id | 
 **renameSubscriptionVM** | [**RenameSubscriptionVM**](RenameSubscriptionVM.md)| rename VM | 

### Return type

[**SubscriptionVM**](SubscriptionVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json


## subscriptionsUpdateDefaultPermissions

> DefaultPermissionsVM subscriptionsUpdateDefaultPermissions(subscriptionId, permissionsVM)

Change subscription&#39;s default permissions for new entities

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

let apiInstance = new FastreportCloudSdk.SubscriptionsApi();
let subscriptionId = "subscriptionId_example"; // String | id
let permissionsVM = new FastreportCloudSdk.UpdateDefaultPermissionsVM(); // UpdateDefaultPermissionsVM | update default permissions VM
apiInstance.subscriptionsUpdateDefaultPermissions(subscriptionId, permissionsVM).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **String**| id | 
 **permissionsVM** | [**UpdateDefaultPermissionsVM**](UpdateDefaultPermissionsVM.md)| update default permissions VM | 

### Return type

[**DefaultPermissionsVM**](DefaultPermissionsVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json


## subscriptionsUpdateLocale

> SubscriptionVM subscriptionsUpdateLocale(subscriptionId, updateModel)

Update subscription&#39;s default locale

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

let apiInstance = new FastreportCloudSdk.SubscriptionsApi();
let subscriptionId = "subscriptionId_example"; // String | id
let updateModel = new FastreportCloudSdk.UpdateSubscriptionLocaleVM(); // UpdateSubscriptionLocaleVM | update VM
apiInstance.subscriptionsUpdateLocale(subscriptionId, updateModel).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **String**| id | 
 **updateModel** | [**UpdateSubscriptionLocaleVM**](UpdateSubscriptionLocaleVM.md)| update VM | 

### Return type

[**SubscriptionVM**](SubscriptionVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json


## subscriptionsUpdatePermissions

> subscriptionsUpdatePermissions(id, opts)

Update permissions

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

let apiInstance = new FastreportCloudSdk.SubscriptionsApi();
let id = "id_example"; // String | 
let opts = {
  'permissionsVM': new FastreportCloudSdk.UpdateSubscriptionPermissionsVM() // UpdateSubscriptionPermissionsVM | 
};
apiInstance.subscriptionsUpdatePermissions(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **permissionsVM** | [**UpdateSubscriptionPermissionsVM**](UpdateSubscriptionPermissionsVM.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

