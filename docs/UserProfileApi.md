# FastreportCloudSdk.UserProfileApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userProfileGetMyProfile**](UserProfileApi.md#userProfileGetMyProfile) | **GET** /api/manage/v1/UserProfile | Return current profile of the current user
[**userProfileGetUserProfile**](UserProfileApi.md#userProfileGetUserProfile) | **GET** /api/manage/v1/UserProfile/{userId} | Return user profile by user identifier.  If the user did not provide information about himself or blocked, then the endpoint will return an empty model. (only id)
[**userProfileUpdateMyProfile**](UserProfileApi.md#userProfileUpdateMyProfile) | **PUT** /api/manage/v1/UserProfile | Update profile of the current user



## userProfileGetMyProfile

> UserProfileVM userProfileGetMyProfile()

Return current profile of the current user

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

let apiInstance = new FastreportCloudSdk.UserProfileApi();
apiInstance.userProfileGetMyProfile().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**UserProfileVM**](UserProfileVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## userProfileGetUserProfile

> UserProfileVM userProfileGetUserProfile(userId)

Return user profile by user identifier.  If the user did not provide information about himself or blocked, then the endpoint will return an empty model. (only id)

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

let apiInstance = new FastreportCloudSdk.UserProfileApi();
let userId = "userId_example"; // String | 
apiInstance.userProfileGetUserProfile(userId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 

### Return type

[**UserProfileVM**](UserProfileVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## userProfileUpdateMyProfile

> userProfileUpdateMyProfile(opts)

Update profile of the current user

This method is only allowed for local sign in via intranet

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

let apiInstance = new FastreportCloudSdk.UserProfileApi();
let opts = {
  'updateUserProfileVM': new FastreportCloudSdk.UpdateUserProfileVM() // UpdateUserProfileVM | 
};
apiInstance.userProfileUpdateMyProfile(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateUserProfileVM** | [**UpdateUserProfileVM**](UpdateUserProfileVM.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json

