package com.example.bankanywhere;

import android.content.Context;
import android.database.Cursor;
import android.os.Bundle;
import android.database.sqlite.SQLiteDatabase;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

public class PensionActivity extends AppCompatActivity {
    SQLiteDatabase db;
    TextView info;
    Button submit;
    EditText ano;
    @Override
    protected void onCreate(Bundle saveInstanceState) {
        super.onCreate(saveInstanceState);
        setContentView(R.layout.pension_layout);
        db=openOrCreateDatabase("BankDB", Context.MODE_PRIVATE,null);
        info=(TextView) findViewById(R.id.status);
        submit=(Button) findViewById(R.id.submitButton);
        ano=(EditText) findViewById(R.id.pensionacdetails);
        submit.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String acno=ano.getText().toString();
                if(acno.length()==0||acno.length()<10){
                    info.setText("Enter valid Account Number");
                    return;
                }
                Cursor c=db.rawQuery("select * from bank where accno='"+acno+"';",null);
                if(c.moveToFirst()){
                    String dbs=c.getString(0);
                    info.setText(dbs);
                }
            }
        });
    }
}
