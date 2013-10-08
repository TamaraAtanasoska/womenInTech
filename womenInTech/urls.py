from django.conf.urls import patterns, include, url
from womenInTech.settings import MEDIA_ROOT

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    url(r'^media/(?P<path>.*)$', 'django.views.static.serve', {'document_root': MEDIA_ROOT}),
    url(r'^$', 'womenInTech.views.graphs_list'),
    url(r'^detail/(?P<slug>.*)/', 'womenInTech.views.detail'),

    url(r'^admin/doc/', include('django.contrib.admindocs.urls')),
    url(r'^admin/', include(admin.site.urls)),
)
