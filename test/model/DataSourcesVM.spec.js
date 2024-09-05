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
    instance = new FastreportCloudSdk.DataSourcesVM();
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

  describe('DataSourcesVM', function() {
    it('should create an instance of DataSourcesVM', function() {
      // uncomment below and update the code to test DataSourcesVM
      //var instance = new FastreportCloudSdk.DataSourcesVM();
      //expect(instance).to.be.a(FastreportCloudSdk.DataSourcesVM);
    });

    it('should have the property dataSources (base name: "dataSources")', function() {
      // uncomment below and update the code to test the property dataSources
      //var instance = new FastreportCloudSdk.DataSourcesVM();
      //expect(instance).to.be();
    });

    it('should have the property count (base name: "count")', function() {
      // uncomment below and update the code to test the property count
      //var instance = new FastreportCloudSdk.DataSourcesVM();
      //expect(instance).to.be();
    });

    it('should have the property skip (base name: "skip")', function() {
      // uncomment below and update the code to test the property skip
      //var instance = new FastreportCloudSdk.DataSourcesVM();
      //expect(instance).to.be();
    });

    it('should have the property take (base name: "take")', function() {
      // uncomment below and update the code to test the property take
      //var instance = new FastreportCloudSdk.DataSourcesVM();
      //expect(instance).to.be();
    });

    it('should have the property t (base name: "$t")', function() {
      // uncomment below and update the code to test the property t
      //var instance = new FastreportCloudSdk.DataSourcesVM();
      //expect(instance).to.be();
    });

  });

}));
