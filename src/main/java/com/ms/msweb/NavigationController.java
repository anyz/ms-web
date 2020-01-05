package com.ms.msweb;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.validation.ConstraintViolationException;

@Controller
public class NavigationController {

    static final String HOME = "index";
    static final String PROGRAMS = "programs";

    @RequestMapping(value="/", method = RequestMethod.GET)
    public String home(Model model){
        return HOME;
    }

    @RequestMapping(value="/programs", method = RequestMethod.GET)
    public String programs(Model model){
        return PROGRAMS;
    }


    @InitBinder
    public void setDisallowedFields(WebDataBinder binder){
        binder.setDisallowedFields(new String[]{});
    }

    @ExceptionHandler(ConstraintViolationException.class)
    public ResponseEntity badRequest(){
        return ResponseEntity.badRequest().build();
    }
}
