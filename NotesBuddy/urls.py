"""
URL configuration for NotesBuddy project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
import os

from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import TemplateView, RedirectView
from django.views.static import serve

from NotesBuddy.settings import BASE_DIR

urlpatterns = [
    re_path(r'^favicon\.ico$', serve, {
        'path': 'favicon.ico', 'document_root': os.path.join(BASE_DIR, 'client/build'),
    }),
    re_path(r'^manifest\.json$', serve, {
        'path': 'manifest.json', 'document_root': os.path.join(BASE_DIR, 'client/build'),
    }),
    path('admin/', admin.site.urls),
    path('admin', RedirectView.as_view(url='/admin/', permanent=True)),
    path('server/', include('server.urls')),
    re_path('.*', TemplateView.as_view(template_name='index.html'))
]
