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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.FastreportCloudSdk);
  }
}(this, function(expect, FastreportCloudSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new FastreportCloudSdk.TemplatesApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('TemplatesApi', function() {
    describe('templateFolderAndFileClearRecycleBin', function() {
      it('should call templateFolderAndFileClearRecycleBin successfully', function(done) {
        //uncomment below and update the code to test templateFolderAndFileClearRecycleBin
        //instance.templateFolderAndFileClearRecycleBin(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templateFolderAndFileCopyFiles', function() {
      it('should call templateFolderAndFileCopyFiles successfully', function(done) {
        //uncomment below and update the code to test templateFolderAndFileCopyFiles
        //instance.templateFolderAndFileCopyFiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templateFolderAndFileCountRecycleBinFoldersAndFiles', function() {
      it('should call templateFolderAndFileCountRecycleBinFoldersAndFiles successfully', function(done) {
        //uncomment below and update the code to test templateFolderAndFileCountRecycleBinFoldersAndFiles
        //instance.templateFolderAndFileCountRecycleBinFoldersAndFiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templateFolderAndFileDeleteFiles', function() {
      it('should call templateFolderAndFileDeleteFiles successfully', function(done) {
        //uncomment below and update the code to test templateFolderAndFileDeleteFiles
        //instance.templateFolderAndFileDeleteFiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templateFolderAndFileGetCount', function() {
      it('should call templateFolderAndFileGetCount successfully', function(done) {
        //uncomment below and update the code to test templateFolderAndFileGetCount
        //instance.templateFolderAndFileGetCount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templateFolderAndFileGetFoldersAndFiles', function() {
      it('should call templateFolderAndFileGetFoldersAndFiles successfully', function(done) {
        //uncomment below and update the code to test templateFolderAndFileGetFoldersAndFiles
        //instance.templateFolderAndFileGetFoldersAndFiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templateFolderAndFileGetRecycleBinFoldersAndFiles', function() {
      it('should call templateFolderAndFileGetRecycleBinFoldersAndFiles successfully', function(done) {
        //uncomment below and update the code to test templateFolderAndFileGetRecycleBinFoldersAndFiles
        //instance.templateFolderAndFileGetRecycleBinFoldersAndFiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templateFolderAndFileMoveFiles', function() {
      it('should call templateFolderAndFileMoveFiles successfully', function(done) {
        //uncomment below and update the code to test templateFolderAndFileMoveFiles
        //instance.templateFolderAndFileMoveFiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templateFolderAndFileMoveFilesToBin', function() {
      it('should call templateFolderAndFileMoveFilesToBin successfully', function(done) {
        //uncomment below and update the code to test templateFolderAndFileMoveFilesToBin
        //instance.templateFolderAndFileMoveFilesToBin(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templateFolderAndFileRecoverAllFromRecycleBin', function() {
      it('should call templateFolderAndFileRecoverAllFromRecycleBin successfully', function(done) {
        //uncomment below and update the code to test templateFolderAndFileRecoverAllFromRecycleBin
        //instance.templateFolderAndFileRecoverAllFromRecycleBin(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templateFolderAndFileRecoverFiles', function() {
      it('should call templateFolderAndFileRecoverFiles successfully', function(done) {
        //uncomment below and update the code to test templateFolderAndFileRecoverFiles
        //instance.templateFolderAndFileRecoverFiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templateFoldersCalculateFolderSize', function() {
      it('should call templateFoldersCalculateFolderSize successfully', function(done) {
        //uncomment below and update the code to test templateFoldersCalculateFolderSize
        //instance.templateFoldersCalculateFolderSize(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templateFoldersCopyFolder', function() {
      it('should call templateFoldersCopyFolder successfully', function(done) {
        //uncomment below and update the code to test templateFoldersCopyFolder
        //instance.templateFoldersCopyFolder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templateFoldersDeleteFolder', function() {
      it('should call templateFoldersDeleteFolder successfully', function(done) {
        //uncomment below and update the code to test templateFoldersDeleteFolder
        //instance.templateFoldersDeleteFolder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templateFoldersExport', function() {
      it('should call templateFoldersExport successfully', function(done) {
        //uncomment below and update the code to test templateFoldersExport
        //instance.templateFoldersExport(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templateFoldersGetBreadcrumbs', function() {
      it('should call templateFoldersGetBreadcrumbs successfully', function(done) {
        //uncomment below and update the code to test templateFoldersGetBreadcrumbs
        //instance.templateFoldersGetBreadcrumbs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templateFoldersGetFolder', function() {
      it('should call templateFoldersGetFolder successfully', function(done) {
        //uncomment below and update the code to test templateFoldersGetFolder
        //instance.templateFoldersGetFolder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templateFoldersGetFolders', function() {
      it('should call templateFoldersGetFolders successfully', function(done) {
        //uncomment below and update the code to test templateFoldersGetFolders
        //instance.templateFoldersGetFolders(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templateFoldersGetFoldersCount', function() {
      it('should call templateFoldersGetFoldersCount successfully', function(done) {
        //uncomment below and update the code to test templateFoldersGetFoldersCount
        //instance.templateFoldersGetFoldersCount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templateFoldersGetMyPermissions', function() {
      it('should call templateFoldersGetMyPermissions successfully', function(done) {
        //uncomment below and update the code to test templateFoldersGetMyPermissions
        //instance.templateFoldersGetMyPermissions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templateFoldersGetOrCreate', function() {
      it('should call templateFoldersGetOrCreate successfully', function(done) {
        //uncomment below and update the code to test templateFoldersGetOrCreate
        //instance.templateFoldersGetOrCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templateFoldersGetPermissions', function() {
      it('should call templateFoldersGetPermissions successfully', function(done) {
        //uncomment below and update the code to test templateFoldersGetPermissions
        //instance.templateFoldersGetPermissions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templateFoldersGetRootFolder', function() {
      it('should call templateFoldersGetRootFolder successfully', function(done) {
        //uncomment below and update the code to test templateFoldersGetRootFolder
        //instance.templateFoldersGetRootFolder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templateFoldersMoveFolder', function() {
      it('should call templateFoldersMoveFolder successfully', function(done) {
        //uncomment below and update the code to test templateFoldersMoveFolder
        //instance.templateFoldersMoveFolder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templateFoldersMoveFolderToBin', function() {
      it('should call templateFoldersMoveFolderToBin successfully', function(done) {
        //uncomment below and update the code to test templateFoldersMoveFolderToBin
        //instance.templateFoldersMoveFolderToBin(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templateFoldersPostFolder', function() {
      it('should call templateFoldersPostFolder successfully', function(done) {
        //uncomment below and update the code to test templateFoldersPostFolder
        //instance.templateFoldersPostFolder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templateFoldersPrepare', function() {
      it('should call templateFoldersPrepare successfully', function(done) {
        //uncomment below and update the code to test templateFoldersPrepare
        //instance.templateFoldersPrepare(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templateFoldersRecoverFolder', function() {
      it('should call templateFoldersRecoverFolder successfully', function(done) {
        //uncomment below and update the code to test templateFoldersRecoverFolder
        //instance.templateFoldersRecoverFolder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templateFoldersRenameFolder', function() {
      it('should call templateFoldersRenameFolder successfully', function(done) {
        //uncomment below and update the code to test templateFoldersRenameFolder
        //instance.templateFoldersRenameFolder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templateFoldersUpdateIcon', function() {
      it('should call templateFoldersUpdateIcon successfully', function(done) {
        //uncomment below and update the code to test templateFoldersUpdateIcon
        //instance.templateFoldersUpdateIcon(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templateFoldersUpdatePermissions', function() {
      it('should call templateFoldersUpdatePermissions successfully', function(done) {
        //uncomment below and update the code to test templateFoldersUpdatePermissions
        //instance.templateFoldersUpdatePermissions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templateFoldersUpdateTags', function() {
      it('should call templateFoldersUpdateTags successfully', function(done) {
        //uncomment below and update the code to test templateFoldersUpdateTags
        //instance.templateFoldersUpdateTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templatesCopyFile', function() {
      it('should call templatesCopyFile successfully', function(done) {
        //uncomment below and update the code to test templatesCopyFile
        //instance.templatesCopyFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templatesCreateSharingKey', function() {
      it('should call templatesCreateSharingKey successfully', function(done) {
        //uncomment below and update the code to test templatesCreateSharingKey
        //instance.templatesCreateSharingKey(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templatesDeleteFile', function() {
      it('should call templatesDeleteFile successfully', function(done) {
        //uncomment below and update the code to test templatesDeleteFile
        //instance.templatesDeleteFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templatesDeleteSharingKey', function() {
      it('should call templatesDeleteSharingKey successfully', function(done) {
        //uncomment below and update the code to test templatesDeleteSharingKey
        //instance.templatesDeleteSharingKey(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templatesExport', function() {
      it('should call templatesExport successfully', function(done) {
        //uncomment below and update the code to test templatesExport
        //instance.templatesExport(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templatesGetFile', function() {
      it('should call templatesGetFile successfully', function(done) {
        //uncomment below and update the code to test templatesGetFile
        //instance.templatesGetFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templatesGetFileHistory', function() {
      it('should call templatesGetFileHistory successfully', function(done) {
        //uncomment below and update the code to test templatesGetFileHistory
        //instance.templatesGetFileHistory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templatesGetFilesCount', function() {
      it('should call templatesGetFilesCount successfully', function(done) {
        //uncomment below and update the code to test templatesGetFilesCount
        //instance.templatesGetFilesCount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templatesGetFilesList', function() {
      it('should call templatesGetFilesList successfully', function(done) {
        //uncomment below and update the code to test templatesGetFilesList
        //instance.templatesGetFilesList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templatesGetMyPermissions', function() {
      it('should call templatesGetMyPermissions successfully', function(done) {
        //uncomment below and update the code to test templatesGetMyPermissions
        //instance.templatesGetMyPermissions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templatesGetPermissions', function() {
      it('should call templatesGetPermissions successfully', function(done) {
        //uncomment below and update the code to test templatesGetPermissions
        //instance.templatesGetPermissions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templatesGetSharingKeys', function() {
      it('should call templatesGetSharingKeys successfully', function(done) {
        //uncomment below and update the code to test templatesGetSharingKeys
        //instance.templatesGetSharingKeys(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templatesMoveFile', function() {
      it('should call templatesMoveFile successfully', function(done) {
        //uncomment below and update the code to test templatesMoveFile
        //instance.templatesMoveFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templatesMoveFileToBin', function() {
      it('should call templatesMoveFileToBin successfully', function(done) {
        //uncomment below and update the code to test templatesMoveFileToBin
        //instance.templatesMoveFileToBin(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templatesPrepare', function() {
      it('should call templatesPrepare successfully', function(done) {
        //uncomment below and update the code to test templatesPrepare
        //instance.templatesPrepare(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templatesRecoverFile', function() {
      it('should call templatesRecoverFile successfully', function(done) {
        //uncomment below and update the code to test templatesRecoverFile
        //instance.templatesRecoverFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templatesRenameFile', function() {
      it('should call templatesRenameFile successfully', function(done) {
        //uncomment below and update the code to test templatesRenameFile
        //instance.templatesRenameFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templatesStaticPreview', function() {
      it('should call templatesStaticPreview successfully', function(done) {
        //uncomment below and update the code to test templatesStaticPreview
        //instance.templatesStaticPreview(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templatesUpdateContent', function() {
      it('should call templatesUpdateContent successfully', function(done) {
        //uncomment below and update the code to test templatesUpdateContent
        //instance.templatesUpdateContent(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templatesUpdateContentV2', function() {
      it('should call templatesUpdateContentV2 successfully', function(done) {
        //uncomment below and update the code to test templatesUpdateContentV2
        //instance.templatesUpdateContentV2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templatesUpdateIcon', function() {
      it('should call templatesUpdateIcon successfully', function(done) {
        //uncomment below and update the code to test templatesUpdateIcon
        //instance.templatesUpdateIcon(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templatesUpdateParameters', function() {
      it('should call templatesUpdateParameters successfully', function(done) {
        //uncomment below and update the code to test templatesUpdateParameters
        //instance.templatesUpdateParameters(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templatesUpdatePermissions', function() {
      it('should call templatesUpdatePermissions successfully', function(done) {
        //uncomment below and update the code to test templatesUpdatePermissions
        //instance.templatesUpdatePermissions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templatesUpdateTags', function() {
      it('should call templatesUpdateTags successfully', function(done) {
        //uncomment below and update the code to test templatesUpdateTags
        //instance.templatesUpdateTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templatesUploadFile', function() {
      it('should call templatesUploadFile successfully', function(done) {
        //uncomment below and update the code to test templatesUploadFile
        //instance.templatesUploadFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('templatesUploadFileV2', function() {
      it('should call templatesUploadFileV2 successfully', function(done) {
        //uncomment below and update the code to test templatesUploadFileV2
        //instance.templatesUploadFileV2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
