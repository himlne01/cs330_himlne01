import psycopg2
from flask import Flask, make_response, redirect, render_template, request, url_for

app = Flask(__name__)

def get_data_from_db(query: str) -> list:
    conn = psycopg2.connect(
        database = "inventory",
        user="postgres",
        password="nnnnnnnn",
        host="localhost",
        port="5432"
    )
    cur = conn.cursor()
    cur.execute(query)
    if query[0] == 'I':
        conn.commit()
        display = 'SELECT * FROM public."inventoryTable";'
        cur.execute(display)
    rows = cur.fetchall()
    return rows

@app.route("/", methods=["GET", "POST"])
def index():
    return render_template("index.html")

@app.route("/add", methods=["GET", "POST"])
def add():
    if request.method == "GET":
        query = 'SELECT * FROM public."inventoryTable";'
        db=get_data_from_db(query)
        return render_template("add.html", iceCream=db)
    else:
        name = request.form.get("flavor")
        category = request.form.get("category")
        price = request.form.get("price")
        quantity = request.form.get("quantity")

        query = "INSERT INTO public.\"inventoryTable\" (name, category, price, quantity) VALUES ('" + name + "', '" + category + "', '" + price + "', '" + quantity + "');"
        db=get_data_from_db(query)

        return render_template("add.html", iceCream=db)

@app.route("/list")
def list():
    query = 'SELECT * FROM public."inventoryTable";'
    db=get_data_from_db(query)
    return render_template("list.html", iceCream=db)

# The Creamery is my hometown's "Sugar Bowl". This restaurant has the same kind of ice cream!

# I'm just going to acknowledge that there is no way to decrease
# the inventory, which is very important to the store.
# Since it wasn't in the .md, I will do it another time.