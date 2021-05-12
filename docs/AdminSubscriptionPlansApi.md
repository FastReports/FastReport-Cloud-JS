# FastreportCloudSdk.AdminSubscriptionPlansApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adminSubscriptionPlansCreateSubscriptionPlan**](AdminSubscriptionPlansApi.md#adminSubscriptionPlansCreateSubscriptionPlan) | **POST** /api/admin/v1/SubscriptionPlans | Create a new subscription plan, returns a new model
[**adminSubscriptionPlansDeleteSubscriptionPlan**](AdminSubscriptionPlansApi.md#adminSubscriptionPlansDeleteSubscriptionPlan) | **DELETE** /api/admin/v1/SubscriptionPlans/{id} | Delete a subscription plan.
[**adminSubscriptionPlansGetSubscriptionPlan**](AdminSubscriptionPlansApi.md#adminSubscriptionPlansGetSubscriptionPlan) | **GET** /api/admin/v1/SubscriptionPlans/{id} | Returns a subscription plan. Not all subscriptions can be issued for customer.
[**adminSubscriptionPlansGetSubscriptionPlans**](AdminSubscriptionPlansApi.md#adminSubscriptionPlansGetSubscriptionPlans) | **GET** /api/admin/v1/SubscriptionPlans | Returns a list of active subscription plans that can be issued to the user.
[**adminSubscriptionPlansUpdateSubscriptionPlan**](AdminSubscriptionPlansApi.md#adminSubscriptionPlansUpdateSubscriptionPlan) | **PUT** /api/admin/v1/SubscriptionPlans/{id} | Update a subscription plan.



## adminSubscriptionPlansCreateSubscriptionPlan

> SubscriptionPlanVM adminSubscriptionPlansCreateSubscriptionPlan(opts)

Create a new subscription plan, returns a new model

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

let apiInstance = new FastreportCloudSdk.AdminSubscriptionPlansApi();
let opts = {
  'viewModel': new FastreportCloudSdk.CreateSubscriptionPlanVM() // CreateSubscriptionPlanVM | 
};
apiInstance.adminSubscriptionPlansCreateSubscriptionPlan(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **viewModel** | [**CreateSubscriptionPlanVM**](CreateSubscriptionPlanVM.md)|  | [optional] 

### Return type

[**SubscriptionPlanVM**](SubscriptionPlanVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json


## adminSubscriptionPlansDeleteSubscriptionPlan

> adminSubscriptionPlansDeleteSubscriptionPlan(id)

Delete a subscription plan.

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

let apiInstance = new FastreportCloudSdk.AdminSubscriptionPlansApi();
let id = "id_example"; // String | Identifier of subsctiption plan
apiInstance.adminSubscriptionPlansDeleteSubscriptionPlan(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Identifier of subsctiption plan | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## adminSubscriptionPlansGetSubscriptionPlan

> SubscriptionPlanVM adminSubscriptionPlansGetSubscriptionPlan(id)

Returns a subscription plan. Not all subscriptions can be issued for customer.

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

let apiInstance = new FastreportCloudSdk.AdminSubscriptionPlansApi();
let id = "id_example"; // String | Identifier of subsctiption plan
apiInstance.adminSubscriptionPlansGetSubscriptionPlan(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Identifier of subsctiption plan | 

### Return type

[**SubscriptionPlanVM**](SubscriptionPlanVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## adminSubscriptionPlansGetSubscriptionPlans

> SubscriptionPlansVM adminSubscriptionPlansGetSubscriptionPlans(opts)

Returns a list of active subscription plans that can be issued to the user.

If no active subscription plans, then the endpoint will return empty list

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

let apiInstance = new FastreportCloudSdk.AdminSubscriptionPlansApi();
let opts = {
  'skip': 0, // Number | Variable for pagination, defautl value is 0
  'take': 10 // Number | Variable for pagination, default value is 10
};
apiInstance.adminSubscriptionPlansGetSubscriptionPlans(opts).then((data) => {
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

[**SubscriptionPlansVM**](SubscriptionPlansVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## adminSubscriptionPlansUpdateSubscriptionPlan

> SubscriptionPlanVM adminSubscriptionPlansUpdateSubscriptionPlan(id, opts)

Update a subscription plan.

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

let apiInstance = new FastreportCloudSdk.AdminSubscriptionPlansApi();
let id = "id_example"; // String | Identifier of subsctiption plan
let opts = {
  'viewModel': new FastreportCloudSdk.UpdateSubscriptionPlanVM() // UpdateSubscriptionPlanVM | Update VM
};
apiInstance.adminSubscriptionPlansUpdateSubscriptionPlan(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Identifier of subsctiption plan | 
 **viewModel** | [**UpdateSubscriptionPlanVM**](UpdateSubscriptionPlanVM.md)| Update VM | [optional] 

### Return type

[**SubscriptionPlanVM**](SubscriptionPlanVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

