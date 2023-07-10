const express = require('express');
const app = express();

app.use(express.json());


app.use('/upload', require('./routes/upload'));
app.use('/merge', require('./routes/merge'));
app.use('/read', require('./routes/read'));

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

