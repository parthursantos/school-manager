import Enrollment from "../models/Enrollment.js";
import Student from "../models/Student.js"
import Subject from "../models/Subject.js"
 
const createEnrollment = async (data) => {
    const { subjectId, studentId, status, notaFinal } = data

    const studentExist = await Student.findOne({ _id: studentId })

    const subjectExist = await Subject.findOne({ _id: subjectId })

    console.log(studentExist)

    if (!studentExist || studentExist.ativo === false) {
        const error = new Error("O Estudante precisa existir, ou estar ativo!")
        error.statusCode = 400
        throw error
    }

    if (!subjectExist || subjectExist.ativo === false) {
        const error = new Error("A disciplina precisa existir e estar ativa!")
        error.statusCode = 400
        throw error
    }

    // if (subject) {
    //     const error = new Error("Esse id de subject já foi utilizado")
    //     error.statusCode = 400
    //     throw error
    // }

    const student = await Enrollment.findOne({studentId})

     if (student) {
        const error = new Error("Esse id de estudante já foi utilizado")
        error.statusCode = 400
        throw error
    }

    const enrollment = await Enrollment.create({
        studentId,
        subjectId,
        status,
        notaFinal
    })

        return {
        _id: enrollment._id,
        studentId: enrollment.studentId,
        subjectId: enrollment.subjectId,
        status: enrollment.status,
        notaFinal: enrollment.notaFinal,
        createdAt: enrollment.createdAt,
        updatedAt: enrollment.updatedAt
    }
}

const getAllEnrollments = async () => {
    return Enrollment.find()
}

const getEnrollmentsById = async (id) => {
    const enrollment = await Enrollment.findById(id)

    if (!enrollment) {
    const error = new Error("enrollment id dont finded");
    error.statusCode = 400;
    throw error;
  }
}

export default {
    createEnrollment,
    getAllEnrollments,
    getEnrollmentsById,
}