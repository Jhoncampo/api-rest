import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { RequestExt } from "../interfaces/req-ext";

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || "";

    const jwt = jwtByUser.split(" ").pop();

    const isUser = verifyToken(`${jwt}`) as {id: string} ;

    if (!isUser) {
      res.status(401);
      res.send("No tienes un jwt valido");
    } else {
      req.user = isUser
      console.log( isUser );

      next();
    }
  } catch (error) {
    console.log({error})
    res.status(400);
    res.send("USUARIO_NO_VALIDO");
  }
};

export { checkJwt };
