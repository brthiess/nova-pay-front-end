import axios from "axios";
import Cookies from "js-cookie";


export async function getUsername() {
    return Cookies.get("email");
}

export async function isSignedIn() {
    console.log("hi");
    let signInResult = await axios.get("/user/get-user-info", {
      email: "test@test.com",
      secureId: "abc123",
    });
    if (signInResult.data.success) {
      return true;
    }
    return false;
  }
  
