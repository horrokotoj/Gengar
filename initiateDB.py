import mysql.connector
from mysql.connector import errorcode 
from connect import cursor

DB_NAME = 'storeDB'

TABLES = {}

TABLES['products'] = (
    "CREATE TABLE products ("
    " product_id INT(11) AUTO_INCREMENT,"
    " product_code VARCHAR(4) NOT NULL,"
    " quantity INT(11) NOT NULL,"
    " price DECIMAL(12,2) NOT NULL,"
    " PRIMARY KEY (product_id)"
    " )"
)

TABLES['suppliers'] = (
    "CREATE TABLE suppliers ("
    " supplier_id INT(11) AUTO_INCREMENT,"
    " name_t VARCHAR(25) NOT NULL,"
    " phone INT(10) NOT NULL,"
    " PRIMARY KEY (supplier_id)"
    " )"
)

TABLES['productSuppliers'] = (
    "CREATE TABLE productSupplier ("
    " product_id INT(11) AUTO_INCREMENT,"
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
    " PRIMARY KEY (order_id),"
    " FOREIGN KEY (product_id) REFERENCES products(product_id)"
    " )"
)

def create_database():
    cursor.execute(
        "CREATE DATABASE IF NOT EXISTS {} DEFAULT CHARACTER SET 'utf8'".format
        (DB_NAME))
    print("Database {} created!".format(DB_NAME))


def create_tables():
    cursor.execute("USE {}".format(DB_NAME))

    for table_name in TABLES:
        table_description = TABLES[table_name]
        try:
            print("Creating table ({})".format(table_name), end="")
            cursor.execute(table_description)
        except mysql.connector.Error as err:
            if err.errno == errorcode.ER_TABLE_EXISTS_ERROR:
                print("Already Exists")
            else:
                print(err.msg)



create_database()
create_tables()