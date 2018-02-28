import * as express from 'express';
import * as bodyParser from 'body-parser';
import { routers } from './router';

const app: express.Express = express();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.text());

app.use(express.static('public'));
 
app.use('/api', routers());

app.listen(5000, () => {
    console.log("render en puerto 5000");
})