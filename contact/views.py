from django.shortcuts import render
from django.views.generic import TemplateView

class contactView(TemplateView):
    template_name = 'index.html'
