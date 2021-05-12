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
    instance = new FastreportCloudSdk.AdminExportsApi();
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

  describe('AdminExportsApi', function() {
    describe('adminExportFoldersDeleteFolder', function() {
      it('should call adminExportFoldersDeleteFolder successfully', function(done) {
        //uncomment below and update the code to test adminExportFoldersDeleteFolder
        //instance.adminExportFoldersDeleteFolder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('adminExportFoldersGetFolder', function() {
      it('should call adminExportFoldersGetFolder successfully', function(done) {
        //uncomment below and update the code to test adminExportFoldersGetFolder
        //instance.adminExportFoldersGetFolder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('adminExportFoldersGetFolders', function() {
      it('should call adminExportFoldersGetFolders successfully', function(done) {
        //uncomment below and update the code to test adminExportFoldersGetFolders
        //instance.adminExportFoldersGetFolders(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('adminExportFoldersGetPermissions', function() {
      it('should call adminExportFoldersGetPermissions successfully', function(done) {
        //uncomment below and update the code to test adminExportFoldersGetPermissions
        //instance.adminExportFoldersGetPermissions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('adminExportFoldersPostFolder', function() {
      it('should call adminExportFoldersPostFolder successfully', function(done) {
        //uncomment below and update the code to test adminExportFoldersPostFolder
        //instance.adminExportFoldersPostFolder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('adminExportFoldersUpdateFolder', function() {
      it('should call adminExportFoldersUpdateFolder successfully', function(done) {
        //uncomment below and update the code to test adminExportFoldersUpdateFolder
        //instance.adminExportFoldersUpdateFolder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('adminExportFoldersUpdatePermissions', function() {
      it('should call adminExportFoldersUpdatePermissions successfully', function(done) {
        //uncomment below and update the code to test adminExportFoldersUpdatePermissions
        //instance.adminExportFoldersUpdatePermissions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('adminExportsDeleteFile', function() {
      it('should call adminExportsDeleteFile successfully', function(done) {
        //uncomment below and update the code to test adminExportsDeleteFile
        //instance.adminExportsDeleteFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('adminExportsGetFile', function() {
      it('should call adminExportsGetFile successfully', function(done) {
        //uncomment below and update the code to test adminExportsGetFile
        //instance.adminExportsGetFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('adminExportsGetFiles', function() {
      it('should call adminExportsGetFiles successfully', function(done) {
        //uncomment below and update the code to test adminExportsGetFiles
        //instance.adminExportsGetFiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('adminExportsGetPermissions', function() {
      it('should call adminExportsGetPermissions successfully', function(done) {
        //uncomment below and update the code to test adminExportsGetPermissions
        //instance.adminExportsGetPermissions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('adminExportsUpdateFile', function() {
      it('should call adminExportsUpdateFile successfully', function(done) {
        //uncomment below and update the code to test adminExportsUpdateFile
        //instance.adminExportsUpdateFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('adminExportsUpdatePermissions', function() {
      it('should call adminExportsUpdatePermissions successfully', function(done) {
        //uncomment below and update the code to test adminExportsUpdatePermissions
        //instance.adminExportsUpdatePermissions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('adminExportsUploadFile', function() {
      it('should call adminExportsUploadFile successfully', function(done) {
        //uncomment below and update the code to test adminExportsUploadFile
        //instance.adminExportsUploadFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
