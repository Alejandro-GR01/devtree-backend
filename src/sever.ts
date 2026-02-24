// const express = require("express")  // ComonJS
import express from "express";
import cors from 'cors'
import type { Express } from "express";
import router from "./router";
import  "dotenv/config";
import { connectDB } from "./config/db";
import { corsConfig } from "./config/cors";



connectDB();

const app : Express = express();

//CORS
app.use(cors(corsConfig))

//leer datos de formulario
app.use(express.json());


app.use('/', router)


export default app;
