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
import {SeatDto} from './SeatDto';

/**
 * The ShowingWithTakenSeatsDto model module.
 * @module model/ShowingWithTakenSeatsDto
 * @version 1.0
 */
export class ShowingWithTakenSeatsDto {
  /**
   * Constructs a new <code>ShowingWithTakenSeatsDto</code>.
   * @alias module:model/ShowingWithTakenSeatsDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ShowingWithTakenSeatsDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ShowingWithTakenSeatsDto} obj Optional instance to populate.
   * @return {module:model/ShowingWithTakenSeatsDto} The populated <code>ShowingWithTakenSeatsDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ShowingWithTakenSeatsDto();
      if (data.hasOwnProperty('showingId'))
        obj.showingId = ApiClient.convertToType(data['showingId'], 'Number');
      if (data.hasOwnProperty('movieId'))
        obj.movieId = ApiClient.convertToType(data['movieId'], 'Number');
      if (data.hasOwnProperty('hallId'))
        obj.hallId = ApiClient.convertToType(data['hallId'], 'Number');
      if (data.hasOwnProperty('date'))
        obj._date = ApiClient.convertToType(data['date'], 'Date');
      if (data.hasOwnProperty('takenSeats'))
        obj.takenSeats = ApiClient.convertToType(data['takenSeats'], [SeatDto]);
    }
    return obj;
  }
}

/**
 * @member {Number} showingId
 */
ShowingWithTakenSeatsDto.prototype.showingId = undefined;

/**
 * @member {Number} movieId
 */
ShowingWithTakenSeatsDto.prototype.movieId = undefined;

/**
 * @member {Number} hallId
 */
ShowingWithTakenSeatsDto.prototype.hallId = undefined;

/**
 * @member {Date} _date
 */
ShowingWithTakenSeatsDto.prototype._date = undefined;

/**
 * @member {Array.<module:model/SeatDto>} takenSeats
 */
ShowingWithTakenSeatsDto.prototype.takenSeats = undefined;

