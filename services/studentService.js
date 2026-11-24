import Student from "../models/Student.js";

const createStudent = async (data) => {
  const { nome, email, userId, password, idade, matricula } = data;

  if (!nome || !email || !idade || !matricula || !password) {
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
      userId,
      password: hashPassword,
      role: "student",
      ativo: "true",
    });
  
    try {
      const student = await Student.create({
        userId: user._id,
        idade,
        matricula,
        ativo: true,
      });
  
      return Student.findById(student._id)
  
      .populate("userId","nome email role")
  
    } catch (error) {
      await User.findByIdAndDelete(user._id)
      throw error
    }
  
};

const getAllStudents = async () => {
  return Student.find()
  .populate("userId")
};

const getStudentsById = async (id) => {
  const student = await Student.findById(id)
  .populate("userId","nome email")

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
  })
  .populate("userId","nome email")

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
  const student = await Student.find({ nome })
  .populate("userId","nome email")

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
