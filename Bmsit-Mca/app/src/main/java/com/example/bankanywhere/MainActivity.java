package com.example.bankanywhere;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
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
                doBanking();
            }
        });
        govt.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                doGovt();
            }
        });
        pension.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                doPension();
            }
        });

    }
    public void doBanking(){
        startActivity(new Intent(this, BankingActivity.class));
        Toast.makeText(this, "Banking", Toast.LENGTH_SHORT).show();
    }

    public void doGovt(){
        Toast.makeText(this, "Govt", Toast.LENGTH_SHORT).show();
        startActivity(new Intent(this, GovtActivity.class));
    }
    public void doPension(){
        Toast.makeText(this, "Govt", Toast.LENGTH_SHORT).show();
        startActivity(new Intent(this,PensionActivity.class));
    }
}