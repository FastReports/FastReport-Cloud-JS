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
    instance = new FastreportCloudSdk.EmailTaskVM();
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

  describe('EmailTaskVM', function() {
    it('should create an instance of EmailTaskVM', function() {
      // uncomment below and update the code to test EmailTaskVM
      //var instance = new FastreportCloudSdk.EmailTaskVM();
      //expect(instance).to.be.a(FastreportCloudSdk.EmailTaskVM);
    });

    it('should have the property body (base name: "body")', function() {
      // uncomment below and update the code to test the property body
      //var instance = new FastreportCloudSdk.EmailTaskVM();
      //expect(instance).to.be();
    });

    it('should have the property enableSsl (base name: "enableSsl")', function() {
      // uncomment below and update the code to test the property enableSsl
      //var instance = new FastreportCloudSdk.EmailTaskVM();
      //expect(instance).to.be();
    });

    it('should have the property from (base name: "from")', function() {
      // uncomment below and update the code to test the property from
      //var instance = new FastreportCloudSdk.EmailTaskVM();
      //expect(instance).to.be();
    });

    it('should have the property isBodyHtml (base name: "isBodyHtml")', function() {
      // uncomment below and update the code to test the property isBodyHtml
      //var instance = new FastreportCloudSdk.EmailTaskVM();
      //expect(instance).to.be();
    });

    it('should have the property port (base name: "port")', function() {
      // uncomment below and update the code to test the property port
      //var instance = new FastreportCloudSdk.EmailTaskVM();
      //expect(instance).to.be();
    });

    it('should have the property server (base name: "server")', function() {
      // uncomment below and update the code to test the property server
      //var instance = new FastreportCloudSdk.EmailTaskVM();
      //expect(instance).to.be();
    });

    it('should have the property subject (base name: "subject")', function() {
      // uncomment below and update the code to test the property subject
      //var instance = new FastreportCloudSdk.EmailTaskVM();
      //expect(instance).to.be();
    });

    it('should have the property to (base name: "to")', function() {
      // uncomment below and update the code to test the property to
      //var instance = new FastreportCloudSdk.EmailTaskVM();
      //expect(instance).to.be();
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instance = new FastreportCloudSdk.EmailTaskVM();
      //expect(instance).to.be();
    });

    it('should have the property t (base name: "$t")', function() {
      // uncomment below and update the code to test the property t
      //var instance = new FastreportCloudSdk.EmailTaskVM();
      //expect(instance).to.be();
    });

  });

}));
