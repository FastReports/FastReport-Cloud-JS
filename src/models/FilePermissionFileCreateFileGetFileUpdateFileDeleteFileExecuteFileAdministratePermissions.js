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

import ApiClient from '../ApiClient';
import FilePermission from './FilePermission';

/**
 * The FilePermissionFileCreateFileGetFileUpdateFileDeleteFileExecuteFileAdministratePermissions model module.
 * @module models/FilePermissionFileCreateFileGetFileUpdateFileDeleteFileExecuteFileAdministratePermissions
 * @version v1
 */
class FilePermissionFileCreateFileGetFileUpdateFileDeleteFileExecuteFileAdministratePermissions {
    /**
     * Constructs a new <code>FilePermissionFileCreateFileGetFileUpdateFileDeleteFileExecuteFileAdministratePermissions</code>.
     * @alias module:models/FilePermissionFileCreateFileGetFileUpdateFileDeleteFileExecuteFileAdministratePermissions
     */
    constructor() { 
        
        FilePermissionFileCreateFileGetFileUpdateFileDeleteFileExecuteFileAdministratePermissions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FilePermissionFileCreateFileGetFileUpdateFileDeleteFileExecuteFileAdministratePermissions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/FilePermissionFileCreateFileGetFileUpdateFileDeleteFileExecuteFileAdministratePermissions} obj Optional instance to populate.
     * @return {module:models/FilePermissionFileCreateFileGetFileUpdateFileDeleteFileExecuteFileAdministratePermissions} The populated <code>FilePermissionFileCreateFileGetFileUpdateFileDeleteFileExecuteFileAdministratePermissions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FilePermissionFileCreateFileGetFileUpdateFileDeleteFileExecuteFileAdministratePermissions();

            if (data.hasOwnProperty('ownerId')) {
                obj['ownerId'] = ApiClient.convertToType(data['ownerId'], 'String');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = FilePermission.constructFromObject(data['owner']);
            }
            if (data.hasOwnProperty('groups')) {
                obj['groups'] = ApiClient.convertToType(data['groups'], {'String': FilePermission});
            }
            if (data.hasOwnProperty('other')) {
                obj['other'] = FilePermission.constructFromObject(data['other']);
            }
            if (data.hasOwnProperty('anon')) {
                obj['anon'] = FilePermission.constructFromObject(data['anon']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FilePermissionFileCreateFileGetFileUpdateFileDeleteFileExecuteFileAdministratePermissions</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FilePermissionFileCreateFileGetFileUpdateFileDeleteFileExecuteFileAdministratePermissions</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['ownerId'] && !(typeof data['ownerId'] === 'string' || data['ownerId'] instanceof String)) {
            throw new Error("Expected the field `ownerId` to be a primitive type in the JSON string but got " + data['ownerId']);
        }
        // validate the optional field `owner`
        if (data['owner']) { // data not null
          FilePermission.validateJSON(data['owner']);
        }
        // validate the optional field `other`
        if (data['other']) { // data not null
          FilePermission.validateJSON(data['other']);
        }
        // validate the optional field `anon`
        if (data['anon']) { // data not null
          FilePermission.validateJSON(data['anon']);
        }

        return true;
    }


}



/**
 * @member {String} ownerId
 */
FilePermissionFileCreateFileGetFileUpdateFileDeleteFileExecuteFileAdministratePermissions.prototype['ownerId'] = undefined;

/**
 * @member {module:models/FilePermission} owner
 */
FilePermissionFileCreateFileGetFileUpdateFileDeleteFileExecuteFileAdministratePermissions.prototype['owner'] = undefined;

/**
 * @member {Object.<String, module:models/FilePermission>} groups
 */
FilePermissionFileCreateFileGetFileUpdateFileDeleteFileExecuteFileAdministratePermissions.prototype['groups'] = undefined;

/**
 * @member {module:models/FilePermission} other
 */
FilePermissionFileCreateFileGetFileUpdateFileDeleteFileExecuteFileAdministratePermissions.prototype['other'] = undefined;

/**
 * @member {module:models/FilePermission} anon
 */
FilePermissionFileCreateFileGetFileUpdateFileDeleteFileExecuteFileAdministratePermissions.prototype['anon'] = undefined;






export default FilePermissionFileCreateFileGetFileUpdateFileDeleteFileExecuteFileAdministratePermissions;

