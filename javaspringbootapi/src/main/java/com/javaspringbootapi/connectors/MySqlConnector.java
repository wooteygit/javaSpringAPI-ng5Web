/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.javaspringbootapi.connectors;

/**
 *
 * @author senateideapad320-1
 */
public class MySqlConnector {
    private static MySqlConnector instance;
    
    private MySqlConnector(){}
    
    public MySqlConnector I(){
        if(instance == null){
            instance = new MySqlConnector();
        }
        return instance;
    }
}
