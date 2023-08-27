package com.example.bankanywhere;

import android.app.AlertDialog.Builder;
import android.content.Context;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;

import androidx.appcompat.app.AppCompatActivity;
public class BankingActivity extends AppCompatActivity {
    EditText sender,receiver,sender_ifsc,receiver_ifsc,sender_amt;
    Button send;
    TextView info;
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
        info=(TextView) findViewById(R.id.information);

        send=(Button) findViewById(R.id.sendMoneyButton);

        db=openOrCreateDatabase("BankDB", Context.MODE_PRIVATE,null);
        db.execSQL("CREATE TABLE IF NOT EXISTS BANK(name VARCHAR,accno VARCHAR,ifsc VARCHAR,amt int);");
        db.execSQL("INSERT INTO BANK VALUES('Anirudh','1234567890','SBIN1234567','10000');");
        db.execSQL("INSERT INTO BANK VALUES('Vineeth','3216549870','SBIN1234567','50000')");
        showMessage("Database","Inserted Anirudh into DB,Please check now");
        send.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String client=sender.getText().toString();
                String client_ifsc=sender_ifsc.getText().toString();
                String rv=receiver.getText().toString();
                String rv_ifsc=receiver_ifsc.getText().toString();
                if(client.length()<10||client_ifsc.length()<11){
                    showMessage("Error","Enter sender fields correctly");
                    return;
                }
                else if(rv.length()<10||rv_ifsc.length()<11){
                    showMessage("Error","Enter Receiver fields correctly");
                return;}
//                Cursor c=db.rawQuery("Select * from bank where name='Anirudh';",null);
//                if(c.moveToFirst()){
//                    showMessage("Success",c.getString(1));
//                }
                String query="update bank set amt=amt+"+Integer.parseInt(sender_amt.getText().toString())+" where accno='"+rv+"';";
                String callBack="select * from bank where accno="+Long.parseLong(rv)+";";

                db.execSQL(query);
                Cursor c=db.rawQuery(callBack,null);
                if(c.moveToFirst()){
                    info.setText("Updated Balance of "+rv+":"+c.getLong(3));
                    //db.execSQL("delete from bank;");
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
