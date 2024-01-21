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
    public String authenticate_user(@RequestParam String login_id, String password){
        return loginService.authenticate_user(login_id, password);
    }

}
