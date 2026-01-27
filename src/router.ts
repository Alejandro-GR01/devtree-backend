import { Router } from "express";
import { createAcount } from "./handlers";

const router : Router = Router()


/* Authentication and Registration */
router.post('/auth/register', createAcount
)

export default router;