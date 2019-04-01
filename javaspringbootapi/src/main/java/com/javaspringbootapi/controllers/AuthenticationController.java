/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.javaspringbootapi.controllers;
        
import com.javaspringbootapi.InstanceApp;
import com.javaspringbootapi.manager.AuthenticationManager;
import com.javaspringbootapi.models.AuthenticationModel;       
import com.javaspringbootapi.models.OutputModel;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author senateideapad320-1
 */
@CrossOrigin
@RestController
@EnableAutoConfiguration        
public class AuthenticationController {
    
    @RequestMapping(method = RequestMethod.POST, value="/auth", produces = "application/json;")
    @ResponseBody
    public OutputModel Authentication(@RequestBody AuthenticationModel auth){
        OutputModel output;
        int retcode = InstanceApp.UNKNOWN;
        try{
            output = AuthenticationManager.I().CheckLogin(auth);
        }catch(Exception ex){
            output = new OutputModel();
            output.setErrorCode(retcode);
            output.setErrorMsg(ex.getMessage());
        }
        return output;
    }
}
