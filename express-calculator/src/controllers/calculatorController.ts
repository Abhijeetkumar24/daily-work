
import { Request, Response } from 'express';
import { Calculation } from '../models/calculation';
import CalculatorService from '../services/calculatorService';
import Joi from 'joi';

const calculationSchema = Joi.object({
  num1: Joi.number().required(),
  num2: Joi.number().required(),
  operator: Joi.string().valid('+', '-', '*', '/').required()
});

class CalculatorController {
  public calculate(req: Request, res: Response): void {
    const { error, value } = calculationSchema.validate(req.body);

    if (error) {
      res.status(400).json({ error: error.details[0].message });
      return;
    }

    const { num1, num2, operator } = value as Calculation;

    try {
      const calculatorService = new CalculatorService();
      const result = calculatorService.performCalculation({ num1, num2, operator });
      res.status(200).json({ result });
    } catch (error) {
      res.status(400).json({ error: 'Invalid operator' });
    }
  }
}

export default CalculatorController;
