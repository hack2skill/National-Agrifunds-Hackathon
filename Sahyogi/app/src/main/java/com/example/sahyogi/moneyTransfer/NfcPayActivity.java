package com.example.sahyogi.moneyTransfer;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.ImageView;

import com.example.sahyogi.PopUpUtils;
import com.example.sahyogi.R;

public class NfcPayActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_nfc_pay);

        PopUpUtils.showPopup(this,
                "Using NFC in connection is reliable method when there is no/low network.\n" +
                        "Next steps in transaction will be handled by UPI API.");

        ImageView backBtn = findViewById(R.id.backBtn);
        backBtn.setOnClickListener(view -> finish());
    }
}