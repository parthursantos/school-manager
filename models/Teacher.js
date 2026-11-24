import mongoose from "mongoose";

const TeacherSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            require: true,
            unique: true
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

        ativo: {
            type: Boolean,
            default: true,
            trim: true
        },
    },
    {
        collection: "teachers",
        timestamps: true
    }
)

export default mongoose.model("Teacher", TeacherSchema)