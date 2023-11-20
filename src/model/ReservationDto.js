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
import {ReservationStatusEnum} from './ReservationStatusEnum';

/**
 * The ReservationDto model module.
 * @module model/ReservationDto
 * @version 1.0
 */
export class ReservationDto {
  /**
   * Constructs a new <code>ReservationDto</code>.
   * @alias module:model/ReservationDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ReservationDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReservationDto} obj Optional instance to populate.
   * @return {module:model/ReservationDto} The populated <code>ReservationDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ReservationDto();
      if (data.hasOwnProperty('reservationId'))
        obj.reservationId = ApiClient.convertToType(data['reservationId'], 'Number');
      if (data.hasOwnProperty('showingId'))
        obj.showingId = ApiClient.convertToType(data['showingId'], 'Number');
      if (data.hasOwnProperty('userId'))
        obj.userId = ApiClient.convertToType(data['userId'], 'String');
      if (data.hasOwnProperty('row'))
        obj.row = ApiClient.convertToType(data['row'], 'Number');
      if (data.hasOwnProperty('column'))
        obj.column = ApiClient.convertToType(data['column'], 'Number');
      if (data.hasOwnProperty('lastStatusUpdateDate'))
        obj.lastStatusUpdateDate = ApiClient.convertToType(data['lastStatusUpdateDate'], 'Date');
      if (data.hasOwnProperty('reservationStatus'))
        obj.reservationStatus = ReservationStatusEnum.constructFromObject(data['reservationStatus']);
    }
    return obj;
  }
}

/**
 * @member {Number} reservationId
 */
ReservationDto.prototype.reservationId = undefined;

/**
 * @member {Number} showingId
 */
ReservationDto.prototype.showingId = undefined;

/**
 * @member {String} userId
 */
ReservationDto.prototype.userId = undefined;

/**
 * @member {Number} row
 */
ReservationDto.prototype.row = undefined;

/**
 * @member {Number} column
 */
ReservationDto.prototype.column = undefined;

/**
 * @member {Date} lastStatusUpdateDate
 */
ReservationDto.prototype.lastStatusUpdateDate = undefined;

/**
 * @member {module:model/ReservationStatusEnum} reservationStatus
 */
ReservationDto.prototype.reservationStatus = undefined;
