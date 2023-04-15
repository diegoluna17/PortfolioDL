/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfoliodl.DL.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


/**
 *
 * @author Diego Luna
 */
@Entity
public class Estudio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
    private String nombreEs;
    private String descripcionEs;
    
    //Constructores

    public Estudio() {
    }

    public Estudio(String nombreEs, String descripcionEs) {
        this.nombreEs = nombreEs;
        this.descripcionEs = descripcionEs;
    }
    
    // Get & Set

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombreEs() {
        return nombreEs;
    }

    public void setNombreEs(String nombreEs) {
        this.nombreEs = nombreEs;
    }

    public String getDescripcionEs() {
        return descripcionEs;
    }

    public void setDescripcionEs(String descripcionEs) {
        this.descripcionEs = descripcionEs;
    }
    
    
}
