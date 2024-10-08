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
    instance = new FastreportCloudSdk.DataSourceVM();
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

  describe('DataSourceVM', function() {
    it('should create an instance of DataSourceVM', function() {
      // uncomment below and update the code to test DataSourceVM
      //var instance = new FastreportCloudSdk.DataSourceVM();
      //expect(instance).to.be.a(FastreportCloudSdk.DataSourceVM);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new FastreportCloudSdk.DataSourceVM();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new FastreportCloudSdk.DataSourceVM();
      //expect(instance).to.be();
    });

    it('should have the property connectionType (base name: "connectionType")', function() {
      // uncomment below and update the code to test the property connectionType
      //var instance = new FastreportCloudSdk.DataSourceVM();
      //expect(instance).to.be();
    });

    it('should have the property connectionString (base name: "connectionString")', function() {
      // uncomment below and update the code to test the property connectionString
      //var instance = new FastreportCloudSdk.DataSourceVM();
      //expect(instance).to.be();
    });

    it('should have the property dataStructure (base name: "dataStructure")', function() {
      // uncomment below and update the code to test the property dataStructure
      //var instance = new FastreportCloudSdk.DataSourceVM();
      //expect(instance).to.be();
    });

    it('should have the property subscriptionId (base name: "subscriptionId")', function() {
      // uncomment below and update the code to test the property subscriptionId
      //var instance = new FastreportCloudSdk.DataSourceVM();
      //expect(instance).to.be();
    });

    it('should have the property editedTime (base name: "editedTime")', function() {
      // uncomment below and update the code to test the property editedTime
      //var instance = new FastreportCloudSdk.DataSourceVM();
      //expect(instance).to.be();
    });

    it('should have the property editorUserId (base name: "editorUserId")', function() {
      // uncomment below and update the code to test the property editorUserId
      //var instance = new FastreportCloudSdk.DataSourceVM();
      //expect(instance).to.be();
    });

    it('should have the property createdTime (base name: "createdTime")', function() {
      // uncomment below and update the code to test the property createdTime
      //var instance = new FastreportCloudSdk.DataSourceVM();
      //expect(instance).to.be();
    });

    it('should have the property creatorUserId (base name: "creatorUserId")', function() {
      // uncomment below and update the code to test the property creatorUserId
      //var instance = new FastreportCloudSdk.DataSourceVM();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new FastreportCloudSdk.DataSourceVM();
      //expect(instance).to.be();
    });

    it('should have the property errorMessage (base name: "errorMessage")', function() {
      // uncomment below and update the code to test the property errorMessage
      //var instance = new FastreportCloudSdk.DataSourceVM();
      //expect(instance).to.be();
    });

    it('should have the property selectCommands (base name: "selectCommands")', function() {
      // uncomment below and update the code to test the property selectCommands
      //var instance = new FastreportCloudSdk.DataSourceVM();
      //expect(instance).to.be();
    });

    it('should have the property t (base name: "$t")', function() {
      // uncomment below and update the code to test the property t
      //var instance = new FastreportCloudSdk.DataSourceVM();
      //expect(instance).to.be();
    });

  });

}));
