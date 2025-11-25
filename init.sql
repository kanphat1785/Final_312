CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  price DECIMAL(10,2),
  image VARCHAR(255)
);

INSERT INTO products (name, price, image) VALUES
('Americano', 55, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYfE4fnUPGLsOY-6HVFZIXXR_8W4yT0bUKkQ&s'),
('Latte', 65, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR8Q_RrELDLpBSuhHF9CEAWgSBo9mRQtSy-g&s'),
('Cappuccino', 60, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqrb93v-Kx_YJnZANXJcRhUSCsuH3HiOfoGQ&s');
