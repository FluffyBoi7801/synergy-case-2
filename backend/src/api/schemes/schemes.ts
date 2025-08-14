import {
  CreateUserRequest,
  CurrentUserResponse,
  LoginUserRequest,
  MessageResponse,
  VersionResponse,
} from "./models";

export const OPEN_API_SCHEMES = [
  { name: "VersionResponse", schema: VersionResponse },
  { name: "CreateUserRequest", schema: CreateUserRequest },
  { name: "MessageResponse", schema: MessageResponse },
  { name: "LoginUserRequest", schema: LoginUserRequest },
  { name: "CurrentUserResponse", schema: CurrentUserResponse },
];
