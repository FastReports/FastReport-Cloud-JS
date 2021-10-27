# FastreportCloudSdk.GroupsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**groupsCreateGroup**](GroupsApi.md#groupsCreateGroup) | **POST** /api/manage/v1/Groups | Create a new user group
[**groupsDeleteGroup**](GroupsApi.md#groupsDeleteGroup) | **DELETE** /api/manage/v1/Groups/{id} | Delete group by identifier
[**groupsGetGroup**](GroupsApi.md#groupsGetGroup) | **GET** /api/manage/v1/Groups/{id} | Gets group by identifier
[**groupsGetGroupList**](GroupsApi.md#groupsGetGroupList) | **GET** /api/manage/v1/Groups | Gets list of user groups
[**groupsGetPermissions**](GroupsApi.md#groupsGetPermissions) | **GET** /api/manage/v1/Groups/{id}/permissions | Gets group permissions by identifier
[**groupsRenameGroup**](GroupsApi.md#groupsRenameGroup) | **PUT** /api/manage/v1/Groups/{id}/rename | Rename group by identifier
[**groupsUpdatePermissions**](GroupsApi.md#groupsUpdatePermissions) | **POST** /api/manage/v1/Groups/{id}/permissions | Update permissions



## groupsCreateGroup

> GroupVM groupsCreateGroup(opts)

Create a new user group

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

let apiInstance = new FastreportCloudSdk.GroupsApi();
let opts = {
  'createGroupVM': new FastreportCloudSdk.CreateGroupVM() // CreateGroupVM | Model for creating
};
apiInstance.groupsCreateGroup(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createGroupVM** | [**CreateGroupVM**](CreateGroupVM.md)| Model for creating | [optional] 

### Return type

[**GroupVM**](GroupVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: application/json


## groupsDeleteGroup

> groupsDeleteGroup(id)

Delete group by identifier

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

let apiInstance = new FastreportCloudSdk.GroupsApi();
let id = "id_example"; // String | Identifier of group
apiInstance.groupsDeleteGroup(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Identifier of group | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## groupsGetGroup

> GroupVM groupsGetGroup(id)

Gets group by identifier

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

let apiInstance = new FastreportCloudSdk.GroupsApi();
let id = "id_example"; // String | Identifier of group
apiInstance.groupsGetGroup(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Identifier of group | 

### Return type

[**GroupVM**](GroupVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## groupsGetGroupList

> GroupsVM groupsGetGroupList(opts)

Gets list of user groups

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

let apiInstance = new FastreportCloudSdk.GroupsApi();
let opts = {
  'skip': 0, // Number | How many groups need to skip
  'take': 10 // Number | How many groups need to take
};
apiInstance.groupsGetGroupList(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Number**| How many groups need to skip | [optional] [default to 0]
 **take** | **Number**| How many groups need to take | [optional] [default to 10]

### Return type

[**GroupsVM**](GroupsVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## groupsGetPermissions

> GroupPermissionsVM groupsGetPermissions(id)

Gets group permissions by identifier

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

let apiInstance = new FastreportCloudSdk.GroupsApi();
let id = "id_example"; // String | Identifier of group
apiInstance.groupsGetPermissions(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Identifier of group | 

### Return type

[**GroupPermissionsVM**](GroupPermissionsVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## groupsRenameGroup

> GroupVM groupsRenameGroup(id, renameGroupVM)

Rename group by identifier

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

let apiInstance = new FastreportCloudSdk.GroupsApi();
let id = "id_example"; // String | Identifier of group
let renameGroupVM = new FastreportCloudSdk.RenameGroupVM(); // RenameGroupVM | Model for renaming
apiInstance.groupsRenameGroup(id, renameGroupVM).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Identifier of group | 
 **renameGroupVM** | [**RenameGroupVM**](RenameGroupVM.md)| Model for renaming | 

### Return type

[**GroupVM**](GroupVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: application/json


## groupsUpdatePermissions

> groupsUpdatePermissions(id, opts)

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

let apiInstance = new FastreportCloudSdk.GroupsApi();
let id = "id_example"; // String | 
let opts = {
  'updateGroupPermissionsVM': new FastreportCloudSdk.UpdateGroupPermissionsVM() // UpdateGroupPermissionsVM | 
};
apiInstance.groupsUpdatePermissions(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **updateGroupPermissionsVM** | [**UpdateGroupPermissionsVM**](UpdateGroupPermissionsVM.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: application/json

