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
 * The CreateHallDto model module.
 * @module model/CreateHallDto
 * @version 1.0
 */
export class CreateHallDto {
  /**
   * Constructs a new <code>CreateHallDto</code>.
   * @alias module:model/CreateHallDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CreateHallDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateHallDto} obj Optional instance to populate.
   * @return {module:model/CreateHallDto} The populated <code>CreateHallDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateHallDto();
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
 * @member {String} name
 */
CreateHallDto.prototype.name = undefined;

/**
 * @member {Number} rows
 */
CreateHallDto.prototype.rows = undefined;

/**
 * @member {Number} columns
 */
CreateHallDto.prototype.columns = undefined;

