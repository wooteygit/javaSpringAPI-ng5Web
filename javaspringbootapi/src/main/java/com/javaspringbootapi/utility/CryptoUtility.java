/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.javaspringbootapi.utility;

import java.text.DateFormat;
import java.util.Base64;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 *
 * @author senateideapad320-1
 */
public class CryptoUtility {
    private static final String KEY = "XRPIVFLJVFKX";
    private static final String DATE_FORMAT_NOW = "yyyy-MM-dd HH:mm:ss";
    
    private static CryptoUtility instance;
    
    private CryptoUtility(){}
    
    public static CryptoUtility I(){
        if(instance == null){
             instance = new CryptoUtility();
        }
        return instance;
    }
    
    public String authEndcodeCrypto(String userName, String password){
        try{
            DateFormat df = new SimpleDateFormat(DATE_FORMAT_NOW);
            
            String originalInput = KEY+"|"+password+"|"+userName+"|"+df.format(new Date());
            String crypto = Base64.getEncoder().encodeToString(originalInput.getBytes());
            
            return crypto;
        }catch(Exception ex){
            throw ex;
        }
    }
    
    public String authDecodeCrypto(String crypto){
        try{
            byte[] decodedBytes = Base64.getDecoder().decode(crypto);
            String decodedString = new String(decodedBytes);            
            return decodedString;
        }catch(Exception ex){
            throw ex;
        }
    }
}
