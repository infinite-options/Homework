# Generated by Django 3.0 on 2020-03-29 05:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('foodInventoryApp', '0002_auto_20200329_0451'),
    ]

    operations = [
        migrations.AlterField(
            model_name='foodinventorymodel',
            name='Vegitarian',
            field=models.CharField(blank=True, max_length=10),
        ),
    ]