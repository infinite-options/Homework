from django.contrib import messages
from .models import *
from django.shortcuts import render, redirect, get_object_or_404
from .import forms
import datetime

# Create your views here.


def index(request):
    form = forms.foodInventoryForm()
    items =  foodInventoryModel.objects.all()
    tday = datetime.date.today()

    context = {
        'items' : items,
        'form' : form,
        'today' : tday,
    }

    if request.method == "POST":
        form = forms.foodInventoryForm(request.POST)


        if form.is_valid():
            food = foodInventoryModel.objects.get(UID = form.cleaned_data['Food_Select'])
            qty = form.cleaned_data['Qty_Select']
            if( food.Expiration_Date < tday  ):
                messages.warning(request,"Food expired. Please select other product(s). ")
            else:
                if (qty <= food.Limit and qty <= food.Qty and food.Qty>0):
                    food.Qty = food.Qty - qty
                    food.save()
                    output_str = "You have taken " + str(qty) + " " + food.Unit +"(s) of " + food.Description+".  "
                    #tday = datetime.date.today()
                    #days_left = food.Expiration_Date - tday
                    if (food.Vegitarian == "No"):
                        output_str += "Caution: Food contains animal product. "
                    messages.success(request, output_str)
                else:
                    messages.warning(request, 'Not enough food or out of limit')

        return redirect('foodInventoryApp:index')

    else:
        form = forms.foodInventoryForm()


    return render(request,'index.html',context)
