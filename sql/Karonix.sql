
DROP DATABASE IF EXISTS `karonix`;
CREATE DATABASE `karonix` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `karonix`;


-- Tabla: usuarios
-- Guardará usuarios registrados (clientes y admins)
CREATE TABLE `usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `email` VARCHAR(150) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `rol` ENUM('usuario','admin') NOT NULL DEFAULT 'usuario',
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ux_usuarios_email` (`email`),
  KEY `idx_usuarios_created_at` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla: contactos
-- Mensajes enviados desde formulario de contacto
CREATE TABLE `contactos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `email` VARCHAR(150) NOT NULL,
  `telefono` VARCHAR(30) DEFAULT NULL,
  `mensaje` TEXT NOT NULL,
  `leido` TINYINT(1) NOT NULL DEFAULT 0, -- 0 = no leído, 1 = leído
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_contactos_created_at` (`created_at`),
  KEY `idx_contactos_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- Tabla: reservas
-- Reservas vinculadas a usuarios registrados
CREATE TABLE `reservas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `usuario_id` INT NOT NULL,
  `recurso` VARCHAR(150) NOT NULL,
  `fecha` DATE NOT NULL,
  `hora` TIME NOT NULL,
  `observaciones` VARCHAR(255) DEFAULT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_reservas_usuario` (`usuario_id`),
  KEY `idx_reservas_fecha` (`fecha`),
  CONSTRAINT `fk_reservas_usuario` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


INSERT INTO `usuarios` (`nombre`, `email`, `password`, `rol`)
VALUES
  ('Administrador Karonix', 'admin@karonix.com', SHA2('Admin2025!', 256), 'admin'),
  ('Cliente Demo', 'cliente@ejemplo.com', SHA2('Cliente123!', 256), 'usuario');

INSERT INTO `contactos` (`nombre`, `email`, `telefono`, `mensaje`, `leido`)
VALUES
  ('María Pérez', 'maria@ejemplo.com', '+51900000000', 'Interesada en paquete branding. Favor contactar.', 0),
  ('Carlos Ruiz', 'carlos@ejemplo.com', NULL, 'Consulta sobre diseño web responsive.', 0);

-- Ejemplo de reserva 
INSERT INTO `reservas` (`usuario_id`, `recurso`, `fecha`, `hora`, `observaciones`)
VALUES
  (2, 'Clase de Yoga - Sala A', CURDATE() + INTERVAL 3 DAY, '18:00:00', 'Prefiere instructor mujer');


DROP VIEW IF EXISTS `v_ultimos_contactos`;
CREATE VIEW `v_ultimos_contactos` AS
SELECT id, nombre, email, telefono, LEFT(mensaje, 200) AS preview, leido, created_at
FROM contactos
ORDER BY created_at DESC;

