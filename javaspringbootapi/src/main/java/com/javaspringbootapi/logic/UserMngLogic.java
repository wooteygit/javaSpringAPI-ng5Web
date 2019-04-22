/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.javaspringbootapi.logic;

import com.javaspringbootapi.connectors.MySqlConnector;
import com.javaspringbootapi.models.UserRegisterModel;
import java.util.HashMap;
import java.util.Map;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

/**
 *
 * @author wootey02
 */
public class UserMngLogic {
    private static UserMngLogic instance;
    
    private UserMngLogic(){}
    
    public static UserMngLogic I(){
        if(instance == null)
            instance = new UserMngLogic();
        return instance;
    }
    
    public Map<String, Object> setUser(DriverManagerDataSource dataSource, UserRegisterModel userRegis){
        try{
            Map<String, Object> map = new HashMap<String, Object>();
            map.put("i_USER_ID", ""+userRegis.getUserID());
            map.put("i_USER_NAME", userRegis.getUserName());
            map.put("i_PASSWORD", userRegis.getPassword());
            map.put("i_FIRST_NAME", userRegis.getFirstName());
            map.put("i_LAST_NAME", userRegis.getLastName());
            map.put("i_AGE", ""+userRegis.getAge());
            map.put("i_BIRTH_DAY", userRegis.getBirthDay());
            map.put("i_MOBILE", userRegis.getMobile()); 
            Map<String, Object> rs = MySqlConnector.I().CallSP(dataSource, "UP_MNG_USER", map);
            return rs;
        }catch(Exception ex){
            throw ex;
        }
        
    }
}
