import e from "express";
import Enrollment from "../models/Enrollment.js";
import Student from "../models/Student.js";
import Subject from "../models/Subject.js";

const createEnrollment = async (data) => {
  const { subjectId, studentId, status, notaFinal } = data;

  const studentExist = await Student.findOne({ _id: studentId });

  const subjectExist = await Subject.findOne({ _id: subjectId });

  console.log(studentExist);

  if (!studentExist || studentExist.ativo === false) {
    const error = new Error("O Estudante precisa existir, ou estar ativo!");
    error.statusCode = 400;
    throw error;
  }

  if (!subjectExist || subjectExist.ativo === false) {
    const error = new Error("A disciplina precisa existir e estar ativa!");
    error.statusCode = 400;
    throw error;
  }

  const student = await Enrollment.findOne({
    studentId,
    subjectId,
  });

  if (student) {
    const error = new Error(
      "Esse id de estudante já foi utilizado nessa matéria",
    );
    error.statusCode = 400;
    throw error;
  }

  const enrollment = await Enrollment.create({
    studentId,
    subjectId,
    status,
    notaFinal,
  });

  return {
    _id: enrollment._id,
    studentId: enrollment.studentId,
    subjectId: enrollment.subjectId,
    status: enrollment.status,
    notaFinal: enrollment.notaFinal,
    createdAt: enrollment.createdAt,
    updatedAt: enrollment.updatedAt,
  };
};

const getAllEnrollments = async () => {
  return Enrollment.find().populate("studentId").populate("subjectId");
};

const getEnrollmentsById = async (id) => {
  const enrollment = await Enrollment.findById(id);

  if (!enrollment) {
    const error = new Error("enrollment id dont finded");
    error.statusCode = 400;
    throw error;
  }
  return enrollment;
};

const getEnrollmentsByStudentId = async (studentId) => {
  const enrollment = await Enrollment.findOne({ studentId });
  if (!enrollment) {
    const error = new Error(" studentId dont finded");
    error.statusCode = 400;
    throw error;
  }
  return enrollment;
};

const getEnrollmentsBySubjectId = async (subjectId) => {
  const enrollment = await Enrollment.findOne({ subjectId });
  if (!enrollment) {
    const error = new Error(" subjectId dont finded");
    error.statusCode = 400;
    throw error;
  }
  return enrollment;
};

const getEnrollmentByStatus = async (status) => {
  const enrollment = await Enrollment.findOne({
    status: status,
  });

  if (!enrollment) {
    const error = new Error("Inscrição não encontrado");
    error.statusCode = 404;
    throw error;
  }

  return enrollment;
};

const countEnrollments = async () => {
  return Enrollment.countDocuments();
};

const updadeteGrade = async (id, data) => {
  const { notaFinal } = data;

  const enrollment = await Enrollment.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

  if (!enrollment) {
    const error = new Error("Inscrição não encontrado");
    error.statusCode = 404;
    throw error;
  }

  return enrollment;
};

const updateEnrollmentsStatus = async (id, data) => {
  const { status } = data;

  const enrollment = await Enrollment.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

  if (!enrollment) {
    const error = new Error("Inscrição não encontrado");
    error.statusCode = 404;
    throw error;
  }

  return enrollment;
};

const deleteEnrollment = async (id, data) => {
  const { studentId, subjectId, status, notaFinal } = data;

  const enrollment = Enrollment.findByIdAndDelete(id, data, {
    new: true,
    runValidators: true,
  });
  if (!enrollment) {
    const error = new Error("Inscrição não encontrado");
    error.statusCode = 404;
    throw error;
  }

  return enrollment;
};

const getStudentHistory = async (studentId) => {
  const enrollment = await Enrollment.findOne({ studentId });
  if (!enrollment) {
    const error = new Error("Inscrição não encontrado");
    error.statusCode = 404;
    throw error;
  }

  return enrollment;
};

const countSubjectsByStudent = async (subjectId) => {
  return Enrollment.countDocuments()
}

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
  getStudentHistory,
  countSubjectsByStudent
};
