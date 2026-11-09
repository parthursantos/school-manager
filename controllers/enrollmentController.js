import Enrollment from "../models/Enrollment.js"
import enrollmentService from "../services/enrollmentService.js"

const createEnrollment = async (req, res, next) => {
    const enrollment = await Enrollment.createEnrollment(req.body)

    res.status(201).json({
        message: "Inscrição criada com sucesso",
        data: user,
    })
}

const getAllEnrollments = async (req, res, next) => {
    try {
        const enrollment = await enrollmentService.getAllEnrollments()

        res.status(200).json({
        message: "Inscrição criada com sucesso",
        data: user,
    })
    } catch (error) {
        next(error)
    }
}

export default {
    createEnrollment,
    getAllEnrollments,
}