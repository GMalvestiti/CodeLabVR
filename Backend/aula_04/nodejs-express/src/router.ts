import express, { Request, Response } from "express";
import { findAll } from "./usuario/usuario.service";

export const router = express.Router();

router.route("/usuario").get(async (req: Request, res: Response) => {
    res.send(await findAll());
})