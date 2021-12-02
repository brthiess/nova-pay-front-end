import axios from "axios";
import Cookies from "js-cookie";

export function getEmail() {
  return Cookies.get("email");
}

export function getSecureId() {
  return Cookies.get("secureId");
}

export async function getMerchants() {
  let merchants = await axios.get("/merchant", {
    params: {
      email: getEmail(),
      secureId: getSecureId(),
    },
  });
  return merchants.data;
}

export async function getMerchant(merchantId) {
  let merchant = await axios.get("/merchant", {
    params: {
      email: getEmail(),
      secureId: getSecureId(),
      merchantId: merchantId
    },
  });
  return merchant.data;
}
