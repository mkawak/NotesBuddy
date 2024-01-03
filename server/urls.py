from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.login_view, name='login'),
    path('signup/', views.signup_view, name='signup'),
    path('notes/', views.getNotes, name='notes'),
    path('notes/<str:note_number>/', views.getNote, name='note'),
]
