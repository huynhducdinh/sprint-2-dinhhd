CREATE DATABASE fruit_shop;
USE fruit_shop;


CREATE TABLE roles(
id BIGINT PRIMARY KEY AUTO_INCREMENT,
role_name VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE users(
id BIGINT PRIMARY KEY AUTO_INCREMENT,
user_name VARCHAR(50) UNIQUE NOT NULL,
pass TEXT NOT NULL,
role_id BIGINT NOT NULL,FOREIGN KEY(role_id) REFERENCES roles(id)
);

CREATE TABLE product_type(
id BIGINT PRIMARY KEY AUTO_INCREMENT,
name_type VARCHAR(50)NOT NULL);

CREATE TABLE supplier(
id BIGINT PRIMARY KEY AUTO_INCREMENT,
name_supplier VARCHAR(50) NOT NULL,
address VARCHAR(100) NOT NULL,
phone_number VARCHAR(10) NOT NULL  UNIQUE 
);

CREATE TABLE product_fruit(
id BIGINT PRIMARY KEY AUTO_INCREMENT,
name_fruit VARCHAR(50) NOT NULL,
price BIGINT NOT NULL,
is_delete BIT DEFAULT 0,
start_day DATETIME NOT NULL,
end_day DATETIME NOT NULL,
note TEXT,
image MEDIUMTEXT,
quantity INT,
create_date DATETIME DEFAULT CURRENT_TIMESTAMP,
update_date DATETIME DEFAULT CURRENT_TIMESTAMP,
id_type BIGINT NOT NULL,
FOREIGN KEY (id_type) REFERENCES product_type(id),
id_supplier BIGINT NOT NULL,
FOREIGN KEY (id_supplier) REFERENCES supplier(id)
);

CREATE TABLE customers(
id BIGINT AUTO_INCREMENT PRIMARY KEY,
name_customer VARCHAR(50) NOT NULL,
birthday VARCHAR(255) NOT NULL,
gender int not null,
phone_number VARCHAR(10) NOT NULL  UNIQUE ,
email VARCHAR(50) NOT NULL UNIQUE,
address VARCHAR(50) NOT NULL,
is_delete BIT DEFAULT 0,
create_date DATETIME DEFAULT CURRENT_TIMESTAMP,
update_date DATETIME
);

CREATE TABLE orders(
id BIGINT AUTO_INCREMENT PRIMARY KEY,
total_price BIGINT,
code_orders VARCHAR(10) NOT NULL,
id_customers BIGINT NOT NULL,
FOREIGN KEY (id_customers)REFERENCES customers(id),
create_date DATETIME DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE orders_detail(
id BIGINT AUTO_INCREMENT PRIMARY KEY,
id_product_fruit BIGINT NOT NULL,
FOREIGN KEY(id_product_fruit)REFERENCES product_fruit(id),
id_orders BIGINT NOT NULL,
FOREIGN KEY(id_orders)REFERENCES orders(id),
quantity INT,
price BIGINT,
create_date DATETIME DEFAULT CURRENT_TIMESTAMP);

SELECT * FROM orders_detail AS od
INNER JOIN orders AS o ON od.id_orders=o.id
INNER JOIN product_fruit AS p ON od.id_product_fruit=p.id;

CREATE TABLE shopping_cart(
id BIGINT AUTO_INCREMENT PRIMARY KEY,
id_customers BIGINT NOT NULL,
FOREIGN KEY (id_customers)REFERENCES customers(id),
id_product_fruit BIGINT NOT NULL,
FOREIGN KEY(id_product_fruit)REFERENCES product_fruit(id),
quantity INT,
is_delete BIT DEFAULT 0
);