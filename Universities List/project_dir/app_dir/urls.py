from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("submit", views.forms, name="forms"),
    path("api/data/", views.get_data, name="get_data")
]