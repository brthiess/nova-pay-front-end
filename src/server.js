import { createServer } from "miragejs";

export default function mirage() {
  createServer({
    routes() {
      this.post("/user/sign-in", (schema, request) => {
        let params = JSON.parse(request.requestBody);
        let email = params.email;
        let password = params.password;

        if (email === "test@test.com" && password === "test") {
          return { success: true };
        }
        return { success: false };
      });
      this.post("/user/create-account", (schema, request) => {
        let params = JSON.parse(request.requestBody);
        let email = params.email;
        let password = params.password;

        if (email === "test@test.com" && password === "test") {
          return { success: false };
        }
        return { success: true };
      });
      this.get("/user/get-user-info", (schema, request) => {
        let params = JSON.parse(request.requestBody);
        let email = params.email;
        let secureId = params.secureId;
        if (email === "test@test.com" && secureId === "123abc") {
          return { success: true };
        }
        return { success: false };
      });
    },
  });
}
