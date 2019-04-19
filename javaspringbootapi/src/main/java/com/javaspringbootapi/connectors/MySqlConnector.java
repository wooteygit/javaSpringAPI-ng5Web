/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.javaspringbootapi.connectors;

import com.javaspringbootapi.models.ConfigPropertiesModel;
import com.javaspringbootapi.models.ProcedureOutputModel;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

/**
 *
 * @author senateideapad320-1
 */
@EnableAutoConfiguration
public class MySqlConnector {
    private static MySqlConnector instance;
    
    @Autowired
    private ConfigPropertiesModel config;
    
    private DriverManagerDataSource ds;
    
    private MySqlConnector(){
    }
    
    public JdbcTemplate getJdbcTemplate(ConfigPropertiesModel config){
        try{
            DriverManagerDataSource ds = new DriverManagerDataSource();
            ds.setDriverClassName("com.mysql.jdbc.Driver");
            ds.setUrl("jdbc:mysql://"+config.getHostName()+":"+config.getPort()+"/"+config.getDatabaseName());
            ds.setUsername(config.getUserName());
            ds.setPassword(config.getPassword());
            JdbcTemplate jdbcTemplate = new JdbcTemplate(ds);
            
            return jdbcTemplate;
        }catch(Exception ex){
            throw ex;
        }
        
    }
    
    public static MySqlConnector I(){
        if(instance == null){
            instance = new MySqlConnector();
        }
        return instance;
    }
    
    public ProcedureOutputModel CallProcedure(JdbcTemplate jdbcTemplate, String procedureName, ArrayList<String>paramIn){
        try{
            String setParam = "", 
                setCall = "CALL `"+procedureName+"`(", 
                setSelect = "SELECT @o1 AS `o_PROCESS_STATUS`, @o2 AS `o_PROCESS_ERROR_MSG`;",
                sql = "";
            
            for(int i = 0;i < paramIn.size(); i++){
                setParam += "SET @p"+i+"="+(paramIn.get(i).toUpperCase().equals("NULL")? "NULL" : "'"+paramIn.get(i)+"'")+";";
                setCall += "@p"+i+",";                
            }
            setCall += "@o1, @o2);";
            sql = setParam + setCall + setSelect;
            ProcedureOutputModel output = (ProcedureOutputModel) jdbcTemplate.queryForObject("SELECT 1 AS `o_PROCESS_STATUS`, 2 AS `o_PROCESS_ERROR_MSG`", new RowMapper(){
                @Override
		public ProcedureOutputModel mapRow(ResultSet rs, int rowNum)throws SQLException {
                    ProcedureOutputModel out = new ProcedureOutputModel();
                    out.setProcessStatus(rs.getInt("o_PROCESS_STATUS"));
                    out.setProcessErrorMng(rs.getString("o_PROCESS_ERROR_MSG"));
                    return out;
		}
            });
            
            return output;
        }catch(Exception ex){
            throw ex;
        }
    }
    
}
