package com.example.bankanywhere;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.*;

public class MainActivity extends AppCompatActivity {
    Button main_log,main_reg;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        main_log=(Button) findViewById(R.id.login);
        main_reg=(Button) findViewById(R.id.signup);

        main_log.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                doLogin();
            }
        });

        main_reg.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                doSignUp();
            }
        });
    }
    public void doLogin(){
        startActivity(new Intent(this,LoginActivity.class));
        Toast.makeText(this, "Logging in", Toast.LENGTH_SHORT).show();
    }

    public void doSignUp(){
        Toast.makeText(this, "Signing Up", Toast.LENGTH_SHORT).show();
        startActivity(new Intent(this,RegisterActivity.class));
    }
}