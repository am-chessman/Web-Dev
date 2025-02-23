from django.urls import path
from .views import *
urlpatterns = [
    path('', home, name='home'),
    path('signin/', signin, name='signin'),
    path('submit', submit, name='submit'),
    path('<int:dynamic_id>/', dynamic, name='dynamic'),
]
