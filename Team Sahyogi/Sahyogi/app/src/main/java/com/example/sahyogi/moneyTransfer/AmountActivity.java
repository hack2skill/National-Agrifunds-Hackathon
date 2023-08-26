package com.example.sahyogi.moneyTransfer;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

import com.example.sahyogi.PopUpUtils;
import com.example.sahyogi.R;

public class AmountActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_amount);
        ImageView backBtn = findViewById(R.id.backBtn);
        backBtn.setOnClickListener(view -> finish());

        Intent intent = getIntent();
        String upiId = intent.getStringExtra("upiId");

        TextView upiIdTextView = findViewById(R.id.upiId);

        if (upiId != null) {
            String updatedText = "Paying " + upiId;
            upiIdTextView.setText(updatedText);
        }

        Button proceed = findViewById(R.id.proceedButton);
        proceed.setOnClickListener(
                view -> PopUpUtils.showPopup(this,"USSD Transaction request will be sent after authentication.\n" +
                "Authentication will be done in device only if there is no connectivity (in case of UPI Lite).")
        );
    }
}

//Once UPI API is connected, the authentication of transaction using UPI pin can be done.