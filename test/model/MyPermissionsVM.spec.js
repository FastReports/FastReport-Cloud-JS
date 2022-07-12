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
    instance = new FastreportCloudSdk.MyPermissionsVM();
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

  describe('MyPermissionsVM', function() {
    it('should create an instance of MyPermissionsVM', function() {
      // uncomment below and update the code to test MyPermissionsVM
      //var instane = new FastreportCloudSdk.MyPermissionsVM();
      //expect(instance).to.be.a(FastreportCloudSdk.MyPermissionsVM);
    });

    it('should have the property subscription (base name: "subscription")', function() {
      // uncomment below and update the code to test the property subscription
      //var instance = new FastreportCloudSdk.MyPermissionsVM();
      //expect(instance).to.be();
    });

    it('should have the property files (base name: "files")', function() {
      // uncomment below and update the code to test the property files
      //var instance = new FastreportCloudSdk.MyPermissionsVM();
      //expect(instance).to.be();
    });

    it('should have the property datasources (base name: "datasources")', function() {
      // uncomment below and update the code to test the property datasources
      //var instance = new FastreportCloudSdk.MyPermissionsVM();
      //expect(instance).to.be();
    });

    it('should have the property groups (base name: "groups")', function() {
      // uncomment below and update the code to test the property groups
      //var instance = new FastreportCloudSdk.MyPermissionsVM();
      //expect(instance).to.be();
    });

    it('should have the property tasks (base name: "tasks")', function() {
      // uncomment below and update the code to test the property tasks
      //var instance = new FastreportCloudSdk.MyPermissionsVM();
      //expect(instance).to.be();
    });

  });

}));
