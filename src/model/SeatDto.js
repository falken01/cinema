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
 * The SeatDto model module.
 * @module model/SeatDto
 * @version 1.0
 */
export class SeatDto {
  /**
   * Constructs a new <code>SeatDto</code>.
   * @alias module:model/SeatDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>SeatDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SeatDto} obj Optional instance to populate.
   * @return {module:model/SeatDto} The populated <code>SeatDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SeatDto();
      if (data.hasOwnProperty('row'))
        obj.row = ApiClient.convertToType(data['row'], 'Number');
      if (data.hasOwnProperty('column'))
        obj.column = ApiClient.convertToType(data['column'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} row
 */
SeatDto.prototype.row = undefined;

/**
 * @member {Number} column
 */
SeatDto.prototype.column = undefined;

