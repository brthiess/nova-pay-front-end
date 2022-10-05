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
      this.post("/send", (schema, request) => {
        let params = JSON.parse(request.requestBody);
        let secureId = params.secureId;
        let receivingAddress = params.receivingAddress;
        let amount = params.amount;

        if (
          !isNaN(amount) &&
          receivingAddress.length > 0 &&
          secureId === "123abc"
        ) {
          return { success: true };
        }
        return { success: false };
      });
      this.get("/account-overview", (schema, request) => {
        let email = request.queryParams.email;
        let secureId = request.queryParams.secureId;
        if (email === "test@test.com" && secureId === "123abc") {
          return {
            labels: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            datasets: [
              {
                id: 1,
                label: "Total (XLM)",
                data: [
                  500, 600, 750, 660, 600, 200, 250, 320, 300, 370, 400, 60,
                ],
              },
              {
                id: 2,
                label: "Merchant 1",
                data: [300, 44, 12, 300, 44, 12, 100, 44, 12, 120, 44, 12],
              },
              {
                id: 3,
                label: "Merchant 2",
                data: [110, 39, 92, 90, 84, 82, 80, 64, 88, 110, 130, 12],
              },
            ],
          };
        }
        return { success: false };
      });
      this.get("/account", (schema, request) => {
        let email = request.queryParams.email;
        let secureId = request.queryParams.secureId;
        if (email === "test@test.com" && secureId === "123abc") {
          return {
            email: email,
            joinDate: "December 5th, 2021",
            fullName: "John Doe",
            notifications: "none",
          };
        }
        return { success: false };
      });
      this.get("/merchant", (schema, request) => {
        let merchants = [
          {
            name: "Merchant 1",
            logo: "merchant1.png",
            sales: 9553,
            transactionNumbers: 1002,
            merchantId: 34,
          },
          {
            name: "Merchant 2",
            logo: "merchant1.png",
            sales: 1053667,
            transactionNumbers: 10302,
            merchantId: 38,
          },
          {
            name: "Merchant 3",
            logo: "merchant1.png",
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
            return {};
          } else {
            return merchants;
          }
        }
        return { success: false };
      });
    },
  });
}
