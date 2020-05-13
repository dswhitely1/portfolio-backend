import {Request, Response} from 'express';
import {sendMail} from "./providers/SendGridProvider";


export default [
    {
        path: '/api/mail',
        method: 'post',
        handler: async (req: Request, res: Response) => {
            const response = await sendMail(req.body);
            const code = response[0].statusCode ? response[0].statusCode : response.code ? response.code : 500;
            res.status(code).send(response)
        }
    }
]
