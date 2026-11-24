import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      require: true,
      trim: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      require: true,
      select: false,
    },
    telefone: {
        type: String,
        trim: true,
    },
    role: {
      type: String,
      enum: ["student", "teacher", "admin"],
      default: "student",
    },
    ativo: {
      type: Boolean,
      default: true,
    },
  },
  {
    collection: "users",
    timestamps: true,
  },
);

export default mongoose.model("User", UserSchema);
