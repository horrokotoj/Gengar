from DBInterface import *
from connect import cursor, db

cursor.execute("USE storeDB;")
print("-------------Reading product 1----------------")
read_product(1)
print("-------------Update attribute product_code--------------")
update_product_product_code(1, 'NEW1')
print("-------------Update attribute quantity-------------")
update_product_quantity(1, 5)
print("-------------Update attribute price-------------")
update_product_price(1, 99.00)
print("-------------Reading product 1-------------")
read_product(1)

