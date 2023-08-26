package com.example.sahyogi.reqMoney;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import com.example.sahyogi.PopUpUtils;
import com.example.sahyogi.R;

public class ReqAmountActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_req_amount);

        PopUpUtils.showPopup(this,
                "Next steps will be handled by UPI API/USSD service.");

        ImageView backBtn = findViewById(R.id.backBtn);
        backBtn.setOnClickListener(view -> finish());

        Intent intent = getIntent();
        String upiId = intent.getStringExtra("upiId");

        TextView upiIdTextView = findViewById(R.id.upiId);

        if (upiId != null) {
            String updatedText = "Requesting " + upiId;
            upiIdTextView.setText(updatedText);
        }

        EditText reqAmount = findViewById(R.id.reqAmount);
        Button request = findViewById(R.id.requestButton);
        request.setEnabled(false);

        reqAmount.addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence charSequence, int i, int i1, int i2) {
            }

            @Override
            public void onTextChanged(CharSequence charSequence, int i, int i1, int i2) {
                String enteredText = charSequence.toString();
                request.setEnabled(!enteredText.isEmpty());
            }

            @Override
            public void afterTextChanged(Editable editable) {
            }
        });

        request.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String amount = reqAmount.getText().toString();
                Toast.makeText(ReqAmountActivity.this, "Rs."+ amount +" requested to " + upiId, Toast.LENGTH_SHORT).show();
            }
        });
    }
}