from django.db import models
from django.template.defaultfilters import slugify

class Graph(models.Model):

    title = models.CharField(max_length=250)
    slug = models.SlugField(max_length=250, null=True, blank=True, db_index=True)
    description = models.CharField(max_length=500)
    script = models.FileField(upload_to='graphs/', blank=True, null=True)

    def save(self, *args, **kwargs):
        if not self.id:
            # Newly created object, so set slug
            self.slug = slugify(self.title)

        super(Graph, self).save(*args, **kwargs)

    def __unicode__(self):
        return self.slug

    class Meta:
        verbose_name = 'Graph'
        verbose_name_plural = 'Graphs'

