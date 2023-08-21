import express from "express";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import cors from "cors";
import { appRouter } from "./routers";
export * from "./routers";

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));

app.use("/trpc", createExpressMiddleware({ router: appRouter, createContext: () => ({}) }));

app.listen(4000, () => {
  console.log("listening on port 4000");
});
