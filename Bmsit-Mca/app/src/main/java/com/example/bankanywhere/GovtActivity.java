package com.example.bankanywhere;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;
import android.widget.*;
import android.app.AlertDialog.Builder;

import androidx.appcompat.app.AppCompatActivity;

public class GovtActivity extends AppCompatActivity {
    Spinner scheme_select;
    Button register,auth;
    TextView aadhar_title;
    EditText aadhar_value;
    String[] schemes={"Farmers Crop Insurance","Pradhan Mantri Samman nidhi yojana",
    "Kisan Credit Card Scheme"};
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.government_layout);
        register=(Button) findViewById(R.id.register);
        auth=(Button) findViewById(R.id.auth);
        scheme_select=(Spinner) findViewById(R.id.schemeSpinner);
        ArrayAdapter<String>adapter=new ArrayAdapter<>(this,android.R.layout.simple_spinner_dropdown_item,schemes);
        scheme_select.setAdapter(adapter);
        aadhar_title=(TextView) findViewById(R.id.aadhar_title);
        aadhar_value=(EditText) findViewById(R.id.aadhar_value);

        register.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                aadhar_title.setVisibility(View.VISIBLE);
                aadhar_value.setVisibility(View.VISIBLE);
                auth.setVisibility(View.VISIBLE);
            }
        });
        auth.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if(aadhar_value.getText().length()<10){
                    showMessage("Error","Enter Valid aadhar number");
                }
                else{
                    showMessage("Authenticate","Biometric Verification will happen now");
                }
            }
        });
    }
    public void showMessage(String title,String message){
        Builder builder=new Builder(this);
        builder.setCancelable(true);
        builder.setTitle(title);
        builder.setMessage(message);
        builder.show();
    }
}
