from django.http import HttpResponse
from django.shortcuts import render

# View for Feed page
def feed_view(request, *args, **kwargs):
	return render(request, "pages/feed.html", {})
