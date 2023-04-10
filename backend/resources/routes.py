from .post import PostsApi

def init_routes(api):
    api.add_resource(PostsApi, '/api/posts')