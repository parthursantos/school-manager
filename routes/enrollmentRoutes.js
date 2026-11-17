import express from "express";
import enrollmentController from "../controllers/enrollmentController.js";

const router = express.Router();

router.post("/", enrollmentController.createEnrollment);

router.get("/", enrollmentController.getAllEnrollments);

router.get("/:id", enrollmentController.getEnrollmentsById);

router.get(
  "/students/:studentId",
  enrollmentController.getEnrollmentsByStudentId,
);

router.get(
  "/subjects/:subjectId",
  enrollmentController.getEnrollmentsBySubjectId,
);

router.get("/status/:status", enrollmentController.getEnrollmentByStatus);

router.get("//count", enrollmentController.countEnrollments);

router.patch("/:id/grade", enrollmentController.updadeteGrade)

router.patch("/:id/status", enrollmentController.updateEnrollmentsStatus)

router.delete("/:id/delete", enrollmentController.deleteEnrollment)

export default router;
