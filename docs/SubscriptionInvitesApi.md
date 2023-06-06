# FastreportCloudSdk.SubscriptionInvitesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscriptionInvitesAcceptInvite**](SubscriptionInvitesApi.md#subscriptionInvitesAcceptInvite) | **GET** /api/manage/v1/Subscriptions/{subscriptionId}/invite/{accessToken}/accept | Add a user to the subscription using invite,  the added users will be displayed in the list of users of the subscription,  and these users will also have an active subscription.
[**subscriptionInvitesCreateInvite**](SubscriptionInvitesApi.md#subscriptionInvitesCreateInvite) | **POST** /api/manage/v1/Subscriptions/{subscriptionId}/invite | Create invite to subscription
[**subscriptionInvitesDeleteInvite**](SubscriptionInvitesApi.md#subscriptionInvitesDeleteInvite) | **DELETE** /api/manage/v1/Subscriptions/{subscriptionId}/invite/{accesstoken} | Rename subscription
[**subscriptionInvitesGetInvites**](SubscriptionInvitesApi.md#subscriptionInvitesGetInvites) | **GET** /api/manage/v1/Subscriptions/{subscriptionId}/invites | Get list of invites in a subscription,  the added users will be displayed in the list of users of the subscription,  and these users will also have an active subscription.



## subscriptionInvitesAcceptInvite

> subscriptionInvitesAcceptInvite(subscriptionId, accessToken)

Add a user to the subscription using invite,  the added users will be displayed in the list of users of the subscription,  and these users will also have an active subscription.

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

let apiInstance = new FastreportCloudSdk.SubscriptionInvitesApi();
let subscriptionId = "subscriptionId_example"; // String | Idenitifier of subscription
let accessToken = "accessToken_example"; // String | access token of the subscription
apiInstance.subscriptionInvitesAcceptInvite(subscriptionId, accessToken).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **String**| Idenitifier of subscription | 
 **accessToken** | **String**| access token of the subscription | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## subscriptionInvitesCreateInvite

> SubscriptionInviteVM subscriptionInvitesCreateInvite(subscriptionId, opts)

Create invite to subscription

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

let apiInstance = new FastreportCloudSdk.SubscriptionInvitesApi();
let subscriptionId = "subscriptionId_example"; // String | id
let opts = {
  'createSubscriptionInviteVM': new FastreportCloudSdk.CreateSubscriptionInviteVM() // CreateSubscriptionInviteVM | create VM
};
apiInstance.subscriptionInvitesCreateInvite(subscriptionId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **String**| id | 
 **createSubscriptionInviteVM** | [**CreateSubscriptionInviteVM**](CreateSubscriptionInviteVM.md)| create VM | [optional] 

### Return type

[**SubscriptionInviteVM**](SubscriptionInviteVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json


## subscriptionInvitesDeleteInvite

> subscriptionInvitesDeleteInvite(subscriptionId, accesstoken)

Rename subscription

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

let apiInstance = new FastreportCloudSdk.SubscriptionInvitesApi();
let subscriptionId = "subscriptionId_example"; // String | id
let accesstoken = "accesstoken_example"; // String | invite's token
apiInstance.subscriptionInvitesDeleteInvite(subscriptionId, accesstoken).then(() => {
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
- **Accept**: application/json


## subscriptionInvitesGetInvites

> SubscriptionInvitesVM subscriptionInvitesGetInvites(subscriptionId)

Get list of invites in a subscription,  the added users will be displayed in the list of users of the subscription,  and these users will also have an active subscription.

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

let apiInstance = new FastreportCloudSdk.SubscriptionInvitesApi();
let subscriptionId = "subscriptionId_example"; // String | Idenitifier of subscription
apiInstance.subscriptionInvitesGetInvites(subscriptionId).then((data) => {
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
- **Accept**: application/json

