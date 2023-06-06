# FastreportCloudSdk.ApiKeysApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiKeysCreateApiKey**](ApiKeysApi.md#apiKeysCreateApiKey) | **POST** /api/manage/v1/ApiKeys | Create a new apikey, 5 apikeys for user. Hardcoded for ddos.
[**apiKeysDeleteApiKey**](ApiKeysApi.md#apiKeysDeleteApiKey) | **DELETE** /api/manage/v1/ApiKeys | Delete an apikey
[**apiKeysGetApiKeys**](ApiKeysApi.md#apiKeysGetApiKeys) | **GET** /api/manage/v1/ApiKeys | Returns list with all api keys of current user



## apiKeysCreateApiKey

> ApiKeyVM apiKeysCreateApiKey(createApiKeyVM)

Create a new apikey, 5 apikeys for user. Hardcoded for ddos.

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

let apiInstance = new FastreportCloudSdk.ApiKeysApi();
let createApiKeyVM = new FastreportCloudSdk.CreateApiKeyVM(); // CreateApiKeyVM | 
apiInstance.apiKeysCreateApiKey(createApiKeyVM).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createApiKeyVM** | [**CreateApiKeyVM**](CreateApiKeyVM.md)|  | 

### Return type

[**ApiKeyVM**](ApiKeyVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json


## apiKeysDeleteApiKey

> apiKeysDeleteApiKey(deleteApiKeyVM)

Delete an apikey

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

let apiInstance = new FastreportCloudSdk.ApiKeysApi();
let deleteApiKeyVM = new FastreportCloudSdk.DeleteApiKeyVM(); // DeleteApiKeyVM | 
apiInstance.apiKeysDeleteApiKey(deleteApiKeyVM).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteApiKeyVM** | [**DeleteApiKeyVM**](DeleteApiKeyVM.md)|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json


## apiKeysGetApiKeys

> ApiKeysVM apiKeysGetApiKeys()

Returns list with all api keys of current user

Always work, it should make only 200 response (except if user is not authorized).

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

let apiInstance = new FastreportCloudSdk.ApiKeysApi();
apiInstance.apiKeysGetApiKeys().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ApiKeysVM**](ApiKeysVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

