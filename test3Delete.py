from DBInterface import *
from connect import cursor, db

cursor.execute("USE storeDB;")
print("--------------------Reading table orders--------------")
read_table('orders')
print("--------------------Deleting order 1------------------")
delete_order(1)
print("--------------------Reading table orders--------------")
read_table('orders')