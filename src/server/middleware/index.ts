import { Request, Response, Express } from 'express';

export function status404(app: Express) {
    app.use(function (req: Request, res: Response, next) {
        res.status(404);
        res.render('404');
    });
}