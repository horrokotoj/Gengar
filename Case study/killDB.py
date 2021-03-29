import mysql.connector
from mysql.connector import errorcode 
from connect import cursor

cursor.execute("DROP DATABASE storeDB")