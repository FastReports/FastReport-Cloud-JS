# FastreportCloudSdk.AdminSubscriptionProblemSolvingApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adminSubscriptionProblemSolvingSolveProblems**](AdminSubscriptionProblemSolvingApi.md#adminSubscriptionProblemSolvingSolveProblems) | **POST** /api/admin/v1/Analytics/Solve | Solve problems provided by FastReport.Cloud.Admin.Controllers.SubscriptionAnalyticsController



## adminSubscriptionProblemSolvingSolveProblems

> adminSubscriptionProblemSolvingSolveProblems(opts)

Solve problems provided by FastReport.Cloud.Admin.Controllers.SubscriptionAnalyticsController

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

let apiInstance = new FastreportCloudSdk.AdminSubscriptionProblemSolvingApi();
let opts = {
  'analysisResults': new FastreportCloudSdk.AnalysisResultsVM() // AnalysisResultsVM | 
};
apiInstance.adminSubscriptionProblemSolvingSolveProblems(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **analysisResults** | [**AnalysisResultsVM**](AnalysisResultsVM.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

