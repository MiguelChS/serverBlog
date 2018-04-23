import { Router, Request, Response } from 'express';
import { getListPost } from './service/service.api';

export function routerApi(router: Router) {

    router.get("/api/listPost/:category", async (req: Request, res: Response) => {
        let listPostJson = await getListPost(req.params.category);
        res.status(200);
        res.json(listPostJson);
    })
}