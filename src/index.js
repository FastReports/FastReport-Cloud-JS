/**
 * FastReport Cloud
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import ApiKeyVM from './models/ApiKeyVM';
import ApiKeysVM from './models/ApiKeysVM';
import BreadcrumbsModel from './models/BreadcrumbsModel';
import BreadcrumbsVM from './models/BreadcrumbsVM';
import CountVM from './models/CountVM';
import CreateApiKeyVM from './models/CreateApiKeyVM';
import CreateDataSourceVM from './models/CreateDataSourceVM';
import CreateGroupVM from './models/CreateGroupVM';
import CreateSubscriptionInviteVM from './models/CreateSubscriptionInviteVM';
import DataSourcePermission from './models/DataSourcePermission';
import DataSourcePermissions from './models/DataSourcePermissions';
import DataSourcePermissionsVM from './models/DataSourcePermissionsVM';
import DataSourceVM from './models/DataSourceVM';
import DataSourcesVM from './models/DataSourcesVM';
import DefaultPermissions from './models/DefaultPermissions';
import DefaultPermissionsVM from './models/DefaultPermissionsVM';
import DeleteApiKeyVM from './models/DeleteApiKeyVM';
import ExportFolderCreateVM from './models/ExportFolderCreateVM';
import ExportReportTaskVM from './models/ExportReportTaskVM';
import ExportTemplateTaskVM from './models/ExportTemplateTaskVM';
import ExportVM from './models/ExportVM';
import ExportsVM from './models/ExportsVM';
import FileIconVM from './models/FileIconVM';
import FilePermission from './models/FilePermission';
import FilePermissions from './models/FilePermissions';
import FilePermissionsVM from './models/FilePermissionsVM';
import FileRenameVM from './models/FileRenameVM';
import FileTagsUpdateVM from './models/FileTagsUpdateVM';
import FileVM from './models/FileVM';
import FilesVM from './models/FilesVM';
import FolderIconVM from './models/FolderIconVM';
import FolderRenameVM from './models/FolderRenameVM';
import FolderTagsUpdateVM from './models/FolderTagsUpdateVM';
import GroupPermission from './models/GroupPermission';
import GroupPermissions from './models/GroupPermissions';
import GroupPermissionsVM from './models/GroupPermissionsVM';
import GroupUserVM from './models/GroupUserVM';
import GroupUsersVM from './models/GroupUsersVM';
import GroupVM from './models/GroupVM';
import GroupsVM from './models/GroupsVM';
import InvitedUser from './models/InvitedUser';
import PrepareTemplateTaskVM from './models/PrepareTemplateTaskVM';
import ProblemDetails from './models/ProblemDetails';
import RenameDataSourceVM from './models/RenameDataSourceVM';
import RenameGroupVM from './models/RenameGroupVM';
import RenameSubscriptionVM from './models/RenameSubscriptionVM';
import ReportCreateVM from './models/ReportCreateVM';
import ReportFolderCreateVM from './models/ReportFolderCreateVM';
import ReportInfo from './models/ReportInfo';
import ReportVM from './models/ReportVM';
import ReportsVM from './models/ReportsVM';
import SubscriptionFolder from './models/SubscriptionFolder';
import SubscriptionInviteVM from './models/SubscriptionInviteVM';
import SubscriptionInvitesVM from './models/SubscriptionInvitesVM';
import SubscriptionPeriodVM from './models/SubscriptionPeriodVM';
import SubscriptionPermission from './models/SubscriptionPermission';
import SubscriptionPermissions from './models/SubscriptionPermissions';
import SubscriptionPermissionsVM from './models/SubscriptionPermissionsVM';
import SubscriptionPlanVM from './models/SubscriptionPlanVM';
import SubscriptionPlansVM from './models/SubscriptionPlansVM';
import SubscriptionUserVM from './models/SubscriptionUserVM';
import SubscriptionUsersVM from './models/SubscriptionUsersVM';
import SubscriptionVM from './models/SubscriptionVM';
import SubscriptionsVM from './models/SubscriptionsVM';
import TemplateCreateVM from './models/TemplateCreateVM';
import TemplateFolderCreateVM from './models/TemplateFolderCreateVM';
import TemplateVM from './models/TemplateVM';
import TemplatesVM from './models/TemplatesVM';
import UpdateDataSourceConnectionStringVM from './models/UpdateDataSourceConnectionStringVM';
import UpdateDataSourcePermissionsVM from './models/UpdateDataSourcePermissionsVM';
import UpdateDataSourceSubscriptionVM from './models/UpdateDataSourceSubscriptionVM';
import UpdateDefaultPermissionsVM from './models/UpdateDefaultPermissionsVM';
import UpdateFilePermissionsVM from './models/UpdateFilePermissionsVM';
import UpdateGroupPermissionsVM from './models/UpdateGroupPermissionsVM';
import UpdateSubscriptionLocaleVM from './models/UpdateSubscriptionLocaleVM';
import UpdateSubscriptionPermissionsVM from './models/UpdateSubscriptionPermissionsVM';
import UpdateUserProfileVM from './models/UpdateUserProfileVM';
import UpdateUserSettingsVM from './models/UpdateUserSettingsVM';
import UserProfileVM from './models/UserProfileVM';
import UserSettingsVM from './models/UserSettingsVM';
import ApiKeysApi from './client/ApiKeysApi';
import DataSourcesApi from './client/DataSourcesApi';
import DownloadApi from './client/DownloadApi';
import ExportsApi from './client/ExportsApi';
import GroupUsersApi from './client/GroupUsersApi';
import GroupsApi from './client/GroupsApi';
import HealthCheckApi from './client/HealthCheckApi';
import ReportsApi from './client/ReportsApi';
import SubscriptionGroupsApi from './client/SubscriptionGroupsApi';
import SubscriptionInvitesApi from './client/SubscriptionInvitesApi';
import SubscriptionPlansApi from './client/SubscriptionPlansApi';
import SubscriptionUsersApi from './client/SubscriptionUsersApi';
import SubscriptionsApi from './client/SubscriptionsApi';
import TemplatesApi from './client/TemplatesApi';
import UserProfileApi from './client/UserProfileApi';
import UserSettingsApi from './client/UserSettingsApi';


/**
* JS API client generated by OpenAPI Generator.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var FastreportCloudSdk = require('index'); // See note below*.
* var xxxSvc = new FastreportCloudSdk.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new FastreportCloudSdk.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new FastreportCloudSdk.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new FastreportCloudSdk.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version v1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The ApiKeyVM model constructor.
     * @property {module:models/ApiKeyVM}
     */
    ApiKeyVM,

    /**
     * The ApiKeysVM model constructor.
     * @property {module:models/ApiKeysVM}
     */
    ApiKeysVM,

    /**
     * The BreadcrumbsModel model constructor.
     * @property {module:models/BreadcrumbsModel}
     */
    BreadcrumbsModel,

    /**
     * The BreadcrumbsVM model constructor.
     * @property {module:models/BreadcrumbsVM}
     */
    BreadcrumbsVM,

    /**
     * The CountVM model constructor.
     * @property {module:models/CountVM}
     */
    CountVM,

    /**
     * The CreateApiKeyVM model constructor.
     * @property {module:models/CreateApiKeyVM}
     */
    CreateApiKeyVM,

    /**
     * The CreateDataSourceVM model constructor.
     * @property {module:models/CreateDataSourceVM}
     */
    CreateDataSourceVM,

    /**
     * The CreateGroupVM model constructor.
     * @property {module:models/CreateGroupVM}
     */
    CreateGroupVM,

    /**
     * The CreateSubscriptionInviteVM model constructor.
     * @property {module:models/CreateSubscriptionInviteVM}
     */
    CreateSubscriptionInviteVM,

    /**
     * The DataSourcePermission model constructor.
     * @property {module:models/DataSourcePermission}
     */
    DataSourcePermission,

    /**
     * The DataSourcePermissions model constructor.
     * @property {module:models/DataSourcePermissions}
     */
    DataSourcePermissions,

    /**
     * The DataSourcePermissionsVM model constructor.
     * @property {module:models/DataSourcePermissionsVM}
     */
    DataSourcePermissionsVM,

    /**
     * The DataSourceVM model constructor.
     * @property {module:models/DataSourceVM}
     */
    DataSourceVM,

    /**
     * The DataSourcesVM model constructor.
     * @property {module:models/DataSourcesVM}
     */
    DataSourcesVM,

    /**
     * The DefaultPermissions model constructor.
     * @property {module:models/DefaultPermissions}
     */
    DefaultPermissions,

    /**
     * The DefaultPermissionsVM model constructor.
     * @property {module:models/DefaultPermissionsVM}
     */
    DefaultPermissionsVM,

    /**
     * The DeleteApiKeyVM model constructor.
     * @property {module:models/DeleteApiKeyVM}
     */
    DeleteApiKeyVM,

    /**
     * The ExportFolderCreateVM model constructor.
     * @property {module:models/ExportFolderCreateVM}
     */
    ExportFolderCreateVM,

    /**
     * The ExportReportTaskVM model constructor.
     * @property {module:models/ExportReportTaskVM}
     */
    ExportReportTaskVM,

    /**
     * The ExportTemplateTaskVM model constructor.
     * @property {module:models/ExportTemplateTaskVM}
     */
    ExportTemplateTaskVM,

    /**
     * The ExportVM model constructor.
     * @property {module:models/ExportVM}
     */
    ExportVM,

    /**
     * The ExportsVM model constructor.
     * @property {module:models/ExportsVM}
     */
    ExportsVM,

    /**
     * The FileIconVM model constructor.
     * @property {module:models/FileIconVM}
     */
    FileIconVM,

    /**
     * The FilePermission model constructor.
     * @property {module:models/FilePermission}
     */
    FilePermission,

    /**
     * The FilePermissions model constructor.
     * @property {module:models/FilePermissions}
     */
    FilePermissions,

    /**
     * The FilePermissionsVM model constructor.
     * @property {module:models/FilePermissionsVM}
     */
    FilePermissionsVM,

    /**
     * The FileRenameVM model constructor.
     * @property {module:models/FileRenameVM}
     */
    FileRenameVM,

    /**
     * The FileTagsUpdateVM model constructor.
     * @property {module:models/FileTagsUpdateVM}
     */
    FileTagsUpdateVM,

    /**
     * The FileVM model constructor.
     * @property {module:models/FileVM}
     */
    FileVM,

    /**
     * The FilesVM model constructor.
     * @property {module:models/FilesVM}
     */
    FilesVM,

    /**
     * The FolderIconVM model constructor.
     * @property {module:models/FolderIconVM}
     */
    FolderIconVM,

    /**
     * The FolderRenameVM model constructor.
     * @property {module:models/FolderRenameVM}
     */
    FolderRenameVM,

    /**
     * The FolderTagsUpdateVM model constructor.
     * @property {module:models/FolderTagsUpdateVM}
     */
    FolderTagsUpdateVM,

    /**
     * The GroupPermission model constructor.
     * @property {module:models/GroupPermission}
     */
    GroupPermission,

    /**
     * The GroupPermissions model constructor.
     * @property {module:models/GroupPermissions}
     */
    GroupPermissions,

    /**
     * The GroupPermissionsVM model constructor.
     * @property {module:models/GroupPermissionsVM}
     */
    GroupPermissionsVM,

    /**
     * The GroupUserVM model constructor.
     * @property {module:models/GroupUserVM}
     */
    GroupUserVM,

    /**
     * The GroupUsersVM model constructor.
     * @property {module:models/GroupUsersVM}
     */
    GroupUsersVM,

    /**
     * The GroupVM model constructor.
     * @property {module:models/GroupVM}
     */
    GroupVM,

    /**
     * The GroupsVM model constructor.
     * @property {module:models/GroupsVM}
     */
    GroupsVM,

    /**
     * The InvitedUser model constructor.
     * @property {module:models/InvitedUser}
     */
    InvitedUser,

    /**
     * The PrepareTemplateTaskVM model constructor.
     * @property {module:models/PrepareTemplateTaskVM}
     */
    PrepareTemplateTaskVM,

    /**
     * The ProblemDetails model constructor.
     * @property {module:models/ProblemDetails}
     */
    ProblemDetails,

    /**
     * The RenameDataSourceVM model constructor.
     * @property {module:models/RenameDataSourceVM}
     */
    RenameDataSourceVM,

    /**
     * The RenameGroupVM model constructor.
     * @property {module:models/RenameGroupVM}
     */
    RenameGroupVM,

    /**
     * The RenameSubscriptionVM model constructor.
     * @property {module:models/RenameSubscriptionVM}
     */
    RenameSubscriptionVM,

    /**
     * The ReportCreateVM model constructor.
     * @property {module:models/ReportCreateVM}
     */
    ReportCreateVM,

    /**
     * The ReportFolderCreateVM model constructor.
     * @property {module:models/ReportFolderCreateVM}
     */
    ReportFolderCreateVM,

    /**
     * The ReportInfo model constructor.
     * @property {module:models/ReportInfo}
     */
    ReportInfo,

    /**
     * The ReportVM model constructor.
     * @property {module:models/ReportVM}
     */
    ReportVM,

    /**
     * The ReportsVM model constructor.
     * @property {module:models/ReportsVM}
     */
    ReportsVM,

    /**
     * The SubscriptionFolder model constructor.
     * @property {module:models/SubscriptionFolder}
     */
    SubscriptionFolder,

    /**
     * The SubscriptionInviteVM model constructor.
     * @property {module:models/SubscriptionInviteVM}
     */
    SubscriptionInviteVM,

    /**
     * The SubscriptionInvitesVM model constructor.
     * @property {module:models/SubscriptionInvitesVM}
     */
    SubscriptionInvitesVM,

    /**
     * The SubscriptionPeriodVM model constructor.
     * @property {module:models/SubscriptionPeriodVM}
     */
    SubscriptionPeriodVM,

    /**
     * The SubscriptionPermission model constructor.
     * @property {module:models/SubscriptionPermission}
     */
    SubscriptionPermission,

    /**
     * The SubscriptionPermissions model constructor.
     * @property {module:models/SubscriptionPermissions}
     */
    SubscriptionPermissions,

    /**
     * The SubscriptionPermissionsVM model constructor.
     * @property {module:models/SubscriptionPermissionsVM}
     */
    SubscriptionPermissionsVM,

    /**
     * The SubscriptionPlanVM model constructor.
     * @property {module:models/SubscriptionPlanVM}
     */
    SubscriptionPlanVM,

    /**
     * The SubscriptionPlansVM model constructor.
     * @property {module:models/SubscriptionPlansVM}
     */
    SubscriptionPlansVM,

    /**
     * The SubscriptionUserVM model constructor.
     * @property {module:models/SubscriptionUserVM}
     */
    SubscriptionUserVM,

    /**
     * The SubscriptionUsersVM model constructor.
     * @property {module:models/SubscriptionUsersVM}
     */
    SubscriptionUsersVM,

    /**
     * The SubscriptionVM model constructor.
     * @property {module:models/SubscriptionVM}
     */
    SubscriptionVM,

    /**
     * The SubscriptionsVM model constructor.
     * @property {module:models/SubscriptionsVM}
     */
    SubscriptionsVM,

    /**
     * The TemplateCreateVM model constructor.
     * @property {module:models/TemplateCreateVM}
     */
    TemplateCreateVM,

    /**
     * The TemplateFolderCreateVM model constructor.
     * @property {module:models/TemplateFolderCreateVM}
     */
    TemplateFolderCreateVM,

    /**
     * The TemplateVM model constructor.
     * @property {module:models/TemplateVM}
     */
    TemplateVM,

    /**
     * The TemplatesVM model constructor.
     * @property {module:models/TemplatesVM}
     */
    TemplatesVM,

    /**
     * The UpdateDataSourceConnectionStringVM model constructor.
     * @property {module:models/UpdateDataSourceConnectionStringVM}
     */
    UpdateDataSourceConnectionStringVM,

    /**
     * The UpdateDataSourcePermissionsVM model constructor.
     * @property {module:models/UpdateDataSourcePermissionsVM}
     */
    UpdateDataSourcePermissionsVM,

    /**
     * The UpdateDataSourceSubscriptionVM model constructor.
     * @property {module:models/UpdateDataSourceSubscriptionVM}
     */
    UpdateDataSourceSubscriptionVM,

    /**
     * The UpdateDefaultPermissionsVM model constructor.
     * @property {module:models/UpdateDefaultPermissionsVM}
     */
    UpdateDefaultPermissionsVM,

    /**
     * The UpdateFilePermissionsVM model constructor.
     * @property {module:models/UpdateFilePermissionsVM}
     */
    UpdateFilePermissionsVM,

    /**
     * The UpdateGroupPermissionsVM model constructor.
     * @property {module:models/UpdateGroupPermissionsVM}
     */
    UpdateGroupPermissionsVM,

    /**
     * The UpdateSubscriptionLocaleVM model constructor.
     * @property {module:models/UpdateSubscriptionLocaleVM}
     */
    UpdateSubscriptionLocaleVM,

    /**
     * The UpdateSubscriptionPermissionsVM model constructor.
     * @property {module:models/UpdateSubscriptionPermissionsVM}
     */
    UpdateSubscriptionPermissionsVM,

    /**
     * The UpdateUserProfileVM model constructor.
     * @property {module:models/UpdateUserProfileVM}
     */
    UpdateUserProfileVM,

    /**
     * The UpdateUserSettingsVM model constructor.
     * @property {module:models/UpdateUserSettingsVM}
     */
    UpdateUserSettingsVM,

    /**
     * The UserProfileVM model constructor.
     * @property {module:models/UserProfileVM}
     */
    UserProfileVM,

    /**
     * The UserSettingsVM model constructor.
     * @property {module:models/UserSettingsVM}
     */
    UserSettingsVM,

    /**
    * The ApiKeysApi service constructor.
    * @property {module:client/ApiKeysApi}
    */
    ApiKeysApi,

    /**
    * The DataSourcesApi service constructor.
    * @property {module:client/DataSourcesApi}
    */
    DataSourcesApi,

    /**
    * The DownloadApi service constructor.
    * @property {module:client/DownloadApi}
    */
    DownloadApi,

    /**
    * The ExportsApi service constructor.
    * @property {module:client/ExportsApi}
    */
    ExportsApi,

    /**
    * The GroupUsersApi service constructor.
    * @property {module:client/GroupUsersApi}
    */
    GroupUsersApi,

    /**
    * The GroupsApi service constructor.
    * @property {module:client/GroupsApi}
    */
    GroupsApi,

    /**
    * The HealthCheckApi service constructor.
    * @property {module:client/HealthCheckApi}
    */
    HealthCheckApi,

    /**
    * The ReportsApi service constructor.
    * @property {module:client/ReportsApi}
    */
    ReportsApi,

    /**
    * The SubscriptionGroupsApi service constructor.
    * @property {module:client/SubscriptionGroupsApi}
    */
    SubscriptionGroupsApi,

    /**
    * The SubscriptionInvitesApi service constructor.
    * @property {module:client/SubscriptionInvitesApi}
    */
    SubscriptionInvitesApi,

    /**
    * The SubscriptionPlansApi service constructor.
    * @property {module:client/SubscriptionPlansApi}
    */
    SubscriptionPlansApi,

    /**
    * The SubscriptionUsersApi service constructor.
    * @property {module:client/SubscriptionUsersApi}
    */
    SubscriptionUsersApi,

    /**
    * The SubscriptionsApi service constructor.
    * @property {module:client/SubscriptionsApi}
    */
    SubscriptionsApi,

    /**
    * The TemplatesApi service constructor.
    * @property {module:client/TemplatesApi}
    */
    TemplatesApi,

    /**
    * The UserProfileApi service constructor.
    * @property {module:client/UserProfileApi}
    */
    UserProfileApi,

    /**
    * The UserSettingsApi service constructor.
    * @property {module:client/UserSettingsApi}
    */
    UserSettingsApi
};
