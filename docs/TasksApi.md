# FastreportCloudSdk.TasksApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tasksCreateTask**](TasksApi.md#tasksCreateTask) | **POST** /api/tasks/v1/Tasks | Create a new task
[**tasksDeleteTask**](TasksApi.md#tasksDeleteTask) | **DELETE** /api/tasks/v1/Tasks/{taskId} | Delete a task from a storage
[**tasksGet**](TasksApi.md#tasksGet) | **GET** /api/tasks/v1/Tasks/{taskId} | Get a task by a specified id
[**tasksGetList**](TasksApi.md#tasksGetList) | **GET** /api/tasks/v1/Tasks | Get tasks list
[**tasksGetMyPermissions**](TasksApi.md#tasksGetMyPermissions) | **GET** /api/tasks/v1/Tasks/{id}/mypermissions | Get current user&#39;s permissions to Task
[**tasksGetPermissions**](TasksApi.md#tasksGetPermissions) | **GET** /api/tasks/v1/Tasks/{id}/permissions | Get all Task permissions
[**tasksRenameTask**](TasksApi.md#tasksRenameTask) | **PUT** /api/tasks/v1/Tasks/{taskId}/rename | Rename a task
[**tasksRunTask**](TasksApi.md#tasksRunTask) | **POST** /api/tasks/v1/Tasks/run | Run a task from request body
[**tasksRunTaskById**](TasksApi.md#tasksRunTaskById) | **POST** /api/tasks/v1/Tasks/{taskId}/run | Run a task by id
[**tasksUpdatePermissions**](TasksApi.md#tasksUpdatePermissions) | **POST** /api/tasks/v1/Tasks/{id}/permissions | Update permissions
[**tasksUpdateTask**](TasksApi.md#tasksUpdateTask) | **PUT** /api/tasks/v1/Tasks/{taskId} | Update a task



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
  'createTaskBaseVM': new FastreportCloudSdk.CreateTaskBaseVM() // CreateTaskBaseVM | task's view model. You have to specify task type by placing parameter \"$t\": \"Vm name\",              this parameters always must be on the first place
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
 **createTaskBaseVM** | [**CreateTaskBaseVM**](CreateTaskBaseVM.md)| task&#39;s view model. You have to specify task type by placing parameter \&quot;$t\&quot;: \&quot;Vm name\&quot;,              this parameters always must be on the first place | [optional] 

### Return type

[**TaskBaseVM**](TaskBaseVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
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
  'subscriptionId': "subscriptionId_example", // String | subscription id
  'searchPattern': "''" // String | 
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
 **searchPattern** | **String**|  | [optional] [default to &#39;&#39;]

### Return type

[**TasksVM**](TasksVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## tasksGetMyPermissions

> TaskPermissionCRUDVM tasksGetMyPermissions(id)

Get current user&#39;s permissions to Task

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
let id = "id_example"; // String | task id
apiInstance.tasksGetMyPermissions(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| task id | 

### Return type

[**TaskPermissionCRUDVM**](TaskPermissionCRUDVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## tasksGetPermissions

> TaskPermissionsVM tasksGetPermissions(id)

Get all Task permissions

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
let id = "id_example"; // String | task id
apiInstance.tasksGetPermissions(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| task id | 

### Return type

[**TaskPermissionsVM**](TaskPermissionsVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## tasksRenameTask

> TaskBaseVM tasksRenameTask(taskId, opts)

Rename a task

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
let taskId = "taskId_example"; // String | renaming task id
let opts = {
  'newName': "newName_example" // String | task's new Name
};
apiInstance.tasksRenameTask(taskId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| renaming task id | 
 **newName** | **String**| task&#39;s new Name | [optional] 

### Return type

[**TaskBaseVM**](TaskBaseVM.md)

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
  'runTaskBaseVM': new FastreportCloudSdk.RunTaskBaseVM() // RunTaskBaseVM | task's view model. You have to specify task type by placing parameter \"$t\": \"Vm name\",              this parameters always must be on the first place
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
 **runTaskBaseVM** | [**RunTaskBaseVM**](RunTaskBaseVM.md)| task&#39;s view model. You have to specify task type by placing parameter \&quot;$t\&quot;: \&quot;Vm name\&quot;,              this parameters always must be on the first place | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
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


## tasksUpdatePermissions

> tasksUpdatePermissions(id, opts)

Update permissions

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
let id = "id_example"; // String | task id
let opts = {
  'updateTaskPermissionsVM': new FastreportCloudSdk.UpdateTaskPermissionsVM() // UpdateTaskPermissionsVM | new permissions. You have to specify VM type by placing parameter \"$t\": \"Vm name\",              this parameters always must be on first place
};
apiInstance.tasksUpdatePermissions(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| task id | 
 **updateTaskPermissionsVM** | [**UpdateTaskPermissionsVM**](UpdateTaskPermissionsVM.md)| new permissions. You have to specify VM type by placing parameter \&quot;$t\&quot;: \&quot;Vm name\&quot;,              this parameters always must be on first place | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json


## tasksUpdateTask

> TaskBaseVM tasksUpdateTask(taskId, opts)

Update a task

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
let taskId = "taskId_example"; // String | updating task id
let opts = {
  'updateTaskBaseVM': new FastreportCloudSdk.UpdateTaskBaseVM() // UpdateTaskBaseVM | task's view model. You have to specify task type by placing parameter \"$t\": \"Vm name\",              this parameters always must be on first place
};
apiInstance.tasksUpdateTask(taskId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| updating task id | 
 **updateTaskBaseVM** | [**UpdateTaskBaseVM**](UpdateTaskBaseVM.md)| task&#39;s view model. You have to specify task type by placing parameter \&quot;$t\&quot;: \&quot;Vm name\&quot;,              this parameters always must be on first place | [optional] 

### Return type

[**TaskBaseVM**](TaskBaseVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json

