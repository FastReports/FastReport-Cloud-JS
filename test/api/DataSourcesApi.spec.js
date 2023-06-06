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
    instance = new FastreportCloudSdk.DataSourcesApi();
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

  describe('DataSourcesApi', function() {
    describe('dataSourcesCountDataSourcesAsync', function() {
      it('should call dataSourcesCountDataSourcesAsync successfully', function(done) {
        //uncomment below and update the code to test dataSourcesCountDataSourcesAsync
        //instance.dataSourcesCountDataSourcesAsync(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dataSourcesCreateDataSource', function() {
      it('should call dataSourcesCreateDataSource successfully', function(done) {
        //uncomment below and update the code to test dataSourcesCreateDataSource
        //instance.dataSourcesCreateDataSource(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dataSourcesDeleteDataSource', function() {
      it('should call dataSourcesDeleteDataSource successfully', function(done) {
        //uncomment below and update the code to test dataSourcesDeleteDataSource
        //instance.dataSourcesDeleteDataSource(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dataSourcesFetchData', function() {
      it('should call dataSourcesFetchData successfully', function(done) {
        //uncomment below and update the code to test dataSourcesFetchData
        //instance.dataSourcesFetchData(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dataSourcesGetAvailableDataSources', function() {
      it('should call dataSourcesGetAvailableDataSources successfully', function(done) {
        //uncomment below and update the code to test dataSourcesGetAvailableDataSources
        //instance.dataSourcesGetAvailableDataSources(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dataSourcesGetDataSource', function() {
      it('should call dataSourcesGetDataSource successfully', function(done) {
        //uncomment below and update the code to test dataSourcesGetDataSource
        //instance.dataSourcesGetDataSource(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dataSourcesGetPermissions', function() {
      it('should call dataSourcesGetPermissions successfully', function(done) {
        //uncomment below and update the code to test dataSourcesGetPermissions
        //instance.dataSourcesGetPermissions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dataSourcesRenameDataSource', function() {
      it('should call dataSourcesRenameDataSource successfully', function(done) {
        //uncomment below and update the code to test dataSourcesRenameDataSource
        //instance.dataSourcesRenameDataSource(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dataSourcesUpdateConnectionString', function() {
      it('should call dataSourcesUpdateConnectionString successfully', function(done) {
        //uncomment below and update the code to test dataSourcesUpdateConnectionString
        //instance.dataSourcesUpdateConnectionString(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dataSourcesUpdatePermissions', function() {
      it('should call dataSourcesUpdatePermissions successfully', function(done) {
        //uncomment below and update the code to test dataSourcesUpdatePermissions
        //instance.dataSourcesUpdatePermissions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dataSourcesUpdateSubscriptionDataSource', function() {
      it('should call dataSourcesUpdateSubscriptionDataSource successfully', function(done) {
        //uncomment below and update the code to test dataSourcesUpdateSubscriptionDataSource
        //instance.dataSourcesUpdateSubscriptionDataSource(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
