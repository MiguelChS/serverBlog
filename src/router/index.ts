import { Router, Request, Response } from 'express';


export const routers = (): Router => {
    let router = Router();

    router.get("/", (req: Request, res: Response) => {
        res.send("Hola Miguel");
    })

    router.get("/api", (req: Request, res: Response) => {
        res.json({nombre:"miguel"})
    })

    return router;
}