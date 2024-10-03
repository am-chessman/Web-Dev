from django.shortcuts import render, HttpResponse

def home(request):
    template_name = "index.html"
    return render(request, template_name)

# Create your views here.
