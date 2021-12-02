import { createServer } from "miragejs";

export default function mirage() {
  createServer({
    routes() {
      this.post("/auth/sign-in", (schema, request) => {
        let params = JSON.parse(request.requestBody);
        let email = params.email;
        let password = params.password;

        if (email === "test@test.com" && password === "test") {
          return {
            success: true,
            result: {
              secureId: "123abc",
              email: "test@test.com",
            },
          };
        }
        return { success: false };
      });
      this.post("/user", (schema, request) => {
        let params = JSON.parse(request.requestBody);
        let email = params.email;
        let password = params.password;

        if (email === "test@test.com" && password === "test") {
          return { success: false };
        }
        return {
          success: true,
          result: {
            secureId: "123abc",
            email: "test@test.com",
          },
        };
      });
      this.get("/user", (schema, request) => {
        let email = request.queryParams.email;
        let secureId = request.queryParams.secureId;
        if (email === "test@test.com" && secureId === "123abc") {
          return { success: true };
        }
        return { success: false };
      });
      this.get("/merchant", (schema, request) => {
        let merchants = [
          {
            name: "Merchant 1",
            logo: "merchant1.jpg",
            sales: 9553,
            transactionNumbers: 1002,
            merchantId: 34,
          },
          {
            name: "Merchant 2",
            logo: "merchant2.jpg",
            sales: 1053667,
            transactionNumbers: 10302,
            merchantId: 38,
          },
          {
            name: "Merchant 3",
            logo: "merchant3.jpg",
            sales: 107,
            transactionNumbers: 12,
            merchantId: 9990,
          },
        ];

        let email = request.queryParams.email;
        let secureId = request.queryParams.secureId;
        let merchantId = request.queryParams.merchantId;
        if (email === "test@test.com" && secureId === "123abc") {
          if (merchantId) {
            let merchant = merchants.filter(
              (merchant) => Number(merchant.merchantId) === Number(merchantId)
            );
            if (merchant.length > 0) {
              return merchant[0];
            }
            return {}
          } else {
            return merchants;
          }
        }
        return { success: false };
      });
    },
  });
}
