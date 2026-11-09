import Teacher from "../models/Teacher.js";

const createTeacher = async (data) => {
  const { nome, email, idade, especialidade, telefone } = data;

  if (!nome || !email || !idade || !especialidade || !telefone) {
    const error = new Error("All fields are required");
    error.statuscode = 400;
    throw error;
  }

  const teacherExists = await Teacher.findOne({ telefone });

  if (teacherExists) {
    const error = new Error("This phone number is already in use.");
    error.statusCode = 400;
    throw error;
  }

  const teacher = await Teacher.create({
    nome,
    email,
    idade,
    especialidade,
    telefone,
  });

  return {
    _id: teacher._id,
    nome: teacher.nome,
    email: teacher.email,
    idade: teacher.idade,
    especialidade: teacher.especialidade,
    telefone: teacher.telefone,
    createdAt: teacher.createdAt,
    updatedAt: teacher.updatedAt,
  };

  return teacher;
};

const getAllTeachers = async () => {
  return Teacher.find();
};

const getTeacherById = async (id) => {
  const teacher = await Teacher.findById(id);

  if (!teacher) {
    const error = new Error("teacher not finded, Try again with another id");
    error.statusCode = 404;
    throw error;
  }

  return teacher;
};

const getTeacherActive = async () => {
  const teacher = await Teacher.find({ ativo: true });

  if (!teacher) {
    const error = new Error("teacher actives not finded, try again later");
    error.statusCode = 404;
    throw error;
  }

  return teacher;
};

const getTeacherBySpecialty = async (especialidade) => {
  const teacher = await Teacher.find({ especialidade });

  if (!teacher) {
    const error = new Error("teacher not finded, try again later");
    error.statusCode = 404;
    throw error;
  }

  return teacher;
};

const countTeachers = async () => {
  return Teacher.countDocuments();
};

const updateTeacher = async (id, data) => {
  const { nome, email, idade, especialidade, telefone } = data;
  const teacher = await Teacher.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

  if (!teacher) {
    const error = new Error("Dont finded teacher with this id");
    error.statusCode = 404;
    throw error;
  }
  return teacher;
};

const updateTeacherStatus = async (id, data) => {
  const { ativo } = data;
  const teacher = await Teacher.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

  if (!teacher) {
    const error = new Error("Dont finded teacher with this id");
    error.statusCode = 404;
    throw error;
  }
  return teacher;
}

const deleteTeacher = async (id, data) => {
  const { nome, email, idade, especialidade, telefone } = data;
  const teacher = await Teacher.findByIdAndDelete(id, data, {
    new: true,
    runValidators: true,
  });

  if (!teacher) {
    const error = new Error("Dont finded teacher with this id");
    error.statusCode = 404;
    throw error;
  }
  return teacher;
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
