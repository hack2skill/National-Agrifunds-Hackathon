package com.cyberx.nabardpay.helper;

import android.annotation.SuppressLint;
import android.view.Menu;

import com.google.android.material.bottomnavigation.BottomNavigationItemView;
import com.google.android.material.bottomnavigation.BottomNavigationMenuView;
import com.google.android.material.bottomnavigation.BottomNavigationView;

import java.lang.reflect.Field;

public class BottomNavHelp {
    @SuppressLint("RestrictedApi")
    public static void removeShiftMode(BottomNavigationView view) {
        BottomNavigationMenuView menu = (BottomNavigationMenuView) view.getChildAt(0);
        try {
            Field shiftingMode = menu.getClass().getDeclaredField("mShiftingMode");
            shiftingMode.setAccessible(true);
            shiftingMode.setBoolean(menu, false);
            shiftingMode.setAccessible(false);

            for (int i = 0; i < menu.getChildCount(); i++) {
                BottomNavigationItemView item = (BottomNavigationItemView) menu.getChildAt(i);
                item.setChecked(item.getItemData().isChecked());
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
