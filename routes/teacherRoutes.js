
import express, { Router } from "express"
import teacherController from "../controllers/teacherController.js"

const router = express.Router()

router.post("/", teacherController.createTeacher)

router.get("/", teacherController.getAllTeachers)

router.get("/:id", teacherController.getTeacherById)

router.get("/active/teachers", teacherController.getTeacherActive)

router.get("/:specialty/teachers", teacherController.getTeacherBySpecialty)

router.get("/count/teachers/c", teacherController.countTeachers)

router.put("/:id", teacherController.updateTeacher)

router.patch("/:id/status", teacherController.updateTeacherStatus)

router.delete("/:id/delete", teacherController.deleteTeacher)

export default router;