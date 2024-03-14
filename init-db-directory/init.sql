CREATE DATABASE IF NOT EXISTS monapp;
USE monapp;

CREATE TABLE IF NOT EXISTS prenom (
  idprenom INT AUTO_INCREMENT PRIMARY KEY,
  valeurPrenom VARCHAR(255) NOT NULL
);

INSERT INTO prenom (valeurPrenom) VALUES ('Pierre');
INSERT INTO prenom (valeurPrenom) VALUES ('Paul');
INSERT INTO prenom (valeurPrenom) VALUES ('Jack');
