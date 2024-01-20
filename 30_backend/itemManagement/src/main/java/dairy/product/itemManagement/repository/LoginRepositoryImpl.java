package dairy.product.itemManagement.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;
import java.util.Map;

public class LoginRepositoryImpl implements LoginRepository{

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public void authenticate_user(String user_id, String password){
        String sql = "SELECT * FROM user WHERE login_id = ? AND password = ?";
        List<Map<String, Object>> result = jdbcTemplate.queryForList(sql, user_id, password);

        System.out.println(result);
    }
}
