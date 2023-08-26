from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    is_farmer = models.BooleanField(default=False)
    is_vendor = models.BooleanField(default=False)
    def __str__(self):
        return self.username 
    
class FarmerProfile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, primary_key=True)
    agritoken_balance = models.PositiveIntegerField(default=0)

class VendorProfile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, primary_key=True)
    agritoken_balance = models.PositiveIntegerField(default=0)  # Add token balance for vendors

CustomUser._meta.get_field('groups').remote_field.related_name = 'customuser_groups'
CustomUser._meta.get_field('user_permissions').remote_field.related_name = 'customuser_user_permissions'


class AgriToken(models.Model):
    farmer = models.ForeignKey('CustomUser', on_delete=models.CASCADE)
    produce_type = models.CharField(max_length=100)
    quantity = models.PositiveIntegerField()
    token_value = models.PositiveIntegerField()

class Product(models.Model):
    vendor = models.ForeignKey('CustomUser', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    price_in_tokens = models.PositiveIntegerField()
    
class Transaction(models.Model):
    sender = models.ForeignKey('CustomUser', on_delete=models.CASCADE, related_name='sent_transactions')
    recipient = models.ForeignKey('CustomUser', on_delete=models.CASCADE, related_name='received_transactions')
    amount = models.PositiveIntegerField()
    timestamp = models.DateTimeField(auto_now_add=True)
    
class LoanApplication(models.Model):
    farmer = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    amount = models.PositiveIntegerField()
    status = models.CharField(max_length=20, default='approved') 
    timestamp = models.DateTimeField(auto_now_add=True)  

class MicroinsurancePayment(models.Model):
    farmer = models.ForeignKey('CustomUser', on_delete=models.CASCADE)
    amount = models.PositiveIntegerField()
    timestamp = models.DateTimeField(auto_now_add=True)
    
class SustainableFarmingPractice(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

class EarnedToken(models.Model):
    farmer = models.ForeignKey('CustomUser', on_delete=models.CASCADE)
    practice = models.ForeignKey(SustainableFarmingPractice, on_delete=models.CASCADE)
    tokens_earned = models.PositiveIntegerField()
    timestamp = models.DateTimeField(auto_now_add=True)
    
    
class OfflineTransaction(models.Model):
    sender = models.ForeignKey('CustomUser', on_delete=models.CASCADE, related_name='offline_transactions')
    recipient_id = models.PositiveIntegerField()
    amount = models.PositiveIntegerField()
    transaction_code = models.CharField(max_length=20)
    is_processed = models.BooleanField(default=False)
    timestamp = models.DateTimeField(auto_now_add=True)



class AgriToken(models.Model):
    farmer = models.ForeignKey('CustomUser', on_delete=models.CASCADE)
    produce_type = models.CharField(max_length=100)
    quantity = models.PositiveIntegerField()
    token_value = models.PositiveIntegerField()
    
    
class Sale(models.Model):
    vendor = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    token_price = models.PositiveIntegerField()
    quantity = models.PositiveIntegerField()
    sale_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Sale for {self.product.name} by {self.vendor.username}"