import Subject from "../models/Subject.js";
import subjectService from "../services/subjectService.js";

const createSubject = async (req, res, next) => {
  try {
    const subject = await subjectService.createSubject(req.body);

    res.status(201).json({
      message: "subject successfully created",
      data: subject,
    });
  } catch (error) {
    next(error);
  }
};

const getAllSubjects = async (req, res, next) => {
  try {
    const subject = await subjectService.getAllSubjects();

    res.status(200).json({
      message: "All subject created:",
      data: subject,
    });
  } catch (error) {
    next(error);
  }
};

const getSubjectById = async (req, res, next) => {
  try {
    const subject = await subjectService.getSubjectById(req.params.id);

    res.status(200).json({
      message: "Subject finded:",
      data: subject,
    });
  } catch (error) {
    next(error);
  }
};

const getTeacherSubjects = async (req, res, next) => {
  try {
    const subject = await subjectService.getTeacherSubjects(
      req.params.teacherId,
    );

    res.status(200).json({
      message: "Teacher subject finded:",
      data: subject,
    });
  } catch (error) {
    next(error);
  }
};

const getActivesSubjects = async (req, res, nexy) => {
  try {
    const subject = await subjectService.getActivesSubjects();

    res.status(200).json({
      message: "Teacher actives finded:",
      data: subject,
    });
  } catch (error) {
    next(error);
  }
};

const getHours = async (req, res, next) => {
  try {
    const subject = await subjectService.getHours(req.params.hours);
    res.status(200).json({
      message: "Teachers finded:",
      data: subject,
    });
  } catch (error) {
    next(error);
  }
};

const updateSubjects = async (req, res, next) => {
  try {
    const subject = await subjectService.updateSubjects(
      req.params.id,
      req.body,
    );
    res.status(200).json({
      message: "Professor successfully updated:",
      data: subject,
    });
  } catch (error) {
    next(error);
  }
};

const updateSubjectsStatus = async (req, res, next) => {
  try {
    const subject = await subjectService.updateSubjectsStatus(
      req.params.id,
      req.body,
    );
    res.status(200).json({
      message: "Professor status successfully updated:",
      data: subject,
    });
  } catch (error) {
    next(error);
  }
};

const deleteSubjects = async (req, res, next) => {
  try {
    const subject = await subjectService.deleteSubjects(
      req.params.id,
      req.body,
    );
    res.status(200).json({
      message: "Professor deleted successfully updated:",
      data: subject,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  createSubject,
  getAllSubjects,
  getSubjectById,
  getTeacherSubjects,
  getActivesSubjects,
  getHours,
  updateSubjects,
  updateSubjectsStatus,
  deleteSubjects
};
