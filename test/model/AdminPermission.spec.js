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
    instance = new FastreportCloudSdk.AdminPermission();
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

  describe('AdminPermission', function() {
    it('should create an instance of AdminPermission', function() {
      // uncomment below and update the code to test AdminPermission
      //var instance = new FastreportCloudSdk.AdminPermission();
      //expect(instance).to.be.a(FastreportCloudSdk.AdminPermission);
    });

    it('should have the property create (base name: "create")', function() {
      // uncomment below and update the code to test the property create
      //var instance = new FastreportCloudSdk.AdminPermission();
      //expect(instance).to.be();
    });

    it('should have the property _delete (base name: "delete")', function() {
      // uncomment below and update the code to test the property _delete
      //var instance = new FastreportCloudSdk.AdminPermission();
      //expect(instance).to.be();
    });

    it('should have the property execute (base name: "execute")', function() {
      // uncomment below and update the code to test the property execute
      //var instance = new FastreportCloudSdk.AdminPermission();
      //expect(instance).to.be();
    });

    it('should have the property get (base name: "get")', function() {
      // uncomment below and update the code to test the property get
      //var instance = new FastreportCloudSdk.AdminPermission();
      //expect(instance).to.be();
    });

    it('should have the property update (base name: "update")', function() {
      // uncomment below and update the code to test the property update
      //var instance = new FastreportCloudSdk.AdminPermission();
      //expect(instance).to.be();
    });

    it('should have the property administrate (base name: "administrate")', function() {
      // uncomment below and update the code to test the property administrate
      //var instance = new FastreportCloudSdk.AdminPermission();
      //expect(instance).to.be();
    });

  });

}));
