/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.javaspringbootapi.controllers;

import com.javaspringbootapi.connectors.MySqlConnector;
import com.javaspringbootapi.manager.UserMngManager;
import com.javaspringbootapi.models.ConfigPropertiesModel;
import com.javaspringbootapi.models.OutputModel;
import com.javaspringbootapi.models.UserRegisterModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author wootey02
 */
@RestController
@EnableAutoConfiguration
public class UserMngController {
    @Autowired
    private ConfigPropertiesModel config;
    
    @RequestMapping(method = RequestMethod.POST, value="/user-register", produces = "application/json; charset=UTF-8")
    @ResponseBody
    public OutputModel UserRegister(@RequestBody UserRegisterModel userRegis){
        
        try{
            DriverManagerDataSource dataSource = MySqlConnector.I().getDriverManagerDataSource(config);
            OutputModel output = new UserMngManager().UserValidation(dataSource, userRegis);
            return output;
        }catch(Exception ex){
            OutputModel output = new OutputModel();
            output.setErrorCode(-1);
            output.setErrorMsg(ex.getMessage());
            return output;
        }
    }
}
