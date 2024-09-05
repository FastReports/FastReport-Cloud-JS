# FastreportCloudSdk.UserNotificationsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userNotificationsClearNotifications**](UserNotificationsApi.md#userNotificationsClearNotifications) | **DELETE** /api/manage/v1/notifications | Use this endpoint to \&quot;clear\&quot; your notifications
[**userNotificationsGetNotifications**](UserNotificationsApi.md#userNotificationsGetNotifications) | **GET** /api/manage/v1/notifications | Use this endpoint to recieve notifications



## userNotificationsClearNotifications

> userNotificationsClearNotifications(opts)

Use this endpoint to \&quot;clear\&quot; your notifications

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

let apiInstance = new FastreportCloudSdk.UserNotificationsApi();
let opts = {
  'clearNotificationsVM': new FastreportCloudSdk.ClearNotificationsVM() // ClearNotificationsVM | 
};
apiInstance.userNotificationsClearNotifications(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clearNotificationsVM** | [**ClearNotificationsVM**](ClearNotificationsVM.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json


## userNotificationsGetNotifications

> AuditActionsVM userNotificationsGetNotifications(opts)

Use this endpoint to recieve notifications

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

let apiInstance = new FastreportCloudSdk.UserNotificationsApi();
let opts = {
  'skip': 0, // Number | 
  'take': 5, // Number | 
  'subscriptionId': "''" // String | 
};
apiInstance.userNotificationsGetNotifications(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Number**|  | [optional] [default to 0]
 **take** | **Number**|  | [optional] [default to 5]
 **subscriptionId** | **String**|  | [optional] [default to &#39;&#39;]

### Return type

[**AuditActionsVM**](AuditActionsVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

