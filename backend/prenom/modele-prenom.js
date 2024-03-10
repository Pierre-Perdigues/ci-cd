const db = require('./database');

class Prenom {
  // Create
  static async create(nom) {
    const sql = `INSERT INTO prenom (nom) VALUES (?)`;
    const [result] = await db.query(sql, [nom]);
    return result.insertId;
  }

  // Read all
  static async findAll() {
    const sql = `SELECT * FROM prenom`;
    const [rows] = await db.query(sql);
    return rows;
  }

  // Read one
  static async findById(id) {
    const sql = `SELECT * FROM prenom WHERE id = ?`;
    const [rows] = await db.query(sql, [id]);
    return rows[0];
  }

  // Update
  static async update(id, nom) {
    const sql = `UPDATE prenom SET nom = ? WHERE id = ?`;
    const [result] = await db.query(sql, [nom, id]);
    return result.affectedRows;
  }

  // Delete
  static async delete(id) {
    const sql = `DELETE FROM prenom WHERE id = ?`;
    const [result] = await db.query(sql, [id]);
    return result.affectedRows;
  }
}

module.exports = Prenom;
