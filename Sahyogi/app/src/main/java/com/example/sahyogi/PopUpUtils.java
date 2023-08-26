package com.example.sahyogi;

import android.app.AlertDialog;
import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class PopUpUtils {

    public static void showPopup(Context context, String text) {
        AlertDialog.Builder builder = new AlertDialog.Builder(context);
        LayoutInflater inflater = LayoutInflater.from(context);
        View dialogView = inflater.inflate(R.layout.pop_up, null);

        TextView popupText = dialogView.findViewById(R.id.popup_text);
        Button okButton = dialogView.findViewById(R.id.ok_button);

        popupText.setText(text);

        builder.setView(dialogView);

        final AlertDialog dialog = builder.create();

        okButton.setOnClickListener(v -> dialog.dismiss());

        dialog.show();
    }
}

