# FastreportCloudSdk.TasksApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tasksCreateTask**](TasksApi.md#tasksCreateTask) | **POST** /api/tasks | Create a new task
[**tasksDeleteTask**](TasksApi.md#tasksDeleteTask) | **DELETE** /api/tasks/{taskId} | Delete a task from a storage
[**tasksGet**](TasksApi.md#tasksGet) | **GET** /api/tasks/{taskId} | Get a task by a specified id
[**tasksGetList**](TasksApi.md#tasksGetList) | **GET** /api/tasks | Get tasks list
[**tasksRunTask**](TasksApi.md#tasksRunTask) | **POST** /api/tasks/run | Run a task from request body
[**tasksRunTaskById**](TasksApi.md#tasksRunTaskById) | **POST** /api/tasks/{taskId}/run | Run a task by id



## tasksCreateTask

> TaskBaseVM tasksCreateTask(opts)

Create a new task

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

let apiInstance = new FastreportCloudSdk.TasksApi();
let opts = {
  'createTaskBaseVM': new FastreportCloudSdk.CreateTaskBaseVM() // CreateTaskBaseVM | task's view model. You have to specify task type (type: \"ExportTemplate\")
};
apiInstance.tasksCreateTask(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTaskBaseVM** | [**CreateTaskBaseVM**](CreateTaskBaseVM.md)| task&#39;s view model. You have to specify task type (type: \&quot;ExportTemplate\&quot;) | [optional] 

### Return type

[**TaskBaseVM**](TaskBaseVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: application/json


## tasksDeleteTask

> tasksDeleteTask(taskId)

Delete a task from a storage

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

let apiInstance = new FastreportCloudSdk.TasksApi();
let taskId = "taskId_example"; // String | deleting task id
apiInstance.tasksDeleteTask(taskId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| deleting task id | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## tasksGet

> TaskBaseVM tasksGet(taskId)

Get a task by a specified id

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

let apiInstance = new FastreportCloudSdk.TasksApi();
let taskId = "taskId_example"; // String | a task id
apiInstance.tasksGet(taskId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| a task id | 

### Return type

[**TaskBaseVM**](TaskBaseVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## tasksGetList

> TasksVM tasksGetList(opts)

Get tasks list

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

let apiInstance = new FastreportCloudSdk.TasksApi();
let opts = {
  'skip': 0, // Number | number of tasks, that have to be skipped
  'take': 10, // Number | number of tasks, that have to be returned
  'subscriptionId': "subscriptionId_example" // String | subscription id
};
apiInstance.tasksGetList(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Number**| number of tasks, that have to be skipped | [optional] [default to 0]
 **take** | **Number**| number of tasks, that have to be returned | [optional] [default to 10]
 **subscriptionId** | **String**| subscription id | [optional] 

### Return type

[**TasksVM**](TasksVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## tasksRunTask

> tasksRunTask(opts)

Run a task from request body

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

let apiInstance = new FastreportCloudSdk.TasksApi();
let opts = {
  'runTaskBaseVM': new FastreportCloudSdk.RunTaskBaseVM() // RunTaskBaseVM | task's view model
};
apiInstance.tasksRunTask(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **runTaskBaseVM** | [**RunTaskBaseVM**](RunTaskBaseVM.md)| task&#39;s view model | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: application/json


## tasksRunTaskById

> tasksRunTaskById(taskId)

Run a task by id

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

let apiInstance = new FastreportCloudSdk.TasksApi();
let taskId = "taskId_example"; // String | task id
apiInstance.tasksRunTaskById(taskId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| task id | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

