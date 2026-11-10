import Subject from "../models/Subject.js";
import Teacher from "../models/Teacher.js";

const createSubject = async (data) => {
  const { nome, codigo, cargaHoraria, teacherId } = data;

  if (!nome || !codigo || !cargaHoraria || !teacherId) {
    const error = new Error("All fields are required");
    error.statuscode = 400;
    throw error;
  }

  const subjectExists = await Subject.findOne({ codigo });

  if (subjectExists) {
    const error = new Error("This code is already in use.");
    error.statusCode = 400;
    throw error;
  }

  const teacher = await Teacher.findById(teacherId);

  if (!teacher) {
    const error = new Error("teacher Id its mandatory");
    error.statusCode = 400;
    throw error;
  }

  const subject = await Subject.create({
    teacherId,
    nome,
    codigo,
    cargaHoraria,
  });

  return {
    _id: subject._id,
    teacherId: subject.teacherId,
    nome: subject.nome,
    codigo: subject.codigo,
    cargaHoraria: subject.cargaHoraria,
    createdAt: subject.createdAt,
    updatedAt: subject.updatedAt,
  };

  return subject;
};

const getAllSubjects = async () => {
  return Subject.find();
};

const getSubjectById = async (id) => {
  const subject = await Subject.findById(id);

  if (!subject) {
    const error = new Error("Subjetct id dont finded");
    error.statusCode = 400;
    throw error;
  }

  return subject;
};

const getTeacherSubjects = async (teacherId) => {
  const subject = await Subject.findOne({
    teacherId,
  });

  if (!subject) {
    const error = new Error("Teacher id dont finded");
    error.statusCode = 400;
    throw error;
  }

  return subject;
};

const getActivesSubjects = async () => {
  const subject = await Subject.find({ ativo: true });

  if (!subject) {
    const error = new Error("Teacher active dont finded");
    error.statusCode = 400;
    throw error;
  }

  return subject;
};

const getHours = async (cargaHoraria) => {
  const subject = await Subject.find({ cargaHoraria });

  if (!subject) {
    const error = new Error("Teacher dont finded");
    error.statusCode = 400;
    throw error;
  }

  return subject;
};

const updateSubjects = async (id, data) => {
  const { nome, codigo, cargaHoraria, teacherId } = data;

  const subject = await Subject.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

  if (!subject) {
    const error = new Error("subject id dont finded");
    error.statusCode = 400;
    throw error;
  }

  return subject;
};

const updateSubjectsStatus = async (id, data) => {
  const { ativo } = data;

  const subject = await Subject.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

  if (!subject) {
    const error = new Error("subject id dont finded");
    error.statusCode = 400;
    throw error;
  }

  return subject;
};

const deleteSubjects = async (id, data) => {
  const { nome, codigo, cargaHoraria, teacherId } = data;

  const subject = await Subject.findByIdAndDelete(id, data, {
    new: true,
    runValidators: true,
  });

  if (!subject) {
    const error = new Error("subject id dont finded");
    error.statusCode = 400;
    throw error;
  }

  return subject;
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
