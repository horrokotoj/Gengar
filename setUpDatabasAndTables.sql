DROP DATABASE IF EXISTS storeDB;
create database storeDB;

USE storeDB;

DROP TABLE IF EXISTS products;
create table products (
    product_id INT(11) AUTO_INCREMENT,
    product_code VARCHAR(4) NOT NULL,
    quantity INT(11) NOT NULL,
    price DECIMAL(12,2) NOT NULL,
    PRIMARY KEY (product_id)
);

DROP TABLE IF EXISTS suppliers;
create table suppliers (
    supplier_id INT(11) AUTO_INCREMENT,
    supplier_name VARCHAR(25) NOT NULL,
    phone INT(10) NOT NULL,
    PRIMARY KEY (supplier_id)
);

DROP TABLE IF EXISTS productSuppliers;
create table productSuppliers (
    product_id INT(11) AUTO_INCREMENT,
    supplier_id INT(11) NOT NULL,
    PRIMARY KEY (product_id),
    FOREIGN KEY(product_id) REFERENCES products(product_id),
    FOREIGN KEY(supplier_id) REFERENCES supplier(supplier_id)
);

DROP TABLE IF EXISTS orders;
create table orders (
    order_id INT(11) NOT NULL,
    product_id INT(11) NOT NULL,
    quantity INT(11) NOT NULL,
    PRIMARY KEY (order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);