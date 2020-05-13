import express from 'express';
import {applyMiddleware, applyRoutes} from "./utils";
import middleware from './middleware';
import routes from './services';

const server = express();
applyMiddleware(middleware, server);
applyRoutes(routes, server);

const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`Server Running on Port:${port}`));
