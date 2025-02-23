from django.shortcuts import render
from django.http import HttpResponse
from .forms import FormInput

# Function to display the homepage
def home(request):
    return HttpResponse("<h1>Welcome to the Homepage!</h1>")

def signin(request):
    if request.method == 'POST':
        form = FormInput(request.POST)
        if form.is_valid():
            return HttpResponse("<h1>Form submitted successfully!</h1>")
    else:
        form = FormInput()
    return render(request, 'index.html', {'form' : form})

def submit(request):
    return HttpResponse("<h1>Thanks for submitting!</h1>")

def dynamic(request, dynamic_id):
    return HttpResponse(f"Dynamic url:  {dynamic_id}")