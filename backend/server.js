const express = require('express');
const cors = require('cors');
const db = require('./database');
const app = express();
const prenomRoutes = require("./prenom/route-prenom")

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Connect to MySQL database
db.connect();

app.get('/', (req, res) => {
  res.json({ message: 'Hello from the backend' });
});
app.use('/prenom', prenomRoutes);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
