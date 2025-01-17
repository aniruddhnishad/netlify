import express, { Router } from 'express';

import serverless from 'serverless-http';

import cors from "cors";

import ApiController from './ApiController';

const apiController = new ApiController()

const api = express();

api.use(cors());

const router = Router();

router.get('/', (req, res) => res.json({error: false, data: 'home!'}));

router.get('/test', apiController.test);

router.get('/hello', (req, res) => res.json('Hello World!'));

api.use('/', router);

export const handler = serverless(api);
