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

/**
 * The ExportReportTaskVM model module.
 * @module models/ExportReportTaskVM
 * @version v1
 */
class ExportReportTaskVM {
    /**
     * Constructs a new <code>ExportReportTaskVM</code>.
     * @alias module:models/ExportReportTaskVM
     */
    constructor() { 
        
        ExportReportTaskVM.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ExportReportTaskVM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:models/ExportReportTaskVM} obj Optional instance to populate.
     * @return {module:models/ExportReportTaskVM} The populated <code>ExportReportTaskVM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExportReportTaskVM();

            if (data.hasOwnProperty('fileName')) {
                obj['fileName'] = ApiClient.convertToType(data['fileName'], 'String');
            }
            if (data.hasOwnProperty('folderId')) {
                obj['folderId'] = ApiClient.convertToType(data['folderId'], 'String');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('pagesCount')) {
                obj['pagesCount'] = ApiClient.convertToType(data['pagesCount'], 'Number');
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
            }
            if (data.hasOwnProperty('exportParameters')) {
                obj['exportParameters'] = ApiClient.convertToType(data['exportParameters'], {'String': 'String'});
            }
        }
        return obj;
    }


}

/**
 * @member {String} fileName
 */
ExportReportTaskVM.prototype['fileName'] = undefined;

/**
 * @member {String} folderId
 */
ExportReportTaskVM.prototype['folderId'] = undefined;

/**
 * @member {String} locale
 */
ExportReportTaskVM.prototype['locale'] = undefined;

/**
 * @member {Number} pagesCount
 */
ExportReportTaskVM.prototype['pagesCount'] = undefined;

/**
 * @member {module:models/ExportReportTaskVM.FormatEnum} format
 */
ExportReportTaskVM.prototype['format'] = undefined;

/**
 * @member {Object.<String, String>} exportParameters
 */
ExportReportTaskVM.prototype['exportParameters'] = undefined;





/**
 * Allowed values for the <code>format</code> property.
 * @enum {String}
 * @readonly
 */
ExportReportTaskVM['FormatEnum'] = {

    /**
     * value: "Pdf"
     * @const
     */
    "Pdf": "Pdf",

    /**
     * value: "Html"
     * @const
     */
    "Html": "Html",

    /**
     * value: "Mht"
     * @const
     */
    "Mht": "Mht",

    /**
     * value: "Image"
     * @const
     */
    "Image": "Image",

    /**
     * value: "Biff8"
     * @const
     */
    "Biff8": "Biff8",

    /**
     * value: "Csv"
     * @const
     */
    "Csv": "Csv",

    /**
     * value: "Dbf"
     * @const
     */
    "Dbf": "Dbf",

    /**
     * value: "Json"
     * @const
     */
    "Json": "Json",

    /**
     * value: "LaTeX"
     * @const
     */
    "LaTeX": "LaTeX",

    /**
     * value: "Odt"
     * @const
     */
    "Odt": "Odt",

    /**
     * value: "Ods"
     * @const
     */
    "Ods": "Ods",

    /**
     * value: "Docx"
     * @const
     */
    "Docx": "Docx",

    /**
     * value: "Pptx"
     * @const
     */
    "Pptx": "Pptx",

    /**
     * value: "Xlsx"
     * @const
     */
    "Xlsx": "Xlsx",

    /**
     * value: "Xps"
     * @const
     */
    "Xps": "Xps",

    /**
     * value: "Ppml"
     * @const
     */
    "Ppml": "Ppml",

    /**
     * value: "PS"
     * @const
     */
    "PS": "PS",

    /**
     * value: "Richtext"
     * @const
     */
    "Richtext": "Richtext",

    /**
     * value: "Svg"
     * @const
     */
    "Svg": "Svg",

    /**
     * value: "Text"
     * @const
     */
    "Text": "Text",

    /**
     * value: "Xaml"
     * @const
     */
    "Xaml": "Xaml",

    /**
     * value: "Xml"
     * @const
     */
    "Xml": "Xml",

    /**
     * value: "Zpl"
     * @const
     */
    "Zpl": "Zpl"
};



export default ExportReportTaskVM;

