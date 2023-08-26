from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.decorators import login_required
from .forms import FarmerRegistrationForm, VendorRegistrationForm, TransactionForm
from .models import AgriToken,CustomUser, Sale, AgriToken, Product, Transaction, LoanApplication, MicroinsurancePayment, SustainableFarmingPractice, EarnedToken, OfflineTransaction
from django.contrib import messages
from django.urls import reverse

def farmer_registration(request):
    if request.method == 'POST':
        form = FarmerRegistrationForm(request.POST)
        if form.is_valid():
            user = form.save()
            user.is_farmer = True
            user.save()
            login(request, user)
            return redirect('farmer_dashboard')
    else:
        form = FarmerRegistrationForm()
    return render(request, 'farmer_registration.html', {'form': form})

def vendor_registration(request):
    if request.method == 'POST':
        form = VendorRegistrationForm(request.POST)
        if form.is_valid():
            user = form.save()
            user.is_vendor = True
            user.save()
            login(request, user)
            return redirect('vendor_dashboard')
    else:
        form = VendorRegistrationForm()
    return render(request, 'vendor_registration.html', {'form': form})


def user_login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            if user.is_farmer:
                return redirect('farmer_dashboard')
            elif user.is_vendor:
                return redirect('vendor_dashboard')
        else:
            # Display an error message for invalid credentials
            error_message = "Invalid username or password."
            return render(request, 'login.html', {'error_message': error_message})
    return render(request, 'login.html')

def user_logout(request):
    logout(request)
    return redirect('user_login')

import random
import string

from django.db.models import Q

@login_required
def farmer_dashboard(request):
    if request.user.is_farmer:
        # Retrieve AgriToken balance, recent transactions, and loan applications
        farmer_profile = request.user.farmerprofile
        agri_token_balance = farmer_profile.agritoken_balance
        recent_transactions = Transaction.objects.filter(Q(sender=request.user) | Q(recipient=request.user)).order_by('-timestamp')[:5]
        loan_applications = LoanApplication.objects.filter(farmer=request.user)
            
        city_name = 'Indore'
        temperature = 25
        humidity = 60
        weather_state = 'Rainy'

        return render(request, 'farmer_dashboard.html', {
            'agri_token_balance': agri_token_balance,
            'recent_transactions': recent_transactions,
            'loan_applications': loan_applications,
            'city_name': city_name,
            'temperature': temperature,
            'humidity': humidity,
            'weather_state': weather_state,
            'user_unique_id': request.user.id

        })
    else:
        return redirect(reverse('user_login'))



@login_required
def vendor_dashboard(request):
    if request.user.is_vendor:
        vendor_profile = request.user.vendorprofile
        agri_token_balance = vendor_profile.agritoken_balance

        inventory = Product.objects.filter(vendor=request.user) 
        sales_history = Sale.objects.filter(vendor=request.user)  

        return render(request, 'vendor_dashboard.html', {
            'vendor_profile': vendor_profile,
            'agri_token_balance': agri_token_balance,
            'inventory': inventory,
            'sales_history': sales_history,
            'user_unique_id': request.user.id  # Add the unique user ID
        })
    else:
        return redirect(reverse('user_login'))
 

@login_required
def create_agritoken(request):
    if request.method == 'POST':
        produce_type = request.POST['produce_type']
        quantity = int(request.POST['quantity'])
        token_value = int(request.POST['token_value'])
        farmer = request.user

        agri_token = AgriToken.objects.create(
            farmer=farmer, produce_type=produce_type,
            quantity=quantity, token_value=token_value
        )

        farmer_profile = farmer.farmerprofile
        farmer_profile.agritoken_balance += token_value * quantity
        farmer_profile.save()

        return redirect('farmer_dashboard')

    return render(request, 'create_agritoken.html')


@login_required
def list_create_products(request):
    if request.user.is_vendor:
        vendor = request.user
        products = Product.objects.filter(vendor=vendor)

        if request.method == 'POST':
            product_name = request.POST['product_name']
            token_price = int(request.POST['token_price'])
            new_product = Product.objects.create(
                vendor=vendor,
                name=product_name,
                price_in_tokens=token_price
            )
            return redirect('list_create_products')

        return render(request, 'list_create_products.html', {
            'products': products
        })
    else:
        return redirect(reverse('user_login'))



