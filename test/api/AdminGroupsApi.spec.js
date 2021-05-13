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
    instance = new FastreportCloudSdk.AdminGroupsApi();
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

  describe('AdminGroupsApi', function() {
    describe('adminGroupsCreateGroup', function() {
      it('should call adminGroupsCreateGroup successfully', function(done) {
        //uncomment below and update the code to test adminGroupsCreateGroup
        //instance.adminGroupsCreateGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('adminGroupsDeleteGroup', function() {
      it('should call adminGroupsDeleteGroup successfully', function(done) {
        //uncomment below and update the code to test adminGroupsDeleteGroup
        //instance.adminGroupsDeleteGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('adminGroupsGetGroup', function() {
      it('should call adminGroupsGetGroup successfully', function(done) {
        //uncomment below and update the code to test adminGroupsGetGroup
        //instance.adminGroupsGetGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('adminGroupsGetGroups', function() {
      it('should call adminGroupsGetGroups successfully', function(done) {
        //uncomment below and update the code to test adminGroupsGetGroups
        //instance.adminGroupsGetGroups(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('adminGroupsGetPermissions', function() {
      it('should call adminGroupsGetPermissions successfully', function(done) {
        //uncomment below and update the code to test adminGroupsGetPermissions
        //instance.adminGroupsGetPermissions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('adminGroupsUpdateGroup', function() {
      it('should call adminGroupsUpdateGroup successfully', function(done) {
        //uncomment below and update the code to test adminGroupsUpdateGroup
        //instance.adminGroupsUpdateGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('adminGroupsUpdatePermissions', function() {
      it('should call adminGroupsUpdatePermissions successfully', function(done) {
        //uncomment below and update the code to test adminGroupsUpdatePermissions
        //instance.adminGroupsUpdatePermissions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));