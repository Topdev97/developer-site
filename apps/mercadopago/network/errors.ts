import {Request,Response,NextFunction,ErrorRequestHandler} from 'express'
import {error} from './response'

function errors(err:any, req:Request, res:Response, next:NextFunction) {
    console.error('[error]', err);

    const message = err.message || 'Error interno';
    const status = err.statusCode || 500;

    error(req, res, message, status);
}

export {
    errors
}
