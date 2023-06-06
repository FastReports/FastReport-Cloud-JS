# FastreportCloudSdk.ContactGroupsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contactGroupsCreate**](ContactGroupsApi.md#contactGroupsCreate) | **POST** /api/v1/ContactGroups/group | Creates contact group
[**contactGroupsDelete**](ContactGroupsApi.md#contactGroupsDelete) | **DELETE** /api/v1/ContactGroups/{id} | Removes contact by id
[**contactGroupsGet**](ContactGroupsApi.md#contactGroupsGet) | **GET** /api/v1/ContactGroups/{id} | Returns contact group by id
[**contactGroupsGetList**](ContactGroupsApi.md#contactGroupsGetList) | **GET** /api/v1/ContactGroups/subscription/{subscriptionId}/groups | Returns contact groups by subscriptionId
[**contactGroupsUpdate**](ContactGroupsApi.md#contactGroupsUpdate) | **PUT** /api/v1/ContactGroups/{id} | Updates contact group by id



## contactGroupsCreate

> ContactGroupVM contactGroupsCreate(opts)

Creates contact group

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

let apiInstance = new FastreportCloudSdk.ContactGroupsApi();
let opts = {
  'createContactGroupVM': new FastreportCloudSdk.CreateContactGroupVM() // CreateContactGroupVM | 
};
apiInstance.contactGroupsCreate(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createContactGroupVM** | [**CreateContactGroupVM**](CreateContactGroupVM.md)|  | [optional] 

### Return type

[**ContactGroupVM**](ContactGroupVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json


## contactGroupsDelete

> contactGroupsDelete(id)

Removes contact by id

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

let apiInstance = new FastreportCloudSdk.ContactGroupsApi();
let id = "id_example"; // String | 
apiInstance.contactGroupsDelete(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## contactGroupsGet

> ContactGroupVM contactGroupsGet(id)

Returns contact group by id

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

let apiInstance = new FastreportCloudSdk.ContactGroupsApi();
let id = "id_example"; // String | 
apiInstance.contactGroupsGet(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**ContactGroupVM**](ContactGroupVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## contactGroupsGetList

> ContactGroupsVM contactGroupsGetList(subscriptionId, opts)

Returns contact groups by subscriptionId

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

let apiInstance = new FastreportCloudSdk.ContactGroupsApi();
let subscriptionId = "subscriptionId_example"; // String | 
let opts = {
  'skip': 0, // Number | 
  'take': 10 // Number | 
};
apiInstance.contactGroupsGetList(subscriptionId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **String**|  | 
 **skip** | **Number**|  | [optional] [default to 0]
 **take** | **Number**|  | [optional] [default to 10]

### Return type

[**ContactGroupsVM**](ContactGroupsVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## contactGroupsUpdate

> ContactGroupVM contactGroupsUpdate(id, opts)

Updates contact group by id

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

let apiInstance = new FastreportCloudSdk.ContactGroupsApi();
let id = "id_example"; // String | 
let opts = {
  'updateContactGroupVM': new FastreportCloudSdk.UpdateContactGroupVM() // UpdateContactGroupVM | 
};
apiInstance.contactGroupsUpdate(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **updateContactGroupVM** | [**UpdateContactGroupVM**](UpdateContactGroupVM.md)|  | [optional] 

### Return type

[**ContactGroupVM**](ContactGroupVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json

