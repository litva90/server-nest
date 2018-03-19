
import { Middleware, NestMiddleware, ExpressMiddleware, Req } from '@nestjs/common';
import {Request,Response,NextFunction} from "express";

// @Middleware()
// export class LoggerMiddleware implements NestMiddleware {
// 	async resolve(name: string): Promise<ExpressMiddleware> {
// 		return (req, res, next) => {
// 			console.log('Request..., with ', name);
// 			next();
// 		};
// 	}
// }

export const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
	console.log(`Request at time: ${(new Date()).toLocaleString()} and params: ${JSON.stringify(req.params)}`);
	next();
}