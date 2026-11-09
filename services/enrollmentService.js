import Enrollment from "../models/Enrollment.js";


const createEnrollment = async (data) => {
    const { dataMatricula, status, notaFinal } = data

    if (!dataMatricula) {
        const error = new Error("A data da matrícula é obrigatória")
        error.statuscode = 400
        throw error
    }

    const enrollmentExists = await Enrollment.findOne({ dataMatricula })

    if (enrollmentExists) {
        const error = new Error("A data da matrícula já foi utilizada")
        error.statusCode = 400
        throw error
    }

    const enrollment = await Enrollment.create({
        dataMatricula,
        status,
        notaFinal
    })

        return {
        _id: enrollment._id,
        dataMatricula: enrollment.dataMatricula,
        status: enrollment.status,
        notaFinal: enrollment.notaFinal,
        createdAt: enrollment.createdAt,
        updatedAt: enrollment.updatedAt
    }
}

const getAllEnrollments = async () => {
    return Enrollment.find()
}

export default {
    createEnrollment,
    getAllEnrollments,
}