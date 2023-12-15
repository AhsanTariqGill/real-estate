import exress from 'express';
import { signin, signup } from '../controller/auth.controller.js';

const authRouter = exress.Router();

authRouter.post('/signup', signup);
authRouter.post('/signin', signin);

export default authRouter;
