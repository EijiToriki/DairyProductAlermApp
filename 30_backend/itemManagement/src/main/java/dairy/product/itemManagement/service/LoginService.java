package dairy.product.itemManagement.service;

import dairy.product.itemManagement.repository.LoginRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LoginService {

    private final LoginRepository loginRepository;
    public void authenticate_user(String user_id, String password){
        loginRepository.authenticate_user(user_id, password);
    }

}
