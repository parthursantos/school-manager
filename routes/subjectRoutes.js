import express from "express";

import authMiddleware from "../middlewares/authMiddleware.js";

import adminMiddleware from "../middlewares/adminMiddleware.js";

import subjectController from "../controllers/subjectController.js";

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  adminMiddleware,
  subjectController.createSubject,
);

router.get("/", authMiddleware, subjectController.getAllSubjects);

router.get("/:id/d", authMiddleware, subjectController.getSubjectById);

router.get(
  "/teacher/:teacherId",
  authMiddleware,
  adminMiddleware,
  subjectController.getTeacherSubjects,
);

router.get(
  "/active/c",
  authMiddleware,
  adminMiddleware,
  subjectController.getActivesSubjects,
);

router.get(
  "/:hours/s",
  authMiddleware,
  adminMiddleware,
  subjectController.getHours,
);

router.put("/:id/subjects", authMiddleware, subjectController.updateSubjects);

router.patch(
  "/:id/status",
  authMiddleware,
  adminMiddleware,
  subjectController.updateSubjectsStatus,
);

router.delete(
  "/:id/delete",
  authMiddleware,
  adminMiddleware,
  subjectController.deleteSubjects,
);

export default router;
