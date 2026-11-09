import mongoose from "mongoose";

const TeacherSchema = new mongoose.Schema(
    {
        nome: {
            type: "String",
            required: true,
            trim: true
        },
        email: {
            type: "String",
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        idade: {
            type: Number,
            required: true,
            trim: true
        },

        especialidade: {
            type: String,
            required: true,
            trim: true
        },

        telefone: {
            type: String,
            unique: true,
            trim: true
        },

        ativo: {
            type: Boolean,
            default: true,
            trim: true
        },
    },
    {
        collection: "enrollments",
        timestamps: true
    }
)

export default mongoose.model("Teacher", TeacherSchema)