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
    instance = new FastreportCloudSdk.ExportReportVM();
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

  describe('ExportReportVM', function() {
    it('should create an instance of ExportReportVM', function() {
      // uncomment below and update the code to test ExportReportVM
      //var instance = new FastreportCloudSdk.ExportReportVM();
      //expect(instance).to.be.a(FastreportCloudSdk.ExportReportVM);
    });

    it('should have the property fileName (base name: "fileName")', function() {
      // uncomment below and update the code to test the property fileName
      //var instance = new FastreportCloudSdk.ExportReportVM();
      //expect(instance).to.be();
    });

    it('should have the property folderId (base name: "folderId")', function() {
      // uncomment below and update the code to test the property folderId
      //var instance = new FastreportCloudSdk.ExportReportVM();
      //expect(instance).to.be();
    });

    it('should have the property locale (base name: "locale")', function() {
      // uncomment below and update the code to test the property locale
      //var instance = new FastreportCloudSdk.ExportReportVM();
      //expect(instance).to.be();
    });

    it('should have the property pagesCount (base name: "pagesCount")', function() {
      // uncomment below and update the code to test the property pagesCount
      //var instance = new FastreportCloudSdk.ExportReportVM();
      //expect(instance).to.be();
    });

    it('should have the property format (base name: "format")', function() {
      // uncomment below and update the code to test the property format
      //var instance = new FastreportCloudSdk.ExportReportVM();
      //expect(instance).to.be();
    });

    it('should have the property exportParameters (base name: "exportParameters")', function() {
      // uncomment below and update the code to test the property exportParameters
      //var instance = new FastreportCloudSdk.ExportReportVM();
      //expect(instance).to.be();
    });

    it('should have the property t (base name: "$t")', function() {
      // uncomment below and update the code to test the property t
      //var instance = new FastreportCloudSdk.ExportReportVM();
      //expect(instance).to.be();
    });

  });

}));
