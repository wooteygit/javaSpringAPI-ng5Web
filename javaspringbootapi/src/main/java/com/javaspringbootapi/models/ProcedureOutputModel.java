/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.javaspringbootapi.models;

/**
 *
 * @author senateideapad320-1
 */
public class ProcedureOutputModel {
    private int processStatus;
    private String processErrorMng;

    public int getProcessStatus() {
        return processStatus;
    }

    public void setProcessStatus(int processStatus) {
        this.processStatus = processStatus;
    }

    public String getProcessErrorMng() {
        return processErrorMng;
    }

    public void setProcessErrorMng(String processErrorMng) {
        this.processErrorMng = processErrorMng;
    }
    
}
