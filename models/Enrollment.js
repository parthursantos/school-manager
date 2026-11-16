import mongoose from "mongoose";

const EnrollmentSchema = new mongoose.Schema(
    {
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