package com.example.bankanywhere;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;
public class BankingActivity extends AppCompatActivity {
    EditText log_input,log_passwd;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.banking_activity);
        Button log_btn=(Button) findViewById(R.id.login_login);
        log_btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                log_input=(EditText) findViewById(R.id.login_name);
                log_passwd=(EditText) findViewById(R.id.login_passwd);
                validateLogin();
            }
        });
    }

    public void validateLogin(){
        if(log_passwd.getText().toString().isEmpty()){
            Toast.makeText(this,"No passwd",Toast.LENGTH_LONG).show();
        }
    }
}
