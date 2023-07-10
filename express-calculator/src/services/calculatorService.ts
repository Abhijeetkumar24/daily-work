
import { Calculation } from '../models/calculation';

class CalculatorService {
  public performCalculation(calculation: Calculation): number {
    const { num1, num2, operator } = calculation;

    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num1 / num2;
      default:
        throw new Error('Invalid operator');
    }
  }
}

export default CalculatorService;
