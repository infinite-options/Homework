"""
Contains functions for creating the api routes.

Functions:

    home() -> template
    all_posts() -> json
    select_all_posts() -> list
"""
from flask import Flask
from flask_restful import Api
from db.config import init_db
from resources.routes import init_routes

app = Flask(__name__)
api = Api(app)
init_db()
init_routes(api)
