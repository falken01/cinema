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
import {TimeSpan} from './TimeSpan';

/**
 * The UpdateMovieDto model module.
 * @module model/UpdateMovieDto
 * @version 1.0
 */
export class UpdateMovieDto {
  /**
   * Constructs a new <code>UpdateMovieDto</code>.
   * @alias module:model/UpdateMovieDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>UpdateMovieDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateMovieDto} obj Optional instance to populate.
   * @return {module:model/UpdateMovieDto} The populated <code>UpdateMovieDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UpdateMovieDto();
      if (data.hasOwnProperty('movieId'))
        obj.movieId = ApiClient.convertToType(data['movieId'], 'Number');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('yearOfRelease'))
        obj.yearOfRelease = ApiClient.convertToType(data['yearOfRelease'], 'Number');
      if (data.hasOwnProperty('genre'))
        obj.genre = ApiClient.convertToType(data['genre'], 'String');
      if (data.hasOwnProperty('director'))
        obj.director = ApiClient.convertToType(data['director'], 'String');
      if (data.hasOwnProperty('actors'))
        obj.actors = ApiClient.convertToType(data['actors'], 'String');
      if (data.hasOwnProperty('duration'))
        obj.duration = TimeSpan.constructFromObject(data['duration']);
    }
    return obj;
  }
}

/**
 * @member {Number} movieId
 */
UpdateMovieDto.prototype.movieId = undefined;

/**
 * @member {String} title
 */
UpdateMovieDto.prototype.title = undefined;

/**
 * @member {String} description
 */
UpdateMovieDto.prototype.description = undefined;

/**
 * @member {Number} yearOfRelease
 */
UpdateMovieDto.prototype.yearOfRelease = undefined;

/**
 * @member {String} genre
 */
UpdateMovieDto.prototype.genre = undefined;

/**
 * @member {String} director
 */
UpdateMovieDto.prototype.director = undefined;

/**
 * @member {String} actors
 */
UpdateMovieDto.prototype.actors = undefined;

/**
 * @member {module:model/TimeSpan} duration
 */
UpdateMovieDto.prototype.duration = undefined;
