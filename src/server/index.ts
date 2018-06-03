import * as express from "express";
import * as bodyParser from "body-parser";
import { routers } from "./router/index";
import { join } from "path";
import { status404 } from "./middleware/index";
import { connect } from "mongoose";

const app: express.Express = express();
const db = process.env.DB || "mongodb://mongo/posts-escuelita";
console.log("DATABASE URL: ", db);

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.text());
//bundle
app.use("/dist", express.static(join(__dirname, "..", "..", "dist/client")));
app.use("/", express.static(join(__dirname, "..", "..", "public")));
app.use(
  "/bootstrap",
  express.static(join(__dirname, "..", "..", "node_modules/bootstrap/dist"))
);
app.use(
  "/font-awesome",
  express.static(join(__dirname, "..", "..", "node_modules/font-awesome"))
);

app.use("/", routers());

app.listen(process.env.PORT || 8080, () => {
  console.log("render en puerto ", process.env.PORT || 8080);
});
