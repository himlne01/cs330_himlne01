from flask import Flask, request, render_template
import sqlite3

app = Flask(__name__)

def get_data_from_db(query: str) -> list:
    """retrieve data from the database and return to the user"""
    db = sqlite3.connect('world.sqlite3')
    rows = db.execute(query)
    # print(rows) <sqlite3.Cursor object>
    return rows


@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "GET":
        # display links to 3 options (country / region / continent)
        return render_template("base.html")
    else:
        # retrieve data from the database based on the selected option and present it to the user
        if request.form.get("country"): #select name=country 
            country = "select * from country where name = '"+ request.form.get("country") +"'"
            result = get_data_from_db(country)
            return render_template("result.html", rows=result)

        elif request.form.get("region"): #select name=region 
            region = "select * from country where region = '"+ request.form.get("region") +"'"
            result = get_data_from_db(region)
            return render_template("result.html", rows=result)

        elif request.form.get("continent"): #select name=continent 
            continent = "select * from country where continent = '"+ request.form.get("continent") + "'"
            result = get_data_from_db(continent)
            return render_template("result.html", rows=result)


@app.route("/<string:scope>", methods=["GET"])
def search(scope: str):
    if scope == "country":
        # get countries from the database and populate options of the drop-down menu
        world_data = get_data_from_db("SELECT name, name FROM country;")
        return render_template("country.html", options=world_data)

    elif scope == "region":
        # get regions from the database and populate options of the drop-down menu
        world_data = get_data_from_db("SELECT DISTINCT region, region FROM country;")
        return render_template("region.html", options=world_data)

    elif scope == "continent":
        # get continents from the database and populate options of the drop-down menu
        world_data = get_data_from_db("SELECT DISTINCT continent,continent FROM country;")
        return render_template("continent.html", options=world_data)

if __name__ == "__main__":
    app.run()