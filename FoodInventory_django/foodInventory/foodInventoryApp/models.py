from django.db import models
from datetime import date


# Create your models here.
class foodInventoryModel(models.Model):

    UID = models.IntegerField()
    Description = models.CharField(max_length = 150, blank=False)
    Unit = models.CharField(max_length = 150,blank=False)
    Qty = models.IntegerField()
    Expiration_Date = models.DateField(auto_now=False,auto_now_add=False,default=date.today,blank=True,null=True )
    Vegitarian = models.CharField(max_length = 10, blank = True)
    Limit = models.IntegerField()



    def __str__(self):
        return self.Description
