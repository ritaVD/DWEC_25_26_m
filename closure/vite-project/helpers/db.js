import sqlite3 from "sqlite3";

const db= new sqlite3.Database("cart.db");

// Crear tablas
db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, price REAL)");
  db.run("CREATE TABLE IF NOT EXISTS cart_items (id INTEGER PRIMARY KEY AUTOINCREMENT, product_id INTEGER, quantity INTEGER)");
});

// Datos de prueba
db.serialize(() => {
  db.run("DELETE FROM products");
  db.run("INSERT INTO products (name, price) VALUES ('Manzana', 0.5)");
  db.run("INSERT INTO products (name, price) VALUES ('Leche', 1.2)");
  db.run("INSERT INTO products (name, price) VALUES ('Pan', 0.9)");
});

export default db;