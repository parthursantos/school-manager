import express from "express";

import authMiddleware from "../middlewares/authMiddleware.js";

import adminMiddleware from "../middlewares/adminMiddleware.js";

import studentController from "../controllers/studentController.js";

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  adminMiddleware,
  studentController.createStudent,
);

router.get(
  "/",
  authMiddleware,
  adminMiddleware,
  studentController.getAllStudents,
);

router.get("/:id", authMiddleware, studentController.getStudentsById);

router.get(
  "/active/students",
  authMiddleware,
  adminMiddleware,
  studentController.getStudentsActive,
);

router.get(
  "/:name/students",
  authMiddleware,
  adminMiddleware,
  studentController.getStudentByName,
);

router.get(
  "/count/students/count",
  authMiddleware,
  adminMiddleware,
  studentController.countStudent,
);

router.put("/:id", authMiddleware, studentController.updateStudent);

router.patch(
  "/:id/status",
  authMiddleware,
  adminMiddleware,
  studentController.updateStatus,
);

router.delete(
  "/:id",
  authMiddleware,
  adminMiddleware,
  studentController.deleteStudent,
);

export default router;
