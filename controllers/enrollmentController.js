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
      message: "Inscrição criada com sucesso",
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
      message: "Inscrição criada com sucesso",
      data: enrollment,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  createEnrollment,
  getAllEnrollments,
  getEnrollmentsById
};
