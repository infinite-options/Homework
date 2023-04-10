from flask_restful import Resource
from sqlite3 import Error
from db.config import create_connection

class PostsApi(Resource):
    def get(self):
        """API to return the records to be displayed on the home page
        get:
            summary: posts endpoint.
            description: Get all posts along with their users.
            responses:
                200: json list.
        """
        posts = []
        try:
            query = """SELECT posts.id as id, posts.name as name, rating, comment,
                CASE WHEN julianday('now', 'localtime')-julianday(created_at)<1
                    THEN CAST((julianday('now', 'localtime')-julianday(created_at))*1440 AS INTEGER) ||'m'
                    ELSE CAST((julianday('now', 'localtime')-julianday(created_at)) AS INTEGER) ||'d'
                    END AS age
                , users.name as user_name, handle, photo_url, picture_url
                FROM posts INNER JOIN users on users.id=posts.user_id"""
            with create_connection() as conn:
                cursor = conn.cursor()
                cursor.execute(query)
                posts = cursor.fetchall()
        except Error as err:
            print(err)
        return posts, 200