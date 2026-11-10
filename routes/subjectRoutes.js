import express from "express"
import subjectController from "../controllers/subjectController.js"

const router = express.Router()

router.post("/", subjectController.createSubject)

router.get("/", subjectController.getAllSubjects)

router.get("/:id/d", subjectController.getSubjectById)

router.get("/teacher/:teacherId", subjectController.getTeacherSubjects)

router.get("/active/c", subjectController.getActivesSubjects)

router.get("/:hours/s", subjectController.getHours)

router.put("/:id/subjects", subjectController.updateSubjects)

router.patch("/:id/status", subjectController.updateSubjectsStatus)

router.delete("/:id/delete", subjectController.deleteSubjects)

export default router;