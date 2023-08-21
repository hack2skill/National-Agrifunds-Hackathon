package com.example.bankanywhere;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        TextView h=(TextView) findViewById(R.id.hh);
        h.setText("Hellooooooo frommmmm Hiiii");
    }
}