from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages
from .forms import UserRegisterForm
# Create your views here.

def register_view(request):
	if request.method == 'POST':
		form = UserRegisterForm(request.POST)
		if form.is_valid():
			form.save()
			username = form.cleaned_data.get('username')
			# password = form.cleaned_data.get('password')
			# password = form.cleaned_data.get('')
			messages.success(request, f'Account created for {username}!')
			return redirect('login')
	else:
		form = UserRegisterForm()

	return render(request, 'users/register.html', {'form': form})


def login_view(request):
	return render(request, 'users/login.html', {})


