import Student from "../models/Student.js";

const createStudent = async (data) => {
  const { nome, email, idade, matricula } = data;

  if (!nome || !email || !idade || !matricula) {
    const error = new Error("All fields are required");
    error.statuscode = 400;
    throw error;
  }

  const studentExists = await Student.findOne({ matricula });

  if (studentExists) {
    const error = new Error("This registration number is already registered.");
    error.statusCode = 400;
    throw error;
  }

  const student = await Student.create({
    nome,
    email,
    idade,
    matricula,
  });

  return {
    _id: student._id,
    nome: student.nome,
    email: student.email,
    idade: student.idade,
    matricula: student.matricula,
    createdAt: student.createdAt,
    updatedAt: student.updatedAt,
  };

  return student;
};

const getAllStudents = async () => {
  return Student.find();
};

const getStudentsById = async (id) => {
  const student = await Student.findById(id);

  if (!student) {
    const error = new Error("Student not finded, Try again with another id");
    error.statusCode = 404;
    throw error;
  }

  return student;
};

const getStudentsActive = async () => {
  const student = await Student.find({
    ativo: true,
  });
  if (!student) {
    const error = new Error(
      "No active students found, please try again later.",
    );
    error.statusCode = 404;
    throw error;
  }

  return student;
};

const getStudentByName = async (nome) => {
  const student = await Student.find({ nome });

  if (!student) {
    const error = new Error("Students with this name dont finded");
    error.statusCode = 404;
    throw error;
  }
  return student;
};

const countStudent = async () => {
  return Student.countDocuments();
};

const updateStudent = async (id, data) => {
  const { nome, email, idade, matricula } = data;
  const student = await Student.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

  if (!student) {
    const error = new Error("Dont find Student with this id");
    error.statusCode = 404;
    throw error;
  }
  return student;
};

const updateStatus = async (id, data) => {
  const { ativo } = data;
  const student = await Student.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

  if (!student) {
    const error = new Error("Dont find Student with this id");
    error.statusCode = 404;
    throw error;
  }
  return student;
};

const deleteStudent = async (id) => {
  const student = await Student.findByIdAndDelete(id, {
    new: true,
    runValidators: true,
  });

  if (!student) {
    const error = new Error("Dont find Student with this id");
    error.statusCode = 404;
    throw error;
  }
  return student;
};

export default {
  createStudent,
  getAllStudents,
  getStudentsById,
  getStudentsActive,
  getStudentByName,
  countStudent,
  updateStudent,
  updateStatus,
  deleteStudent,
};
