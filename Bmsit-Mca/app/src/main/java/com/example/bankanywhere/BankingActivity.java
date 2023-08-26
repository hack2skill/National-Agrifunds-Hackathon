package com.example.bankanywhere;

import android.app.AlertDialog.Builder;
import android.content.Context;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;

import androidx.appcompat.app.AppCompatActivity;
public class BankingActivity extends AppCompatActivity {
    EditText sender,receiver,sender_ifsc,receiver_ifsc,sender_amt;
    Button send;
    SQLiteDatabase db;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.banking_activity);
        sender=(EditText) findViewById(R.id.senderAccountNumberEditText);
        receiver=(EditText) findViewById(R.id.receiverAccountNumberEditText);
        sender_ifsc=(EditText) findViewById(R.id.senderIFSCCodeEditText);
        receiver_ifsc=(EditText) findViewById(R.id.receiverIFSCCodeEditText);
        sender_amt=(EditText) findViewById(R.id.amountEditText);

        send=(Button) findViewById(R.id.sendMoneyButton);

        db=openOrCreateDatabase("BankDB", Context.MODE_PRIVATE,null);
        db.execSQL("CREATE TABLE IF NOT EXISTS BANK(name VARCHAR,accno VARCHAR,ifsc VARCHAR,amt VARCHAR);");
        db.execSQL("INSERT INTO BANK VALUES('Anirudh','1234567890','SBIN1234567',10000);");
        showMessage("Database","Inserted Anirudh into DB,Please check now");
        send.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
//                if(sender.getText().length()<10||sender_ifsc.getText().length()<11){
//                    showMessage("Error","Enter sender fields correctly");
//                }
//                else if(receiver.getText().length()<10||receiver_ifsc.getText().length()<11)
//                    showMessage("Error","Enter Receiver fields correctly");
                Cursor c=db.rawQuery("Select * from bank where name='Anirudh';",null);
                if(c.moveToFirst()){
                    showMessage("Success",c.getString(1));
                }
            }
        });
    }

    public void showMessage(String title,String message){
        Builder build=new Builder(this);
        build.setCancelable(true);
        build.setTitle(title);
        build.setMessage(message);
        build.show();
    }
}
