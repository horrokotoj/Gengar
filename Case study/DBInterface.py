import argparse
from connect import cursor, db


##############################################
#                   CREATE                   #
##############################################

#sql_statement = "INSERT INTO codespeedy (category,duration,level) values(%s,%s,%s)"
#values = ("Python","100 Hours","Advanced")
#my_database.execute(sql_statement,values)

def create_product(product_id, product_code, quantity, price):
    sql = f"INSERT INTO products (product_id, product_code, quantity, price) VALUES \
        ({product_id}, '{product_code}', {quantity}, {price});"
    cursor.execute(sql)
    db.commit()
    print("Created new product")

def create_supplier(supplier_id, supplier_name, phone):
    sql = f"INSERT INTO suppliers (supplier_id, supplier_name, phone) VALUES \
        ({supplier_id}, '{supplier_name}', {phone});"
    cursor.execute(sql)
    db.commit()
    print("Created new supplier")

def create_productSupplier(product_id, supplier_id):
    sql = f"INSERT INTO productSuppliers (product_id, supplier_id) VALUES \
        ({product_id}, {supplier_id});"
    cursor.execute(sql)
    db.commit()
    product_id = cursor.lastrowid
    print("Created new product-supplier connection")

def create_order(order_id, product_id, quantity):
    sql = f"INSERT INTO orders(order_id, product_id, quantity) VALUES \
        ({order_id}, {product_id}, {quantity});"
    cursor.execute(sql)
    db.commit()
    order_id = cursor.lastrowid
    print("Created new order")


##############################################
#                   READ                     #
##############################################

def read_table(table):
    sql = f"SELECT * FROM {table};"
    cursor.execute(sql)
    output = cursor.fetchall()
    for x in output:
        print(x)

def read_product(product_id):
    sql = f"SELECT * FROM products WHERE product_id = {product_id};"
    cursor.execute(sql)
    output = cursor.fetchall()
    for x in output:
        print(x)

def read_supplier(supplier_id):
    sql = f"SELECT * FROM suppliers WHERE supplier_id = {supplier_id};"
    cursor.execute(sql)
    output = cursor.fetchall()
    for x in output:
        print(x)

def read_productSupplier(product_id):
    sql = f"SELECT * FROM suppliers WHERE product_id = {product_id};"
    cursor.execute(sql)
    output = cursor.fetchall()
    for x in output:
        print(x)

def read_order(order_id):
    sql = f"SELECT * FROM suppliers WHERE order_id = {order_id};"
    cursor.execute(sql)
    output = cursor.fetchall()
    for x in output:
        print(x)

    
##############################################
#                 UPDATE                     #
##############################################

def update_product_product_code(product_id, product_code):
    sql = f"UPDATE products SET product_code = '{product_code}' where product_id = {product_id}"
    cursor.execute(sql)
    db.commit()

def update_product_quantity(product_id, quantity):
    sql = f"UPDATE products SET quantity = {quantity} where product_id = {product_id};"
    cursor.execute(sql)
    db.commit()

def update_product_price(product_id, price):
    sql = f"UPDATE products SET price = {price} where product_id = {product_id};"
    cursor.execute(sql)
    db.commit()


def update_supplier_name(supplier_id, supplier_name):
    sql = f"UPDATE suppliers SET supplier_name = {supplier_name} where supplier_id = {supplier_id};"
    cursor.execute(sql)
    db.commit()


def update_supplier_phone(supplier_id, phone):
    sql = f"UPDATE suppliers SET phone = {phone} where supplier_id = {supplier_id};"
    cursor.execute(sql)
    db.commit()

    
def update_productSupplier_supplier_id(product_id, supplier_id):
    sql = f"UPDATE productSuppliers SET supplier_id = {supplier_id} where product_id = {product_id};"
    cursor.execute(sql)
    db.commit()


def update_productSupplier_supplier_id(product_id, supplier_id):
    sql = f"UPDATE productSuppliers SET supplier_id = {supplier_id} where product_id = {product_id};"
    cursor.execute(sql)
    db.commit()


def update_order_order_id(order_id_old, order_id_new):
    sql = f"UPDATE orders SET order_id = {order_id_new} where order_id = {order_id_old};"
    cursor.execute(sql)
    db.commit()


def update_order_product_id(order_id, product_id_old, product_id_new):
    sql = f"UPDATE orders SET product_id = {product_id_new} where order_id = {order_id} AND product_id = {product_id_old};"
    cursor.execute(sql)
    db.commit()


def update_order_quantity(order_id, product_id, quantity):
    sql = f"UPDATE orders SET quantity = {quantity} where order_id = {order_id} AND product_id = {product_id};"
    cursor.execute(sql)
    db.commit()



##############################################
#                 DELETE                     #
##############################################

def delete_product(product_id):
    sql = f"DELETE FROM products WHERE product_id = {product_id};" 
    cursor.execute(sql)
    db.commit()


def delete_supplier(supplier_id):
    sql = f"DELETE FROM suppliers WHERE supplier_id = {supplier_id};"
    cursor.execute(sql)
    db.commit()


def delete_productSupplier(product_id):
    sql = f"DELETE FROM productSuppliers WHERE product_id = {product_id};"
    cursor.execute(sql)
    db.commit()


def delete_order(order_id):
    sql = f"DELETE FROM orders WHERE order_id = {order_id};" 
    cursor.execute(sql)
    db.commit()
