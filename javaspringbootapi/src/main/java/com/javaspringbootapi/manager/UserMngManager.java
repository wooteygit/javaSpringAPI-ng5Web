/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.javaspringbootapi.manager;

import com.javaspringbootapi.logic.UserMngLogic;
import com.javaspringbootapi.models.OutputModel;
import com.javaspringbootapi.models.UserRegisterModel;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

/**
 *
 * @author wootey02
 */
public class UserMngManager {
    
    public OutputModel UserValidation(DriverManagerDataSource dataSource, UserRegisterModel userRegis){
        try{
            OutputModel output = new OutputModel();
            if(userRegis.getUserName() != null && 
//                    userRegis.getAge() != null && 
                userRegis.getBirthDay() != null && 
                userRegis.getFirstName() != null &&
                userRegis.getLastName() != null &&
                userRegis.getMobile() != null &&
                userRegis.getPassword() != null &&
                userRegis.getBirthDay() != null
            ){
                output.setDatas(UserMngLogic.I().setUser(dataSource, userRegis));
                output.setErrorCode(1);
                output.setErrorMsg("Success");
            }else{
                output.setErrorCode(-1);
                output.setErrorMsg("Parameter not null");
            }
            
            return output;
        }catch(Exception ex){
            throw ex;
        }
    }
}
