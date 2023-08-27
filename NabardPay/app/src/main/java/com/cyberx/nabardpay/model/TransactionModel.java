package com.cyberx.nabardpay.model;

public class TransactionModel {
    private String txn_date, txn_med, txn_amt, txn_dealer, txn_cd;
    private int img_txn_way;
    //med=medium
    //cd=credit
    //txn=transaction


    public TransactionModel(String txn_date, String txn_med, String txn_amt, String txn_dealer, String txn_cd, int img_txn_way) {
        this.txn_date = txn_date;
        this.txn_med = txn_med;
        this.txn_amt = txn_amt;
        this.txn_dealer = txn_dealer;
        this.txn_cd = txn_cd;
        this.img_txn_way = img_txn_way;
    }

    public String getTxn_date() {
        return txn_date;
    }

    public void setTxn_date(String txn_date) {
        this.txn_date = txn_date;
    }

    public String getTxn_med() {
        return txn_med;
    }

    public void setTxn_med(String txn_med) {
        this.txn_med = txn_med;
    }

    public String getTxn_amt() {
        return txn_amt;
    }

    public void setTxn_amt(String txn_amt) {
        this.txn_amt = txn_amt;
    }

    public String getTxn_dealer() {
        return txn_dealer;
    }

    public void setTxn_dealer(String txn_dealer) {
        this.txn_dealer = txn_dealer;
    }

    public String getTxn_cd() {
        return txn_cd;
    }

    public void setTxn_cd(String txn_cd) {
        this.txn_cd = txn_cd;
    }

    public int getImg_txn_way() {
        return img_txn_way;
    }

    public void setImg_txn_way(int img_txn_way) {
        this.img_txn_way = img_txn_way;
    }

}
