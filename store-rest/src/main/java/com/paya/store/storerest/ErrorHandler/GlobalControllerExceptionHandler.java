package com.paya.store.storerest.ErrorHandler;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

import javax.servlet.http.HttpServletRequest;

@ControllerAdvice
class GlobalControllerExceptionHandler {



    @ResponseStatus(value=HttpStatus.CONFLICT,
            reason="Data integrity violation")  // 409
    @ExceptionHandler(DataIntegrityViolationException.class)
    public void handleConflict(HttpServletRequest req, DataIntegrityViolationException e) {
    }

    @ResponseStatus(value=HttpStatus.BAD_REQUEST,
            reason="Bad Request")
    @ExceptionHandler(Exception.class)
    public void handleError(HttpServletRequest req, Exception ex) {
    }
}