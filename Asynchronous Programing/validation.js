const express = require('express');
const app = express();
const Joi = require('joi');

let users = [
  { id: 1, name: 'Abhijeet', email: 'abhijeet@example.com' },
  { id: 2, name: 'Rahul', email: 'rahul@example.com' },
];

// Middleware to parse JSON request body
app.use(express.json());

// Validation schema using Joi
const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
});

// POST request to add a new user
app.post('/users', (req, res) => {
  const { error, value } = userSchema.validate(req.body);

  if (error) {
    // Validation failed
    res.status(400).json({ error: error.details[0].message });
  } else {
    // Validation passed
    const newUser = {
      id: users.length + 1,
      name: value.name,
      email: value.email,
    };
    users.push(newUser);
    res.json(newUser);
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
