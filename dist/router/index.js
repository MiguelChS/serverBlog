"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
exports.routers = () => {
    let router = express_1.Router();
    router.get("/", (req, res) => {
        res.send("Hola Miguel");
    });
    router.get("/api", (req, res) => {
        res.json({ nombre: "miguel" });
    });
    return router;
};
//# sourceMappingURL=index.js.map