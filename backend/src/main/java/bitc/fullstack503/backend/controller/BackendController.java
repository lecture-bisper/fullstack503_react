package bitc.fullstack503.backend.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("http://localhost:5173")
@RestController
public class BackendController {

  @RequestMapping("/hello")
  public String hello() {
    return "Hello react + Spring";
  }
}












