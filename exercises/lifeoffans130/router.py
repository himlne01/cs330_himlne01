from flask import Flask, url_for, redirect, render_template, request, Response, jsonify

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/about")
def about():
    return render_template('about.html')

@app.route("/contact")
def contact():
    return render_template('contact.html')

@app.route("/a-collection-of-two-poems-by-emma-and-nell")
def collection():
    return render_template('blog/a-collection-of-two-poems-by-emma-and-nell.html')

@app.route("/a-percy-jackson-musical")
def musical():
    return render_template('blog/a-percy-jackson-musical.html')

@app.route("/more-than-a-word-on-culture")
def culture():
    return render_template('blog/more-than-a-word-on-culture.html')

@app.route("/what-is-bts-doing-now")
def bts():
    return render_template('blog/what-is-bts-doing-now.html')

@app.route("/what-is-kpop")
def kpop():
    return render_template('blog/what-is-kpop.html')
