import Teacher from "../models/Teacher.js";
import User from "../models/User.js";
import userService from "./userService.js";

const createTeacher = async (data) => {
  const { nome, email, password, idade, especialidade, telefone } = data;

  if (!nome || !email || !idade || !especialidade || !telefone || !password) {
    const error = new Error("All fields are required");
    error.statuscode = 400;
    throw error;
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    const error = new Error("O email ja foi utilizado");
    error.statusCode = 400;
    throw error;
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    nome,
    email,
    password: hashPassword,
    telefone,
    role: "teacher",
    ativo: "true",
  });

  try {
    const teacher = await Teacher.create({
      userId: user._id,
      idade,
      especialidade,
      ativo: true,
    });

    return Teacher.findById(teacher._id)

    .populate("userId","nome email telefone role")

  } catch (error) {
    await User.findByIdAndDelete(user._id)
    throw error
  }
};

const getAllTeachers = async () => {
  return Teacher.find()
  .populate("userId")
};

const getTeacherById = async (id) => {
  const teacher = await Teacher.findById(id)
  .populate("userId", "nome email")

  if (!teacher) {
    const error = new Error("teacher not finded, Try again with another id");
    error.statusCode = 404;
    throw error;
  }

  return teacher;
};

const getTeacherActive = async () => {
  const teacher = await Teacher.find({ ativo: true })
    .populate("userId", "nome email")

  if (!teacher) {
    const error = new Error("teacher actives not finded, try again later");
    error.statusCode = 404;
    throw error;
  }

  return teacher;
};

const getTeacherBySpecialty = async (especialidade) => {
  const teacher = await Teacher.find({ especialidade })
  .populate("userId", "nome email")

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
};

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
};

export default {
  createTeacher,
  getAllTeachers,
  getTeacherById,
  getTeacherActive,
  getTeacherBySpecialty,
  countTeachers,
  updateTeacher,
  updateTeacherStatus,
  deleteTeacher,
};
