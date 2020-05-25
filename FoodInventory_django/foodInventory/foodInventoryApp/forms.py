from django import forms
from .models import foodInventoryModel
from datetime import datetime


class foodInventoryForm(forms.Form):
    today = datetime.today()
    Food_Select = forms.IntegerField()
    Qty_Select = forms.IntegerField()
    Date_Select = forms.DateField(required=False )
