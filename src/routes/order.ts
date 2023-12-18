import { Router } from "express";
import { getOrders } from "../controllers/order";
import { checkJwt } from "../middleware/session";

//Solo personas que tengan un jwt valido

const router = Router()

router.get("/", checkJwt, getOrders)

export {
    router
}