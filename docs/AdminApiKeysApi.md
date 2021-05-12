# FastreportCloudSdk.AdminApiKeysApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adminApiKeysCreateApiKey**](AdminApiKeysApi.md#adminApiKeysCreateApiKey) | **POST** /api/admin/v1/ApiKeys/{userId} | Create a new apikey, 5 apikeys for user. Hardcoded for ddos.
[**adminApiKeysDeleteApiKey**](AdminApiKeysApi.md#adminApiKeysDeleteApiKey) | **DELETE** /api/admin/v1/ApiKeys/{userId} | Delete an apikey
[**adminApiKeysGetApiKeys**](AdminApiKeysApi.md#adminApiKeysGetApiKeys) | **GET** /api/admin/v1/ApiKeys/{userId} | Returns list with all api keys of a specified user



## adminApiKeysCreateApiKey

> ApiKeyVM adminApiKeysCreateApiKey(userId, opts)

Create a new apikey, 5 apikeys for user. Hardcoded for ddos.

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

let apiInstance = new FastreportCloudSdk.AdminApiKeysApi();
let userId = "userId_example"; // String | 
let opts = {
  'model': new FastreportCloudSdk.CreateApiKeyVM() // CreateApiKeyVM | 
};
apiInstance.adminApiKeysCreateApiKey(userId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **model** | [**CreateApiKeyVM**](CreateApiKeyVM.md)|  | [optional] 

### Return type

[**ApiKeyVM**](ApiKeyVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json


## adminApiKeysDeleteApiKey

> adminApiKeysDeleteApiKey(userId, opts)

Delete an apikey

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

let apiInstance = new FastreportCloudSdk.AdminApiKeysApi();
let userId = "userId_example"; // String | 
let opts = {
  'model': new FastreportCloudSdk.DeleteApiKeyVM() // DeleteApiKeyVM | 
};
apiInstance.adminApiKeysDeleteApiKey(userId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **model** | [**DeleteApiKeyVM**](DeleteApiKeyVM.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json


## adminApiKeysGetApiKeys

> ApiKeysVM adminApiKeysGetApiKeys(userId)

Returns list with all api keys of a specified user

Always work, it should make only 200 response.

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

let apiInstance = new FastreportCloudSdk.AdminApiKeysApi();
let userId = "userId_example"; // String | 
apiInstance.adminApiKeysGetApiKeys(userId).then((data) => {
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

[**ApiKeysVM**](ApiKeysVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

