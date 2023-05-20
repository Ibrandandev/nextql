CREATE TABLE IF NOT EXISTS `products` (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT(400) NOT NULL,
  price DECIMAL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);