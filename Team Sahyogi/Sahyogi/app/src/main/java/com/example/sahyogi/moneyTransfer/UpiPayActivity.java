package com.example.sahyogi.moneyTransfer;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;
import android.view.KeyEvent;
import android.widget.Button;
import android.widget.ImageView;

import com.example.sahyogi.PopUpUtils;
import com.example.sahyogi.R;
import com.google.android.material.textfield.TextInputEditText;
import com.google.android.material.textfield.TextInputLayout;

public class UpiPayActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_upi_pay);

        PopUpUtils.showPopup(this,
                "USSD initialized with menu - \"Payment using UPI ID\".\n"+
                "The data needed while initialising USSD service will be stored in local storage with security.");

        ImageView backBtn = findViewById(R.id.backBtn);
        //to navigate back to home page
        backBtn.setOnClickListener(view -> finish());

        TextInputEditText upiEditText = findViewById(R.id.upiIdInputEditText);
        TextInputLayout upiIdText = findViewById(R.id.upiIdInput);

        Button continueBtn = findViewById(R.id.continueButton);
        continueBtn.setEnabled(false);

        upiEditText.addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence charSequence, int i, int i1, int i2) {
            }

            @Override
            public void onTextChanged(CharSequence charSequence, int i, int i1, int i2) {
                String enteredText = charSequence.toString();
                continueBtn.setEnabled(!enteredText.isEmpty());
            }

            @Override
            public void afterTextChanged(Editable editable) {
            }
        });

        continueBtn.setOnClickListener(view -> {
            String enteredUpiId = upiEditText.getText().toString();
            Intent intent = new Intent(UpiPayActivity.this, AmountActivity.class);
            intent.putExtra("upiId", enteredUpiId);
            startActivity(intent);
        });

        upiEditText.setOnKeyListener((v, keyCode, event) -> {
            if (keyCode == KeyEvent.KEYCODE_ENTER && event.getAction() == KeyEvent.ACTION_DOWN) {
                String inputText = upiEditText.getText().toString();

                if (inputText.isEmpty()) {
                    upiIdText.setError("Enter valid UPI ID or number");
                } else {
                    upiIdText.setError(null);
                }

                return true;
            }
            return false;
        });
    }
}