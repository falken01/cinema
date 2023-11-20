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
 * The CreateReservationDto model module.
 * @module model/CreateReservationDto
 * @version 1.0
 */
export class CreateReservationDto {
  /**
   * Constructs a new <code>CreateReservationDto</code>.
   * @alias module:model/CreateReservationDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CreateReservationDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateReservationDto} obj Optional instance to populate.
   * @return {module:model/CreateReservationDto} The populated <code>CreateReservationDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateReservationDto();
      if (data.hasOwnProperty('showingId'))
        obj.showingId = ApiClient.convertToType(data['showingId'], 'Number');
      if (data.hasOwnProperty('row'))
        obj.row = ApiClient.convertToType(data['row'], 'Number');
      if (data.hasOwnProperty('column'))
        obj.column = ApiClient.convertToType(data['column'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} showingId
 */
CreateReservationDto.prototype.showingId = undefined;

/**
 * @member {Number} row
 */
CreateReservationDto.prototype.row = undefined;

/**
 * @member {Number} column
 */
CreateReservationDto.prototype.column = undefined;
