from DBInterface import *
from connect import cursor, db

cursor.execute("USE storeDB;")

print("-------------Reading table products-------------")
read_table('products')
print("-------------Creating a product 5-------------")
create_product(5, "IPv4", 10, 100.00)
print("-------------Creating a product 6-------------")
create_product(6, "IME1", 10, 100.00)
print("-------------Reading table products-------------")
read_table('products')


print("-------------Reading table suppliers-------------")
read_table('suppliers')
print("-------------Creating a supplier 4-------------")
create_supplier(4, "Ullared", 701231230)
print("-------------Creating a supplier 5-------------")
create_supplier(5, "Apple", 23346457)
print("-------------Reading table suppliers-------------")
read_table('suppliers')

print("-------------Reading table productSuppliers-------------")
read_table('productSuppliers')
print("-------------Creating a productSuppliers 5-------------")
create_productSupplier(5, 4)
print("-------------Creating a productSuppliers 6-------------")
create_productSupplier(6, 5)
print("-------------Reading table productSuppliers-------------")
read_table('productSuppliers')

print("-------------Reading table orders-------------")
read_table('orders')
print("-------------Creating order 4-------------")
create_order(4, 5, 5)
print("-------------Creating order 5-------------")
create_order(5, 6, 3)
print("-------------Reading table orders-------------")
read_table('orders')
