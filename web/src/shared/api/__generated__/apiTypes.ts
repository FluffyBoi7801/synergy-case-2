/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface VersionResponse {
  version: string;
}

export interface CreateUserRequest {
  firstname: string;
  lastname: string;
  /** @format email */
  email: string;
  password: string;
}

export interface MessageResponse {
  message: string;
}
