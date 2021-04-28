package project.models;

import javax.persistence.*;
import java.sql.Date;
@Entity
@Table(name="orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private int transactionnumber;
    private int userid;
    private int productid;
    private int quantity;
    private double saleprice;

    public Order() {
    }

    public Order(int transactionnumber, int userid, int productid, int quantity, double saleprice) {
        this.transactionnumber = transactionnumber;
        this.userid = userid;
        this.productid = productid;
        this.quantity = quantity;
        this.saleprice = saleprice;
    }

    public int getTransactionnumber() {
        return transactionnumber;
    }

    public void setTransactionnumber(int transactionnumber) {
        this.transactionnumber = transactionnumber;
    }

    public int getUserid() {
        return userid;
    }

    public void setUserid(int userid) {
        this.userid = userid;
    }

    public int getProductid() {
        return productid;
    }

    public void setProductid(int productid) {
        this.productid = productid;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getSaleprice() {
        return saleprice;
    }

    public void setSaleprice(double saleprice) {
        this.saleprice = saleprice;
    }

    public Integer getId() {
        return id;
    }
}
