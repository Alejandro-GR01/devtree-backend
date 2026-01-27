import User from "../models/User";
import type { Request, Response } from "express";
import { hashPassword } from "../utils/auth";

export const createAcount = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const userExist = await User.findOne({ email });

  if (userExist) {
    const error = new Error("Usuario ya registrado");
    return res.status(409).json({ error: error.message });
  }

  const user = new User(req.body);
  const hash = await hashPassword(password);
  console.log(password, hash);
  user.password = hash;
  await user.save();

  // res.json({message:'Registro creado exitosamente'})
  res.status(201).send("Registro creado exitosamente");
};
