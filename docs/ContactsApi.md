# FastreportCloudSdk.ContactsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contactsCreate**](ContactsApi.md#contactsCreate) | **POST** /api/v1/Contacts/contact | Creates new contact
[**contactsDelete**](ContactsApi.md#contactsDelete) | **DELETE** /api/v1/Contacts/{id} | Removes contact by id
[**contactsGet**](ContactsApi.md#contactsGet) | **GET** /api/v1/Contacts/{id} | Returns contact group by id
[**contactsGetByGroup**](ContactsApi.md#contactsGetByGroup) | **GET** /api/v1/Contacts/group/{groupId}/contacts | Returns contacts by group id
[**contactsGetList**](ContactsApi.md#contactsGetList) | **GET** /api/v1/Contacts/subscription/{subscriptionId}/contacts | Allows to search for contacts
[**contactsUpdate**](ContactsApi.md#contactsUpdate) | **PUT** /api/v1/Contacts/{id} | Updates contact by id



## contactsCreate

> ContactVM contactsCreate(opts)

Creates new contact

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

let apiInstance = new FastreportCloudSdk.ContactsApi();
let opts = {
  'createContactVM': new FastreportCloudSdk.CreateContactVM() // CreateContactVM | 
};
apiInstance.contactsCreate(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createContactVM** | [**CreateContactVM**](CreateContactVM.md)|  | [optional] 

### Return type

[**ContactVM**](ContactVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json


## contactsDelete

> contactsDelete(id)

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

let apiInstance = new FastreportCloudSdk.ContactsApi();
let id = "id_example"; // String | 
apiInstance.contactsDelete(id).then(() => {
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


## contactsGet

> ContactVM contactsGet(id)

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

let apiInstance = new FastreportCloudSdk.ContactsApi();
let id = "id_example"; // String | 
apiInstance.contactsGet(id).then((data) => {
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

[**ContactVM**](ContactVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## contactsGetByGroup

> ContactsVM contactsGetByGroup(groupId, opts)

Returns contacts by group id

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

let apiInstance = new FastreportCloudSdk.ContactsApi();
let groupId = "groupId_example"; // String | 
let opts = {
  'skip': 0, // Number | 
  'take': 10 // Number | 
};
apiInstance.contactsGetByGroup(groupId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **String**|  | 
 **skip** | **Number**|  | [optional] [default to 0]
 **take** | **Number**|  | [optional] [default to 10]

### Return type

[**ContactsVM**](ContactsVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## contactsGetList

> ContactsVM contactsGetList(subscriptionId, opts)

Allows to search for contacts

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

let apiInstance = new FastreportCloudSdk.ContactsApi();
let subscriptionId = "subscriptionId_example"; // String | 
let opts = {
  'skip': 0, // Number | 
  'take': 10, // Number | 
  'searchPattern': "searchPattern_example" // String | 
};
apiInstance.contactsGetList(subscriptionId, opts).then((data) => {
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
 **searchPattern** | **String**|  | [optional] 

### Return type

[**ContactsVM**](ContactsVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## contactsUpdate

> ContactVM contactsUpdate(id, opts)

Updates contact by id

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

let apiInstance = new FastreportCloudSdk.ContactsApi();
let id = "id_example"; // String | 
let opts = {
  'updateContactVM': new FastreportCloudSdk.UpdateContactVM() // UpdateContactVM | 
};
apiInstance.contactsUpdate(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **updateContactVM** | [**UpdateContactVM**](UpdateContactVM.md)|  | [optional] 

### Return type

[**ContactVM**](ContactVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json

