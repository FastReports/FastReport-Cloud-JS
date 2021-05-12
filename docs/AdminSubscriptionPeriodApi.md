# FastreportCloudSdk.AdminSubscriptionPeriodApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adminSubscriptionPeriodRenewSubscription**](AdminSubscriptionPeriodApi.md#adminSubscriptionPeriodRenewSubscription) | **POST** /api/admin/v1/Subscriptions/{id}/Renew | Create a new subscripiton period, move current period to old



## adminSubscriptionPeriodRenewSubscription

> SubscriptionVM adminSubscriptionPeriodRenewSubscription(id, opts)

Create a new subscripiton period, move current period to old

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

let apiInstance = new FastreportCloudSdk.AdminSubscriptionPeriodApi();
let id = "id_example"; // String | 
let opts = {
  'viewModel': new FastreportCloudSdk.CreateSubscriptionPeriodVM() // CreateSubscriptionPeriodVM | 
};
apiInstance.adminSubscriptionPeriodRenewSubscription(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **viewModel** | [**CreateSubscriptionPeriodVM**](CreateSubscriptionPeriodVM.md)|  | [optional] 

### Return type

[**SubscriptionVM**](SubscriptionVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

