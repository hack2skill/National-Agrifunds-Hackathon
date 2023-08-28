from django import forms
from django.db.models import Q  
from django.contrib.auth.forms import UserCreationForm
from django.http import request
from .models import CustomUser, FarmerProfile, VendorProfile

class FarmerRegistrationForm(UserCreationForm):
    class Meta:
        model = CustomUser
        fields = ('username', 'email', 'password1', 'password2')

    def save(self, commit=True):
        user = super().save(commit=False)
        user.is_farmer = True
        if commit:
            user.save()
            farmer_profile = FarmerProfile(user=user)
            farmer_profile.save()
        return user

class VendorRegistrationForm(UserCreationForm):
    class Meta:
        model = CustomUser
        fields = ('username', 'email', 'password1', 'password2')
    
    def save(self, commit=True):
        user = super().save(commit=False)
        user.is_vendor = True
        if commit:
            user.save()
            vendor_profile = VendorProfile(user=user)  # Create a VendorProfile
            vendor_profile.save()
        return user      


class TransactionForm(forms.Form):
    recipient_id = forms.IntegerField(label='Recipient ID', min_value=1)
    amount = forms.IntegerField(label='Amount', min_value=1)