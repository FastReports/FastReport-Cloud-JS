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
    instance = new FastreportCloudSdk.SubscriptionsApi();
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

  describe('SubscriptionsApi', function() {
    describe('subscriptionsGetDefaultPermissions', function() {
      it('should call subscriptionsGetDefaultPermissions successfully', function(done) {
        //uncomment below and update the code to test subscriptionsGetDefaultPermissions
        //instance.subscriptionsGetDefaultPermissions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('subscriptionsGetPermissions', function() {
      it('should call subscriptionsGetPermissions successfully', function(done) {
        //uncomment below and update the code to test subscriptionsGetPermissions
        //instance.subscriptionsGetPermissions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('subscriptionsGetSubscription', function() {
      it('should call subscriptionsGetSubscription successfully', function(done) {
        //uncomment below and update the code to test subscriptionsGetSubscription
        //instance.subscriptionsGetSubscription(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('subscriptionsGetSubscriptions', function() {
      it('should call subscriptionsGetSubscriptions successfully', function(done) {
        //uncomment below and update the code to test subscriptionsGetSubscriptions
        //instance.subscriptionsGetSubscriptions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('subscriptionsRenameSubscription', function() {
      it('should call subscriptionsRenameSubscription successfully', function(done) {
        //uncomment below and update the code to test subscriptionsRenameSubscription
        //instance.subscriptionsRenameSubscription(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('subscriptionsUpdateDefaultPermissions', function() {
      it('should call subscriptionsUpdateDefaultPermissions successfully', function(done) {
        //uncomment below and update the code to test subscriptionsUpdateDefaultPermissions
        //instance.subscriptionsUpdateDefaultPermissions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('subscriptionsUpdateLocale', function() {
      it('should call subscriptionsUpdateLocale successfully', function(done) {
        //uncomment below and update the code to test subscriptionsUpdateLocale
        //instance.subscriptionsUpdateLocale(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('subscriptionsUpdatePermissions', function() {
      it('should call subscriptionsUpdatePermissions successfully', function(done) {
        //uncomment below and update the code to test subscriptionsUpdatePermissions
        //instance.subscriptionsUpdatePermissions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
