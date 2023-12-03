package com.cyberx.nabardpay.ui;
import  com.cyberx.nabardpay.R;
import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentTransaction;

import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.TextView;
import android.widget.Toast;
import com.cyberx.nabardpay.ui.MainActivity;
import com.cyberx.nabardpay.ui.RegisterPage;
import com.cyberx.nabardpay.helper.BottomNavHelp;
import com.google.android.material.bottomnavigation.BottomNavigationView;
import com.google.android.material.navigation.NavigationBarView;


public class HomePage extends AppCompatActivity {

    private Toolbar mToolbar;
    private TextView toolbartext;
    private BottomNavigationView bottomNavigationView;
    private HomeFragment homeFragment;
    private AccountFragment accountFragment;
    private OffersFragment offersFragment;
    private TransactionFragment transactionFragment;
    private PaymentFragment paymentFragment;


    private NavigationBarView.OnItemSelectedListener onNavigationItemSelectedListener
            = item -> {
        int itemId = item.getItemId();

        if (itemId == R.id.navigation_home) {
            toolbartext.setText("Nabard Pay");
            setUpFragment(homeFragment);
            return true;
        } else if (itemId == R.id.navigation_offers) {
            toolbartext.setText("Discounts and Offers");
            setUpFragment(offersFragment);
            return true;
        } else if (itemId == R.id.navigation_payment) {
            toolbartext.setText("Scan and Pay");
            setUpFragment(paymentFragment);
            return true;
        } else if (itemId == R.id.navigation_transaction) {
            toolbartext.setText("Transaction");
            setUpFragment(transactionFragment);
            return true;
        } else if (itemId == R.id.navigation_account) {
            toolbartext.setText("Account");
            setUpFragment(accountFragment);
            return true;
        } else {
            return false;
        }
    };

    private void setUpFragment(Fragment fragment) {
        FragmentTransaction fragmentTransaction = getSupportFragmentManager().beginTransaction();
        fragmentTransaction.setCustomAnimations(android.R.animator.fade_in, android.R.animator.fade_out);
        fragmentTransaction.replace(R.id.home_view, fragment);
        fragmentTransaction.commit();
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home_page);
        initViews();
        setSupportActionBar(mToolbar);
        getSupportActionBar().setTitle("");
        toolbartext.setText("");
        bottomNavigationView.setOnItemSelectedListener(onNavigationItemSelectedListener);
        BottomNavHelp.removeShiftMode(bottomNavigationView);

        FragmentTransaction beginTransaction = getSupportFragmentManager().beginTransaction();
        beginTransaction.replace(R.id.home_view, homeFragment);
        beginTransaction.commit();
    }

    private void initViews() {
        mToolbar = findViewById(R.id.toolbar);
        toolbartext = findViewById(R.id.title_toolbar);
        bottomNavigationView = findViewById(R.id.navigation);
        homeFragment = HomeFragment.newInstance();
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.menu_home, menu);
        return super.onCreateOptionsMenu(menu);
    }

    @Override
    public boolean onOptionsItemSelected(@NonNull MenuItem item) {
        int itemId = item.getItemId();

        if (itemId == R.id.notify) {
            Toast.makeText(this, "Notification", Toast.LENGTH_SHORT).show();
            return true;
        } else if (itemId == R.id.scanNpay) {
            Toast.makeText(this, "Scan and Pay", Toast.LENGTH_SHORT).show();
            return true;
        } else {
            return super.onOptionsItemSelected(item);
        }
    }

}