package com.cyberx.nabardpay.ui;

import android.content.Context;
import android.os.Bundle;
import android.text.Html;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.TextView;

import androidx.fragment.app.Fragment;
import androidx.viewpager.widget.ViewPager;

import com.cyberx.nabardpay.R;
import com.cyberx.nabardpay.adapter.HomeViewPagerAdapter;

import java.util.ArrayList;
import java.util.Timer;
import java.util.TimerTask;

public class HomeFragment extends Fragment {
    private Context context;
    private ViewPager viewPager;
    private LinearLayout lnyrLyt;
    private ArrayList<Integer> offerList;
    private int count = 0;
    private Timer timer;

    public HomeFragment() {
        // Required empty public constructor
    }

    public static HomeFragment newInstance() {
        return new HomeFragment();
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        context = getContext();
    }

    private void initViews(View view) {
        viewPager = view.findViewById(R.id.view_pager_home);
        lnyrLyt = view.findViewById(R.id.ln_points_home);
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {

        View view = inflater.inflate(R.layout.fragment_home, container, false);
        initViews(view);
        setupViewPager();

        viewPager.addOnPageChangeListener(new ViewPager.OnPageChangeListener() {
            @Override
            public void onPageScrolled(int position, float positionOffset, int positionOffsetPixels) {
            }

            @Override
            public void onPageSelected(int position) {
                addBottomDots(position);
            }

            @Override
            public void onPageScrollStateChanged(int state) {
            }
        });

        timer = new Timer();
        timer.schedule(new TimerTask() {
            @Override
            public void run() {
                getActivity().runOnUiThread(() -> {
                    if (count <= offerList.size()) {
                        viewPager.setCurrentItem(count);
                        count++;
                    } else {
                        count = 0;
                        viewPager.setCurrentItem(count);
                    }
                });
            }
        }, 500, 2000);

        return view;
    }

    private void setupViewPager() {
        offerList = new ArrayList<>();
        offerList.add(R.drawable.jsi);//banner1
        offerList.add(R.drawable.jse1);//banner2
        offerList.add(R.drawable.jse2);//banner3
        HomeViewPagerAdapter viewPagerAdapter = new HomeViewPagerAdapter(context, offerList);
        viewPager.setAdapter(viewPagerAdapter);
        addBottomDots(0);
    }

    private void addBottomDots(int currentPage) {
        TextView[] mTxtDot = new TextView[offerList.size()];
        lnyrLyt.removeAllViews();

        for (int i = 0; i < mTxtDot.length; i++) {
            mTxtDot[i] = new TextView(context);
            mTxtDot[i].setText(Html.fromHtml("&#8226;"));
            mTxtDot[i].setTextSize(35);
            mTxtDot[i].setTextColor(getResources().getColor(R.color.grey));
            lnyrLyt.addView(mTxtDot[i]);
        }

        if (mTxtDot.length > 0) {
            mTxtDot[currentPage].setTextColor(getResources().getColor(R.color.white)); // Adjust color here
        }
    }

    @Override
    public void onDetach() {
        super.onDetach();
        timer.cancel();
    }
}
