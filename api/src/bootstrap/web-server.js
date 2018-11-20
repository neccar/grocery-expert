import http from "http";
import express from "express";
import morgan from "morgan";
import router from "../grocerylist/grocerylist.router";
import cors from "cors";

let httpServer;

export async function initializeWebServer() {
  const app = express();
  httpServer = http.createServer(app);
  app.use(morgan("combined"));
  app.use(cors());
  app.use(express.urlencoded({ extended: true }));
  app.use("/api", router);

  const apiPort = process.env.API_PORT || 4444;

  httpServer.listen(apiPort, error => {
    if (error) {
      throw error;
    }

    console.log(`Web server listening on ${apiPort} `);
  });
}

export async function closeWebServer() {
  await httpServer.close();
}
