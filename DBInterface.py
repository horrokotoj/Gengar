import argparse
from connect import cursor, db

##############################################
#                   CREATE                   #
##############################################
def create_product(product_id, product_code, quantity, price):
    sql = ("INSERT INTO products(product_id, product_code, quantity, price) VALUES (%d, %s, %d, %12.2f)")
    cursor.execute(sql, (product_id, product_code, quantity, price))
    db.commit()
    product_id = cursor.lastrowid
    print("Created new product with product_id: {}".format(product_id))

def create_supplier(supplier_id, supplier_name, phone):
    sql = ("INSERT INTO suppliers(supplier_id, supplier_name, phone) VALUES (%d, %s, %d)")
    cursor.execute(sql, (supplier_id, supplier_name, phone))
    db.commit()
    supplier_id = cursor.lastrowid
    print("Created new supplier with supplier_id: {}".format(supplier_id))

def create_productSupplier(product_id, supplier_id):
    sql = ("INSERT INTO productSuppliers(product_id, supplier_id) VALUES (%d, %d)")
    cursor.execute(sql, (product_id, supplier_id))
    db.commit()
    product_id = cursor.lastrowid
    print("Created new product-supplier connection for product_id: {}".format(product_id))

def create_order(order_id, product_id, quantity):
    sql = ("INSERT INTO orders(order_id, product_id, quantity) VALUES (%d, %d, %d)")
    cursor.execute(sql, (order_id, product_id, quantity))
    db.commit()
    order_id = cursor.lastrowid
    print("Created new order with product_id: {}".format(order_id))


##############################################
#                   READ                     #
##############################################

def read_table(table):
    sql = ("SELECT * FROM %s;" % table)
    cursor.execute(sql)
    output = cursor.fetchall()
    for x in output:
        print(x)

def read_product(product_id):
    sql = ("SELECT * FROM products WHERE product_id = %d;" % product_id)
    cursor.execute(sql)
    output = cursor.fetchall()
    for x in output:
        print(x)

def read_supplier(supplier_id):
    sql = ("SELECT * FROM suppliers WHERE supplier_id = %d;" % supplier_id)
    cursor.execute(sql)
    output = cursor.fetchall()
    for x in output:
        print(x)

def read_productSupplier(product_id):
    sql = ("SELECT * FROM suppliers WHERE product_id = %d;" % product_id)
    cursor.execute(sql)
    output = cursor.fetchall()
    for x in output:
        print(x)

def read_order(order_id):
    sql = ("SELECT * FROM suppliers WHERE order_id = %d;" % order_id)
    cursor.execute(sql)
    output = cursor.fetchall()
    for x in output:
        print(x)

    
##############################################
#                 UPDATE                     #
##############################################



def update_product_product_name(product_id, product_name):
    sql = ("UPDATE products SET product_name = %s where product_id = %d;" % (product_name, product_id))
    cursor.execute(sql)
    cursor.commit()

def update_product_quantity(product_id, quantity):
    sql = ("UPDATE products SET quantity = %d where product_id = %d;" % (quantity, product_id))
    cursor.execute(sql)
    cursor.commit()

def update_product_price(product_id, price):
    sql = ("UPDATE products SET price = %12.2f where product_id = %d;" % (price, product_id))
    cursor.execute(sql)
    cursor.commit()


def update_supplier_name(supplier_id, supplier_name):
    sql = ("UPDATE suppliers SET supplier_name = %s where supplier_id = %d;" %  (supplier_name, supplier_id))
    cursor.execute(sql)
    cursor.commit()

def update_supplier_phone(supplier_id, phone):
    sql = ("UPDATE suppliers SET phone = %d where supplier_id = %d;" % (phone, supplier_id))
    cursor.execute(sql)
    cursor.commit()

    
def update_productSupplier_supplier_id(product_id, supplier_id):
    sql = ("UPDATE productSuppliers SET supplier_id = %d where product_id = %d;" % (supplier_id, product_id))
    cursor.execute(sql)
    cursor.commit()

def update_productSupplier_supplier_id(product_id, supplier_id):
    sql = ("UPDATE productSuppliers SET supplier_id = %d where product_id = %d;" % (supplier_id, product_id))
    cursor.execute(sql)
    cursor.commit()

def update_order_order_id(order_id_old, order_id_new):
    sql = ("UPDATE orders SET order_id = %d where order_id = %d;" % (order_id_new, order_id_old))
    cursor.execute(sql)
    cursor.commit()

def update_order_product_id(order_id, product_id_old, product_id_new):
    sql = ("UPDATE orders SET product_id = %d where order_id = %d AND product_id = %d;" % (product_id_new, order_id, product_id_old))
    cursor.execute(sql)
    cursor.commit()

def update_order_quantity(order_id, product_id, quantity):
    sql = ("UPDATE orders SET quantity = %d where order_id = %d AND product_id = %d;" % (quantity, order_id, product_id))
    cursor.execute(sql)
    cursor.commit()

##############################################
#                 DELETE                     #
##############################################


def delete_product(product_id):
    sql = ("DELETE FROM products WHERE product_id = %d;" % product_id) 
    cursor.execute(sql)
    cursor.commit()

def delete_supplier(supplier_id):
    sql = ("DELETE FROM suppliers WHERE %d = %d;" % supplier_id)
    cursor.execute(sql)
    cursor.commit()

def delete_productSupplier(product_id):
    sql = ("DELETE FROM productSuppliers WHERE %d = %d;" % product_id)
    cursor.execute(sql)
    cursor.commit()  

def delete_order(order_id):
    sql = ("DELETE FROM orders WHERE %d = %d;" % order_id)
    cursor.execute(sql)
    cursor.commit()