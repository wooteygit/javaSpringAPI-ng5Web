/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.javaspringbootapi.connectors;

import com.javaspringbootapi.models.ConfigPropertiesModel;
import org.springframework.beans.factory.annotation.Autowired;

/**
 *
 * @author senateideapad320-1
 */
public class MySqlConnector {
    private static MySqlConnector instance;
    @Autowired
    private ConfigPropertiesModel config;
    
    private MySqlConnector(){}
    
    public MySqlConnector I(){
        if(instance == null){
            instance = new MySqlConnector();
        }
        return instance;
    }
    
}
