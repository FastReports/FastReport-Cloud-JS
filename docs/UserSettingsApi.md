# FastreportCloudSdk.UserSettingsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userSettingsGetCurrentUserSettings**](UserSettingsApi.md#userSettingsGetCurrentUserSettings) | **GET** /api/manage/v1/UserSettings | Return current user settings.
[**userSettingsUpdateMySettings**](UserSettingsApi.md#userSettingsUpdateMySettings) | **PUT** /api/manage/v1/UserSettings | Update settings of the current user



## userSettingsGetCurrentUserSettings

> UserSettingsVM userSettingsGetCurrentUserSettings()

Return current user settings.

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

let apiInstance = new FastreportCloudSdk.UserSettingsApi();
apiInstance.userSettingsGetCurrentUserSettings().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**UserSettingsVM**](UserSettingsVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, text/plain


## userSettingsUpdateMySettings

> UserSettingsVM userSettingsUpdateMySettings(opts)

Update settings of the current user

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

let apiInstance = new FastreportCloudSdk.UserSettingsApi();
let opts = {
  'model': new FastreportCloudSdk.UpdateUserSettingsVM() // UpdateUserSettingsVM | 
};
apiInstance.userSettingsUpdateMySettings(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | [**UpdateUserSettingsVM**](UpdateUserSettingsVM.md)|  | [optional] 

### Return type

[**UserSettingsVM**](UserSettingsVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
- **Accept**: application/json, text/json, text/plain
