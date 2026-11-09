import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
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

        matricula: {
            type: String,
            required: true,
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
        collection: "students",
        timestamps: true
    }
)

export default mongoose.model("Student", StudentSchema)