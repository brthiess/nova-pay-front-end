import axios from "axios";
import Cookies from "js-cookie";
import store from "../app/store";

export function getEmail() {
  return Cookies.get("email");
}

export function setEmail(value) {
  Cookies.set("email", value);
  store.dispatch({ type: "user/updateEmail", payload: value });
}

export function getSecureId() {
  return Cookies.get("secureId");
}

export function setSecureId(value) {
  Cookies.set("secureId", value)
}



export async function isSignedIn() {
  let signInResult = await axios.get("/user/get-user-info", {
    params: {
      email: getEmail(),
      secureId: getSecureId(),
    },
  });
  if (signInResult.data.success) {
    return true;
  }
  return false;
}
