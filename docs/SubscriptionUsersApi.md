# FastreportCloudSdk.SubscriptionUsersApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscriptionUsersAddUser**](SubscriptionUsersApi.md#subscriptionUsersAddUser) | **PUT** /api/manage/v1/Subscriptions/{subscriptionId}/users/{userId} | Add a user to the subscription,  the added users will be displayed in the list of users of the subscription,  and these users will also have an active subscription.
[**subscriptionUsersGetUsers**](SubscriptionUsersApi.md#subscriptionUsersGetUsers) | **GET** /api/manage/v1/Subscriptions/{subscriptionId}/users | Returns all users of subscription
[**subscriptionUsersLeaveSubscripiton**](SubscriptionUsersApi.md#subscriptionUsersLeaveSubscripiton) | **DELETE** /api/manage/v1/Subscriptions/{subscriptionId}/leave | Allows user to leave subscription,.
[**subscriptionUsersRemoveUser**](SubscriptionUsersApi.md#subscriptionUsersRemoveUser) | **DELETE** /api/manage/v1/Subscriptions/{subscriptionId}/users/{userId} | Delete a user from the subscription,  the added users will be displayed in the list of users of the subscription,  and these users will also have an active subscription.



## subscriptionUsersAddUser

> subscriptionUsersAddUser(subscriptionId, userId)

Add a user to the subscription,  the added users will be displayed in the list of users of the subscription,  and these users will also have an active subscription.

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

let apiInstance = new FastreportCloudSdk.SubscriptionUsersApi();
let subscriptionId = "subscriptionId_example"; // String | Idenitifier of subscription
let userId = "userId_example"; // String | Idenitifier of user
apiInstance.subscriptionUsersAddUser(subscriptionId, userId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **String**| Idenitifier of subscription | 
 **userId** | **String**| Idenitifier of user | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## subscriptionUsersGetUsers

> SubscriptionUsersVM subscriptionUsersGetUsers(subscriptionId, opts)

Returns all users of subscription

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

let apiInstance = new FastreportCloudSdk.SubscriptionUsersApi();
let subscriptionId = "subscriptionId_example"; // String | Idenitifier of subscription
let opts = {
  'skip': 0, // Number | How many entities skip
  'take': 10 // Number | How many entities take
};
apiInstance.subscriptionUsersGetUsers(subscriptionId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **String**| Idenitifier of subscription | 
 **skip** | **Number**| How many entities skip | [optional] [default to 0]
 **take** | **Number**| How many entities take | [optional] [default to 10]

### Return type

[**SubscriptionUsersVM**](SubscriptionUsersVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## subscriptionUsersLeaveSubscripiton

> subscriptionUsersLeaveSubscripiton(subscriptionId)

Allows user to leave subscription,.

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

let apiInstance = new FastreportCloudSdk.SubscriptionUsersApi();
let subscriptionId = "subscriptionId_example"; // String | Idenitifier of subscription
apiInstance.subscriptionUsersLeaveSubscripiton(subscriptionId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **String**| Idenitifier of subscription | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## subscriptionUsersRemoveUser

> subscriptionUsersRemoveUser(subscriptionId, userId)

Delete a user from the subscription,  the added users will be displayed in the list of users of the subscription,  and these users will also have an active subscription.

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

let apiInstance = new FastreportCloudSdk.SubscriptionUsersApi();
let subscriptionId = "subscriptionId_example"; // String | Idenitifier of subscription
let userId = "userId_example"; // String | Idenitifier of user
apiInstance.subscriptionUsersRemoveUser(subscriptionId, userId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **String**| Idenitifier of subscription | 
 **userId** | **String**| Idenitifier of user | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

