# FastreportCloudSdk.ReportsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reportFolderAndFileClearRecycleBin**](ReportsApi.md#reportFolderAndFileClearRecycleBin) | **DELETE** /api/rp/v1/Reports/{subscriptionId}/ClearRecycleBin | Delete all folders and files from recycle bin
[**reportFolderAndFileCopyFiles**](ReportsApi.md#reportFolderAndFileCopyFiles) | **POST** /api/rp/v1/Reports/{subscriptionId}/CopyFiles | Copy folders and files to a specified folder
[**reportFolderAndFileCountRecycleBinFoldersAndFiles**](ReportsApi.md#reportFolderAndFileCountRecycleBinFoldersAndFiles) | **GET** /api/rp/v1/Reports/{subscriptionId}/CountRecycleBinFolderAndFiles | Count all folders and files from recycle bin
[**reportFolderAndFileDeleteFiles**](ReportsApi.md#reportFolderAndFileDeleteFiles) | **POST** /api/rp/v1/Reports/{subscriptionId}/DeleteFiles | Delete folders and files
[**reportFolderAndFileGetCount**](ReportsApi.md#reportFolderAndFileGetCount) | **GET** /api/rp/v1/Reports/Folder/{id}/CountFolderAndFiles | Get count of files and folders what contains in a specified folder
[**reportFolderAndFileGetFoldersAndFiles**](ReportsApi.md#reportFolderAndFileGetFoldersAndFiles) | **GET** /api/rp/v1/Reports/Folder/{id}/ListFolderAndFiles | Get all folders and files from specified folder
[**reportFolderAndFileGetRecycleBinFoldersAndFiles**](ReportsApi.md#reportFolderAndFileGetRecycleBinFoldersAndFiles) | **GET** /api/rp/v1/Reports/{subscriptionId}/ListRecycleBinFolderAndFiles | Get all folders and files from recycle bin
[**reportFolderAndFileMoveFiles**](ReportsApi.md#reportFolderAndFileMoveFiles) | **POST** /api/rp/v1/Reports/{subscriptionId}/MoveFiles | Move folders and files to a specified folder
[**reportFolderAndFileMoveFilesToBin**](ReportsApi.md#reportFolderAndFileMoveFilesToBin) | **POST** /api/rp/v1/Reports/{subscriptionId}/ToBin | Move folders and files to bin
[**reportFolderAndFileRecoverAllFromRecycleBin**](ReportsApi.md#reportFolderAndFileRecoverAllFromRecycleBin) | **POST** /api/rp/v1/Reports/{subscriptionId}/RecoverRecycleBin | Recover all folders and files from recycle bin
[**reportFolderAndFileRecoverFiles**](ReportsApi.md#reportFolderAndFileRecoverFiles) | **POST** /api/rp/v1/Reports/{subscriptionId}/RecoverFiles | Recover folders and files from bin
[**reportFoldersCalculateFolderSize**](ReportsApi.md#reportFoldersCalculateFolderSize) | **GET** /api/rp/v1/Reports/Folder/{id}/size | Get specified folder, calculate it&#39;s size
[**reportFoldersCopyFolder**](ReportsApi.md#reportFoldersCopyFolder) | **POST** /api/rp/v1/Reports/Folder/{id}/Copy/{folderId} | Move folder to a specified folder
[**reportFoldersDeleteFolder**](ReportsApi.md#reportFoldersDeleteFolder) | **DELETE** /api/rp/v1/Reports/Folder/{id} | Delete specified folder
[**reportFoldersExport**](ReportsApi.md#reportFoldersExport) | **POST** /api/rp/v1/Reports/Folder/{id}/Export | Export specified report folder to a specified format
[**reportFoldersGetBreadcrumbs**](ReportsApi.md#reportFoldersGetBreadcrumbs) | **GET** /api/rp/v1/Reports/Folder/{id}/Breadcrumbs | Get specified folder breadcrumbs
[**reportFoldersGetFolder**](ReportsApi.md#reportFoldersGetFolder) | **GET** /api/rp/v1/Reports/Folder/{id} | Get specified folder
[**reportFoldersGetFolders**](ReportsApi.md#reportFoldersGetFolders) | **GET** /api/rp/v1/Reports/Folder/{id}/ListFolders | Get all folders from specified folder
[**reportFoldersGetFoldersCount**](ReportsApi.md#reportFoldersGetFoldersCount) | **GET** /api/rp/v1/Reports/Folder/{id}/CountFolders | Get count of folders what contains in a specified folder
[**reportFoldersGetMyPermissions**](ReportsApi.md#reportFoldersGetMyPermissions) | **GET** /api/rp/v1/Reports/Folder/{folderId}/mypermissions | Get user&#39;s permissions for a folder by id
[**reportFoldersGetOrCreate**](ReportsApi.md#reportFoldersGetOrCreate) | **GET** /api/rp/v1/Reports/Folder/getOrCreate | Get specified folder
[**reportFoldersGetPermissions**](ReportsApi.md#reportFoldersGetPermissions) | **GET** /api/rp/v1/Reports/Folder/{id}/permissions | Get all folder permissions
[**reportFoldersGetRootFolder**](ReportsApi.md#reportFoldersGetRootFolder) | **GET** /api/rp/v1/Reports/Root | Get user&#39;s root folder (without parents)
[**reportFoldersMoveFolder**](ReportsApi.md#reportFoldersMoveFolder) | **POST** /api/rp/v1/Reports/Folder/{id}/Move/{folderId} | Move folder to a specified folder
[**reportFoldersMoveFolderToBin**](ReportsApi.md#reportFoldersMoveFolderToBin) | **DELETE** /api/rp/v1/Reports/Folder/{id}/ToBin | Move specified folder to recycle bin
[**reportFoldersPostFolder**](ReportsApi.md#reportFoldersPostFolder) | **POST** /api/rp/v1/Reports/Folder/{id}/Folder | Create folder
[**reportFoldersRecoverFolder**](ReportsApi.md#reportFoldersRecoverFolder) | **POST** /api/rp/v1/Reports/Folder/{id}/Recover | Recover specified folder
[**reportFoldersRenameFolder**](ReportsApi.md#reportFoldersRenameFolder) | **PUT** /api/rp/v1/Reports/Folder/{id}/Rename | Rename a folder
[**reportFoldersUpdateIcon**](ReportsApi.md#reportFoldersUpdateIcon) | **PUT** /api/rp/v1/Reports/Folder/{id}/Icon | Update a folder&#39;s icon
[**reportFoldersUpdatePermissions**](ReportsApi.md#reportFoldersUpdatePermissions) | **POST** /api/rp/v1/Reports/{id}/permissions | Update permissions
[**reportFoldersUpdateTags**](ReportsApi.md#reportFoldersUpdateTags) | **PUT** /api/rp/v1/Reports/Folder/{id}/UpdateTags | Update tags
[**reportsCopyFile**](ReportsApi.md#reportsCopyFile) | **POST** /api/rp/v1/Reports/File/{id}/Copy/{folderId} | Copy file to a specified folder
[**reportsCreateSharingKey**](ReportsApi.md#reportsCreateSharingKey) | **POST** /api/rp/v1/Reports/File/{id}/sharingKey | Create a new key, that can be used to share access to a file  (You need Administrate.Anon permission to create a new key)
[**reportsDeleteFile**](ReportsApi.md#reportsDeleteFile) | **DELETE** /api/rp/v1/Reports/File/{id} | Delete specified file
[**reportsDeleteSharingKey**](ReportsApi.md#reportsDeleteSharingKey) | **DELETE** /api/rp/v1/Reports/File/{id}/sharingKey | Deletes a sharing key, making links, that utilizing it no longer work
[**reportsExport**](ReportsApi.md#reportsExport) | **POST** /api/rp/v1/Reports/File/{id}/Export | Export specified report to a specified format
[**reportsGetByTaskId**](ReportsApi.md#reportsGetByTaskId) | **GET** /api/rp/v1/Reports/File/Task/{taskId} | Get reports by specified task id
[**reportsGetByTaskMessageId**](ReportsApi.md#reportsGetByTaskMessageId) | **GET** /api/rp/v1/Reports/File/TaskMessage/{taskMessageId} | Get report by specified task message id
[**reportsGetFile**](ReportsApi.md#reportsGetFile) | **GET** /api/rp/v1/Reports/File/{id} | Get specified file
[**reportsGetFileHistory**](ReportsApi.md#reportsGetFileHistory) | **GET** /api/rp/v1/Reports/File/{id}/History | Returns list of actions, performed on this file
[**reportsGetFilesCount**](ReportsApi.md#reportsGetFilesCount) | **GET** /api/rp/v1/Reports/Folder/{id}/CountFiles | Get count of files what contains in a specified folder
[**reportsGetFilesList**](ReportsApi.md#reportsGetFilesList) | **GET** /api/rp/v1/Reports/Folder/{id}/ListFiles | Get all files from specified folder. &lt;br /&gt;  User with Get Entity permission can access this method. &lt;br /&gt;  The method will returns minimal infomration about the file: &lt;br /&gt;  id, name, size, editedTime, createdTime, tags, status, statusReason.
[**reportsGetMyPermissions**](ReportsApi.md#reportsGetMyPermissions) | **GET** /api/rp/v1/Reports/File/{id}/mypermissions | Get current user&#39;s permissions to file
[**reportsGetPermissions**](ReportsApi.md#reportsGetPermissions) | **GET** /api/rp/v1/Reports/File/{id}/permissions | 
[**reportsGetSharingKeys**](ReportsApi.md#reportsGetSharingKeys) | **GET** /api/rp/v1/Reports/File/{id}/sharingKeys | Returns all sharing keys, associated with the file
[**reportsMoveFile**](ReportsApi.md#reportsMoveFile) | **POST** /api/rp/v1/Reports/File/{id}/Move/{folderId} | Move file to a specified folder
[**reportsMoveFileToBin**](ReportsApi.md#reportsMoveFileToBin) | **DELETE** /api/rp/v1/Reports/File/{id}/ToBin | Move specified file to recycle bin
[**reportsRecoverFile**](ReportsApi.md#reportsRecoverFile) | **POST** /api/rp/v1/Reports/File/{id}/Recover | Recover specified file from bin
[**reportsRenameFile**](ReportsApi.md#reportsRenameFile) | **PUT** /api/rp/v1/Reports/File/{id}/Rename | Rename a file
[**reportsStaticPreview**](ReportsApi.md#reportsStaticPreview) | **POST** /api/rp/v1/Reports/File/{id}/StaticPreview | Make preview for the report.  Generate a new or return exist prepared svg files.  If template was changed will be returned a new.  Pass the &#x60;&#x60; parameter to check prepared timestamp
[**reportsUpdateIcon**](ReportsApi.md#reportsUpdateIcon) | **PUT** /api/rp/v1/Reports/File/{id}/Icon | Update a files&#39;s icon
[**reportsUpdatePermissions**](ReportsApi.md#reportsUpdatePermissions) | **POST** /api/rp/v1/Reports/File/{id}/permissions | Update permissions
[**reportsUpdateTags**](ReportsApi.md#reportsUpdateTags) | **PUT** /api/rp/v1/Reports/File/{id}/UpdateTags | Update tags
[**reportsUploadFile**](ReportsApi.md#reportsUploadFile) | **POST** /api/rp/v1/Reports/Folder/{id}/File | Upload a file to the specified folder. The method is deprecated, use the UploadFileV2 method instead!
[**reportsUploadFileV2**](ReportsApi.md#reportsUploadFileV2) | **POST** /api/rp/v2/Reports/Folder/{id}/File | Alternative api for upload a file to the specified folder!



## reportFolderAndFileClearRecycleBin

> reportFolderAndFileClearRecycleBin(subscriptionId)

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let subscriptionId = "subscriptionId_example"; // String | subscription id
apiInstance.reportFolderAndFileClearRecycleBin(subscriptionId).then(() => {
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


## reportFolderAndFileCopyFiles

> reportFolderAndFileCopyFiles(subscriptionId, opts)

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let subscriptionId = "subscriptionId_example"; // String | id of current subscription
let opts = {
  'selectedFilesVM': new FastreportCloudSdk.SelectedFilesVM() // SelectedFilesVM | VM with files' ids and params of their destination
};
apiInstance.reportFolderAndFileCopyFiles(subscriptionId, opts).then(() => {
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


## reportFolderAndFileCountRecycleBinFoldersAndFiles

> CountVM reportFolderAndFileCountRecycleBinFoldersAndFiles(subscriptionId, opts)

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let subscriptionId = "subscriptionId_example"; // String | subscription id
let opts = {
  'searchPattern': "''", // String | 
  'useRegex': false // Boolean | 
};
apiInstance.reportFolderAndFileCountRecycleBinFoldersAndFiles(subscriptionId, opts).then((data) => {
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


## reportFolderAndFileDeleteFiles

> reportFolderAndFileDeleteFiles(subscriptionId, opts)

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let subscriptionId = "subscriptionId_example"; // String | id of current subscription
let opts = {
  'selectedFilesVM': new FastreportCloudSdk.SelectedFilesVM() // SelectedFilesVM | VM with files' ids and params of their destination
};
apiInstance.reportFolderAndFileDeleteFiles(subscriptionId, opts).then(() => {
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


## reportFolderAndFileGetCount

> CountVM reportFolderAndFileGetCount(id, opts)

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let id = "id_example"; // String | folder id
let opts = {
  'searchPattern': "searchPattern_example", // String | string, that must be incuded in file or folder name to be counted <br />              (leave undefined to count all files and folders)
  'useRegex': false // Boolean | set this to true if you want to use regular expression to search
};
apiInstance.reportFolderAndFileGetCount(id, opts).then((data) => {
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


## reportFolderAndFileGetFoldersAndFiles

> FilesVM reportFolderAndFileGetFoldersAndFiles(id, opts)

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let id = "id_example"; // String | folder id
let opts = {
  'skip': 0, // Number | number of folder and files, that have to be skipped
  'take': 10, // Number | number of folder and files, that have to be returned
  'orderBy': new FastreportCloudSdk.FileSorting(), // FileSorting | indicates a field to sort by
  'desc': false, // Boolean | indicates if sorting is descending
  'searchPattern': "''", // String | 
  'useRegex': false // Boolean | 
};
apiInstance.reportFolderAndFileGetFoldersAndFiles(id, opts).then((data) => {
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


## reportFolderAndFileGetRecycleBinFoldersAndFiles

> FilesVM reportFolderAndFileGetRecycleBinFoldersAndFiles(subscriptionId, opts)

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let subscriptionId = "subscriptionId_example"; // String | subscription id
let opts = {
  'skip': 0, // Number | number of folder and files, that have to be skipped
  'take': 10, // Number | number of folder and files, that have to be returned
  'orderBy': new FastreportCloudSdk.FileSorting(), // FileSorting | indicates a field to sort by
  'desc': false, // Boolean | indicates if sorting is descending
  'searchPattern': "''", // String | 
  'useRegex': false // Boolean | 
};
apiInstance.reportFolderAndFileGetRecycleBinFoldersAndFiles(subscriptionId, opts).then((data) => {
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


## reportFolderAndFileMoveFiles

> reportFolderAndFileMoveFiles(subscriptionId, opts)

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let subscriptionId = "subscriptionId_example"; // String | id of current subscription
let opts = {
  'selectedFilesVM': new FastreportCloudSdk.SelectedFilesVM() // SelectedFilesVM | VM with files' ids and params of their destination
};
apiInstance.reportFolderAndFileMoveFiles(subscriptionId, opts).then(() => {
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


## reportFolderAndFileMoveFilesToBin

> reportFolderAndFileMoveFilesToBin(subscriptionId, opts)

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let subscriptionId = "subscriptionId_example"; // String | id of current subscription
let opts = {
  'selectedFilesVM': new FastreportCloudSdk.SelectedFilesVM() // SelectedFilesVM | VM with files' ids and params of their destination
};
apiInstance.reportFolderAndFileMoveFilesToBin(subscriptionId, opts).then(() => {
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


## reportFolderAndFileRecoverAllFromRecycleBin

> reportFolderAndFileRecoverAllFromRecycleBin(subscriptionId)

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let subscriptionId = "subscriptionId_example"; // String | subscription id
apiInstance.reportFolderAndFileRecoverAllFromRecycleBin(subscriptionId).then(() => {
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


## reportFolderAndFileRecoverFiles

> reportFolderAndFileRecoverFiles(subscriptionId, opts)

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let subscriptionId = "subscriptionId_example"; // String | id of current subscription
let opts = {
  'selectedFilesVM': new FastreportCloudSdk.SelectedFilesVM() // SelectedFilesVM | VM with files' ids and params of their destination
};
apiInstance.reportFolderAndFileRecoverFiles(subscriptionId, opts).then(() => {
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


## reportFoldersCalculateFolderSize

> FolderSizeVM reportFoldersCalculateFolderSize(id)

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let id = "id_example"; // String | folder id
apiInstance.reportFoldersCalculateFolderSize(id).then((data) => {
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


## reportFoldersCopyFolder

> FileVM reportFoldersCopyFolder(id, folderId)

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let id = "id_example"; // String | moving folder id
let folderId = "folderId_example"; // String | destination folder id
apiInstance.reportFoldersCopyFolder(id, folderId).then((data) => {
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


## reportFoldersDeleteFolder

> reportFoldersDeleteFolder(id)

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let id = "id_example"; // String | folder id
apiInstance.reportFoldersDeleteFolder(id).then(() => {
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


## reportFoldersExport

> FileVM reportFoldersExport(id, opts)

Export specified report folder to a specified format

User with Execute Export permission on report folder and  Create Entity on an export folder can access this method.

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let id = "id_example"; // String | report folder id
let opts = {
  'exportReportVM': new FastreportCloudSdk.ExportReportVM() // ExportReportVM | export parameters
};
apiInstance.reportFoldersExport(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| report folder id | 
 **exportReportVM** | [**ExportReportVM**](ExportReportVM.md)| export parameters | [optional] 

### Return type

[**FileVM**](FileVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json


## reportFoldersGetBreadcrumbs

> BreadcrumbsVM reportFoldersGetBreadcrumbs(id)

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let id = "id_example"; // String | folder id
apiInstance.reportFoldersGetBreadcrumbs(id).then((data) => {
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


## reportFoldersGetFolder

> FileVM reportFoldersGetFolder(id)

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let id = "id_example"; // String | folder id
apiInstance.reportFoldersGetFolder(id).then((data) => {
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


## reportFoldersGetFolders

> FilesVM reportFoldersGetFolders(id, opts)

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let id = "id_example"; // String | folder id
let opts = {
  'skip': 0, // Number | number of files, that have to be skipped
  'take': 10, // Number | number of files, that have to be returned
  'orderBy': new FastreportCloudSdk.FileSorting(), // FileSorting | 
  'desc': false, // Boolean | 
  'searchPattern': "''", // String | 
  'useRegex': false // Boolean | 
};
apiInstance.reportFoldersGetFolders(id, opts).then((data) => {
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


## reportFoldersGetFoldersCount

> CountVM reportFoldersGetFoldersCount(id)

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let id = "id_example"; // String | folder id
apiInstance.reportFoldersGetFoldersCount(id).then((data) => {
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


## reportFoldersGetMyPermissions

> FilePermissionCRUDVM reportFoldersGetMyPermissions(folderId)

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let folderId = "folderId_example"; // String | folder id
apiInstance.reportFoldersGetMyPermissions(folderId).then((data) => {
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


## reportFoldersGetOrCreate

> FileVM reportFoldersGetOrCreate(opts)

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let opts = {
  'name': "name_example", // String | folder name
  'subscriptionId': "subscriptionId_example", // String | subscriptionId
  'parentId': "parentId_example" // String | parent folder id
};
apiInstance.reportFoldersGetOrCreate(opts).then((data) => {
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


## reportFoldersGetPermissions

> FilePermissionsVM reportFoldersGetPermissions(id)

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let id = "id_example"; // String | 
apiInstance.reportFoldersGetPermissions(id).then((data) => {
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


## reportFoldersGetRootFolder

> FileVM reportFoldersGetRootFolder(opts)

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let opts = {
  'subscriptionId': "subscriptionId_example" // String | 
};
apiInstance.reportFoldersGetRootFolder(opts).then((data) => {
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


## reportFoldersMoveFolder

> FileVM reportFoldersMoveFolder(id, folderId)

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let id = "id_example"; // String | moving folder id
let folderId = "folderId_example"; // String | destination folder id
apiInstance.reportFoldersMoveFolder(id, folderId).then((data) => {
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


## reportFoldersMoveFolderToBin

> reportFoldersMoveFolderToBin(id)

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let id = "id_example"; // String | folder id
apiInstance.reportFoldersMoveFolderToBin(id).then(() => {
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


## reportFoldersPostFolder

> FileVM reportFoldersPostFolder(id, opts)

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let id = "id_example"; // String | Identifier of parent folder id
let opts = {
  'reportFolderCreateVM': new FastreportCloudSdk.ReportFolderCreateVM() // ReportFolderCreateVM | create VM
};
apiInstance.reportFoldersPostFolder(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Identifier of parent folder id | 
 **reportFolderCreateVM** | [**ReportFolderCreateVM**](ReportFolderCreateVM.md)| create VM | [optional] 

### Return type

[**FileVM**](FileVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json


## reportFoldersRecoverFolder

> reportFoldersRecoverFolder(id, opts)

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let id = "id_example"; // String | folder id
let opts = {
  'recoveryPath': "recoveryPath_example" // String | 
};
apiInstance.reportFoldersRecoverFolder(id, opts).then(() => {
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


## reportFoldersRenameFolder

> FileVM reportFoldersRenameFolder(id, opts)

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let id = "id_example"; // String | 
let opts = {
  'folderRenameVM': new FastreportCloudSdk.FolderRenameVM() // FolderRenameVM | 
};
apiInstance.reportFoldersRenameFolder(id, opts).then((data) => {
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


## reportFoldersUpdateIcon

> FileVM reportFoldersUpdateIcon(id, opts)

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let id = "id_example"; // String | Identifier of folder
let opts = {
  'folderIconVM': new FastreportCloudSdk.FolderIconVM() // FolderIconVM | Update icon model
};
apiInstance.reportFoldersUpdateIcon(id, opts).then((data) => {
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


## reportFoldersUpdatePermissions

> reportFoldersUpdatePermissions(id, opts)

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let id = "id_example"; // String | 
let opts = {
  'updateFilePermissionsVM': new FastreportCloudSdk.UpdateFilePermissionsVM() // UpdateFilePermissionsVM | 
};
apiInstance.reportFoldersUpdatePermissions(id, opts).then(() => {
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


## reportFoldersUpdateTags

> FileVM reportFoldersUpdateTags(id, opts)

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let id = "id_example"; // String | 
let opts = {
  'folderTagsUpdateVM': new FastreportCloudSdk.FolderTagsUpdateVM() // FolderTagsUpdateVM | 
};
apiInstance.reportFoldersUpdateTags(id, opts).then((data) => {
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


## reportsCopyFile

> ReportVM reportsCopyFile(id, folderId)

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let id = "id_example"; // String | file id
let folderId = "folderId_example"; // String | folder id
apiInstance.reportsCopyFile(id, folderId).then((data) => {
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

[**ReportVM**](ReportVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## reportsCreateSharingKey

> FileSharingKeysVM reportsCreateSharingKey(id, opts)

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let id = "id_example"; // String | file id
let opts = {
  'createFileShareVM': new FastreportCloudSdk.CreateFileShareVM() // CreateFileShareVM | parameters for sharing key creation
};
apiInstance.reportsCreateSharingKey(id, opts).then((data) => {
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


## reportsDeleteFile

> reportsDeleteFile(id)

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let id = "id_example"; // String | file id
apiInstance.reportsDeleteFile(id).then(() => {
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


## reportsDeleteSharingKey

> reportsDeleteSharingKey(id, key)

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let id = "id_example"; // String | file id
let key = "key_example"; // String | key to delete
apiInstance.reportsDeleteSharingKey(id, key).then(() => {
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


## reportsExport

> ExportVM reportsExport(id, opts)

Export specified report to a specified format

User with Execute Export permission on prepared report and  Create Entity on an export folder can access this method.

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let id = "id_example"; // String | report id
let opts = {
  'exportReportVM': new FastreportCloudSdk.ExportReportVM() // ExportReportVM | export parameters
};
apiInstance.reportsExport(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| report id | 
 **exportReportVM** | [**ExportReportVM**](ExportReportVM.md)| export parameters | [optional] 

### Return type

[**ExportVM**](ExportVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json


## reportsGetByTaskId

> ReportsVM reportsGetByTaskId(taskId)

Get reports by specified task id

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let taskId = "taskId_example"; // String | task id
apiInstance.reportsGetByTaskId(taskId).then((data) => {
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

[**ReportsVM**](ReportsVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## reportsGetByTaskMessageId

> ReportVM reportsGetByTaskMessageId(taskMessageId)

Get report by specified task message id

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let taskMessageId = "taskMessageId_example"; // String | task message id
apiInstance.reportsGetByTaskMessageId(taskMessageId).then((data) => {
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

[**ReportVM**](ReportVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## reportsGetFile

> ReportVM reportsGetFile(id)

Get specified file

User with Get Entity permission can access this method.

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let id = "id_example"; // String | file id
apiInstance.reportsGetFile(id).then((data) => {
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

[**ReportVM**](ReportVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## reportsGetFileHistory

> AuditActionsVM reportsGetFileHistory(id, opts)

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let id = "id_example"; // String | 
let opts = {
  'skip': 0, // Number | 
  'take': 10 // Number | 
};
apiInstance.reportsGetFileHistory(id, opts).then((data) => {
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


## reportsGetFilesCount

> CountVM reportsGetFilesCount(id)

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let id = "id_example"; // String | folder id
apiInstance.reportsGetFilesCount(id).then((data) => {
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


## reportsGetFilesList

> ReportsVM reportsGetFilesList(id, opts)

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let id = "id_example"; // String | folder id
let opts = {
  'skip': 0, // Number | number of files, that have to be skipped
  'take': 10, // Number | number of files, that have to be returned
  'searchPattern': "searchPattern_example", // String | 
  'orderBy': new FastreportCloudSdk.FileSorting(), // FileSorting | 
  'desc': false, // Boolean | 
  'useRegex': false // Boolean | 
};
apiInstance.reportsGetFilesList(id, opts).then((data) => {
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

[**ReportsVM**](ReportsVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## reportsGetMyPermissions

> FilePermissionCRUDVM reportsGetMyPermissions(id)

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let id = "id_example"; // String | file id
apiInstance.reportsGetMyPermissions(id).then((data) => {
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


## reportsGetPermissions

> FilePermissionsVM reportsGetPermissions(id)



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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let id = "id_example"; // String | 
apiInstance.reportsGetPermissions(id).then((data) => {
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


## reportsGetSharingKeys

> FileSharingKeysVM reportsGetSharingKeys(id)

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let id = "id_example"; // String | file id
apiInstance.reportsGetSharingKeys(id).then((data) => {
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


## reportsMoveFile

> ReportVM reportsMoveFile(id, folderId)

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let id = "id_example"; // String | file id
let folderId = "folderId_example"; // String | folder id
apiInstance.reportsMoveFile(id, folderId).then((data) => {
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

[**ReportVM**](ReportVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## reportsMoveFileToBin

> reportsMoveFileToBin(id)

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let id = "id_example"; // String | file id
apiInstance.reportsMoveFileToBin(id).then(() => {
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


## reportsRecoverFile

> reportsRecoverFile(id, opts)

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let id = "id_example"; // String | file id
let opts = {
  'recoveryPath': "recoveryPath_example" // String | 
};
apiInstance.reportsRecoverFile(id, opts).then(() => {
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


## reportsRenameFile

> ReportVM reportsRenameFile(id, opts)

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let id = "id_example"; // String | 
let opts = {
  'fileRenameVM': new FastreportCloudSdk.FileRenameVM() // FileRenameVM | 
};
apiInstance.reportsRenameFile(id, opts).then((data) => {
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

[**ReportVM**](ReportVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json


## reportsStaticPreview

> ExportVM reportsStaticPreview(id, opts)

Make preview for the report.  Generate a new or return exist prepared svg files.  If template was changed will be returned a new.  Pass the &#x60;&#x60; parameter to check prepared timestamp

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let id = "id_example"; // String | template id
let opts = {
  'previewReportVM': new FastreportCloudSdk.PreviewReportVM() // PreviewReportVM | Model with parameters
};
apiInstance.reportsStaticPreview(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| template id | 
 **previewReportVM** | [**PreviewReportVM**](PreviewReportVM.md)| Model with parameters | [optional] 

### Return type

[**ExportVM**](ExportVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json


## reportsUpdateIcon

> ReportVM reportsUpdateIcon(id, opts)

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let id = "id_example"; // String | 
let opts = {
  'fileIconVM': new FastreportCloudSdk.FileIconVM() // FileIconVM | 
};
apiInstance.reportsUpdateIcon(id, opts).then((data) => {
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

[**ReportVM**](ReportVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json


## reportsUpdatePermissions

> reportsUpdatePermissions(id, opts)

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let id = "id_example"; // String | 
let opts = {
  'updateFilePermissionsVM': new FastreportCloudSdk.UpdateFilePermissionsVM() // UpdateFilePermissionsVM | 
};
apiInstance.reportsUpdatePermissions(id, opts).then(() => {
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


## reportsUpdateTags

> ReportVM reportsUpdateTags(id, opts)

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let id = "id_example"; // String | 
let opts = {
  'fileTagsUpdateVM': new FastreportCloudSdk.FileTagsUpdateVM() // FileTagsUpdateVM | 
};
apiInstance.reportsUpdateTags(id, opts).then((data) => {
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

[**ReportVM**](ReportVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json


## reportsUploadFile

> ReportVM reportsUploadFile(id, opts)

Upload a file to the specified folder. The method is deprecated, use the UploadFileV2 method instead!

User with Create Entity permission can access this method.

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let id = "id_example"; // String | Identifier of folder
let opts = {
  'reportCreateVM': new FastreportCloudSdk.ReportCreateVM() // ReportCreateVM | file's view model
};
apiInstance.reportsUploadFile(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Identifier of folder | 
 **reportCreateVM** | [**ReportCreateVM**](ReportCreateVM.md)| file&#39;s view model | [optional] 

### Return type

[**ReportVM**](ReportVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json


## reportsUploadFileV2

> ReportVM reportsUploadFileV2(id, fileContent, opts)

Alternative api for upload a file to the specified folder!

User with Create Entity permission can access this method.

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

let apiInstance = new FastreportCloudSdk.ReportsApi();
let id = "id_example"; // String | Identifier of folder
let fileContent = "/path/to/file"; // File | 
let opts = {
  'templateId': "templateId_example", // String | 
  'tags': ["null"], // [String] | 
  'icon': "/path/to/file" // File | 
};
apiInstance.reportsUploadFileV2(id, fileContent, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Identifier of folder | 
 **fileContent** | **File**|  | 
 **templateId** | **String**|  | [optional] 
 **tags** | [**[String]**](String.md)|  | [optional] 
 **icon** | **File**|  | [optional] 

### Return type

[**ReportVM**](ReportVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

