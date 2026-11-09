import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const SubjectSchema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true,
            trim: true
        },
        codigo: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        cargaHoraria: {
            type: Number,
            required: true,
            trim: true
        },

        ativo: {
            type: Boolean,
            default: true,
            trim: true
        },
    },
    {
        collection: "subjects",
        timestamps: true
    }
)

export default mongoose.model("Subject", SubjectSchema)