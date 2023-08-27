package com.cyberx.nabardpay.model;

public class DealerModel {
    private String dealer_name,
    discount_offer,
    discount_amt,
    discount_way,
    discount_details;

    public DealerModel(String dealer_name, String discount_offer, String discount_amt, String discount_way, String discount_details) {
        this.dealer_name = dealer_name;
        this.discount_offer = discount_offer;
        this.discount_amt = discount_amt;
        this.discount_way = discount_way;
        this.discount_details = discount_details;
    }

    public String getDealer_name() {
        return dealer_name;
    }

    public void setDealer_name(String dealer_name) {
        this.dealer_name = dealer_name;
    }

    public String getDiscount_offer() {
        return discount_offer;
    }

    public void setDiscount_offer(String discount_offer) {
        this.discount_offer = discount_offer;
    }

    public String getDiscount_amt() {
        return discount_amt;
    }

    public void setDiscount_amt(String discount_amt) {
        this.discount_amt = discount_amt;
    }

    public String getDiscount_way() {
        return discount_way;
    }

    public void setDiscount_way(String discount_way) {
        this.discount_way = discount_way;
    }

    public String getDiscount_details() {
        return discount_details;
    }

    public void setDiscount_details(String discount_details) {
        this.discount_details = discount_details;
    }
}
