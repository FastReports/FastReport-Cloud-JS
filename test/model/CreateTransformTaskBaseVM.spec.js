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
    instance = new FastreportCloudSdk.CreateTransformTaskBaseVM();
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

  describe('CreateTransformTaskBaseVM', function() {
    it('should create an instance of CreateTransformTaskBaseVM', function() {
      // uncomment below and update the code to test CreateTransformTaskBaseVM
      //var instane = new FastreportCloudSdk.CreateTransformTaskBaseVM();
      //expect(instance).to.be.a(FastreportCloudSdk.CreateTransformTaskBaseVM);
    });

    it('should have the property locale (base name: "locale")', function() {
      // uncomment below and update the code to test the property locale
      //var instance = new FastreportCloudSdk.CreateTransformTaskBaseVM();
      //expect(instance).to.be();
    });

    it('should have the property inputFile (base name: "inputFile")', function() {
      // uncomment below and update the code to test the property inputFile
      //var instance = new FastreportCloudSdk.CreateTransformTaskBaseVM();
      //expect(instance).to.be();
    });

    it('should have the property outputFile (base name: "outputFile")', function() {
      // uncomment below and update the code to test the property outputFile
      //var instance = new FastreportCloudSdk.CreateTransformTaskBaseVM();
      //expect(instance).to.be();
    });

    it('should have the property transports (base name: "transports")', function() {
      // uncomment below and update the code to test the property transports
      //var instance = new FastreportCloudSdk.CreateTransformTaskBaseVM();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new FastreportCloudSdk.CreateTransformTaskBaseVM();
      //expect(instance).to.be();
    });

    it('should have the property subscriptionId (base name: "subscriptionId")', function() {
      // uncomment below and update the code to test the property subscriptionId
      //var instance = new FastreportCloudSdk.CreateTransformTaskBaseVM();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new FastreportCloudSdk.CreateTransformTaskBaseVM();
      //expect(instance).to.be();
    });

  });

}));
