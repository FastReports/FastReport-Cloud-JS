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
    instance = new FastreportCloudSdk.PrepareTemplateVM();
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

  describe('PrepareTemplateVM', function() {
    it('should create an instance of PrepareTemplateVM', function() {
      // uncomment below and update the code to test PrepareTemplateVM
      //var instane = new FastreportCloudSdk.PrepareTemplateVM();
      //expect(instance).to.be.a(FastreportCloudSdk.PrepareTemplateVM);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new FastreportCloudSdk.PrepareTemplateVM();
      //expect(instance).to.be();
    });

    it('should have the property locale (base name: "locale")', function() {
      // uncomment below and update the code to test the property locale
      //var instance = new FastreportCloudSdk.PrepareTemplateVM();
      //expect(instance).to.be();
    });

    it('should have the property parentFolderId (base name: "parentFolderId")', function() {
      // uncomment below and update the code to test the property parentFolderId
      //var instance = new FastreportCloudSdk.PrepareTemplateVM();
      //expect(instance).to.be();
    });

    it('should have the property pagesCount (base name: "pagesCount")', function() {
      // uncomment below and update the code to test the property pagesCount
      //var instance = new FastreportCloudSdk.PrepareTemplateVM();
      //expect(instance).to.be();
    });

    it('should have the property reportParameters (base name: "reportParameters")', function() {
      // uncomment below and update the code to test the property reportParameters
      //var instance = new FastreportCloudSdk.PrepareTemplateVM();
      //expect(instance).to.be();
    });

  });

}));