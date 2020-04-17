#!/usr/bin/env python3
"""
jokes api
"""

import json
import pyjokes
from flask import Flask, Response, jsonify
# from flask_cors import CORS, cross_origin

app = Flask(__name__)
# CORS(app)

@app.route("/api/v1/jokes")
def rand_joke():
    res = Response(json.dumps({"random_joke": pyjokes.get_joke("en", "neutral") }))
    res.headers["Access-Control-Allow-Origin"] = "*"
    res.headers["Content-Type"] = "application/json"
    return res

@app.route("/api/v1/jokes/<int:n>") #<int:n>
def specific_joke(n):
    if n in range(1, 1+len(pyjokes.jokes_en.neutral)):
        res = Response(json.dumps({"random_joke": pyjokes.jokes_en.neutral[n-1] }))
    else:
        res = Response(json.dumps({"random_joke": "You are not funny. Choose a different number."}))        
    res.headers["Access-Control-Allow-Origin"] = "*"
    res.headers["Content-Type"] = "application/json"
    return res

if __name__ == "__main__":
    app.run()