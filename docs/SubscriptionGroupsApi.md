# FastreportCloudSdk.SubscriptionGroupsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscriptionGroupsCountGroupsAsync**](SubscriptionGroupsApi.md#subscriptionGroupsCountGroupsAsync) | **GET** /api/manage/v1/Subscriptions/{subscriptionId}/count | Returns a number of groups in subscription
[**subscriptionGroupsGetGroupsList**](SubscriptionGroupsApi.md#subscriptionGroupsGetGroupsList) | **GET** /api/manage/v1/Subscriptions/{subscriptionId}/groups | returns groups of the subscription or subscription user



## subscriptionGroupsCountGroupsAsync

> Number subscriptionGroupsCountGroupsAsync(subscriptionId)

Returns a number of groups in subscription

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

let apiInstance = new FastreportCloudSdk.SubscriptionGroupsApi();
let subscriptionId = "subscriptionId_example"; // String | subscripiton id
apiInstance.subscriptionGroupsCountGroupsAsync(subscriptionId).then((data) => {
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


## subscriptionGroupsGetGroupsList

> GroupsVM subscriptionGroupsGetGroupsList(subscriptionId, opts)

returns groups of the subscription or subscription user

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

let apiInstance = new FastreportCloudSdk.SubscriptionGroupsApi();
let subscriptionId = "subscriptionId_example"; // String | subscripiton id
let opts = {
  'userId': "userId_example" // String | user Id (optional)
};
apiInstance.subscriptionGroupsGetGroupsList(subscriptionId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **String**| subscripiton id | 
 **userId** | **String**| user Id (optional) | [optional] 

### Return type

[**GroupsVM**](GroupsVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

