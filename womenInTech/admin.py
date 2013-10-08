from django.contrib import admin
from womenInTech.models import Graph

class GraphAdmin(admin.ModelAdmin):

    list_display=('title',)
    prepopulated_fields = {"slug": ("title",)}

admin.site.register(Graph, GraphAdmin)
