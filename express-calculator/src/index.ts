
import express from 'express';
import calculatorRoutes from './routes/calculatorRoutes';
require('dotenv').config();

const app = express();
app.use(express.json());
app.use('/', calculatorRoutes);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
