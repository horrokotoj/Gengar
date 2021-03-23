import argparse
from connect import cursor, db

def create_product(product_id, product_code, quantity, price):
    sql = ("INSERT INTO products(product_id, product_code, quantity, price) VALUES (%d, %s, %d, %12.2f)")
    cursor.execute(sql, (product_id, product_code, quantity, price))
    db.commit()
    product_id = cursor.lastrowid
    print("Added log {}".format(product_id))
    

def create_supplier(supplier_id, name_t, phone):
    sql = ("INSERT INTO suppliers(supplier_id, name_t, phone) VALUES (%d, %s, %d)")
    cursor.execute(sql, (supplier_id, name_t, phone))
    db.commit()
    supplier_id = cursor.lastrowid
    print("Added log {}".format(supplier_id))

def create_productSupplier(product_id, supplier_id):
    sql = ("INSERT INTO productSuppliers(product_id, supplier_id) VALUES (%d, %d)")
    cursor.execute(sql, (product_id, supplier_id))
    db.commit()
    productSupplier_id = cursor.lastrowid
    print("Added log {}".format(productSupplier_id))

def create_order(order_id, product_id, quantity):
    sql = ("INSERT INTO orders(order_id, product_id, quantity) VALUES (%d, %d, %d)")
    cursor.execute(sql, (order_id, product_id, quantity))
    db.commit()
    order_id = cursor.lastrowid
    print("Added log {}".format(order_id))