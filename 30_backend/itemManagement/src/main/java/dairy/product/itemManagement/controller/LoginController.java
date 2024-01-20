package dairy.product.itemManagement.controller;

import dairy.product.itemManagement.service.LoginService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping
@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class LoginController {

    private final LoginService loginService;
    @GetMapping("/auth_user")
    public void authenticate_user(@RequestParam String user_id, String password){
        loginService.authenticate_user(user_id, password);
    }

}
