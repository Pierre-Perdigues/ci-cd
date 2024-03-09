// Fichier de connection à la bdd

const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'db', // Il faut mettre ici le nom du service docker
  user: 'user', 
  database: 'monapp',
  password: 'password',
});

async function connect() {
  try {
    const connection = await pool.getConnection();
    console.log("Connected to the MySQL database.");
    connection.release(); // Libérer la connexion dès que possible.
  } catch (error) {
    console.error('Failed to connect to the MySQL database:', error);
    setTimeout(connect, 5000); // Tentative de reconnexion après 5 secondes.
  }
}

module.exports = { connect };
