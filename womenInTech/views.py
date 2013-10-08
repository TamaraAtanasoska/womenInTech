from django.shortcuts import render_to_response
from womenInTech.models import Graph

def graphs_list(request):
  
    user = request.user

    graphs_list = Graph.objects.all()

    return render_to_response('index.html', {'graphs_list':graphs_list, 'user':user,})

def detail(request, slug):

    graph = Graph.objects.filter(slug=slug)
    path_to_file = '/media/graphs/' + slug + '.js'
    title = graph[0].title
    description = graph[0].description
    
    return render_to_response('detail.html', {'path_to_file':path_to_file, 'title':title, 'description':description,})
