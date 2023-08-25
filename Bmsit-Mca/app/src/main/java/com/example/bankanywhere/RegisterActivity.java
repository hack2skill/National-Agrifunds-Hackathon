package com.example.bankanywhere;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

public class RegisterActivity extends AppCompatActivity {
    EditText name,accno,passwd,phno,mail;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.register_layout);

        Button register= (Button) findViewById(R.id.signup);
        register.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                name=(EditText) findViewById(R.id.name);
                accno=(EditText) findViewById(R.id.accno);
                passwd=(EditText) findViewById(R.id.passwd);
                phno=(EditText) findViewById(R.id.phno);
                mail=(EditText) findViewById(R.id.email);
                validateRegister();
            }
        });
    }
    public void validateRegister(){
        if(passwd.getText().toString().isEmpty()){
            Toast.makeText(this,"Enter Password",Toast.LENGTH_LONG).show();
        }
    }
}
