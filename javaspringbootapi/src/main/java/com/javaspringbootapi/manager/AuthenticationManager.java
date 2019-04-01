/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.javaspringbootapi.manager;

import com.javaspringbootapi.InstanceApp;
import com.javaspringbootapi.models.AuthenticationModel;
import com.javaspringbootapi.models.OutputModel;
import com.javaspringbootapi.utility.CryptoUtility;


/**
 *
 * @author senateideapad320-1
 */
public class AuthenticationManager {
    
    private static AuthenticationManager instance;
    
    private AuthenticationManager(){}
    
    public static AuthenticationManager I(){
        if(instance == null){
            instance = new AuthenticationManager();
        }
        return instance;
    }
    
    public static OutputModel CheckLogin(AuthenticationModel auth){
        OutputModel output;
        try{
            output = new OutputModel();
            output.setErrorCode(InstanceApp.UNKNOWN);
            
            if(auth.getUserName().equals("admin") && auth.getPassword().equals("1234")){
                String auth_key = CryptoUtility.I().authEndcodeCrypto(auth.getUserName(), auth.getPassword());
                output.setDatas(auth_key);
                output.setErrorCode(InstanceApp.SUCCESS);
            }else{
                output.setErrorCode(InstanceApp.AUTH_ERROR);
                output.setErrorMsg("The Username or Password incorrect!");
            }
            return output;
        }catch(Exception ex){
            output = new OutputModel();
            output.setErrorCode(InstanceApp.UNKNOWN);
            output.setErrorMsg(ex.getMessage());
            return output;
        }
    }
}
