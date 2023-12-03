import exress from 'express';
import { signup } from '../controller/auth.controller.js';

const authRouter = exress.Router();

authRouter.post('/signup', signup)

export default authRouter;
