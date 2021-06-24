# FastreportCloudSdk.TemplateVM

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reportInfo** | [**ReportInfo**](ReportInfo.md) |  | [optional] 
**name** | **String** |  | [optional] 
**parentId** | **String** |  | [optional] 
**tags** | **[String]** |  | [optional] 
**icon** | **Blob** |  | [optional] 
**type** | **String** |  | [optional] 
**size** | **Number** |  | [optional] 
**subscriptionId** | **String** |  | [optional] 
**status** | **String** |  | [optional] 
**statusReason** | **String** |  | [optional] 
**id** | **String** |  | [optional] 
**createdTime** | **Date** |  | [optional] 
**creatorUserId** | **String** |  | [optional] 
**editedTime** | **Date** |  | [optional] 
**editorUserId** | **String** |  | [optional] 



## Enum: TypeEnum


* `File` (value: `"File"`)

* `Folder` (value: `"Folder"`)





## Enum: StatusEnum


* `None` (value: `"None"`)

* `InQueue` (value: `"InQueue"`)

* `InProcess` (value: `"InProcess"`)

* `Success` (value: `"Success"`)

* `Failed` (value: `"Failed"`)





## Enum: StatusReasonEnum


* `None` (value: `"None"`)

* `AllRight` (value: `"AllRight"`)

* `Hang` (value: `"Hang"`)

* `Error` (value: `"Error"`)

* `NotFound` (value: `"NotFound"`)

* `NotEnoughSpace` (value: `"NotEnoughSpace"`)

* `ExportStarted` (value: `"ExportStarted"`)

* `PreparationStarted` (value: `"PreparationStarted"`)

* `CrashLoop` (value: `"CrashLoop"`)




