
import { Router } from 'express';
import CalculatorController from '../controllers/calculatorController';
import InputTypeValidationMiddleware  from '../middlewares/inputTypeValidationMiddleware';

const router = Router();
const calculatorController = new CalculatorController();
const inputTypeValidationMiddleware = new InputTypeValidationMiddleware();


router.post('/calculate', inputTypeValidationMiddleware.validateInput, calculatorController.calculate);

export default router;
