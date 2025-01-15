# FastreportCloudSdk.ExportsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**exportFolderAndFileClearRecycleBin**](ExportsApi.md#exportFolderAndFileClearRecycleBin) | **DELETE** /api/rp/v1/Exports/{subscriptionId}/ClearRecycleBin | Delete all folders and files from recycle bin
[**exportFolderAndFileCopyFiles**](ExportsApi.md#exportFolderAndFileCopyFiles) | **POST** /api/rp/v1/Exports/{subscriptionId}/CopyFiles | Copy folders and files to a specified folder
[**exportFolderAndFileCountRecycleBinFoldersAndFiles**](ExportsApi.md#exportFolderAndFileCountRecycleBinFoldersAndFiles) | **GET** /api/rp/v1/Exports/{subscriptionId}/CountRecycleBinFolderAndFiles | Count all folders and files from recycle bin
[**exportFolderAndFileDeleteFiles**](ExportsApi.md#exportFolderAndFileDeleteFiles) | **POST** /api/rp/v1/Exports/{subscriptionId}/DeleteFiles | Delete folders and files
[**exportFolderAndFileGetCount**](ExportsApi.md#exportFolderAndFileGetCount) | **GET** /api/rp/v1/Exports/Folder/{id}/CountFolderAndFiles | Get count of files and folders what contains in a specified folder
[**exportFolderAndFileGetFoldersAndFiles**](ExportsApi.md#exportFolderAndFileGetFoldersAndFiles) | **GET** /api/rp/v1/Exports/Folder/{id}/ListFolderAndFiles | Get all folders and files from specified folder
[**exportFolderAndFileGetRecycleBinFoldersAndFiles**](ExportsApi.md#exportFolderAndFileGetRecycleBinFoldersAndFiles) | **GET** /api/rp/v1/Exports/{subscriptionId}/ListRecycleBinFolderAndFiles | Get all folders and files from recycle bin
[**exportFolderAndFileMoveFiles**](ExportsApi.md#exportFolderAndFileMoveFiles) | **POST** /api/rp/v1/Exports/{subscriptionId}/MoveFiles | Move folders and files to a specified folder
[**exportFolderAndFileMoveFilesToBin**](ExportsApi.md#exportFolderAndFileMoveFilesToBin) | **POST** /api/rp/v1/Exports/{subscriptionId}/ToBin | Move folders and files to bin
[**exportFolderAndFileRecoverAllFromRecycleBin**](ExportsApi.md#exportFolderAndFileRecoverAllFromRecycleBin) | **POST** /api/rp/v1/Exports/{subscriptionId}/RecoverRecycleBin | Recover all folders and files from recycle bin
[**exportFolderAndFileRecoverFiles**](ExportsApi.md#exportFolderAndFileRecoverFiles) | **POST** /api/rp/v1/Exports/{subscriptionId}/RecoverFiles | Recover folders and files from bin
[**exportFoldersCalculateFolderSize**](ExportsApi.md#exportFoldersCalculateFolderSize) | **GET** /api/rp/v1/Exports/Folder/{id}/size | Get specified folder, calculate it&#39;s size
[**exportFoldersCopyFolder**](ExportsApi.md#exportFoldersCopyFolder) | **POST** /api/rp/v1/Exports/Folder/{id}/Copy/{folderId} | Move folder to a specified folder
[**exportFoldersDeleteFolder**](ExportsApi.md#exportFoldersDeleteFolder) | **DELETE** /api/rp/v1/Exports/Folder/{id} | Delete specified folder
[**exportFoldersGetBreadcrumbs**](ExportsApi.md#exportFoldersGetBreadcrumbs) | **GET** /api/rp/v1/Exports/Folder/{id}/Breadcrumbs | Get specified folder breadcrumbs
[**exportFoldersGetFolder**](ExportsApi.md#exportFoldersGetFolder) | **GET** /api/rp/v1/Exports/Folder/{id} | Get specified folder
[**exportFoldersGetFolders**](ExportsApi.md#exportFoldersGetFolders) | **GET** /api/rp/v1/Exports/Folder/{id}/ListFolders | Get all folders from specified folder
[**exportFoldersGetFoldersCount**](ExportsApi.md#exportFoldersGetFoldersCount) | **GET** /api/rp/v1/Exports/Folder/{id}/CountFolders | Get count of folders what contains in a specified folder
[**exportFoldersGetMyPermissions**](ExportsApi.md#exportFoldersGetMyPermissions) | **GET** /api/rp/v1/Exports/Folder/{folderId}/mypermissions | Get user&#39;s permissions for a folder by id
[**exportFoldersGetOrCreate**](ExportsApi.md#exportFoldersGetOrCreate) | **GET** /api/rp/v1/Exports/Folder/getOrCreate | Get specified folder
[**exportFoldersGetPermissions**](ExportsApi.md#exportFoldersGetPermissions) | **GET** /api/rp/v1/Exports/Folder/{id}/permissions | Get all folder permissions
[**exportFoldersGetRootFolder**](ExportsApi.md#exportFoldersGetRootFolder) | **GET** /api/rp/v1/Exports/Root | Get user&#39;s root folder (without parents)
[**exportFoldersMoveFolder**](ExportsApi.md#exportFoldersMoveFolder) | **POST** /api/rp/v1/Exports/Folder/{id}/Move/{folderId} | Move folder to a specified folder
[**exportFoldersMoveFolderToBin**](ExportsApi.md#exportFoldersMoveFolderToBin) | **DELETE** /api/rp/v1/Exports/Folder/{id}/ToBin | Move specified folder to recycle bin
[**exportFoldersPostFolder**](ExportsApi.md#exportFoldersPostFolder) | **POST** /api/rp/v1/Exports/Folder/{id}/Folder | Create folder
[**exportFoldersRecoverFolder**](ExportsApi.md#exportFoldersRecoverFolder) | **POST** /api/rp/v1/Exports/Folder/{id}/Recover | Recover specified folder
[**exportFoldersRenameFolder**](ExportsApi.md#exportFoldersRenameFolder) | **PUT** /api/rp/v1/Exports/Folder/{id}/Rename | Rename a folder
[**exportFoldersUpdateIcon**](ExportsApi.md#exportFoldersUpdateIcon) | **PUT** /api/rp/v1/Exports/Folder/{id}/Icon | Update a folder&#39;s icon
[**exportFoldersUpdatePermissions**](ExportsApi.md#exportFoldersUpdatePermissions) | **POST** /api/rp/v1/Exports/{id}/permissions | Update permissions
[**exportFoldersUpdateTags**](ExportsApi.md#exportFoldersUpdateTags) | **PUT** /api/rp/v1/Exports/Folder/{id}/UpdateTags | Update tags
[**exportsCopyFile**](ExportsApi.md#exportsCopyFile) | **POST** /api/rp/v1/Exports/File/{id}/Copy/{folderId} | Copy file to a specified folder
[**exportsCreateSharingKey**](ExportsApi.md#exportsCreateSharingKey) | **POST** /api/rp/v1/Exports/File/{id}/sharingKey | Create a new key, that can be used to share access to a file  (You need Administrate.Anon permission to create a new key)
[**exportsDeleteFile**](ExportsApi.md#exportsDeleteFile) | **DELETE** /api/rp/v1/Exports/File/{id} | Delete specified file
[**exportsDeleteSharingKey**](ExportsApi.md#exportsDeleteSharingKey) | **DELETE** /api/rp/v1/Exports/File/{id}/sharingKey | Deletes a sharing key, making links, that utilizing it no longer work
[**exportsGetByTaskId**](ExportsApi.md#exportsGetByTaskId) | **GET** /api/rp/v1/Exports/File/Task/{taskId} | Get exports by specified task id
[**exportsGetByTaskMessageId**](ExportsApi.md#exportsGetByTaskMessageId) | **GET** /api/rp/v1/Exports/File/TaskMessage/{taskMessageId} | Get export by specified task message id
[**exportsGetFile**](ExportsApi.md#exportsGetFile) | **GET** /api/rp/v1/Exports/File/{id} | Get export by specified id
[**exportsGetFileHistory**](ExportsApi.md#exportsGetFileHistory) | **GET** /api/rp/v1/Exports/File/{id}/History | Returns list of actions, performed on this file
[**exportsGetFilesCount**](ExportsApi.md#exportsGetFilesCount) | **GET** /api/rp/v1/Exports/Folder/{id}/CountFiles | Get count of files what contains in a specified folder
[**exportsGetFilesList**](ExportsApi.md#exportsGetFilesList) | **GET** /api/rp/v1/Exports/Folder/{id}/ListFiles | Get all files from specified folder. &lt;br /&gt;  User with Get Entity permission can access this method. &lt;br /&gt;  The method will returns minimal infomration about the file: &lt;br /&gt;  id, name, size, editedTime, createdTime, tags, status, statusReason.
[**exportsGetMyPermissions**](ExportsApi.md#exportsGetMyPermissions) | **GET** /api/rp/v1/Exports/File/{id}/mypermissions | Get current user&#39;s permissions to file
[**exportsGetPermissions**](ExportsApi.md#exportsGetPermissions) | **GET** /api/rp/v1/Exports/File/{id}/permissions | 
[**exportsGetSharingKeys**](ExportsApi.md#exportsGetSharingKeys) | **GET** /api/rp/v1/Exports/File/{id}/sharingKeys | Returns all sharing keys, associated with the file
[**exportsMoveFile**](ExportsApi.md#exportsMoveFile) | **POST** /api/rp/v1/Exports/File/{id}/Move/{folderId} | Move file to a specified folder
[**exportsMoveFileToBin**](ExportsApi.md#exportsMoveFileToBin) | **DELETE** /api/rp/v1/Exports/File/{id}/ToBin | Move specified file to recycle bin
[**exportsRecoverFile**](ExportsApi.md#exportsRecoverFile) | **POST** /api/rp/v1/Exports/File/{id}/Recover | Recover specified file from bin
[**exportsRenameFile**](ExportsApi.md#exportsRenameFile) | **PUT** /api/rp/v1/Exports/File/{id}/Rename | Rename a file
[**exportsUpdateIcon**](ExportsApi.md#exportsUpdateIcon) | **PUT** /api/rp/v1/Exports/File/{id}/Icon | Update a files&#39;s icon
[**exportsUpdatePermissions**](ExportsApi.md#exportsUpdatePermissions) | **POST** /api/rp/v1/Exports/File/{id}/permissions | Update permissions
[**exportsUpdateTags**](ExportsApi.md#exportsUpdateTags) | **PUT** /api/rp/v1/Exports/File/{id}/UpdateTags | Update tags



## exportFolderAndFileClearRecycleBin

> exportFolderAndFileClearRecycleBin(subscriptionId)

Delete all folders and files from recycle bin

User with a Delete RecycleBin permission can access this method.

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

let apiInstance = new FastreportCloudSdk.ExportsApi();
let subscriptionId = "subscriptionId_example"; // String | subscription id
apiInstance.exportFolderAndFileClearRecycleBin(subscriptionId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **String**| subscription id | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## exportFolderAndFileCopyFiles

> exportFolderAndFileCopyFiles(subscriptionId, opts)

Copy folders and files to a specified folder

User with a Get permission for a files and Create permission for a destination folder can access this method.

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

let apiInstance = new FastreportCloudSdk.ExportsApi();
let subscriptionId = "subscriptionId_example"; // String | id of current subscription
let opts = {
  'selectedFilesVM': new FastreportCloudSdk.SelectedFilesVM() // SelectedFilesVM | VM with files' ids and params of their destination
};
apiInstance.exportFolderAndFileCopyFiles(subscriptionId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **String**| id of current subscription | 
 **selectedFilesVM** | [**SelectedFilesVM**](SelectedFilesVM.md)| VM with files&#39; ids and params of their destination | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json


## exportFolderAndFileCountRecycleBinFoldersAndFiles

> CountVM exportFolderAndFileCountRecycleBinFoldersAndFiles(subscriptionId, opts)

Count all folders and files from recycle bin

User with a Get DeletedFiles permission can access this method.

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

let apiInstance = new FastreportCloudSdk.ExportsApi();
let subscriptionId = "subscriptionId_example"; // String | subscription id
let opts = {
  'searchPattern': "''", // String | 
  'useRegex': false // Boolean | 
};
apiInstance.exportFolderAndFileCountRecycleBinFoldersAndFiles(subscriptionId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **String**| subscription id | 
 **searchPattern** | **String**|  | [optional] [default to &#39;&#39;]
 **useRegex** | **Boolean**|  | [optional] [default to false]

### Return type

[**CountVM**](CountVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## exportFolderAndFileDeleteFiles

> exportFolderAndFileDeleteFiles(subscriptionId, opts)

Delete folders and files

User with a Delete permission can access this method.

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

let apiInstance = new FastreportCloudSdk.ExportsApi();
let subscriptionId = "subscriptionId_example"; // String | id of current subscription
let opts = {
  'selectedFilesVM': new FastreportCloudSdk.SelectedFilesVM() // SelectedFilesVM | VM with files' ids and params of their destination
};
apiInstance.exportFolderAndFileDeleteFiles(subscriptionId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **String**| id of current subscription | 
 **selectedFilesVM** | [**SelectedFilesVM**](SelectedFilesVM.md)| VM with files&#39; ids and params of their destination | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json


## exportFolderAndFileGetCount

> CountVM exportFolderAndFileGetCount(id, opts)

Get count of files and folders what contains in a specified folder

User with a Get Count permission can access this method.

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

let apiInstance = new FastreportCloudSdk.ExportsApi();
let id = "id_example"; // String | folder id
let opts = {
  'searchPattern': "searchPattern_example", // String | string, that must be incuded in file or folder name to be counted <br />              (leave undefined to count all files and folders)
  'useRegex': false // Boolean | set this to true if you want to use regular expression to search
};
apiInstance.exportFolderAndFileGetCount(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| folder id | 
 **searchPattern** | **String**| string, that must be incuded in file or folder name to be counted &lt;br /&gt;              (leave undefined to count all files and folders) | [optional] 
 **useRegex** | **Boolean**| set this to true if you want to use regular expression to search | [optional] [default to false]

### Return type

[**CountVM**](CountVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## exportFolderAndFileGetFoldersAndFiles

> FilesVM exportFolderAndFileGetFoldersAndFiles(id, opts)

Get all folders and files from specified folder

User with a Get Entity permission can access this method.

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

let apiInstance = new FastreportCloudSdk.ExportsApi();
let id = "id_example"; // String | folder id
let opts = {
  'skip': 0, // Number | number of folder and files, that have to be skipped
  'take': 10, // Number | number of folder and files, that have to be returned
  'orderBy': new FastreportCloudSdk.FileSorting(), // FileSorting | indicates a field to sort by
  'desc': false, // Boolean | indicates if sorting is descending
  'searchPattern': "''", // String | 
  'useRegex': false // Boolean | 
};
apiInstance.exportFolderAndFileGetFoldersAndFiles(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| folder id | 
 **skip** | **Number**| number of folder and files, that have to be skipped | [optional] [default to 0]
 **take** | **Number**| number of folder and files, that have to be returned | [optional] [default to 10]
 **orderBy** | [**FileSorting**](.md)| indicates a field to sort by | [optional] 
 **desc** | **Boolean**| indicates if sorting is descending | [optional] [default to false]
 **searchPattern** | **String**|  | [optional] [default to &#39;&#39;]
 **useRegex** | **Boolean**|  | [optional] [default to false]

### Return type

[**FilesVM**](FilesVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## exportFolderAndFileGetRecycleBinFoldersAndFiles

> FilesVM exportFolderAndFileGetRecycleBinFoldersAndFiles(subscriptionId, opts)

Get all folders and files from recycle bin

User with a Get DeletedFiles permission can access this method.

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

let apiInstance = new FastreportCloudSdk.ExportsApi();
let subscriptionId = "subscriptionId_example"; // String | subscription id
let opts = {
  'skip': 0, // Number | number of folder and files, that have to be skipped
  'take': 10, // Number | number of folder and files, that have to be returned
  'orderBy': new FastreportCloudSdk.FileSorting(), // FileSorting | indicates a field to sort by
  'desc': false, // Boolean | indicates if sorting is descending
  'searchPattern': "''", // String | 
  'useRegex': false // Boolean | 
};
apiInstance.exportFolderAndFileGetRecycleBinFoldersAndFiles(subscriptionId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **String**| subscription id | 
 **skip** | **Number**| number of folder and files, that have to be skipped | [optional] [default to 0]
 **take** | **Number**| number of folder and files, that have to be returned | [optional] [default to 10]
 **orderBy** | [**FileSorting**](.md)| indicates a field to sort by | [optional] 
 **desc** | **Boolean**| indicates if sorting is descending | [optional] [default to false]
 **searchPattern** | **String**|  | [optional] [default to &#39;&#39;]
 **useRegex** | **Boolean**|  | [optional] [default to false]

### Return type

[**FilesVM**](FilesVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## exportFolderAndFileMoveFiles

> exportFolderAndFileMoveFiles(subscriptionId, opts)

Move folders and files to a specified folder

User with a Update Place permission for a files and Create permission for a destination folder can access this method.

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

let apiInstance = new FastreportCloudSdk.ExportsApi();
let subscriptionId = "subscriptionId_example"; // String | id of current subscription
let opts = {
  'selectedFilesVM': new FastreportCloudSdk.SelectedFilesVM() // SelectedFilesVM | VM with files' ids and params of their destination
};
apiInstance.exportFolderAndFileMoveFiles(subscriptionId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **String**| id of current subscription | 
 **selectedFilesVM** | [**SelectedFilesVM**](SelectedFilesVM.md)| VM with files&#39; ids and params of their destination | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json


## exportFolderAndFileMoveFilesToBin

> exportFolderAndFileMoveFilesToBin(subscriptionId, opts)

Move folders and files to bin

User with a Delete permission can access this method.

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

let apiInstance = new FastreportCloudSdk.ExportsApi();
let subscriptionId = "subscriptionId_example"; // String | id of current subscription
let opts = {
  'selectedFilesVM': new FastreportCloudSdk.SelectedFilesVM() // SelectedFilesVM | VM with files' ids and params of their destination
};
apiInstance.exportFolderAndFileMoveFilesToBin(subscriptionId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **String**| id of current subscription | 
 **selectedFilesVM** | [**SelectedFilesVM**](SelectedFilesVM.md)| VM with files&#39; ids and params of their destination | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json


## exportFolderAndFileRecoverAllFromRecycleBin

> exportFolderAndFileRecoverAllFromRecycleBin(subscriptionId)

Recover all folders and files from recycle bin

User with a Create RecycleBin permission can access this method.

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

let apiInstance = new FastreportCloudSdk.ExportsApi();
let subscriptionId = "subscriptionId_example"; // String | subscription id
apiInstance.exportFolderAndFileRecoverAllFromRecycleBin(subscriptionId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **String**| subscription id | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## exportFolderAndFileRecoverFiles

> exportFolderAndFileRecoverFiles(subscriptionId, opts)

Recover folders and files from bin

User with a SubscriptionCreate permission can access this method.

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

let apiInstance = new FastreportCloudSdk.ExportsApi();
let subscriptionId = "subscriptionId_example"; // String | id of current subscription
let opts = {
  'selectedFilesVM': new FastreportCloudSdk.SelectedFilesVM() // SelectedFilesVM | VM with files' ids and params of their destination
};
apiInstance.exportFolderAndFileRecoverFiles(subscriptionId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **String**| id of current subscription | 
 **selectedFilesVM** | [**SelectedFilesVM**](SelectedFilesVM.md)| VM with files&#39; ids and params of their destination | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json


## exportFoldersCalculateFolderSize

> FolderSizeVM exportFoldersCalculateFolderSize(id)

Get specified folder, calculate it&#39;s size

User with a Get Entity permission can access this method.

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

let apiInstance = new FastreportCloudSdk.ExportsApi();
let id = "id_example"; // String | folder id
apiInstance.exportFoldersCalculateFolderSize(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| folder id | 

### Return type

[**FolderSizeVM**](FolderSizeVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## exportFoldersCopyFolder

> FileVM exportFoldersCopyFolder(id, folderId)

Move folder to a specified folder

User with a Update Place permission for a folder and Create Entity  for a Parent Folder can access this method.

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

let apiInstance = new FastreportCloudSdk.ExportsApi();
let id = "id_example"; // String | moving folder id
let folderId = "folderId_example"; // String | destination folder id
apiInstance.exportFoldersCopyFolder(id, folderId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| moving folder id | 
 **folderId** | **String**| destination folder id | 

### Return type

[**FileVM**](FileVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## exportFoldersDeleteFolder

> exportFoldersDeleteFolder(id)

Delete specified folder

User with a Delete Entity permission can access this method.

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

let apiInstance = new FastreportCloudSdk.ExportsApi();
let id = "id_example"; // String | folder id
apiInstance.exportFoldersDeleteFolder(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| folder id | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## exportFoldersGetBreadcrumbs

> BreadcrumbsVM exportFoldersGetBreadcrumbs(id)

Get specified folder breadcrumbs

User with a Get Entity permission can access this method.

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

let apiInstance = new FastreportCloudSdk.ExportsApi();
let id = "id_example"; // String | folder id
apiInstance.exportFoldersGetBreadcrumbs(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| folder id | 

### Return type

[**BreadcrumbsVM**](BreadcrumbsVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## exportFoldersGetFolder

> FileVM exportFoldersGetFolder(id)

Get specified folder

User with a Get Entity permission can access this method.

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

let apiInstance = new FastreportCloudSdk.ExportsApi();
let id = "id_example"; // String | folder id
apiInstance.exportFoldersGetFolder(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| folder id | 

### Return type

[**FileVM**](FileVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## exportFoldersGetFolders

> FilesVM exportFoldersGetFolders(id, opts)

Get all folders from specified folder

User with a Get Entity permission can access this method.

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

let apiInstance = new FastreportCloudSdk.ExportsApi();
let id = "id_example"; // String | folder id
let opts = {
  'skip': 0, // Number | number of files, that have to be skipped
  'take': 10, // Number | number of files, that have to be returned
  'orderBy': new FastreportCloudSdk.FileSorting(), // FileSorting | 
  'desc': false, // Boolean | 
  'searchPattern': "''", // String | 
  'useRegex': false // Boolean | 
};
apiInstance.exportFoldersGetFolders(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| folder id | 
 **skip** | **Number**| number of files, that have to be skipped | [optional] [default to 0]
 **take** | **Number**| number of files, that have to be returned | [optional] [default to 10]
 **orderBy** | [**FileSorting**](.md)|  | [optional] 
 **desc** | **Boolean**|  | [optional] [default to false]
 **searchPattern** | **String**|  | [optional] [default to &#39;&#39;]
 **useRegex** | **Boolean**|  | [optional] [default to false]

### Return type

[**FilesVM**](FilesVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## exportFoldersGetFoldersCount

> CountVM exportFoldersGetFoldersCount(id)

Get count of folders what contains in a specified folder

User with a Get Count permission can access this method.

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

let apiInstance = new FastreportCloudSdk.ExportsApi();
let id = "id_example"; // String | folder id
apiInstance.exportFoldersGetFoldersCount(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| folder id | 

### Return type

[**CountVM**](CountVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## exportFoldersGetMyPermissions

> FilePermissionCRUDVM exportFoldersGetMyPermissions(folderId)

Get user&#39;s permissions for a folder by id

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

let apiInstance = new FastreportCloudSdk.ExportsApi();
let folderId = "folderId_example"; // String | folder id
apiInstance.exportFoldersGetMyPermissions(folderId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folderId** | **String**| folder id | 

### Return type

[**FilePermissionCRUDVM**](FilePermissionCRUDVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## exportFoldersGetOrCreate

> FileVM exportFoldersGetOrCreate(opts)

Get specified folder

User with a Get Entity permission can access this method.

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

let apiInstance = new FastreportCloudSdk.ExportsApi();
let opts = {
  'name': "name_example", // String | folder name
  'subscriptionId': "subscriptionId_example", // String | subscriptionId
  'parentId': "parentId_example" // String | parent folder id
};
apiInstance.exportFoldersGetOrCreate(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| folder name | [optional] 
 **subscriptionId** | **String**| subscriptionId | [optional] 
 **parentId** | **String**| parent folder id | [optional] 

### Return type

[**FileVM**](FileVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## exportFoldersGetPermissions

> FilePermissionsVM exportFoldersGetPermissions(id)

Get all folder permissions

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

let apiInstance = new FastreportCloudSdk.ExportsApi();
let id = "id_example"; // String | 
apiInstance.exportFoldersGetPermissions(id).then((data) => {
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

[**FilePermissionsVM**](FilePermissionsVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## exportFoldersGetRootFolder

> FileVM exportFoldersGetRootFolder(opts)

Get user&#39;s root folder (without parents)

&gt; Breakchange. Now user model doesn&#39;t contain a root folders.  This method can return error 400 and 404 when subscription is not found.

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

let apiInstance = new FastreportCloudSdk.ExportsApi();
let opts = {
  'subscriptionId': "subscriptionId_example" // String | 
};
apiInstance.exportFoldersGetRootFolder(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionId** | **String**|  | [optional] 

### Return type

[**FileVM**](FileVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## exportFoldersMoveFolder

> FileVM exportFoldersMoveFolder(id, folderId)

Move folder to a specified folder

User with a Update Place permission for a folder and Create Entity  for a Parent Folder can access this method.

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

let apiInstance = new FastreportCloudSdk.ExportsApi();
let id = "id_example"; // String | moving folder id
let folderId = "folderId_example"; // String | destination folder id
apiInstance.exportFoldersMoveFolder(id, folderId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| moving folder id | 
 **folderId** | **String**| destination folder id | 

### Return type

[**FileVM**](FileVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## exportFoldersMoveFolderToBin

> exportFoldersMoveFolderToBin(id)

Move specified folder to recycle bin

User with a Delete Entity permission can access this method.

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

let apiInstance = new FastreportCloudSdk.ExportsApi();
let id = "id_example"; // String | folder id
apiInstance.exportFoldersMoveFolderToBin(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| folder id | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## exportFoldersPostFolder

> FileVM exportFoldersPostFolder(id, opts)

Create folder

User with a Create Entity permisison can access this method.

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

let apiInstance = new FastreportCloudSdk.ExportsApi();
let id = "id_example"; // String | Identifier of parent folder id
let opts = {
  'exportFolderCreateVM': new FastreportCloudSdk.ExportFolderCreateVM() // ExportFolderCreateVM | create VM
};
apiInstance.exportFoldersPostFolder(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Identifier of parent folder id | 
 **exportFolderCreateVM** | [**ExportFolderCreateVM**](ExportFolderCreateVM.md)| create VM | [optional] 

### Return type

[**FileVM**](FileVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json


## exportFoldersRecoverFolder

> exportFoldersRecoverFolder(id, opts)

Recover specified folder

User with a Delete Entity permission can access this method.

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

let apiInstance = new FastreportCloudSdk.ExportsApi();
let id = "id_example"; // String | folder id
let opts = {
  'recoveryPath': "recoveryPath_example" // String | 
};
apiInstance.exportFoldersRecoverFolder(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| folder id | 
 **recoveryPath** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## exportFoldersRenameFolder

> FileVM exportFoldersRenameFolder(id, opts)

Rename a folder

User with a Update Name permision can access this method.

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

let apiInstance = new FastreportCloudSdk.ExportsApi();
let id = "id_example"; // String | 
let opts = {
  'folderRenameVM': new FastreportCloudSdk.FolderRenameVM() // FolderRenameVM | 
};
apiInstance.exportFoldersRenameFolder(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **folderRenameVM** | [**FolderRenameVM**](FolderRenameVM.md)|  | [optional] 

### Return type

[**FileVM**](FileVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json


## exportFoldersUpdateIcon

> FileVM exportFoldersUpdateIcon(id, opts)

Update a folder&#39;s icon

User with a Update Icon permission can access this method.

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

let apiInstance = new FastreportCloudSdk.ExportsApi();
let id = "id_example"; // String | Identifier of folder
let opts = {
  'folderIconVM': new FastreportCloudSdk.FolderIconVM() // FolderIconVM | Update icon model
};
apiInstance.exportFoldersUpdateIcon(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Identifier of folder | 
 **folderIconVM** | [**FolderIconVM**](FolderIconVM.md)| Update icon model | [optional] 

### Return type

[**FileVM**](FileVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json


## exportFoldersUpdatePermissions

> exportFoldersUpdatePermissions(id, opts)

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

let apiInstance = new FastreportCloudSdk.ExportsApi();
let id = "id_example"; // String | 
let opts = {
  'updateFilePermissionsVM': new FastreportCloudSdk.UpdateFilePermissionsVM() // UpdateFilePermissionsVM | 
};
apiInstance.exportFoldersUpdatePermissions(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **updateFilePermissionsVM** | [**UpdateFilePermissionsVM**](UpdateFilePermissionsVM.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json


## exportFoldersUpdateTags

> FileVM exportFoldersUpdateTags(id, opts)

Update tags

User with a Update Tags permission can access this method.

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

let apiInstance = new FastreportCloudSdk.ExportsApi();
let id = "id_example"; // String | 
let opts = {
  'folderTagsUpdateVM': new FastreportCloudSdk.FolderTagsUpdateVM() // FolderTagsUpdateVM | 
};
apiInstance.exportFoldersUpdateTags(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **folderTagsUpdateVM** | [**FolderTagsUpdateVM**](FolderTagsUpdateVM.md)|  | [optional] 

### Return type

[**FileVM**](FileVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json


## exportsCopyFile

> ExportVM exportsCopyFile(id, folderId)

Copy file to a specified folder

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

let apiInstance = new FastreportCloudSdk.ExportsApi();
let id = "id_example"; // String | file id
let folderId = "folderId_example"; // String | folder id
apiInstance.exportsCopyFile(id, folderId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| file id | 
 **folderId** | **String**| folder id | 

### Return type

[**ExportVM**](ExportVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## exportsCreateSharingKey

> FileSharingKeysVM exportsCreateSharingKey(id, opts)

Create a new key, that can be used to share access to a file  (You need Administrate.Anon permission to create a new key)

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

let apiInstance = new FastreportCloudSdk.ExportsApi();
let id = "id_example"; // String | file id
let opts = {
  'createFileShareVM': new FastreportCloudSdk.CreateFileShareVM() // CreateFileShareVM | parameters for sharing key creation
};
apiInstance.exportsCreateSharingKey(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| file id | 
 **createFileShareVM** | [**CreateFileShareVM**](CreateFileShareVM.md)| parameters for sharing key creation | [optional] 

### Return type

[**FileSharingKeysVM**](FileSharingKeysVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json


## exportsDeleteFile

> exportsDeleteFile(id)

Delete specified file

User with Delete permission can access the method.

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

let apiInstance = new FastreportCloudSdk.ExportsApi();
let id = "id_example"; // String | file id
apiInstance.exportsDeleteFile(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| file id | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## exportsDeleteSharingKey

> exportsDeleteSharingKey(id, key)

Deletes a sharing key, making links, that utilizing it no longer work

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

let apiInstance = new FastreportCloudSdk.ExportsApi();
let id = "id_example"; // String | file id
let key = "key_example"; // String | key to delete
apiInstance.exportsDeleteSharingKey(id, key).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| file id | 
 **key** | **String**| key to delete | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## exportsGetByTaskId

> ExportsVM exportsGetByTaskId(taskId)

Get exports by specified task id

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

let apiInstance = new FastreportCloudSdk.ExportsApi();
let taskId = "taskId_example"; // String | task id
apiInstance.exportsGetByTaskId(taskId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| task id | 

### Return type

[**ExportsVM**](ExportsVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## exportsGetByTaskMessageId

> ExportVM exportsGetByTaskMessageId(taskMessageId)

Get export by specified task message id

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

let apiInstance = new FastreportCloudSdk.ExportsApi();
let taskMessageId = "taskMessageId_example"; // String | task message id
apiInstance.exportsGetByTaskMessageId(taskMessageId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskMessageId** | **String**| task message id | 

### Return type

[**ExportVM**](ExportVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## exportsGetFile

> ExportVM exportsGetFile(id)

Get export by specified id

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

let apiInstance = new FastreportCloudSdk.ExportsApi();
let id = "id_example"; // String | id of export
apiInstance.exportsGetFile(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id of export | 

### Return type

[**ExportVM**](ExportVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## exportsGetFileHistory

> AuditActionsVM exportsGetFileHistory(id, opts)

Returns list of actions, performed on this file

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

let apiInstance = new FastreportCloudSdk.ExportsApi();
let id = "id_example"; // String | 
let opts = {
  'skip': 0, // Number | 
  'take': 10 // Number | 
};
apiInstance.exportsGetFileHistory(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **skip** | **Number**|  | [optional] [default to 0]
 **take** | **Number**|  | [optional] [default to 10]

### Return type

[**AuditActionsVM**](AuditActionsVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## exportsGetFilesCount

> CountVM exportsGetFilesCount(id)

Get count of files what contains in a specified folder

User with Get Count permission can access this method.

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

let apiInstance = new FastreportCloudSdk.ExportsApi();
let id = "id_example"; // String | folder id
apiInstance.exportsGetFilesCount(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| folder id | 

### Return type

[**CountVM**](CountVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## exportsGetFilesList

> ExportsVM exportsGetFilesList(id, opts)

Get all files from specified folder. &lt;br /&gt;  User with Get Entity permission can access this method. &lt;br /&gt;  The method will returns minimal infomration about the file: &lt;br /&gt;  id, name, size, editedTime, createdTime, tags, status, statusReason.

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

let apiInstance = new FastreportCloudSdk.ExportsApi();
let id = "id_example"; // String | folder id
let opts = {
  'skip': 0, // Number | number of files, that have to be skipped
  'take': 10, // Number | number of files, that have to be returned
  'searchPattern': "searchPattern_example", // String | 
  'orderBy': new FastreportCloudSdk.FileSorting(), // FileSorting | 
  'desc': false, // Boolean | 
  'useRegex': false // Boolean | 
};
apiInstance.exportsGetFilesList(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| folder id | 
 **skip** | **Number**| number of files, that have to be skipped | [optional] [default to 0]
 **take** | **Number**| number of files, that have to be returned | [optional] [default to 10]
 **searchPattern** | **String**|  | [optional] 
 **orderBy** | [**FileSorting**](.md)|  | [optional] 
 **desc** | **Boolean**|  | [optional] [default to false]
 **useRegex** | **Boolean**|  | [optional] [default to false]

### Return type

[**ExportsVM**](ExportsVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## exportsGetMyPermissions

> FilePermissionCRUDVM exportsGetMyPermissions(id)

Get current user&#39;s permissions to file

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

let apiInstance = new FastreportCloudSdk.ExportsApi();
let id = "id_example"; // String | file id
apiInstance.exportsGetMyPermissions(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| file id | 

### Return type

[**FilePermissionCRUDVM**](FilePermissionCRUDVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## exportsGetPermissions

> FilePermissionsVM exportsGetPermissions(id)



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

let apiInstance = new FastreportCloudSdk.ExportsApi();
let id = "id_example"; // String | 
apiInstance.exportsGetPermissions(id).then((data) => {
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

[**FilePermissionsVM**](FilePermissionsVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## exportsGetSharingKeys

> FileSharingKeysVM exportsGetSharingKeys(id)

Returns all sharing keys, associated with the file

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

let apiInstance = new FastreportCloudSdk.ExportsApi();
let id = "id_example"; // String | file id
apiInstance.exportsGetSharingKeys(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| file id | 

### Return type

[**FileSharingKeysVM**](FileSharingKeysVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## exportsMoveFile

> ExportVM exportsMoveFile(id, folderId)

Move file to a specified folder

User with a Update Place permission for a folder and Create Entity  for a Parent Folder can access this method.

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

let apiInstance = new FastreportCloudSdk.ExportsApi();
let id = "id_example"; // String | file id
let folderId = "folderId_example"; // String | folder id
apiInstance.exportsMoveFile(id, folderId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| file id | 
 **folderId** | **String**| folder id | 

### Return type

[**ExportVM**](ExportVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## exportsMoveFileToBin

> exportsMoveFileToBin(id)

Move specified file to recycle bin

User with Delete permission can access the method.

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

let apiInstance = new FastreportCloudSdk.ExportsApi();
let id = "id_example"; // String | file id
apiInstance.exportsMoveFileToBin(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| file id | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## exportsRecoverFile

> exportsRecoverFile(id, opts)

Recover specified file from bin

User with Delete permission can access the method.

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

let apiInstance = new FastreportCloudSdk.ExportsApi();
let id = "id_example"; // String | file id
let opts = {
  'recoveryPath': "recoveryPath_example" // String | 
};
apiInstance.exportsRecoverFile(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| file id | 
 **recoveryPath** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## exportsRenameFile

> ExportVM exportsRenameFile(id, opts)

Rename a file

User with Update Name permission can access this method.

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

let apiInstance = new FastreportCloudSdk.ExportsApi();
let id = "id_example"; // String | 
let opts = {
  'fileRenameVM': new FastreportCloudSdk.FileRenameVM() // FileRenameVM | 
};
apiInstance.exportsRenameFile(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **fileRenameVM** | [**FileRenameVM**](FileRenameVM.md)|  | [optional] 

### Return type

[**ExportVM**](ExportVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json


## exportsUpdateIcon

> ExportVM exportsUpdateIcon(id, opts)

Update a files&#39;s icon

User with Update Icon permission can access this method.

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

let apiInstance = new FastreportCloudSdk.ExportsApi();
let id = "id_example"; // String | 
let opts = {
  'fileIconVM': new FastreportCloudSdk.FileIconVM() // FileIconVM | 
};
apiInstance.exportsUpdateIcon(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **fileIconVM** | [**FileIconVM**](FileIconVM.md)|  | [optional] 

### Return type

[**ExportVM**](ExportVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json


## exportsUpdatePermissions

> exportsUpdatePermissions(id, opts)

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

let apiInstance = new FastreportCloudSdk.ExportsApi();
let id = "id_example"; // String | 
let opts = {
  'updateFilePermissionsVM': new FastreportCloudSdk.UpdateFilePermissionsVM() // UpdateFilePermissionsVM | 
};
apiInstance.exportsUpdatePermissions(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **updateFilePermissionsVM** | [**UpdateFilePermissionsVM**](UpdateFilePermissionsVM.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json


## exportsUpdateTags

> ExportVM exportsUpdateTags(id, opts)

Update tags

User with Update Tags permission can access this method.

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

let apiInstance = new FastreportCloudSdk.ExportsApi();
let id = "id_example"; // String | 
let opts = {
  'fileTagsUpdateVM': new FastreportCloudSdk.FileTagsUpdateVM() // FileTagsUpdateVM | 
};
apiInstance.exportsUpdateTags(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **fileTagsUpdateVM** | [**FileTagsUpdateVM**](FileTagsUpdateVM.md)|  | [optional] 

### Return type

[**ExportVM**](ExportVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json

