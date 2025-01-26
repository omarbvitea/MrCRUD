CREATE DATABASE IF NOT EXISTS mrcashDBtest;
USE mrcashDBtest;

DROP TABLE IF EXISTS usuarios;

CREATE TABLE IF NOT EXISTS usuarios (
 id INT AUTO_INCREMENT PRIMARY KEY,
 nombre VARCHAR(100) NOT NULL,
 correo VARCHAR(100) NOT NULL UNIQUE,
 edad INT
);

INSERT INTO usuarios (nombre, correo, edad) VALUES
('Alice', 'alice@example.com', 25),
('Bob', 'bob@example.com', 30),
('Bob', 'bob2@example.com', 30),
('Bob', 'bob3@example.com', 30),
('Bob', 'bob4@example.com', 30),
('Bob', 'bob5@example.com', 30),
('Bob', 'bob6@example.com', 30),
('Bob', 'bob7@example.com', 30),
('Bob', 'bob8@example.com', 30),
('Bob', 'bob9@example.com', 30),
('Bob', 'bob10@example.com', 30),
('Bob', 'bob11@example.com', 30),
('Bob', 'bob23@example.com', 30),
('Bob', 'bob42@example.com', 30),
('Bob', 'bdobs@example.com', 30),
('Bob', 'bdob@example.com', 30),
('Bob', 'bobfsd@example.com', 30),
('Bob', 'bodsb@example.com', 30),
('Bob', 'bsfob@example.com', 30),
('Charlie', 'charlie@example.com', 35);