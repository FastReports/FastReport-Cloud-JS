# FastreportCloudSdk.AdminSubscriptionAnalyticsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adminSubscriptionAnalyticsCheckAnonPermissions**](AdminSubscriptionAnalyticsApi.md#adminSubscriptionAnalyticsCheckAnonPermissions) | **GET** /api/admin/v1/Analytics/Subscriptions/{subscriptionId}/AnonCheck | This will check if there are any files, related to subscription that available for anonymous users
[**adminSubscriptionAnalyticsCheckOtherPermissions**](AdminSubscriptionAnalyticsApi.md#adminSubscriptionAnalyticsCheckOtherPermissions) | **GET** /api/admin/v1/Analytics/Subscriptions/{subscriptionId}/OtherCheck | This will check if there are any files, related to subscription that not available for subscription users
[**adminSubscriptionAnalyticsGetDeadSubsInUsers**](AdminSubscriptionAnalyticsApi.md#adminSubscriptionAnalyticsGetDeadSubsInUsers) | **GET** /api/admin/v1/Analytics/Subscriptions/DeadSubsInUsers | This will check if there are any deleted subscriptions in users sub lists
[**adminSubscriptionAnalyticsGetEmptySubs**](AdminSubscriptionAnalyticsApi.md#adminSubscriptionAnalyticsGetEmptySubs) | **GET** /api/admin/v1/Analytics/Subscriptions/EmptySubs | This will check if there are any subscriptions without users
[**adminSubscriptionAnalyticsGetLostFileChunks**](AdminSubscriptionAnalyticsApi.md#adminSubscriptionAnalyticsGetLostFileChunks) | **GET** /api/admin/v1/Analytics/Subscriptions/LostFileChunks | This will check if there are any files in gridFS, which not related to any file model
[**adminSubscriptionAnalyticsGetUnrelatedDocuments**](AdminSubscriptionAnalyticsApi.md#adminSubscriptionAnalyticsGetUnrelatedDocuments) | **GET** /api/admin/v1/Analytics/Subscriptions/UnrelatedDocuments | This will check if there are any files, that not related to any existing subscription



## adminSubscriptionAnalyticsCheckAnonPermissions

> AnalysisResultsVM adminSubscriptionAnalyticsCheckAnonPermissions(subscriptionId)

This will check if there are any files, related to subscription that available for anonymous users

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

let apiInstance = new FastreportCloudSdk.AdminSubscriptionAnalyticsApi();
let subscriptionId = "subscriptionId_example"; // String | subscription id
apiInstance.adminSubscriptionAnalyticsCheckAnonPermissions(subscriptionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **String**| subscription id | 

### Return type

[**AnalysisResultsVM**](AnalysisResultsVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## adminSubscriptionAnalyticsCheckOtherPermissions

> AnalysisResultsVM adminSubscriptionAnalyticsCheckOtherPermissions(subscriptionId)

This will check if there are any files, related to subscription that not available for subscription users

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

let apiInstance = new FastreportCloudSdk.AdminSubscriptionAnalyticsApi();
let subscriptionId = "subscriptionId_example"; // String | subscription id
apiInstance.adminSubscriptionAnalyticsCheckOtherPermissions(subscriptionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **String**| subscription id | 

### Return type

[**AnalysisResultsVM**](AnalysisResultsVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## adminSubscriptionAnalyticsGetDeadSubsInUsers

> AnalysisResultsVM adminSubscriptionAnalyticsGetDeadSubsInUsers()

This will check if there are any deleted subscriptions in users sub lists

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

let apiInstance = new FastreportCloudSdk.AdminSubscriptionAnalyticsApi();
apiInstance.adminSubscriptionAnalyticsGetDeadSubsInUsers().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**AnalysisResultsVM**](AnalysisResultsVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## adminSubscriptionAnalyticsGetEmptySubs

> AnalysisResultsVM adminSubscriptionAnalyticsGetEmptySubs()

This will check if there are any subscriptions without users

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

let apiInstance = new FastreportCloudSdk.AdminSubscriptionAnalyticsApi();
apiInstance.adminSubscriptionAnalyticsGetEmptySubs().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**AnalysisResultsVM**](AnalysisResultsVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## adminSubscriptionAnalyticsGetLostFileChunks

> AnalysisResultsVM adminSubscriptionAnalyticsGetLostFileChunks()

This will check if there are any files in gridFS, which not related to any file model

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

let apiInstance = new FastreportCloudSdk.AdminSubscriptionAnalyticsApi();
apiInstance.adminSubscriptionAnalyticsGetLostFileChunks().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**AnalysisResultsVM**](AnalysisResultsVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## adminSubscriptionAnalyticsGetUnrelatedDocuments

> AnalysisResultsVM adminSubscriptionAnalyticsGetUnrelatedDocuments()

This will check if there are any files, that not related to any existing subscription

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

let apiInstance = new FastreportCloudSdk.AdminSubscriptionAnalyticsApi();
apiInstance.adminSubscriptionAnalyticsGetUnrelatedDocuments().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**AnalysisResultsVM**](AnalysisResultsVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

