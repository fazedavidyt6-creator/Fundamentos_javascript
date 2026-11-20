CREATE DATABASE ecommerce;
USE ecommerce;

CREATE TABLE usuarios (
 -- atributo tipo_dato longitud_dato
	id_usuario INT PRIMARY KEY auto_increment,
	nombre_usuario VARCHAR (20),
    apellidos_usuarios VARCHAR (20),
    fecha_naciomiento_usuario DATE,
    email VARCHAR (100),
    clave VARCHAR (255)
);
-- insertar un solo usuario
INSERT INTO usuarios (nombre_usuario, apellidos_usuarios, email, clave)
VALUES ("Leonardo","Dcaprio","leonito@gmail.com","Dcaprio123");

-- insertar varios usuarios a la vez
INSERT INTO usuarios (nombre_usuario, apellidos_usuarios, email, clave)
VALUES 
("Margarita","piegrande","elpiemasgrande@gmail.com","margarita123"),
("testiment","faze","fazetestiment@gmail.com","faze123"),
("dj","mario","djmario@gmail.com","djmario123"),
("auron","play","auronplay@gmail.com","auron123"),
("leonel","messi","leomessi@gmail.com","lacabra123");

select * from usuarios;