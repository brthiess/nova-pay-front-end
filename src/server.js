import { createServer } from "miragejs";

export default function () {
  createServer({
    routes() {
      this.post("/user/sign-in", {
        success: true,
      });
    },
  });
}
