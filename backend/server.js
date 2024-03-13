const app = require('./app'); // Importez l'instance app depuis app.js

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