@login_required
def redeem_agritoken(request):
    farmer = request.user
    agri_tokens = AgriToken.objects.filter(farmer=farmer)
    products = Product.objects.all()

    for agri_token in agri_tokens:
        agri_token.total_token_value = agri_token.token_value * agri_token.quantity

    if request.method == 'POST':
        selected_product_id = int(request.POST['product'])
        selected_product = Product.objects.get(pk=selected_product_id)
        
        if farmer.farmerprofile.agritoken_balance >= selected_product.price_in_tokens:
            farmer.farmerprofile.agritoken_balance -= selected_product.price_in_tokens
            farmer.farmerprofile.save()
            
            Sale.objects.create(
                vendor=selected_product.vendor,
                product=selected_product,
                token_price=selected_product.price_in_tokens,
                quantity=1  # Assuming each redemption is for 1 product
            )
            
            return redirect('farmer_dashboard')
        else:
            error_message = "Insufficient AgriTokens for redemption."
            return render(request, 'redeem_agritoken.html', {
                'agri_tokens': agri_tokens,
                'products': products,
                'error_message': error_message
            })

    return render(request, 'redeem_agritoken.html', {
        'agri_tokens': agri_tokens,
        'products': products
    })

    

from .models import CustomUser, Transaction

@login_required
def initiate_transaction(request):
    form = TransactionForm()  

    if request.method == 'POST':
        form = TransactionForm(request.POST)
        if form.is_valid():
            recipient_id = form.cleaned_data['recipient_id']
            amount = form.cleaned_data['amount']
            sender = request.user
            recipient = CustomUser.objects.get(pk=recipient_id)

            if sender.is_farmer:
                sender.farmerprofile.agritoken_balance -= amount
                sender.farmerprofile.save()

            if recipient.is_vendor:
                recipient.vendorprofile.agritoken_balance += amount
                recipient.vendorprofile.save()

            Transaction.objects.create(sender=sender, recipient=recipient, amount=amount)

            messages.success(request, "Transaction initiated successfully.")
            return redirect('farmer_dashboard')
        else:
            messages.error(request, "Invalid transaction data.")

    return render(request, 'initiate_transaction.html', {'form': form})


@login_required
def apply_for_loan(request):
    if request.method == 'POST':
        amount = int(request.POST['amount'])
        farmer = request.user
        LoanApplication.objects.create(farmer=farmer, amount=amount, status='applied')
        messages.success(request, "Loan application submitted successfully.")
        return redirect('farmer_dashboard')
    loan_applications = LoanApplication.objects.filter(farmer=request.user)
    return render(request, 'apply_for_loan.html', {'loan_applications': loan_applications})



@login_required
def make_microinsurance_payment(request):
    if request.method == 'POST':
        amount = int(request.POST['amount'])
        farmer = request.user
        MicroinsurancePayment.objects.create(farmer=farmer, amount=amount)
        messages.success(request, "Microinsurance payment made successfully.")
        return redirect('farmer_dashboard')
    microinsurance_payments = MicroinsurancePayment.objects.filter(farmer=request.user)
    return render(request, 'make_microinsurance_payment.html', {'microinsurance_payments': microinsurance_payments})


@login_required
def view_earned_tokens(request):
    farmer = request.user
    earned_tokens = EarnedToken.objects.filter(farmer=farmer)
    return render(request, 'view_earned_tokens.html', {'earned_tokens': earned_tokens})

@login_required
def practice_sustainable_farming(request):
    success = False

    if request.method == 'POST':
        practice_id = int(request.POST['practice'])
        practice = SustainableFarmingPractice.objects.get(pk=practice_id)
        earned_token = EarnedToken.objects.filter(practice=practice).first()
        
        if earned_token:
            tokens_earned = earned_token.tokens_earned
            farmer = request.user
            EarnedToken.objects.create(farmer=farmer, practice=practice, tokens_earned=tokens_earned)
            farmer.farmerprofile.agritoken_balance += tokens_earned
            farmer.farmerprofile.save()
            success = True  

    demo_practices = [
        {'name': 'Crop Rotation', 'description': 'Rotate crops to maintain soil health.'},
        {'name': 'Organic Farming', 'description': 'Use organic methods to grow crops.'},
        {'name': 'Composting', 'description': 'Create compost to enrich soil.'},
    ]

    for demo_practice in demo_practices:
        practice, created = SustainableFarmingPractice.objects.get_or_create(**demo_practice)
        if created:
            EarnedToken.objects.create(farmer=farmer, practice=practice, tokens_earned=10)  

    practices = SustainableFarmingPractice.objects.all()
    return render(request, 'practice_sustainable_farming.html', {'practices': practices, 'success': success})


