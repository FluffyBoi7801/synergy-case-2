import { CreateUserRequest, MessageResponse, VersionResponse } from "./models";

export const OPEN_API_SCHEMES = [
  { name: "VersionResponse", schema: VersionResponse },
  { name: "CreateUserRequest", schema: CreateUserRequest },
  { name: "MessageResponse", schema: MessageResponse },
];
