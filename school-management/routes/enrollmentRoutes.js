
import express from "express"
import enrollmentController from "../controllers/enrollmentController.js"


const router = express.Router()

router.post(
    "/",
    enrollmentController.createEnrollment
)

router.get("/", enrollmentController.getAllEnrollments)

export default router;