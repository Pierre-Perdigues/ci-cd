const express = require('express');
const cors = require('cors');
const db = require('./database');
const app = express();
const prenomRoutes = require("./prenom/route-prenom")
const citationRoutes = require('./citation/route-citation');

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.json({ message: 'Hello from the backend' });
});
app.use('/prenom', prenomRoutes);
app.use('/citation', citationRoutes);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
