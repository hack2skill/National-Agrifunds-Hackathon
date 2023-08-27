package com.example.bankanywhere;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.Intent;
import android.net.ConnectivityManager;
import android.net.Network;
import android.net.NetworkCapabilities;
import android.os.Bundle;
import android.os.Handler;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.*;
import android.database.sqlite.SQLiteDatabase;
import android.database.Cursor;

public class MainActivity extends AppCompatActivity {
    Button banking,pension,govt;
    TextView legend;
    SQLiteDatabase db;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        banking=(Button) findViewById(R.id.bankingButton);
        govt=(Button) findViewById(R.id.governmentServicesButton);
        pension=(Button) findViewById(R.id.pensionServicesButton);
        banking.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                checkNetwork();
                doBanking();
            }
        });
        govt.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                checkNetwork();
                doGovt();
            }
        });
        pension.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                checkNetwork();
                doPension();
            }
        });

    }
    public void doBanking(){
        startActivity(new Intent(this, BankingActivity.class));
        Toast.makeText(this, "Banking", Toast.LENGTH_SHORT).show();
    }

    public void doGovt(){
        Toast.makeText(this, "Govt Schemes", Toast.LENGTH_SHORT).show();
        startActivity(new Intent(this, GovtActivity.class));
    }
    public void doPension(){
        Toast.makeText(this, "Pension Service", Toast.LENGTH_SHORT).show();
        startActivity(new Intent(this,PensionActivity.class));
    }

    public void checkNetwork(){
        ConnectivityManager connectivityManager = (ConnectivityManager) getSystemService(Context.CONNECTIVITY_SERVICE);
        Network network = connectivityManager.getActiveNetwork();
        NetworkCapabilities capabilities = connectivityManager.getNetworkCapabilities(network);

        if (capabilities != null) {
            if (capabilities.hasCapability(NetworkCapabilities.NET_CAPABILITY_VALIDATED)) {
                int signalStrength = 0;
                if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.Q) {
                    signalStrength = capabilities.getSignalStrength();
                }
                if (signalStrength > 0) {
                    runOnUiThread(()->Toast.makeText(MainActivity.this, "Network strength is bad.", Toast.LENGTH_SHORT).show());
                }
            } else {
                runOnUiThread(()->Toast.makeText(MainActivity.this, "Network not validated.", Toast.LENGTH_SHORT).show());
            }
        } else {
            runOnUiThread(()->Toast.makeText(MainActivity.this, "No network available.", Toast.LENGTH_SHORT).show());
        }
    }
}