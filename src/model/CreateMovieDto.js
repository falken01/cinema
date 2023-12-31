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
 * The CreateMovieDto model module.
 * @module model/CreateMovieDto
 * @version 1.0
 */
export class CreateMovieDto {
  /**
   * Constructs a new <code>CreateMovieDto</code>.
   * @alias module:model/CreateMovieDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CreateMovieDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateMovieDto} obj Optional instance to populate.
   * @return {module:model/CreateMovieDto} The populated <code>CreateMovieDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateMovieDto();
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('duration'))
        obj.duration = ApiClient.convertToType(data['duration'], 'String');
      if (data.hasOwnProperty('yearOfRelease'))
        obj.yearOfRelease = ApiClient.convertToType(data['yearOfRelease'], 'Number');
      if (data.hasOwnProperty('genre'))
        obj.genre = ApiClient.convertToType(data['genre'], 'String');
      if (data.hasOwnProperty('director'))
        obj.director = ApiClient.convertToType(data['director'], 'String');
      if (data.hasOwnProperty('actors'))
        obj.actors = ApiClient.convertToType(data['actors'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} title
 */
CreateMovieDto.prototype.title = undefined;

/**
 * @member {String} description
 */
CreateMovieDto.prototype.description = undefined;

/**
 * @member {String} duration
 */
CreateMovieDto.prototype.duration = undefined;

/**
 * @member {Number} yearOfRelease
 */
CreateMovieDto.prototype.yearOfRelease = undefined;

/**
 * @member {String} genre
 */
CreateMovieDto.prototype.genre = undefined;

/**
 * @member {String} director
 */
CreateMovieDto.prototype.director = undefined;

/**
 * @member {String} actors
 */
CreateMovieDto.prototype.actors = undefined;

