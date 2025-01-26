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
('Alice', 'alice.smith@example.com', 25),
('Bob', 'bob.johnson@example.com', 30),
('Carlos', 'carlos.martinez@example.com', 28),
('David', 'david.lee@example.com', 32),
('Emma', 'emma.white@example.com', 27),
('Fiona', 'fiona.brown@example.com', 29),
('George', 'george.clark@example.com', 31),
('Hannah', 'hannah.davis@example.com', 26),
('Isabella', 'isabella.evans@example.com', 24),
('Jack', 'jack.taylor@example.com', 33),
('Katherine', 'katherine.morris@example.com', 30),
('Liam', 'liam.roberts@example.com', 28),
('Megan', 'megan.carter@example.com', 25),
('Nathan', 'nathan.harris@example.com', 34),
('Olivia', 'olivia.walker@example.com', 29),
('Paul', 'paul.young@example.com', 36),
('Rachel', 'rachel.king@example.com', 27);