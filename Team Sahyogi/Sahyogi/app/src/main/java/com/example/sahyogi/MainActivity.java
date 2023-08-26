package com.example.sahyogi;

import androidx.appcompat.app.AppCompatActivity;
import androidx.cardview.widget.CardView;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;
import android.widget.Toast;

import com.example.sahyogi.moneyTransfer.NfcPayActivity;
import com.example.sahyogi.moneyTransfer.UpiPayActivity;
import com.example.sahyogi.reqMoney.ReqMoneyActivity;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        PopUpUtils.showPopup(this,
                "~ According to the connectivity, this app will make transactions by seamlessly shifting between UPI, UPI Lite and USSD.\n" +
                        "~ The transactions will be completed by sending USSD/UPI API requests.\n" +
                        "~ As USSD service also provides bank details and history, it is more efficient way for different kind of transactions.\n" +
                        "~ This app is not just for rural people but can also serve every UPI user.\n" +
                        "~ By processing user data securely, government schemes will be displayed in a section below.\n" +
                        "~ An AI/ML model can also be connected in backend for optimizing this process.");

        CardView upiCard = findViewById(R.id.upiCard);
        upiCard.setOnClickListener(view -> {
            Intent intent = new Intent(MainActivity.this, UpiPayActivity.class);
            startActivity(intent);
        });

        CardView nfcCard = findViewById(R.id.nfcCard);
        nfcCard.setOnClickListener(view -> {
            Intent intent = new Intent(MainActivity.this, NfcPayActivity.class);
            startActivity(intent);
        });

        TextView requestMoney = findViewById(R.id.requestMoney);
        requestMoney.setOnClickListener(view -> {
            Intent intent = new Intent(MainActivity.this, ReqMoneyActivity.class);
            startActivity(intent);
        });

        CardView bankCard = findViewById(R.id.bankTransferCard);
        bankCard.setOnClickListener(view ->
                PopUpUtils.showPopup(this,
                        "Bank transfer, Balance enquiry and transaction history can be fetched from USSD/UPI API.")
        );

        CardView govSchemes = findViewById(R.id.govSchemesCard);
        govSchemes.setOnClickListener(view ->
                PopUpUtils.showPopup(this,
                        "Most relevant government schemes according to user's data will be displayed in this section.\n" +
                                "Thus, user will know about new schemes where he/she is eligible."));
    }
}

//This app will work on UPI, UPI Lite and USSD service.
// Because unavailability of APIs openly, we were not able to connect it with real backend server.