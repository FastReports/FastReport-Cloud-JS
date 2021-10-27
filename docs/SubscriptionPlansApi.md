# FastreportCloudSdk.SubscriptionPlansApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscriptionPlansGetSubscriptionPlan**](SubscriptionPlansApi.md#subscriptionPlansGetSubscriptionPlan) | **GET** /api/manage/v1/SubscriptionPlans/{id} | Returns a subscription plan. Not all subscriptions can be issued for customer.
[**subscriptionPlansGetSubscriptionPlans**](SubscriptionPlansApi.md#subscriptionPlansGetSubscriptionPlans) | **GET** /api/manage/v1/SubscriptionPlans | Returns a list of active subscription plans that can be issued to the user.



## subscriptionPlansGetSubscriptionPlan

> SubscriptionPlanVM subscriptionPlansGetSubscriptionPlan(id)

Returns a subscription plan. Not all subscriptions can be issued for customer.

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

let apiInstance = new FastreportCloudSdk.SubscriptionPlansApi();
let id = "id_example"; // String | Identifier of subsctiption plan
apiInstance.subscriptionPlansGetSubscriptionPlan(id).then((data) => {
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
- **Accept**: application/json


## subscriptionPlansGetSubscriptionPlans

> SubscriptionPlansVM subscriptionPlansGetSubscriptionPlans(opts)

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
// Configure Bearer (JWT) access token for authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new FastreportCloudSdk.SubscriptionPlansApi();
let opts = {
  'skip': 0, // Number | Variable for pagination, defautl value is 0
  'take': 10 // Number | Variable for pagination, default value is 10
};
apiInstance.subscriptionPlansGetSubscriptionPlans(opts).then((data) => {
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
- **Accept**: application/json

