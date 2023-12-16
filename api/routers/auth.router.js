import exress from 'express';
import { google, signin, signup } from '../controller/auth.controller.js';

const authRouter = exress.Router();

authRouter.post('/signup', signup);
authRouter.post('/signin', signin);
authRouter.post('/google', google);

export default authRouter;
