import { NextFunction, Request, Response } from "express";

const logMiddleware = (req:Request, res: Response, next: NextFunction) => {
    console.log("Hola soy el middleware")
    const header = req.headers
    const userAgent = header["user-agent"]
    console.log(userAgent)
    next()
};

export { logMiddleware };
