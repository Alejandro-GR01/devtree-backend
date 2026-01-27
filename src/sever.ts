// const express = require("express")  // ComonJS
import express from "express";
import type { Express } from "express";
import router from "./router";
import dotenv from "dotenv";
import { connectDB } from "./config/db";


dotenv.config();

const app : Express = express();
connectDB();

//leer datos de formulario
app.use(express.json());


app.use('/', router)


export default app;
