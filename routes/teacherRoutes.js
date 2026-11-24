import express, { Router } from "express";

import authMiddleware from "../middlewares/authMiddleware.js";

import adminMiddleware from "../middlewares/adminMiddleware.js";

import teacherController from "../controllers/teacherController.js";

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  adminMiddleware,
  teacherController.createTeacher,
);

router.get(
  "/",
  authMiddleware,
  adminMiddleware,
  teacherController.getAllTeachers,
);

router.get("/:id", authMiddleware, teacherController.getTeacherById);

router.get(
  "/active/teachers",
  authMiddleware,
  adminMiddleware,
  teacherController.getTeacherActive,
);

router.get(
  "/:specialty/teachers",
  authMiddleware,
  adminMiddleware,
  teacherController.getTeacherBySpecialty,
);

router.get(
  "/count/teachers/c",
  authMiddleware,
  adminMiddleware,
  teacherController.countTeachers,
);

router.put("/:id", authMiddleware, teacherController.updateTeacher);

router.patch(
  "/:id/status",
  authMiddleware,
  adminMiddleware,
  teacherController.updateTeacherStatus,
);

router.delete(
  "/:id/delete",
  authMiddleware,
  adminMiddleware,
  teacherController.deleteTeacher,
);

export default router;
