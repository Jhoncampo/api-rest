import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { registerUpload } from "../services/upload";
import { RequestExt } from "../interfaces/req-ext";
import { Storage } from "../interfaces/storage";


const getFile = async (req: RequestExt, res: Response) =>{
    try {
        const {user, file} = req
        const dataRegister: Storage = {
            fileName: `${file?.filename}`,
            idUser: `${user?.id}`,
            path: `${file?.path}`
        }
        const response = await registerUpload(dataRegister)
        res.send(response)
    } catch (error) {
        handleHttp(res, "ERROR_GET_FILE")
    }
}

export {
    getFile
}