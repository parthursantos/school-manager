
import express from "express"
import studentController from "../controllers/studentController.js"

const router = express.Router()

router.post("/", studentController.createStudent)

router.get("/", studentController.getAllStudents)

router.get("/:id", studentController.getStudentsById)

router.get("/active", studentController.getStudentsActive)

router.get("/:name", studentController.getStudentByName)

router.get("/count", studentController.countStudent)

router.put("/:id", studentController.updateStudent)

router.patch("/:id", studentController.updateStatus)

router.delete("/:id", studentController.deleteStudent)

export default router;