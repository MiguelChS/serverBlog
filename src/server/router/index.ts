import { Router, Request, Response } from 'express';
import { routerApi } from './router.api';
import { routerPage } from './router.page';


export const routers = (): Router => {
    let router = Router();
    routerApi(router);
    routerPage(router);
    return router;
}