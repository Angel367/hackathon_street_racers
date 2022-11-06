from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse


def index_view(request):
    # template = loader.get_template('')
    return render(request, 'map/index.html')

    # return HttpResponse("Hello, world. You're at the polls index.")


def map_view(request):
    # template = loader.get_template('')
    return render(request, 'map/map.html')


def contacts_view(request):
    # template = loader.get_template('')
    return render(request, 'map/contacts.html')

    # return HttpResponse("Hello, world. You're at the polls index.")
