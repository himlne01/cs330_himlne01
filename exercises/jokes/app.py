#!/usr/bin/env python3
import random
import pyjokes
from flask import Flask, make_response, redirect, render_template, request, url_for

app = Flask(__name__)

def send_joke(category: str, language: str, number: int):
    lis = []
    for n in range(0,number):
        lis.append( pyjokes.get_joke(language, category) )
    return lis


@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "GET":
        a_type = request.cookies.get("catgory")
        a_lang = request.cookies.get("languag")
        a_numb = request.cookies.get("numbr")
        if a_numb: 
            # print('3 to enter cln')
            return render_template("jokes.html", jokes=send_joke(a_type, a_lang, int(a_numb)))
        else: 
            # print("1 base")
            return render_template('home.html')
    else: #POST
        response = make_response(redirect(url_for("index"), code=303))
        if request.form.get("done"): 
            # print('4 reset')
            response.set_cookie("catgory", "", expires=0)
            response.set_cookie("languag", "", expires=0)
            response.set_cookie("numbr", "", expires=0)
        else: 
            # print('2 record the number, shows second page')
            response.set_cookie("catgory", request.form.get("catgory"))
            response.set_cookie("languag", request.form.get("languag"))
            response.set_cookie("numbr", request.form.get("numbr"))
        return response
        
