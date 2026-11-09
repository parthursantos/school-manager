import Student from "../models/Student.js"
import studentService from "../services/studentService.js"


const createStudent = async (req, res, next) => {
    try {
        const student = await studentService.createStudent(req.body)

        res.status(201).json({
        message: "Student registration successfully created",
        data: student,
    })
    } catch (error) {
        next(error)
    }
}

const getAllStudents = async (req, res, next) => {
    try {
        const student = await studentService.getAllStudents()

        res.status(200).json({
        message: "All registrated students:",
        data: student,
    })
    } catch(error) {
        next(error)
    }
}

const getStudentsById = async (req, res, next) => {
    try {
        const student = await studentService.getStudentsById(req.params.id)

        res.status(200).json({
        message: "Student successfully found:",
        data: student,
        })
    } catch (error) {
        next(error)
    }
}

const getStudentsActive = async (req, res, next) => {
    try {
        const student = await studentService.getStudentsActive()

        res.status(200).json({
        message: "All actives students: ",
        data: student,
        })
    } catch (error) {
        next(error)
    }
}

const getStudentByName = async (req, res, next) => {
    try {
        const student = await studentService.getStudentByName(req.params.name)

        res.status(200).json({
        message: "All Students with this name: ",
        data: student,
        })
    } catch (error) {
        next(error)
    }
}

const countStudent = async (req, res, next) => {
    try {
        const total = await studentService.countStudent()

        res.status(200).json({
        message: "All Students registred: ",
        total,
        })
    } catch (error) {
        next(error)
    }
}

const updateStudent = async (req, res, next) => {
    try {
        const student = await studentService.updateStudent(req.params.id, req.body)

        res.status(200).json({
        message: "Sucefull in update your registred: ",
        data: student,
        })
    } catch (error) {
        next(error)
    }
}

const updateStatus = async (req, res, next) => {
    try {
        const student = await studentService.updateStatus(req.params.id, req.body)

        res.status(200).json({
        message: "Sucefull in update your status: ",
        data: student,
        })
    } catch (error) {
        next(error)
    }
}

const deleteStudent = async (req, res, next) => {
    try {
        const student = await studentService.deleteStudent(req.params.id, req.body)

        res.status(200).json({
        message: "Sucefull in delete your status: ",
        data: student,
        })
    } catch (error) {
        next(error)
    }
}

export default {
 createStudent,
 getAllStudents,
 getStudentsById,
 getStudentsActive,
 getStudentByName,
 countStudent,
 updateStudent,
 updateStatus,
 deleteStudent
}