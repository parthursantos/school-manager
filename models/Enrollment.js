import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const EnrollmentSchema = new mongoose.Schema(
    {
        studentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student",
            require: true
        },
        subjectId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Subject",
            require: true
        },
        dataMatricula: {
            type: Date,
            default: Date.now,
        },

        status: {
            type: String,
            enum: ["Ativa", "Concluida", "Cancelada"],
            default: "Ativa",
            trim: true
        },
        notaFinal: {
            type: Number,
            required: true,
            trim: true
        },
    },
    {
        collection: "enrollments",
        timestamps: true
    }
)

export default mongoose.model("Enrollment", EnrollmentSchema)