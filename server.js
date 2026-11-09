import express from "express";
import dotenv from "dotenv"

import connectDB from "./config/db.js";

import enrollmentRoutes from "./routes/enrollmentRoutes.js"

import studentRoutes from "./routes/studentRoutes.js"

import subjectRoutes from "./routes/subjectRoutes.js"

import teacherRoutes from "./routes/teacherRoutes.js"

dotenv.config()

const app = express();
const PORT = 8700

app.use(express.json());

app.use("/enrollments", enrollmentRoutes)

app.use("/students", studentRoutes)

app.use("/subjects", subjectRoutes)

app.use("/teachers", teacherRoutes)

const startServer = async () => {
    try {
        await connectDB()
        app.listen(PORT, () => {
    console.log("O servidor está rodando na porta: ", PORT)

});
    } catch (error) {
        console.log("Erro ao iniciar o servidor:", error.message)
    };
};

startServer();