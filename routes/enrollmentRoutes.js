import express from "express";

import authMiddleware from "../middlewares/authMiddleware.js";

import adminMiddleware from "../middlewares/adminMiddleware.js";

import enrollmentController from "../controllers/enrollmentController.js";

const router = express.Router();

router.post("/", authMiddleware, enrollmentController.createEnrollment);

router.get(
  "/",
  authMiddleware,
  adminMiddleware,
  enrollmentController.getAllEnrollments,
);

router.get("/:id", authMiddleware, enrollmentController.getEnrollmentsById);

router.get(
  "/students/:studentId",
  authMiddleware,
  enrollmentController.getEnrollmentsByStudentId,
);

router.get(
  "/subjects/:subjectId",
  authMiddleware,
  enrollmentController.getEnrollmentsBySubjectId,
);

router.get(
  "/status/:status",
  authMiddleware,
  adminMiddleware,
  enrollmentController.getEnrollmentByStatus,
);

router.get(
  "//count",
  authMiddleware,
  adminMiddleware,
  enrollmentController.countEnrollments,
);

router.patch(
  "/:id/grade",
  authMiddleware,
  adminMiddleware,
  enrollmentController.updadeteGrade,
);

router.patch(
  "/:id/status",
  authMiddleware,
  adminMiddleware,
  enrollmentController.updateEnrollmentsStatus,
);

router.delete(
  "/:id/delete",
  authMiddleware,
  adminMiddleware,
  enrollmentController.deleteEnrollment,
);

router.get(
  "/students/:studentId/history",
  authMiddleware,
  adminMiddleware,
  enrollmentController.getStudentHistory,
);

router.get(
  "/subjects/:subjectId/students/count",
  authMiddleware,
  adminMiddleware,
  enrollmentController.countSubjectsByStudent,
);

export default router;
