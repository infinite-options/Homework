from django.urls import path
from django.contrib import admin

from .views import index

app_name = 'foodInventoryApp'

urlpatterns = [
    path('',index,name="index"),
]
