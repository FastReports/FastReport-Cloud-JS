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
    instance = new FastreportCloudSdk.EntityVM();
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

  describe('EntityVM', function() {
    it('should create an instance of EntityVM', function() {
      // uncomment below and update the code to test EntityVM
      //var instane = new FastreportCloudSdk.EntityVM();
      //expect(instance).to.be.a(FastreportCloudSdk.EntityVM);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new FastreportCloudSdk.EntityVM();
      //expect(instance).to.be();
    });

    it('should have the property createdTime (base name: "createdTime")', function() {
      // uncomment below and update the code to test the property createdTime
      //var instance = new FastreportCloudSdk.EntityVM();
      //expect(instance).to.be();
    });

    it('should have the property creatorUserId (base name: "creatorUserId")', function() {
      // uncomment below and update the code to test the property creatorUserId
      //var instance = new FastreportCloudSdk.EntityVM();
      //expect(instance).to.be();
    });

    it('should have the property editedTime (base name: "editedTime")', function() {
      // uncomment below and update the code to test the property editedTime
      //var instance = new FastreportCloudSdk.EntityVM();
      //expect(instance).to.be();
    });

    it('should have the property editorUserId (base name: "editorUserId")', function() {
      // uncomment below and update the code to test the property editorUserId
      //var instance = new FastreportCloudSdk.EntityVM();
      //expect(instance).to.be();
    });

  });

}));