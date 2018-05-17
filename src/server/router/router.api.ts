import { Router, Request, Response } from 'express';
import { getListPost, getDataPost, filterPostbyWords } from './service/service.api';

export function routerApi(router: Router) {

    router.get("/api/listPost/:category", async (req: Request, res: Response) => {
        try {
            let listPostJson = await getListPost(req.params.category);
            res.status(200);
            res.json(listPostJson);
        } catch (err) {
            res.status(500);
            res.json(err);
        }

    })

    router.get("/api/post/:id", async (req: Request, res: Response) => {
        try {
            let data = await getDataPost(req.params.id)
            res.status(200);
            res.json(data);
        }
        catch (err) {
            res.status(500);
            res.json(err);
        }
    })

    router.get("/api/filter/:text", async (req: Request, res: Response) => {
        try {
            let data = await filterPostbyWords(req.params.text)
            res.status(200);
            res.json(data);
        }
        catch (err) {
            res.status(500);
            res.json(err);
        }
    })
}