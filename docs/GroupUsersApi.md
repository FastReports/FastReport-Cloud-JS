# FastreportCloudSdk.GroupUsersApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**groupUsersAddUserToGroup**](GroupUsersApi.md#groupUsersAddUserToGroup) | **PUT** /api/manage/v1/Groups/{id}/Users/{userId} | Add user to the group by identifier
[**groupUsersGetUsersInGroup**](GroupUsersApi.md#groupUsersGetUsersInGroup) | **GET** /api/manage/v1/Groups/{id}/Users | Returns users in the group by identifier
[**groupUsersLeaveFromGroup**](GroupUsersApi.md#groupUsersLeaveFromGroup) | **DELETE** /api/manage/v1/Groups/{id}/leave | Leave from the group
[**groupUsersRemoveFromGroup**](GroupUsersApi.md#groupUsersRemoveFromGroup) | **DELETE** /api/manage/v1/Groups/{id}/Users/{userId} | Remove user from the group by identifier



## groupUsersAddUserToGroup

> groupUsersAddUserToGroup(id, userId)

Add user to the group by identifier

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

let apiInstance = new FastreportCloudSdk.GroupUsersApi();
let id = "id_example"; // String | Identifier of group
let userId = "userId_example"; // String | Identifier of user
apiInstance.groupUsersAddUserToGroup(id, userId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Identifier of group | 
 **userId** | **String**| Identifier of user | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, text/plain


## groupUsersGetUsersInGroup

> GroupUsersVM groupUsersGetUsersInGroup(id, opts)

Returns users in the group by identifier

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

let apiInstance = new FastreportCloudSdk.GroupUsersApi();
let id = "id_example"; // String | Identifier of group
let opts = {
  'skip': 0, // Number | how many to skip
  'take': 10 // Number | how many to take
};
apiInstance.groupUsersGetUsersInGroup(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Identifier of group | 
 **skip** | **Number**| how many to skip | [optional] [default to 0]
 **take** | **Number**| how many to take | [optional] [default to 10]

### Return type

[**GroupUsersVM**](GroupUsersVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, text/plain


## groupUsersLeaveFromGroup

> groupUsersLeaveFromGroup(id)

Leave from the group

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

let apiInstance = new FastreportCloudSdk.GroupUsersApi();
let id = "id_example"; // String | Identifier of group
apiInstance.groupUsersLeaveFromGroup(id).then(() => {
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
- **Accept**: application/json, text/json, text/plain


## groupUsersRemoveFromGroup

> groupUsersRemoveFromGroup(id, userId)

Remove user from the group by identifier

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

let apiInstance = new FastreportCloudSdk.GroupUsersApi();
let id = "id_example"; // String | Identifier of group
let userId = "userId_example"; // String | Identifier of user
apiInstance.groupUsersRemoveFromGroup(id, userId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Identifier of group | 
 **userId** | **String**| Identifier of user | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, text/plain

