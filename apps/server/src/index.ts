import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import cors from "cors";
import { appRouter } from "./routers";
import { connect } from "./database/databaseConfiguration";
export * from "./routers";

const app = express();

const startApplication = async () => {
  await connect();

  app.use(cors({ origin: "http://localhost:3000" }));

  app.use("/trpc", createExpressMiddleware({ router: appRouter, createContext: () => ({}) }));

  app.use("*", (req: Request, res: Response, _next: NextFunction) => {
    return res.status(404).send({
      title: "Page Not Found",
      type: "Client Error",
      details: `Page: ${req.originalUrl}`,
    });
  });

  app.use("*", (e: any, req: Request, res: Response, next: NextFunction) => {
    console.log("Global Error = ", e);
  });

  app.listen(4000, () => {
    console.log("listening on port 4000");
  });
};

startApplication()
  .then(() => {
    console.log("application started");
  })
  .catch((e) => {
    console.log(`application failed to start - ${e}`);
  });
