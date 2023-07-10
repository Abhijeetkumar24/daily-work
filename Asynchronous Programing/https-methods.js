const express = require('express');
const app = express();


let users = [
  { id: 1, name: 'Abhijeet' },
  { id: 2, name: 'Shivam' },
];


app.get('/users', (req, res) => {
  res.json(users);
});


app.post('/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(newUser);
  res.json(newUser);
});


app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedUser = req.body;

  users = users.map(user => {
    if (user.id === userId) {
      return { ...user, ...updatedUser };
    }
    return user;
  });

  res.json(users.find(user => user.id === userId));
});


app.patch('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedFields = req.body;

  users = users.map(user => {
    if (user.id === userId) {
      return { ...user, ...updatedFields };
    }
    return user;
  });

  res.json(users.find(user => user.id === userId));
});


app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter(user => user.id !== userId);
  res.sendStatus(204);
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
