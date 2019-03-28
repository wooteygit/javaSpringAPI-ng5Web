/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.javaspringbootapi.controllers;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
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
}
