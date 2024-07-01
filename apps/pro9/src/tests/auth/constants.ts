import { Credentials } from "../../auth/Credentials";
import { UtilisateurInfo } from "../../auth/UtilisateurInfo";

export const VALID_ID = "1";

export const TEST_USER: UtilisateurInfo = {
  id: "cl7qmjh4h0000tothyjqapgj5",
  roles: ["User"],
  username: "ofek",
};
export const SIGN_TOKEN = "SIGN_TOKEN";
export const VALID_CREDENTIALS: Credentials = {
  username: "Valid User",
  password: "Valid User Password",
};
export const INVALID_CREDENTIALS: Credentials = {
  username: "Invalid User",
  password: "Invalid User Password",
};
