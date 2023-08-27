#--------------------------- IMPORTS ---------------------------------+
import pandas as pd
import streamlit as st
import datetime
from streamlit_elements import elements, mui
import gspread
from oauth2client.service_account import ServiceAccountCredentials
from utils import *
import numpy as np

np.random.seed(42)


#---------------- Authenticate with Google Sheets API ---------------------------------+
scope = ["https://spreadsheets.google.com/feeds", "https://www.googleapis.com/auth/drive"]
credentials = ServiceAccountCredentials.from_json_keyfile_name(".streamlit/credentials.json", scope)
client = gspread.authorize(credentials)
# st.success("connection done")

# Open the Google Sheet by its title
sheet = client.open("nabard-db")
# st.success("Sheet loaded")

worksheet = sheet.get_worksheet(0)  # Assuming we want to work with the first worksheet
# st.success("Worksheet loaded")

# -------------------Read in data from the Google Sheet -------------------------------+
@st.cache_data(ttl=600)
def load_data(sheets_url):
    csv_url = sheets_url.replace("/edit?usp=sharing", "/export?format=csv&gid=0")
    return pd.read_csv(csv_url,on_bad_lines='skip')

#----------------------------------------------------+
url = st.secrets['public_gsheets_url']
link_text = "Click here to see the actual Google Sheet Database!"
link = f"<a href=\"{url}\" style='text-align: center; color: #1e0096;'>{link_text}</a>"


# Page Layout

page = st.sidebar.selectbox("Select a page:", ("User", "NPCI"))

if page == "User":
    st.header('User Side - Make Payment')

    # Input fields
    user_mobile = st.text_input("User Mobile Number")
    recipient_mobile = st.text_input("Recipient Mobile Number")
    amount = st.number_input("Amount to be Sent", step=1.0)
    upi_pin = st.text_input("UPI PIN", type="password")
    location = st.text_input("Current Location")

    if st.button("Make Payment"):
        # Check for fraudulent recipient
        recipient_fraudulent = check_fraudulent_recipient(recipient_mobile)  # Simulating the check for fraudulent recipient

        if recipient_fraudulent:
            st.warning("Warning: Recipient is flagged as fraudulent. Proceed with caution.")
        else:
            # Store transaction information
            time_stamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            transaction_data = [user_mobile, recipient_mobile, time_stamp, amount, location, np.random.choice(["Success","Fail"])]
            sheet.append_row(transaction_data)
            # st.success("Payment Successful!")

if page == "NPCI":
    
    st.markdown(link, unsafe_allow_html=True)
    st.header('NPCI Monitoring - Fraudulent Transactions')

    display_dashboard()

