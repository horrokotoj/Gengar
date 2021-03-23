import mysql.connector
from DBInterface import *
from mysql.connector import errorcode 
from connect import cursor

DB_NAME = 'storeDB'

TABLES = {}

TABLES['products'] = (
    "CREATE TABLE products ("
    " product_id INT(11) NOT NULL,"
    " product_code VARCHAR(4) NOT NULL,"
    " quantity INT(11) NOT NULL,"
    " price DECIMAL(12,2) NOT NULL,"
    " PRIMARY KEY (product_id)"
    " )"
)

TABLES['suppliers'] = (
    "CREATE TABLE suppliers ("
    " supplier_id INT(11) NOT NULL,"
    " supplier_name VARCHAR(25) NOT NULL,"
    " phone INT(10) NOT NULL,"
    " PRIMARY KEY (supplier_id)"
    " )"
)

TABLES['productSuppliers'] = (
    "CREATE TABLE productSuppliers ("
    " product_id INT(11) NOT NULL,"
    " supplier_id INT(11) NOT NULL,"
    " PRIMARY KEY (product_id),"
    " FOREIGN KEY(product_id) REFERENCES products(product_id),"
    " FOREIGN KEY(supplier_id) REFERENCES suppliers(supplier_id)"
    " )"
)

TABLES['orders'] = (
    "CREATE TABLE orders ("
    " order_id INT(11) NOT NULL,"
    " product_id INT(11) NOT NULL,"
    " quantity INT(11) NOT NULL,"
    " FOREIGN KEY (product_id) REFERENCES products(product_id)"
    " )"
)

def create_database():
    cursor.execute(
        f"CREATE DATABASE IF NOT EXISTS {DB_NAME} DEFAULT CHARACTER SET 'utf8'")
    print(f"-------------Database {DB_NAME} created!-------------")


def create_tables():
    cursor.execute("USE {}".format(DB_NAME))

    for table_name in TABLES:
        table_description = TABLES[table_name]
        try:
            print(f"-------------Creating table ({table_name})---------------")
            cursor.execute(table_description)
        except mysql.connector.Error as err:
            if err.errno == errorcode.ER_TABLE_EXISTS_ERROR:
                print(f"Table {table_name} already exists")
            else:
                print(err.msg)

def fill_tables():
    cursor.execute(f"USE {DB_NAME}")

    print("-------------Creating 4 products-------------")
    create_product(1, 'ABC1', 10, 100.00)
    create_product(2, 'ABC2', 10, 99.99)
    create_product(3, 'ABC3', 10, 1000000.00)
    create_product(4, 'ABC4', 10, 0.99)
    
    print("------------Creating 3 suppliers-------------")    
    create_supplier(1, 'Elgiganten', 707070)
    create_supplier(2, 'MediaMarkt', 1601710)
    create_supplier(3, 'Teknikmagasinet', 11111111)

    print("------------Connecting 4 suppliers with products-------------")    
    create_productSupplier(1, 1)
    create_productSupplier(2, 2)
    create_productSupplier(3, 3)
    create_productSupplier(4, 3)

    print("------------Creating 4 orders-------------")        
    create_order(1, 1, 1)
    create_order(2, 2, 1)
    create_order(3, 3, 1)
    create_order(3, 4, 2)


create_database()
create_tables()
fill_tables()