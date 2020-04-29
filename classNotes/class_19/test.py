import sqlite3

# https://inloop.github.io/sqlite-viewer/

db = sqlite3.connect('world.sqlite3')
print("Opened database successfully")
country = "China"
words = "select code,name from country where name = '"+country+"'"
thing = db.execute(words)
# print(thing)
for row in thing:
   print ("CODE = ", row[0])
   print ("NAME = ", row[1], "\n")