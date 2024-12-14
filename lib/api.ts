import { Platforms, PlatformName, Platform } from './platforms'
import config from '../config'
import { Database } from './database'
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

type ExtensionInstance = {
    extensionId: string
    pseudorank: Number
}

export default class RestyAPI {
    private restapi;
    private restport: Number
    constructor() {
        this.restapi = express();
        this.restport = 42069;
    }
    init = async () => {
        /*
        Rest API Specs
        /api/v1/version
        /api/v1/extension/instance/new
        /api/v1/extension/instance/update/:id
        /api/v1/extension/instance/getinfo/:id
        */
        const extpoint:string = '/api/v1/extension';
        const instpoint:string = '/api/v1/extension/instance';

        this.restapi.get('/api/v1/version', (req: Request, res: Response) => {
            res.json({"version": "v1"});
        });

        this.restapi.get(`${instpoint}/getinfo/:id`, (req: Request, res: Response) => {
            let pullExtension:ExtensionInstance = null;

            res.json(pullExtension);
        });

        this.restapi.post(`${instpoint}/new`, (req: Request, res: Response) => {
            /* Verify integrity of the request, generate new ids and wallet information as well as profile rank, return 200 OK with instance information. */
            let newExtension:ExtensionInstance = {
                extensionId: req.params.id,
                pseudorank: 0
            };
            res.json(newExtension);
        });

        this.restapi.put(`${instpoint}/update/:id`, (req: Request, res: Response) => {
            /* Verify integrity of the request, verify the instance that is being updated is from the right id, then update instance, rank, etc. */
            let updateExtension:ExtensionInstance = {
                extensionId: req.params.id,
                pseudorank: 1
            };
            res.json(updateExtension);
        });
        
        this.restapi.listen(this.restport, ()=>{console.log(`Rest API is listening on ${this.restport}`)});
        
    }
}