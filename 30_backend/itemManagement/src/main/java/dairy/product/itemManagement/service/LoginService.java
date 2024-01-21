package dairy.product.itemManagement.service;

import dairy.product.itemManagement.repository.LoginRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class LoginService {

    private final LoginRepository loginRepository;
    public String authenticate_user(String login_id, String password){
        List<Map<String, Object>> user_info = loginRepository.authenticate_user(login_id, password);

        if(user_info.size() == 1){
            return (String) user_info.get(0).get("id");
        }else{
            return "-1";
        }

    }

}
