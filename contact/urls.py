from django.conf.urls import patterns, url
from .views import contactView

urlpatterns = patterns('',
    url(r'^index/$', contactView.as_view(), name='index'),
)
