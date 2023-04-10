from sqlite3 import Error
from flask import Flask, render_template
from db.config import init, create_connection

app = Flask(__name__)
init()


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/api/posts')
def all_posts():
    posts = get_all_posts()
    return posts, 200


def get_all_posts():
    rows = []
    try:
        query = """SELECT posts.id, posts.name, rating, comment,
            CASE WHEN julianday('now', 'localtime')-julianday(created_at)<1
                THEN CAST((julianday('now', 'localtime')-julianday(created_at))*1440 AS INTEGER) ||'m'
                ELSE CAST((julianday('now', 'localtime')-julianday(created_at)) AS INTEGER) ||'d'
                END AS age
            , users.name, handle, photo_url, picture_url
            FROM posts INNER JOIN users on users.id=posts.user_id"""
        with create_connection() as conn:
            cursor = conn.cursor()
            cursor.execute(query)
            rows = cursor.fetchall()
    except Error as err:
        print(err)
    return rows
