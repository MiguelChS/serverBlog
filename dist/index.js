"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router_1 = require("./router");
const app = express();
app.use('/', router_1.routers());
app.listen(5000, () => {
    console.log("render en puerto 5000");
});
//# sourceMappingURL=index.js.map