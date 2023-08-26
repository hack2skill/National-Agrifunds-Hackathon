package com.example.sahyogi.reqMoney;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;
import android.widget.Button;
import android.widget.ImageView;

import com.example.sahyogi.PopUpUtils;
import com.example.sahyogi.R;
import com.google.android.material.textfield.TextInputEditText;
import com.google.android.material.textfield.TextInputLayout;

public class ReqMoneyActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_req_money);

        PopUpUtils.showPopup(this,
                "USSD initialized with menu - \"Request Money\".\n"+
                        "This menu needs UPI ID or phone number to proceed.");

        ImageView backBtn = findViewById(R.id.backBtn);
        backBtn.setOnClickListener(view -> finish());

        TextInputEditText upiEditText = findViewById(R.id.upiIdInputEditText);

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
            Intent intent = new Intent(ReqMoneyActivity.this, ReqAmountActivity.class);
            intent.putExtra("upiId", enteredUpiId);
            startActivity(intent);
        });
    }
}