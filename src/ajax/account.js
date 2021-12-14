import axios from "axios";
import { getEmail, getSecureId } from "./user";

export async function getAccount() {
    let account = await axios.get("/account", {
      params: {
        email: getEmail(),
        secureId: getSecureId()
      },
    });
    return account.data;
  }