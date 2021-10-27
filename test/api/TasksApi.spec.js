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
    instance = new FastreportCloudSdk.TasksApi();
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

  describe('TasksApi', function() {
    describe('tasksCreateTask', function() {
      it('should call tasksCreateTask successfully', function(done) {
        //uncomment below and update the code to test tasksCreateTask
        //instance.tasksCreateTask(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('tasksDeleteTask', function() {
      it('should call tasksDeleteTask successfully', function(done) {
        //uncomment below and update the code to test tasksDeleteTask
        //instance.tasksDeleteTask(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('tasksGet', function() {
      it('should call tasksGet successfully', function(done) {
        //uncomment below and update the code to test tasksGet
        //instance.tasksGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('tasksGetList', function() {
      it('should call tasksGetList successfully', function(done) {
        //uncomment below and update the code to test tasksGetList
        //instance.tasksGetList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('tasksRunTask', function() {
      it('should call tasksRunTask successfully', function(done) {
        //uncomment below and update the code to test tasksRunTask
        //instance.tasksRunTask(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('tasksRunTaskById', function() {
      it('should call tasksRunTaskById successfully', function(done) {
        //uncomment below and update the code to test tasksRunTaskById
        //instance.tasksRunTaskById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));