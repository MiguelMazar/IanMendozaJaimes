from django.conf.urls import patterns, url
from .views import contactView

urlpatterns = patterns('',
    url(r'^$', contactView.as_view(), name='index'),
)
