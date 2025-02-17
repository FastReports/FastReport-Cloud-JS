# FastreportCloudSdk.TemplatesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**templateFolderAndFileClearRecycleBin**](TemplatesApi.md#templateFolderAndFileClearRecycleBin) | **DELETE** /api/rp/v1/Templates/{subscriptionId}/ClearRecycleBin | Delete all folders and files from recycle bin
[**templateFolderAndFileCopyFiles**](TemplatesApi.md#templateFolderAndFileCopyFiles) | **POST** /api/rp/v1/Templates/{subscriptionId}/CopyFiles | Copy folders and files to a specified folder
[**templateFolderAndFileCountRecycleBinFoldersAndFiles**](TemplatesApi.md#templateFolderAndFileCountRecycleBinFoldersAndFiles) | **GET** /api/rp/v1/Templates/{subscriptionId}/CountRecycleBinFolderAndFiles | Count all folders and files from recycle bin
[**templateFolderAndFileDeleteFiles**](TemplatesApi.md#templateFolderAndFileDeleteFiles) | **POST** /api/rp/v1/Templates/{subscriptionId}/DeleteFiles | Delete folders and files
[**templateFolderAndFileGetCount**](TemplatesApi.md#templateFolderAndFileGetCount) | **GET** /api/rp/v1/Templates/Folder/{id}/CountFolderAndFiles | Get count of files and folders what contains in a specified folder
[**templateFolderAndFileGetFoldersAndFiles**](TemplatesApi.md#templateFolderAndFileGetFoldersAndFiles) | **GET** /api/rp/v1/Templates/Folder/{id}/ListFolderAndFiles | Get all folders and files from specified folder
[**templateFolderAndFileGetRecycleBinFoldersAndFiles**](TemplatesApi.md#templateFolderAndFileGetRecycleBinFoldersAndFiles) | **GET** /api/rp/v1/Templates/{subscriptionId}/ListRecycleBinFolderAndFiles | Get all folders and files from recycle bin
[**templateFolderAndFileMoveFiles**](TemplatesApi.md#templateFolderAndFileMoveFiles) | **POST** /api/rp/v1/Templates/{subscriptionId}/MoveFiles | Move folders and files to a specified folder
[**templateFolderAndFileMoveFilesToBin**](TemplatesApi.md#templateFolderAndFileMoveFilesToBin) | **POST** /api/rp/v1/Templates/{subscriptionId}/ToBin | Move folders and files to bin
[**templateFolderAndFileRecoverAllFromRecycleBin**](TemplatesApi.md#templateFolderAndFileRecoverAllFromRecycleBin) | **POST** /api/rp/v1/Templates/{subscriptionId}/RecoverRecycleBin | Recover all folders and files from recycle bin
[**templateFolderAndFileRecoverFiles**](TemplatesApi.md#templateFolderAndFileRecoverFiles) | **POST** /api/rp/v1/Templates/{subscriptionId}/RecoverFiles | Recover folders and files from bin
[**templateFoldersCalculateFolderSize**](TemplatesApi.md#templateFoldersCalculateFolderSize) | **GET** /api/rp/v1/Templates/Folder/{id}/size | Get specified folder, calculate it&#39;s size
[**templateFoldersCopyFolder**](TemplatesApi.md#templateFoldersCopyFolder) | **POST** /api/rp/v1/Templates/Folder/{id}/Copy/{folderId} | Move folder to a specified folder
[**templateFoldersDeleteFolder**](TemplatesApi.md#templateFoldersDeleteFolder) | **DELETE** /api/rp/v1/Templates/Folder/{id} | Delete specified folder
[**templateFoldersExport**](TemplatesApi.md#templateFoldersExport) | **POST** /api/rp/v1/Templates/Folder/{id}/Export | Export specified template folder to a specified format
[**templateFoldersGetBreadcrumbs**](TemplatesApi.md#templateFoldersGetBreadcrumbs) | **GET** /api/rp/v1/Templates/Folder/{id}/Breadcrumbs | Get specified folder breadcrumbs
[**templateFoldersGetFolder**](TemplatesApi.md#templateFoldersGetFolder) | **GET** /api/rp/v1/Templates/Folder/{id} | Get specified folder
[**templateFoldersGetFolders**](TemplatesApi.md#templateFoldersGetFolders) | **GET** /api/rp/v1/Templates/Folder/{id}/ListFolders | Get all folders from specified folder
[**templateFoldersGetFoldersCount**](TemplatesApi.md#templateFoldersGetFoldersCount) | **GET** /api/rp/v1/Templates/Folder/{id}/CountFolders | Get count of folders what contains in a specified folder
[**templateFoldersGetMyPermissions**](TemplatesApi.md#templateFoldersGetMyPermissions) | **GET** /api/rp/v1/Templates/Folder/{folderId}/mypermissions | Get user&#39;s permissions for a folder by id
[**templateFoldersGetOrCreate**](TemplatesApi.md#templateFoldersGetOrCreate) | **GET** /api/rp/v1/Templates/Folder/getOrCreate | Get specified folder
[**templateFoldersGetPermissions**](TemplatesApi.md#templateFoldersGetPermissions) | **GET** /api/rp/v1/Templates/Folder/{id}/permissions | Get all folder permissions
[**templateFoldersGetRootFolder**](TemplatesApi.md#templateFoldersGetRootFolder) | **GET** /api/rp/v1/Templates/Root | Get user&#39;s root folder (without parents)
[**templateFoldersMoveFolder**](TemplatesApi.md#templateFoldersMoveFolder) | **POST** /api/rp/v1/Templates/Folder/{id}/Move/{folderId} | Move folder to a specified folder
[**templateFoldersMoveFolderToBin**](TemplatesApi.md#templateFoldersMoveFolderToBin) | **DELETE** /api/rp/v1/Templates/Folder/{id}/ToBin | Move specified folder to recycle bin
[**templateFoldersPostFolder**](TemplatesApi.md#templateFoldersPostFolder) | **POST** /api/rp/v1/Templates/Folder/{id}/Folder | Create folder
[**templateFoldersPrepare**](TemplatesApi.md#templateFoldersPrepare) | **POST** /api/rp/v1/Templates/Folder/{id}/Prepare | Prepare specified template folder to report folder
[**templateFoldersRecoverFolder**](TemplatesApi.md#templateFoldersRecoverFolder) | **POST** /api/rp/v1/Templates/Folder/{id}/Recover | Recover specified folder
[**templateFoldersRenameFolder**](TemplatesApi.md#templateFoldersRenameFolder) | **PUT** /api/rp/v1/Templates/Folder/{id}/Rename | Rename a folder
[**templateFoldersUpdateIcon**](TemplatesApi.md#templateFoldersUpdateIcon) | **PUT** /api/rp/v1/Templates/Folder/{id}/Icon | Update a folder&#39;s icon
[**templateFoldersUpdatePermissions**](TemplatesApi.md#templateFoldersUpdatePermissions) | **POST** /api/rp/v1/Templates/{id}/permissions | Update permissions
[**templateFoldersUpdateTags**](TemplatesApi.md#templateFoldersUpdateTags) | **PUT** /api/rp/v1/Templates/Folder/{id}/UpdateTags | Update tags
[**templatesCopyFile**](TemplatesApi.md#templatesCopyFile) | **POST** /api/rp/v1/Templates/File/{id}/Copy/{folderId} | Copy file to a specified folder
[**templatesCreateSharingKey**](TemplatesApi.md#templatesCreateSharingKey) | **POST** /api/rp/v1/Templates/File/{id}/sharingKey | Create a new key, that can be used to share access to a file  (You need Administrate.Anon permission to create a new key)
[**templatesDeleteFile**](TemplatesApi.md#templatesDeleteFile) | **DELETE** /api/rp/v1/Templates/File/{id} | Delete specified file
[**templatesDeleteSharingKey**](TemplatesApi.md#templatesDeleteSharingKey) | **DELETE** /api/rp/v1/Templates/File/{id}/sharingKey | Deletes a sharing key, making links, that utilizing it no longer work
[**templatesExport**](TemplatesApi.md#templatesExport) | **POST** /api/rp/v1/Templates/File/{id}/Export | Export specified report template to a specified format
[**templatesGetFile**](TemplatesApi.md#templatesGetFile) | **GET** /api/rp/v1/Templates/File/{id} | Get specified file
[**templatesGetFileHistory**](TemplatesApi.md#templatesGetFileHistory) | **GET** /api/rp/v1/Templates/File/{id}/History | Returns list of actions, performed on this file
[**templatesGetFilesCount**](TemplatesApi.md#templatesGetFilesCount) | **GET** /api/rp/v1/Templates/Folder/{id}/CountFiles | Get count of files what contains in a specified folder
[**templatesGetFilesList**](TemplatesApi.md#templatesGetFilesList) | **GET** /api/rp/v1/Templates/Folder/{id}/ListFiles | Get all files from specified folder. &lt;br /&gt;  User with Get Entity permission can access this method. &lt;br /&gt;  The method will returns minimal infomration about the file: &lt;br /&gt;  id, name, size, editedTime, createdTime, tags, status, statusReason.
[**templatesGetMyPermissions**](TemplatesApi.md#templatesGetMyPermissions) | **GET** /api/rp/v1/Templates/File/{id}/mypermissions | Get current user&#39;s permissions to file
[**templatesGetPermissions**](TemplatesApi.md#templatesGetPermissions) | **GET** /api/rp/v1/Templates/File/{id}/permissions | 
[**templatesGetSharingKeys**](TemplatesApi.md#templatesGetSharingKeys) | **GET** /api/rp/v1/Templates/File/{id}/sharingKeys | Returns all sharing keys, associated with the file
[**templatesMoveFile**](TemplatesApi.md#templatesMoveFile) | **POST** /api/rp/v1/Templates/File/{id}/Move/{folderId} | Move file to a specified folder
[**templatesMoveFileToBin**](TemplatesApi.md#templatesMoveFileToBin) | **DELETE** /api/rp/v1/Templates/File/{id}/ToBin | Move specified file to recycle bin
[**templatesPrepare**](TemplatesApi.md#templatesPrepare) | **POST** /api/rp/v1/Templates/File/{id}/Prepare | Prepare specified template to report
[**templatesRecoverFile**](TemplatesApi.md#templatesRecoverFile) | **POST** /api/rp/v1/Templates/File/{id}/Recover | Recover specified file from bin
[**templatesRenameFile**](TemplatesApi.md#templatesRenameFile) | **PUT** /api/rp/v1/Templates/File/{id}/Rename | Rename a file
[**templatesStaticPreview**](TemplatesApi.md#templatesStaticPreview) | **POST** /api/rp/v1/Templates/File/{id}/StaticPreview | Make preview for the report.  Generate a new or return exist prepared svg files.  If template was changed will be returned a new.  Pass the &#x60;&#x60; parameter to check prepared timestamp
[**templatesUpdateContent**](TemplatesApi.md#templatesUpdateContent) | **PUT** /api/rp/v1/Templates/File/{id}/Content | Updates contnet of the template. The method is deprecated, use the UpdateContentV2 method instead!
[**templatesUpdateContentV2**](TemplatesApi.md#templatesUpdateContentV2) | **PUT** /api/rp/v2/Templates/File/{id}/Content | Updates contnet of the template.
[**templatesUpdateIcon**](TemplatesApi.md#templatesUpdateIcon) | **PUT** /api/rp/v1/Templates/File/{id}/Icon | Update a files&#39;s icon
[**templatesUpdateParameters**](TemplatesApi.md#templatesUpdateParameters) | **PUT** /api/rp/v1/Templates/File/{id}/parameters | 
[**templatesUpdatePermissions**](TemplatesApi.md#templatesUpdatePermissions) | **POST** /api/rp/v1/Templates/File/{id}/permissions | Update permissions
[**templatesUpdateTags**](TemplatesApi.md#templatesUpdateTags) | **PUT** /api/rp/v1/Templates/File/{id}/UpdateTags | Update tags
[**templatesUploadFile**](TemplatesApi.md#templatesUploadFile) | **POST** /api/rp/v1/Templates/Folder/{id}/File | Upload a file to the specified folder. The method is deprecated, use the UploadFileV2 method instead!
[**templatesUploadFileV2**](TemplatesApi.md#templatesUploadFileV2) | **POST** /api/rp/v2/Templates/Folder/{id}/File | Alternative api for upload a file to the specified folder!



## templateFolderAndFileClearRecycleBin

> templateFolderAndFileClearRecycleBin(subscriptionId)

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let subscriptionId = "subscriptionId_example"; // String | subscription id
apiInstance.templateFolderAndFileClearRecycleBin(subscriptionId).then(() => {
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


## templateFolderAndFileCopyFiles

> templateFolderAndFileCopyFiles(subscriptionId, opts)

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let subscriptionId = "subscriptionId_example"; // String | id of current subscription
let opts = {
  'selectedFilesVM': new FastreportCloudSdk.SelectedFilesVM() // SelectedFilesVM | VM with files' ids and params of their destination
};
apiInstance.templateFolderAndFileCopyFiles(subscriptionId, opts).then(() => {
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


## templateFolderAndFileCountRecycleBinFoldersAndFiles

> CountVM templateFolderAndFileCountRecycleBinFoldersAndFiles(subscriptionId, opts)

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let subscriptionId = "subscriptionId_example"; // String | subscription id
let opts = {
  'searchPattern': "''", // String | 
  'useRegex': false // Boolean | 
};
apiInstance.templateFolderAndFileCountRecycleBinFoldersAndFiles(subscriptionId, opts).then((data) => {
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


## templateFolderAndFileDeleteFiles

> templateFolderAndFileDeleteFiles(subscriptionId, opts)

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let subscriptionId = "subscriptionId_example"; // String | id of current subscription
let opts = {
  'selectedFilesVM': new FastreportCloudSdk.SelectedFilesVM() // SelectedFilesVM | VM with files' ids and params of their destination
};
apiInstance.templateFolderAndFileDeleteFiles(subscriptionId, opts).then(() => {
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


## templateFolderAndFileGetCount

> CountVM templateFolderAndFileGetCount(id, opts)

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let id = "id_example"; // String | folder id
let opts = {
  'searchPattern': "searchPattern_example", // String | string, that must be incuded in file or folder name to be counted <br />              (leave undefined to count all files and folders)
  'useRegex': false // Boolean | set this to true if you want to use regular expression to search
};
apiInstance.templateFolderAndFileGetCount(id, opts).then((data) => {
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


## templateFolderAndFileGetFoldersAndFiles

> FilesVM templateFolderAndFileGetFoldersAndFiles(id, opts)

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let id = "id_example"; // String | folder id
let opts = {
  'skip': 0, // Number | number of folder and files, that have to be skipped
  'take': 10, // Number | number of folder and files, that have to be returned
  'orderBy': new FastreportCloudSdk.FileSorting(), // FileSorting | indicates a field to sort by
  'desc': false, // Boolean | indicates if sorting is descending
  'searchPattern': "''", // String | 
  'useRegex': false // Boolean | 
};
apiInstance.templateFolderAndFileGetFoldersAndFiles(id, opts).then((data) => {
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


## templateFolderAndFileGetRecycleBinFoldersAndFiles

> FilesVM templateFolderAndFileGetRecycleBinFoldersAndFiles(subscriptionId, opts)

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let subscriptionId = "subscriptionId_example"; // String | subscription id
let opts = {
  'skip': 0, // Number | number of folder and files, that have to be skipped
  'take': 10, // Number | number of folder and files, that have to be returned
  'orderBy': new FastreportCloudSdk.FileSorting(), // FileSorting | indicates a field to sort by
  'desc': false, // Boolean | indicates if sorting is descending
  'searchPattern': "''", // String | 
  'useRegex': false // Boolean | 
};
apiInstance.templateFolderAndFileGetRecycleBinFoldersAndFiles(subscriptionId, opts).then((data) => {
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


## templateFolderAndFileMoveFiles

> templateFolderAndFileMoveFiles(subscriptionId, opts)

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let subscriptionId = "subscriptionId_example"; // String | id of current subscription
let opts = {
  'selectedFilesVM': new FastreportCloudSdk.SelectedFilesVM() // SelectedFilesVM | VM with files' ids and params of their destination
};
apiInstance.templateFolderAndFileMoveFiles(subscriptionId, opts).then(() => {
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


## templateFolderAndFileMoveFilesToBin

> templateFolderAndFileMoveFilesToBin(subscriptionId, opts)

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let subscriptionId = "subscriptionId_example"; // String | id of current subscription
let opts = {
  'selectedFilesVM': new FastreportCloudSdk.SelectedFilesVM() // SelectedFilesVM | VM with files' ids and params of their destination
};
apiInstance.templateFolderAndFileMoveFilesToBin(subscriptionId, opts).then(() => {
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


## templateFolderAndFileRecoverAllFromRecycleBin

> templateFolderAndFileRecoverAllFromRecycleBin(subscriptionId)

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let subscriptionId = "subscriptionId_example"; // String | subscription id
apiInstance.templateFolderAndFileRecoverAllFromRecycleBin(subscriptionId).then(() => {
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


## templateFolderAndFileRecoverFiles

> templateFolderAndFileRecoverFiles(subscriptionId, opts)

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let subscriptionId = "subscriptionId_example"; // String | id of current subscription
let opts = {
  'selectedFilesVM': new FastreportCloudSdk.SelectedFilesVM() // SelectedFilesVM | VM with files' ids and params of their destination
};
apiInstance.templateFolderAndFileRecoverFiles(subscriptionId, opts).then(() => {
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


## templateFoldersCalculateFolderSize

> FolderSizeVM templateFoldersCalculateFolderSize(id)

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let id = "id_example"; // String | folder id
apiInstance.templateFoldersCalculateFolderSize(id).then((data) => {
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


## templateFoldersCopyFolder

> FileVM templateFoldersCopyFolder(id, folderId)

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let id = "id_example"; // String | moving folder id
let folderId = "folderId_example"; // String | destination folder id
apiInstance.templateFoldersCopyFolder(id, folderId).then((data) => {
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


## templateFoldersDeleteFolder

> templateFoldersDeleteFolder(id)

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let id = "id_example"; // String | folder id
apiInstance.templateFoldersDeleteFolder(id).then(() => {
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


## templateFoldersExport

> FileVM templateFoldersExport(id, opts)

Export specified template folder to a specified format

User with Execute Export permission on template folder and  Create Entity on an export folder can access this method.

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let id = "id_example"; // String | template folder id
let opts = {
  'exportTemplateVM': new FastreportCloudSdk.ExportTemplateVM() // ExportTemplateVM | export parameters (string only)
};
apiInstance.templateFoldersExport(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| template folder id | 
 **exportTemplateVM** | [**ExportTemplateVM**](ExportTemplateVM.md)| export parameters (string only) | [optional] 

### Return type

[**FileVM**](FileVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json


## templateFoldersGetBreadcrumbs

> BreadcrumbsVM templateFoldersGetBreadcrumbs(id)

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let id = "id_example"; // String | folder id
apiInstance.templateFoldersGetBreadcrumbs(id).then((data) => {
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


## templateFoldersGetFolder

> FileVM templateFoldersGetFolder(id)

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let id = "id_example"; // String | folder id
apiInstance.templateFoldersGetFolder(id).then((data) => {
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


## templateFoldersGetFolders

> FilesVM templateFoldersGetFolders(id, opts)

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let id = "id_example"; // String | folder id
let opts = {
  'skip': 0, // Number | number of files, that have to be skipped
  'take': 10, // Number | number of files, that have to be returned
  'orderBy': new FastreportCloudSdk.FileSorting(), // FileSorting | 
  'desc': false, // Boolean | 
  'searchPattern': "''", // String | 
  'useRegex': false // Boolean | 
};
apiInstance.templateFoldersGetFolders(id, opts).then((data) => {
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


## templateFoldersGetFoldersCount

> CountVM templateFoldersGetFoldersCount(id)

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let id = "id_example"; // String | folder id
apiInstance.templateFoldersGetFoldersCount(id).then((data) => {
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


## templateFoldersGetMyPermissions

> FilePermissionCRUDVM templateFoldersGetMyPermissions(folderId)

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let folderId = "folderId_example"; // String | folder id
apiInstance.templateFoldersGetMyPermissions(folderId).then((data) => {
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


## templateFoldersGetOrCreate

> FileVM templateFoldersGetOrCreate(opts)

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let opts = {
  'name': "name_example", // String | folder name
  'subscriptionId': "subscriptionId_example", // String | subscriptionId
  'parentId': "parentId_example" // String | parent folder id
};
apiInstance.templateFoldersGetOrCreate(opts).then((data) => {
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


## templateFoldersGetPermissions

> FilePermissionsVM templateFoldersGetPermissions(id)

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let id = "id_example"; // String | 
apiInstance.templateFoldersGetPermissions(id).then((data) => {
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


## templateFoldersGetRootFolder

> FileVM templateFoldersGetRootFolder(opts)

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let opts = {
  'subscriptionId': "subscriptionId_example" // String | 
};
apiInstance.templateFoldersGetRootFolder(opts).then((data) => {
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


## templateFoldersMoveFolder

> FileVM templateFoldersMoveFolder(id, folderId)

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let id = "id_example"; // String | moving folder id
let folderId = "folderId_example"; // String | destination folder id
apiInstance.templateFoldersMoveFolder(id, folderId).then((data) => {
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


## templateFoldersMoveFolderToBin

> templateFoldersMoveFolderToBin(id)

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let id = "id_example"; // String | folder id
apiInstance.templateFoldersMoveFolderToBin(id).then(() => {
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


## templateFoldersPostFolder

> FileVM templateFoldersPostFolder(id, opts)

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let id = "id_example"; // String | Identifier of parent folder id
let opts = {
  'templateFolderCreateVM': new FastreportCloudSdk.TemplateFolderCreateVM() // TemplateFolderCreateVM | create VM
};
apiInstance.templateFoldersPostFolder(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Identifier of parent folder id | 
 **templateFolderCreateVM** | [**TemplateFolderCreateVM**](TemplateFolderCreateVM.md)| create VM | [optional] 

### Return type

[**FileVM**](FileVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json


## templateFoldersPrepare

> FileVM templateFoldersPrepare(id, opts)

Prepare specified template folder to report folder

User with Execute Prepare permission on report and  Create Entity on a prepared report folder can access this method.

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let id = "id_example"; // String | template id
let opts = {
  'prepareTemplateVM': new FastreportCloudSdk.PrepareTemplateVM() // PrepareTemplateVM | Template folder prepare view model
};
apiInstance.templateFoldersPrepare(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| template id | 
 **prepareTemplateVM** | [**PrepareTemplateVM**](PrepareTemplateVM.md)| Template folder prepare view model | [optional] 

### Return type

[**FileVM**](FileVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json


## templateFoldersRecoverFolder

> templateFoldersRecoverFolder(id, opts)

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let id = "id_example"; // String | folder id
let opts = {
  'recoveryPath': "recoveryPath_example" // String | 
};
apiInstance.templateFoldersRecoverFolder(id, opts).then(() => {
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


## templateFoldersRenameFolder

> FileVM templateFoldersRenameFolder(id, opts)

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let id = "id_example"; // String | 
let opts = {
  'folderRenameVM': new FastreportCloudSdk.FolderRenameVM() // FolderRenameVM | 
};
apiInstance.templateFoldersRenameFolder(id, opts).then((data) => {
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


## templateFoldersUpdateIcon

> FileVM templateFoldersUpdateIcon(id, opts)

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let id = "id_example"; // String | Identifier of folder
let opts = {
  'folderIconVM': new FastreportCloudSdk.FolderIconVM() // FolderIconVM | Update icon model
};
apiInstance.templateFoldersUpdateIcon(id, opts).then((data) => {
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


## templateFoldersUpdatePermissions

> templateFoldersUpdatePermissions(id, opts)

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let id = "id_example"; // String | 
let opts = {
  'updateFilePermissionsVM': new FastreportCloudSdk.UpdateFilePermissionsVM() // UpdateFilePermissionsVM | 
};
apiInstance.templateFoldersUpdatePermissions(id, opts).then(() => {
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


## templateFoldersUpdateTags

> FileVM templateFoldersUpdateTags(id, opts)

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let id = "id_example"; // String | 
let opts = {
  'folderTagsUpdateVM': new FastreportCloudSdk.FolderTagsUpdateVM() // FolderTagsUpdateVM | 
};
apiInstance.templateFoldersUpdateTags(id, opts).then((data) => {
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


## templatesCopyFile

> TemplateVM templatesCopyFile(id, folderId)

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let id = "id_example"; // String | file id
let folderId = "folderId_example"; // String | folder id
apiInstance.templatesCopyFile(id, folderId).then((data) => {
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

[**TemplateVM**](TemplateVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## templatesCreateSharingKey

> FileSharingKeysVM templatesCreateSharingKey(id, opts)

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let id = "id_example"; // String | file id
let opts = {
  'createFileShareVM': new FastreportCloudSdk.CreateFileShareVM() // CreateFileShareVM | parameters for sharing key creation
};
apiInstance.templatesCreateSharingKey(id, opts).then((data) => {
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


## templatesDeleteFile

> templatesDeleteFile(id)

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let id = "id_example"; // String | file id
apiInstance.templatesDeleteFile(id).then(() => {
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


## templatesDeleteSharingKey

> templatesDeleteSharingKey(id, key)

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let id = "id_example"; // String | file id
let key = "key_example"; // String | key to delete
apiInstance.templatesDeleteSharingKey(id, key).then(() => {
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


## templatesExport

> ExportVM templatesExport(id, opts)

Export specified report template to a specified format

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let id = "id_example"; // String | template id
let opts = {
  'exportTemplateVM': new FastreportCloudSdk.ExportTemplateVM() // ExportTemplateVM | export parameters (string only)
};
apiInstance.templatesExport(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| template id | 
 **exportTemplateVM** | [**ExportTemplateVM**](ExportTemplateVM.md)| export parameters (string only) | [optional] 

### Return type

[**ExportVM**](ExportVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json


## templatesGetFile

> TemplateVM templatesGetFile(id)

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let id = "id_example"; // String | file id
apiInstance.templatesGetFile(id).then((data) => {
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

[**TemplateVM**](TemplateVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## templatesGetFileHistory

> AuditActionsVM templatesGetFileHistory(id, opts)

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let id = "id_example"; // String | 
let opts = {
  'skip': 0, // Number | 
  'take': 10 // Number | 
};
apiInstance.templatesGetFileHistory(id, opts).then((data) => {
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


## templatesGetFilesCount

> CountVM templatesGetFilesCount(id)

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let id = "id_example"; // String | folder id
apiInstance.templatesGetFilesCount(id).then((data) => {
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


## templatesGetFilesList

> TemplatesVM templatesGetFilesList(id, opts)

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let id = "id_example"; // String | folder id
let opts = {
  'skip': 0, // Number | number of files, that have to be skipped
  'take': 10, // Number | number of files, that have to be returned
  'searchPattern': "searchPattern_example", // String | 
  'orderBy': new FastreportCloudSdk.FileSorting(), // FileSorting | 
  'desc': false, // Boolean | 
  'useRegex': false // Boolean | 
};
apiInstance.templatesGetFilesList(id, opts).then((data) => {
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

[**TemplatesVM**](TemplatesVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## templatesGetMyPermissions

> FilePermissionCRUDVM templatesGetMyPermissions(id)

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let id = "id_example"; // String | file id
apiInstance.templatesGetMyPermissions(id).then((data) => {
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


## templatesGetPermissions

> FilePermissionsVM templatesGetPermissions(id)



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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let id = "id_example"; // String | 
apiInstance.templatesGetPermissions(id).then((data) => {
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


## templatesGetSharingKeys

> FileSharingKeysVM templatesGetSharingKeys(id)

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let id = "id_example"; // String | file id
apiInstance.templatesGetSharingKeys(id).then((data) => {
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


## templatesMoveFile

> TemplateVM templatesMoveFile(id, folderId)

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let id = "id_example"; // String | file id
let folderId = "folderId_example"; // String | folder id
apiInstance.templatesMoveFile(id, folderId).then((data) => {
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

[**TemplateVM**](TemplateVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## templatesMoveFileToBin

> templatesMoveFileToBin(id)

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let id = "id_example"; // String | file id
apiInstance.templatesMoveFileToBin(id).then(() => {
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


## templatesPrepare

> ReportVM templatesPrepare(id, opts)

Prepare specified template to report

User with Execute Prepare permission on report and  Create Entity on a prepared report folder can access this method.

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let id = "id_example"; // String | template id
let opts = {
  'prepareTemplateVM': new FastreportCloudSdk.PrepareTemplateVM() // PrepareTemplateVM | Template prepare view model
};
apiInstance.templatesPrepare(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| template id | 
 **prepareTemplateVM** | [**PrepareTemplateVM**](PrepareTemplateVM.md)| Template prepare view model | [optional] 

### Return type

[**ReportVM**](ReportVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json


## templatesRecoverFile

> templatesRecoverFile(id, opts)

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let id = "id_example"; // String | file id
let opts = {
  'recoveryPath': "recoveryPath_example" // String | 
};
apiInstance.templatesRecoverFile(id, opts).then(() => {
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


## templatesRenameFile

> TemplateVM templatesRenameFile(id, opts)

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let id = "id_example"; // String | 
let opts = {
  'fileRenameVM': new FastreportCloudSdk.FileRenameVM() // FileRenameVM | 
};
apiInstance.templatesRenameFile(id, opts).then((data) => {
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

[**TemplateVM**](TemplateVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json


## templatesStaticPreview

> ExportVM templatesStaticPreview(id, opts)

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let id = "id_example"; // String | template id
let opts = {
  'previewTemplateVM': new FastreportCloudSdk.PreviewTemplateVM() // PreviewTemplateVM | Model with parameters
};
apiInstance.templatesStaticPreview(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| template id | 
 **previewTemplateVM** | [**PreviewTemplateVM**](PreviewTemplateVM.md)| Model with parameters | [optional] 

### Return type

[**ExportVM**](ExportVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json


## templatesUpdateContent

> templatesUpdateContent(id, opts)

Updates contnet of the template. The method is deprecated, use the UpdateContentV2 method instead!

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let id = "id_example"; // String | template id
let opts = {
  'updateFileContentVM': new FastreportCloudSdk.UpdateFileContentVM() // UpdateFileContentVM | VM with only byte[] with new content
};
apiInstance.templatesUpdateContent(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| template id | 
 **updateFileContentVM** | [**UpdateFileContentVM**](UpdateFileContentVM.md)| VM with only byte[] with new content | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json


## templatesUpdateContentV2

> templatesUpdateContentV2(id, fileContent)

Updates contnet of the template.

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let id = "id_example"; // String | template id
let fileContent = "/path/to/file"; // File | 
apiInstance.templatesUpdateContentV2(id, fileContent).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| template id | 
 **fileContent** | **File**|  | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## templatesUpdateIcon

> TemplateVM templatesUpdateIcon(id, opts)

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let id = "id_example"; // String | 
let opts = {
  'fileIconVM': new FastreportCloudSdk.FileIconVM() // FileIconVM | 
};
apiInstance.templatesUpdateIcon(id, opts).then((data) => {
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

[**TemplateVM**](TemplateVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json


## templatesUpdateParameters

> TemplateVM templatesUpdateParameters(id, reportParametersVM)



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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let id = "id_example"; // String | 
let reportParametersVM = new FastreportCloudSdk.ReportParametersVM(); // ReportParametersVM | 
apiInstance.templatesUpdateParameters(id, reportParametersVM).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **reportParametersVM** | [**ReportParametersVM**](ReportParametersVM.md)|  | 

### Return type

[**TemplateVM**](TemplateVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json


## templatesUpdatePermissions

> templatesUpdatePermissions(id, opts)

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let id = "id_example"; // String | 
let opts = {
  'updateFilePermissionsVM': new FastreportCloudSdk.UpdateFilePermissionsVM() // UpdateFilePermissionsVM | 
};
apiInstance.templatesUpdatePermissions(id, opts).then(() => {
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


## templatesUpdateTags

> TemplateVM templatesUpdateTags(id, opts)

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let id = "id_example"; // String | 
let opts = {
  'fileTagsUpdateVM': new FastreportCloudSdk.FileTagsUpdateVM() // FileTagsUpdateVM | 
};
apiInstance.templatesUpdateTags(id, opts).then((data) => {
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

[**TemplateVM**](TemplateVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json


## templatesUploadFile

> TemplateVM templatesUploadFile(id, opts)

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let id = "id_example"; // String | Identifier of folder
let opts = {
  'templateCreateVM': new FastreportCloudSdk.TemplateCreateVM() // TemplateCreateVM | file's view model
};
apiInstance.templatesUploadFile(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Identifier of folder | 
 **templateCreateVM** | [**TemplateCreateVM**](TemplateCreateVM.md)| file&#39;s view model | [optional] 

### Return type

[**TemplateVM**](TemplateVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: application/json


## templatesUploadFileV2

> TemplateVM templatesUploadFileV2(id, fileContent, opts)

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

let apiInstance = new FastreportCloudSdk.TemplatesApi();
let id = "id_example"; // String | Identifier of folder
let fileContent = "/path/to/file"; // File | 
let opts = {
  'tags': ["null"], // [String] | 
  'icon': "/path/to/file" // File | 
};
apiInstance.templatesUploadFileV2(id, fileContent, opts).then((data) => {
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
 **tags** | [**[String]**](String.md)|  | [optional] 
 **icon** | **File**|  | [optional] 

### Return type

[**TemplateVM**](TemplateVM.md)

### Authorization

[ApiKey](../README.md#ApiKey), [JWT](../README.md#JWT)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

