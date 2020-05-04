from flask import Flask, session, redirect, url_for, escape, request, render_template
import os


app = Flask(__name__)
app.secret_key = os.environ.get("SECRET_KEY")


@app.route("/")
def index():
    if "username" in session:
        return render_template("index.html", inUse = session["username"])
    return redirect(url_for("login"))


@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "GET":
        return render_template("login.html")
    else: 
        name = request.form.get("username")
        session["username"] = request.form["username"]
        return redirect(url_for("index"))


@app.route("/logout", methods=["POST"])
def logout():
    session.pop("username", None)
    return redirect(url_for("login"))
