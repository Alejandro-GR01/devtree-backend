import User from "../models/User";
import type { Request, Response } from "express";
import slug from "slug";
import { checkPassword, hashPassword } from "../utils/auth";
import { validationResult } from "express-validator";

export const createAcount = async (req: Request, res: Response) => {


  const { email, password } = req.body;

  const userExist = await User.findOne({ email });

  if (userExist) {
    const error = new Error("Usuario con ese email ya registrado");
    return res.status(409).json({ error: error.message });
  }

  const handle = slug(req.body.handle, "");
  const handleExist = await User.findOne({ handle });

  if (handleExist) {
    const error = new Error("Nombre de usuario no disponible");
    return res.status(409).json({ error: error.message });
  }

  const user = new User(req.body);
  user.password = await hashPassword(password);
  user.handle = handle;

  await user.save();

  // res.json({message:'Registro creado exitosamente'})
  res.status(201).send("Registro creado exitosamente");
};

export const login = async (req: Request, res: Response) => {

  const { email, password } = req.body;

  const user = await User.findOne({ email });
  //revisr si el usuario esta registrado
  if(!user){
    const error = new Error('El usuario no existe');
    return res.status(404).json({error: error.message})
    
  }

  //comprobar el password
  const isPasswordCorrect = await checkPassword(password, user.password)

  if(!isPasswordCorrect){
    const error = new Error('Password incorrecto');
    return res.status(401).json({error: error.message})
  }
  res.send('Autenticado...')
}


