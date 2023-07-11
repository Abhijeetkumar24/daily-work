const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
const app = express();

app.use(express.json());


const uploadRouter = require('./routes/upload');
const mergeRouter = require('./routes/merge');
const readRouter = require('./routes/read');

app.use('/upload', uploadRouter);
app.use('/merge', mergeRouter);
app.use('/read', readRouter);

// Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000, () => {
  console.log('Server started on port 3000');
});


// swagger url:   http://localhost:3000/api-docs 