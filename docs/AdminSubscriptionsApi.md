# FastreportCloudSdk.AdminSubscriptionsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adminSubscriptionsCreateSubscription**](AdminSubscriptionsApi.md#adminSubscriptionsCreateSubscription) | **POST** /api/admin/v1/Subscriptions | Create a new subscription based on some plan
[**adminSubscriptionsDeleteSubscription**](AdminSubscriptionsApi.md#adminSubscriptionsDeleteSubscription) | **DELETE** /api/admin/v1/Subscriptions/{id} | Delete the subscription by id
[**adminSubscriptionsGetNewSibscriptionsPerMonth**](AdminSubscriptionsApi.md#adminSubscriptionsGetNewSibscriptionsPerMonth) | **GET** /api/admin/v1/Subscriptions/stat/new/{from}/{to} | Returns a key-value pair of new(renew) subscriptions count per month for a specified time span: (month, number of new subscriptions)
[**adminSubscriptionsGetPermissions**](AdminSubscriptionsApi.md#adminSubscriptionsGetPermissions) | **GET** /api/admin/v1/Subscriptions/{id}/permissions | Get all subscription permissions
[**adminSubscriptionsGetSubscription**](AdminSubscriptionsApi.md#adminSubscriptionsGetSubscription) | **GET** /api/admin/v1/Subscriptions/{id} | Returns the subscription by id
[**adminSubscriptionsGetSubscriptions**](AdminSubscriptionsApi.md#adminSubscriptionsGetSubscriptions) | **GET** /api/admin/v1/Subscriptions | Returns a list of all subscriptions
[**adminSubscriptionsReCountSubscription**](AdminSubscriptionsApi.md#adminSubscriptionsReCountSubscription) | **GET** /api/admin/v1/Subscriptions/{id}/recount | Recount subscription&#39;s files and folders sizes.
[**adminSubscriptionsUpdatePermissions**](AdminSubscriptionsApi.md#adminSubscriptionsUpdatePermissions) | **POST** /api/admin/v1/Subscriptions/{id}/permissions | Update permissions to subscription
[**adminSubscriptionsUpdateSubscription**](AdminSubscriptionsApi.md#adminSubscriptionsUpdateSubscription) | **PUT** /api/admin/v1/Subscriptions/{id} | Update the subscription by id



## adminSubscriptionsCreateSubscription

> AdminSubscriptionVM adminSubscriptionsCreateSubscription(opts)

Create a new subscription based on some plan

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

let apiInstance = new FastreportCloudSdk.AdminSubscriptionsApi();
let opts = {
  'viewModel': new FastreportCloudSdk.CreateSubscriptionVM() // CreateSubscriptionVM | View model
};
apiInstance.adminSubscriptionsCreateSubscription(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewModel** | [**CreateSubscriptionVM**](CreateSubscriptionVM.md)| View model | [optional] 

### Return type

[**AdminSubscriptionVM**](AdminSubscriptionVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json


## adminSubscriptionsDeleteSubscription

> adminSubscriptionsDeleteSubscription(id)

Delete the subscription by id

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

let apiInstance = new FastreportCloudSdk.AdminSubscriptionsApi();
let id = "id_example"; // String | Identifier of subscription
apiInstance.adminSubscriptionsDeleteSubscription(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Identifier of subscription | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## adminSubscriptionsGetNewSibscriptionsPerMonth

> {String: Number} adminSubscriptionsGetNewSibscriptionsPerMonth(from, to)

Returns a key-value pair of new(renew) subscriptions count per month for a specified time span: (month, number of new subscriptions)

If no subscriptions, then the endpoint will return empty dic

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

let apiInstance = new FastreportCloudSdk.AdminSubscriptionsApi();
let from = new Date("2013-10-20T19:20:30+01:00"); // Date | A starting date for stats calculation
let to = new Date("2013-10-20T19:20:30+01:00"); // Date | An ending date for stats calculation
apiInstance.adminSubscriptionsGetNewSibscriptionsPerMonth(from, to).then((data) => {
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


## adminSubscriptionsGetPermissions

> SubscriptionPermissionsVM adminSubscriptionsGetPermissions(id)

Get all subscription permissions

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

let apiInstance = new FastreportCloudSdk.AdminSubscriptionsApi();
let id = "id_example"; // String | 
apiInstance.adminSubscriptionsGetPermissions(id).then((data) => {
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


## adminSubscriptionsGetSubscription

> AdminSubscriptionVM adminSubscriptionsGetSubscription(id)

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

let apiInstance = new FastreportCloudSdk.AdminSubscriptionsApi();
let id = "id_example"; // String | Identifier of subscription
apiInstance.adminSubscriptionsGetSubscription(id).then((data) => {
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

[**AdminSubscriptionVM**](AdminSubscriptionVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## adminSubscriptionsGetSubscriptions

> AdminSubscriptionsVM adminSubscriptionsGetSubscriptions(opts)

Returns a list of all subscriptions

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

let apiInstance = new FastreportCloudSdk.AdminSubscriptionsApi();
let opts = {
  'skip': 0, // Number | Variable for pagination, defautl value is 0
  'take': 10 // Number | Variable for pagination, default value is 10
};
apiInstance.adminSubscriptionsGetSubscriptions(opts).then((data) => {
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

[**AdminSubscriptionsVM**](AdminSubscriptionsVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## adminSubscriptionsReCountSubscription

> adminSubscriptionsReCountSubscription(id)

Recount subscription&#39;s files and folders sizes.

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

let apiInstance = new FastreportCloudSdk.AdminSubscriptionsApi();
let id = "id_example"; // String | Identifier of subscription
apiInstance.adminSubscriptionsReCountSubscription(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Identifier of subscription | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## adminSubscriptionsUpdatePermissions

> adminSubscriptionsUpdatePermissions(id, opts)

Update permissions to subscription

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

let apiInstance = new FastreportCloudSdk.AdminSubscriptionsApi();
let id = "id_example"; // String | subscription id
let opts = {
  'permissionsVM': new FastreportCloudSdk.UpdateSubscriptionPermissionsVM() // UpdateSubscriptionPermissionsVM | permissions VM
};
apiInstance.adminSubscriptionsUpdatePermissions(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| subscription id | 
 **permissionsVM** | [**UpdateSubscriptionPermissionsVM**](UpdateSubscriptionPermissionsVM.md)| permissions VM | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json


## adminSubscriptionsUpdateSubscription

> AdminSubscriptionVM adminSubscriptionsUpdateSubscription(id, opts)

Update the subscription by id

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

let apiInstance = new FastreportCloudSdk.AdminSubscriptionsApi();
let id = "id_example"; // String | Identifier of subscription
let opts = {
  'viewModel': new FastreportCloudSdk.UpdateSubscriptionVM() // UpdateSubscriptionVM | View model
};
apiInstance.adminSubscriptionsUpdateSubscription(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Identifier of subscription | 
 **viewModel** | [**UpdateSubscriptionVM**](UpdateSubscriptionVM.md)| View model | [optional] 

### Return type

[**AdminSubscriptionVM**](AdminSubscriptionVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

