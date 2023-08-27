import pandas as pd
import streamlit as st
import datetime
import matplotlib.pyplot as plt
import plotly.express as px
import seaborn as sns
from streamlit_elements import elements, mui
import gspread
from oauth2client.service_account import ServiceAccountCredentials
from utils import *


#---------------- Authenticate with Google Sheets API ---------------------------------+
scope = ["https://spreadsheets.google.com/feeds", "https://www.googleapis.com/auth/drive"]
credentials = ServiceAccountCredentials.from_json_keyfile_name(".streamlit/credentials.json", scope)
client = gspread.authorize(credentials)
# st.success("connection done")

# Open the Google Sheet by its title
sheet = client.open("nabard-db")
# st.success("Sheet loaded")

worksheet = sheet.get_worksheet(1)  # Assuming Sheet-2 contains Fraudulent Recipients

#Check fraudulent recipient
def check_fraudulent_recipient(recipient_mobile):
    recipients = worksheet.col_values(1)
    if recipient_mobile in recipients:
        return True
    else:
        return False
    

@st.cache_data(ttl=600)
def load_data(sheets_url):
    csv_url = sheets_url.replace("/edit?usp=sharing", "/export?format=csv&gid=0")
    return pd.read_csv(csv_url,on_bad_lines='skip')

def display_dashboard():
    df = load_data(st.secrets["public_gsheets_url"])
    # Group data by location and payment status
    grouped_data = df.groupby(['location', 'payment_status']).size().unstack().fillna(0)

    # Display DataFrame
    st.write("Data:")
    st.dataframe(grouped_data)

    # Create bar plot using Plotly Express
    fig = px.bar(grouped_data.reset_index(), x='location', y=['Fail'],
             labels={'location': 'Region', 'value': 'Count'},
             title="Successful vs Failed Payments by Region",
             template='plotly')
    fig.update_layout(barmode='stack')
    st.write("Visualization:")
    st.plotly_chart(fig)