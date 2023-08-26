"""
URL configuration for AgriTokensProject project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from agriapp import views
from django.contrib.auth.views import LogoutView
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('register/farmer/', views.farmer_registration, name='farmer_registration'),
    path('register/vendor/', views.vendor_registration, name='vendor_registration'),
    path('login/', views.user_login, name='user_login'),
    path('logout/', views.user_logout, name='logout'),
    # Farmer Dashboard URLs
    path('dashboard/farmer/', views.farmer_dashboard, name='farmer_dashboard'),
    path('view/earned/tokens/', views.view_earned_tokens, name='view_earned_tokens'),
    path('initiate/transaction/', views.initiate_transaction, name='initiate_transaction'),
    path('apply/loan/', views.apply_for_loan, name='apply_for_loan'),
    path('make/microinsurance/payment/', views.make_microinsurance_payment, name='make_microinsurance_payment'),
    path('practice/sustainable/farming/', views.practice_sustainable_farming, name='practice_sustainable_farming'),
    # Vendor Dashboard URLs
    path('dashboard/vendor/', views.vendor_dashboard, name='vendor_dashboard'),
    path('create/agritoken/', views.create_agritoken, name='create_agritoken'),
    path('redeem/agritoken/', views.redeem_agritoken, name='redeem_agritoken'),

    path('list-create-products/', views.list_create_products, name='list_create_products'),

]
