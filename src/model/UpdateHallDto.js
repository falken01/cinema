/*
 * CinemaReservation
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.50
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';

/**
 * The UpdateHallDto model module.
 * @module model/UpdateHallDto
 * @version 1.0
 */
export class UpdateHallDto {
  /**
   * Constructs a new <code>UpdateHallDto</code>.
   * @alias module:model/UpdateHallDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>UpdateHallDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateHallDto} obj Optional instance to populate.
   * @return {module:model/UpdateHallDto} The populated <code>UpdateHallDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UpdateHallDto();
      if (data.hasOwnProperty('hallId'))
        obj.hallId = ApiClient.convertToType(data['hallId'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('rows'))
        obj.rows = ApiClient.convertToType(data['rows'], 'Number');
      if (data.hasOwnProperty('columns'))
        obj.columns = ApiClient.convertToType(data['columns'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} hallId
 */
UpdateHallDto.prototype.hallId = undefined;

/**
 * @member {String} name
 */
UpdateHallDto.prototype.name = undefined;

/**
 * @member {Number} rows
 */
UpdateHallDto.prototype.rows = undefined;

/**
 * @member {Number} columns
 */
UpdateHallDto.prototype.columns = undefined;

