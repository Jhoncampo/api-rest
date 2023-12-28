import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { insertOrder } from "../services/order";
import { RequestExt } from "../interfaces/req-ext";



const getOrders = (req: RequestExt, res: Response) =>{
    try {
        res.send({
            data: "Esto solo lo ven las persona con jwt",
            user: req.user
        })
    } catch (error) {
        handleHttp(res, "ERROR_GET_ORDERS")
    }
}

const postOrder = async ({body}: Request, res:Response)=>{
    try {
        const response = await insertOrder(body)
        res.send(response)
    } catch (error) {
        handleHttp(res, "ERROR_POST_ORDER")
    }
}

export {
    getOrders, postOrder
}