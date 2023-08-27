package com.cyberx.nabardpay.model;

public class OfferModel {
    private String offer_on,offer_details;
    private int image;

    public OfferModel(String offer_on, String offer_details, int image) {
        this.offer_on = offer_on;
        this.offer_details = offer_details;
        this.image = image;
    }

    public String getOffer_on() {
        return offer_on;
    }

    public void setOffer_on(String offer_on) {
        this.offer_on = offer_on;
    }

    public String getOffer_details() {
        return offer_details;
    }

    public void setOffer_details(String offer_details) {
        this.offer_details = offer_details;
    }

    public int getImage() {
        return image;
    }

    public void setImage(int image) {
        this.image = image;
    }
}
