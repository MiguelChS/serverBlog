import { Router, Request, Response } from 'express';
import { getDataPost } from './service/service.page';
import { join } from 'path';

const path = join(__dirname, '../../../public/index.html');

export function routerPage(router: Router) {

    router.get(new RegExp(/^\/(?!api)/), (req: Request, res: Response) => {
        res.status(200).sendFile(path);
    })
}