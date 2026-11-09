import Teacher from "../models/Teacher.js";
import teacherService from "../services/teacherService.js";

const createTeacher = async (req, res, next) => {
  try {
    const teacher = await teacherService.createTeacher(req.body);

    res.status(201).json({
      message: "Teacher registration successfully created",
      data: teacher,
    });
  } catch (error) {
    next(error);
  }
};

const getAllTeachers = async (req, res, next) => {
  try {
    const teacher = await teacherService.getAllTeachers();

    res.status(200).json({
      message: "All registred teachers:",
      data: teacher,
    });
  } catch (error) {
    next(error);
  }
};

const getTeacherById = async (req, res, next) => {
  try {
    const teacher = await teacherService.getTeacherById(req.params.id);

    res.status(200).json({
      message: "Teacher founded:",
      data: teacher,
    });
  } catch (error) {
    next(error);
  }
};

const getTeacherActive = async (req, res, next) => {
  try {
    const teacher = await teacherService.getTeacherActive();

    res.status(200).json({
      message: "Teacher actives:",
      data: teacher,
    });
  } catch (error) {
    next(error);
  }
};

const getTeacherBySpecialty = async (req, res, next) => {
  try {
    const teacher = await teacherService.getTeacherBySpecialty(
      req.params.specialty,
    );

    res.status(200).json({
      message: "Teacher with this specialty:",
      data: teacher,
    });
  } catch (error) {
    next(error);
  }
};

const countTeachers = async (req, res, next) => {
  try {
    const total = await teacherService.countTeachers();

    res.status(200).json({
      message: "number of registered teachers:",
      total,
    });
  } catch (error) {
    next(error);
  }
};

const updateTeacher = async (req, res, next) => {
  try {
    const teacher = await teacherService.updateTeacher(req.params.id, req.body);
    res.status(200).json({
      message: "Teacher profile updated successfully:",
      data: teacher,
    });
  } catch (error) {
    next(error);
  }
};

const updateTeacherStatus = async (req, res, next) => {
  try {
    const teacher = await teacherService.updateTeacherStatus(
      req.params.id,
      req.body,
    );
    res.status(200).json({
      message: "Teacher status updated successfully:",
      data: teacher,
    });
  } catch (error) {
    next(error);
  }
};

const deleteTeacher = async (req,res,next) => {
  try {
    const teacher = await teacherService.deleteTeacher(
      req.params.id,
      req.body,
    );
    res.status(200).json({
      message: "Teacher deleted successfully:",
      data: teacher,
    });
  } catch (error) {
    next(error);
}
}
export default {
  createTeacher,
  getAllTeachers,
  getTeacherById,
  getTeacherActive,
  getTeacherBySpecialty,
  countTeachers,
  updateTeacher,
  updateTeacherStatus,
  deleteTeacher
};
