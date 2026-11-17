import Enrollment from "../models/Enrollment.js";
import enrollmentService from "../services/enrollmentService.js";

const createEnrollment = async (req, res, next) => {
  const enrollment = await enrollmentService.createEnrollment(req.body);

  res.status(201).json({
    message: "Inscrição criada com sucesso",
    data: enrollment,
  });
};

const getAllEnrollments = async (req, res, next) => {
  try {
    const enrollment = await enrollmentService.getAllEnrollments();

    res.status(200).json({
      message: "Todas as Inscrições criadas",
      data: enrollment,
    });
  } catch (error) {
    next(error);
  }
};

const getEnrollmentsById = async (req, res, next) => {
  try {
    const enrollment = await enrollmentService.getEnrollmentsById(
      req.params.id,
    );
    res.status(200).json({
      message: "Inscrição encontrada com sucesso :",
      data: enrollment,
    });
  } catch (error) {
    next(error);
  }
};

const getEnrollmentsByStudentId = async (req, res, next) => {
  try {
    const enrollment = await enrollmentService.getEnrollmentsByStudentId(
      req.params.studentId,
    );
    res.status(200).json({
      message: "StudentId encontrado com sucesso :",
      data: enrollment,
    });
  } catch (error) {
    next(error);
  }
};

const getEnrollmentsBySubjectId = async (req, res, next) => {
  try {
    const enrollment = await enrollmentService.getEnrollmentsBySubjectId(
      req.params.subjectId,
    );

    res.status(200).json({
      message: "SubjectId encontrado com sucesso :",
      data: enrollment,
    });
  } catch (error) {
    next(error);
  }
};

const getEnrollmentByStatus = async (req, res, next) => {
  try {
    const enrollment = await enrollmentService.getEnrollmentByStatus(
      req.params.status,
    );

    res.status(200).json({
      message: "Inscrições com o devido status procurado: ",
      data: enrollment,
    });
  } catch (error) {
    next(error);
  }
};

const countEnrollments = async (req, res, next) => {
  try {
    const enrollment = await enrollmentService.countEnrollments();

    res.status(200).json({
      message: "quantidade de inscrições já criadas:",
      data: enrollment,
    });
  } catch (error) {
    next(error);
  }
};

const updadeteGrade = async (req, res, next) => {
  try {
    const enrollment = await enrollmentService.updadeteGrade(
      req.params.id,
      req.body,
    );
    res.status(200).json({
      message: "Nota final da Inscrição atualizada com sucesso.",
      data: enrollment,
    });
  } catch (error) {
    next(error);
  }
};

const updateEnrollmentsStatus = async (req, res, next) => {
  try {
    const enrollment = await enrollmentService.updateEnrollmentsStatus(
      req.params.id,
      req.body,
    );
    res.status(200).json({
      message: "Status da Inscrição atualizada com sucesso.",
      data: enrollment,
    });
  } catch (error) {
    next(error);
  }
};

const deleteEnrollment = async (req, res, next) => {
  try {
    const enrollment = await enrollmentService.deleteEnrollment(
      req.params.id,
      req.body,
    );
    res.status(200).json({
      message: "Inscrição excluida com sucesso.",
      data: enrollment,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  createEnrollment,
  getAllEnrollments,
  getEnrollmentsById,
  getEnrollmentsByStudentId,
  getEnrollmentsBySubjectId,
  getEnrollmentByStatus,
  countEnrollments,
  updadeteGrade,
  updateEnrollmentsStatus,
  deleteEnrollment,
};
