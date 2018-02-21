import * as express from 'express';
import { routers } from './router'

const app: express.Express = express();

app.use('/',routers())

app.listen(5000, () => {
    console.log("render en puerto 5000");
})