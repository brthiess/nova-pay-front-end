import axios from "axios";
import Cookies from "js-cookie";

export async function send(receivingAddress, amount, memo) {
  let sendResult = await axios.post("/send", {
    receivingAddress: receivingAddress,
    amount: amount,
    secureId: Cookies.get("secureId"),
    memo: memo,
  });
  console.log(sendResult);
  return sendResult;
}
