/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.javaspringbootapi.controllers;

import com.javaspringbootapi.connectors.MySqlConnector;
import com.javaspringbootapi.models.ConfigPropertiesModel;
import com.javaspringbootapi.models.ProcedureOutputModel;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author senateideapad320-1
 */
@RestController
@EnableAutoConfiguration
public class AppSetingController {
    
    @Autowired
    private ConfigPropertiesModel config;
        
    @RequestMapping(method = RequestMethod.GET, value="/", produces = "text/html; charset=UTF-8")
    @ResponseBody
    public String document(@RequestHeader(name = "auth_key", required = true) String auth_key) {
        String html = "";
        try{
            return auth_key;
        }
        catch(Exception ex){
            return ex.getMessage();
        }
    }
    
    @CrossOrigin
    @RequestMapping(method = RequestMethod.GET, value="/version", produces = "text/html; charset=UTF-8")
    @ResponseBody
    public Object version() {
        String html = "";
        try{
            html = config.getHostName();;
            return "1.0.0";
        }
        catch(Exception ex){
            return ex.getMessage();
        }
    }
}
