import mysql.connector

config = {
  'user' : 'root',
  'password' : 'B4ENkEX6zrgUGdjTqZzV',
  'host' : 'ec2-54-144-224-151.compute-1.amazonaws.com'
}

db = mysql.connector.connect(**config)
cursor = db.cursor()

print(db)