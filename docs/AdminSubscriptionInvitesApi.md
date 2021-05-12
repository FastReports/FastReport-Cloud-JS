# FastreportCloudSdk.AdminSubscriptionInvitesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adminSubscriptionInvitesCreateInvite**](AdminSubscriptionInvitesApi.md#adminSubscriptionInvitesCreateInvite) | **POST** /api/admin/v1/Subscriptions/{subscriptionId}/invite | Create invite to subscription
[**adminSubscriptionInvitesDeleteInvite**](AdminSubscriptionInvitesApi.md#adminSubscriptionInvitesDeleteInvite) | **DELETE** /api/admin/v1/Subscriptions/{subscriptionId}/invite/{accesstoken} | Rename subscription
[**adminSubscriptionInvitesGetInvites**](AdminSubscriptionInvitesApi.md#adminSubscriptionInvitesGetInvites) | **GET** /api/admin/v1/Subscriptions/{subscriptionId}/invites | Get list of invites in a subscription,  the added users will be displayed in the list of users of the subscription,  and these users will also have an active subscription.



## adminSubscriptionInvitesCreateInvite

> SubscriptionInviteVM adminSubscriptionInvitesCreateInvite(subscriptionId, opts)

Create invite to subscription

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

let apiInstance = new FastreportCloudSdk.AdminSubscriptionInvitesApi();
let subscriptionId = "subscriptionId_example"; // String | id
let opts = {
  'createInviteVM': new FastreportCloudSdk.CreateSubscriptionInviteVM() // CreateSubscriptionInviteVM | create VM
};
apiInstance.adminSubscriptionInvitesCreateInvite(subscriptionId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **String**| id | 
 **createInviteVM** | [**CreateSubscriptionInviteVM**](CreateSubscriptionInviteVM.md)| create VM | [optional] 

### Return type

[**SubscriptionInviteVM**](SubscriptionInviteVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json


## adminSubscriptionInvitesDeleteInvite

> adminSubscriptionInvitesDeleteInvite(subscriptionId, accesstoken)

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

let apiInstance = new FastreportCloudSdk.AdminSubscriptionInvitesApi();
let subscriptionId = "subscriptionId_example"; // String | id
let accesstoken = "accesstoken_example"; // String | invite's token
apiInstance.adminSubscriptionInvitesDeleteInvite(subscriptionId, accesstoken).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **String**| id | 
 **accesstoken** | **String**| invite&#39;s token | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## adminSubscriptionInvitesGetInvites

> SubscriptionInvitesVM adminSubscriptionInvitesGetInvites(subscriptionId)

Get list of invites in a subscription,  the added users will be displayed in the list of users of the subscription,  and these users will also have an active subscription.

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

let apiInstance = new FastreportCloudSdk.AdminSubscriptionInvitesApi();
let subscriptionId = "subscriptionId_example"; // String | Idenitifier of subscription
apiInstance.adminSubscriptionInvitesGetInvites(subscriptionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **String**| Idenitifier of subscription | 

### Return type

[**SubscriptionInvitesVM**](SubscriptionInvitesVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

