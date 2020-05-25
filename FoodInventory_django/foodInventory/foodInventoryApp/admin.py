from django.contrib import admin
from .models import foodInventoryModel
from import_export.admin import ImportExportModelAdmin
# Register your models here.


#admin.site.register(foodInventoryModel,ViewAdmin)
# admin.site.register(item)
@admin.register(foodInventoryModel)
class ViewAdmin(ImportExportModelAdmin):
    exclude = ('UID',)
