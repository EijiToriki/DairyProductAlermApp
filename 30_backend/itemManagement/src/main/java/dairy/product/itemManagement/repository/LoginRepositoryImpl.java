package dairy.product.itemManagement.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public class LoginRepositoryImpl implements LoginRepository{

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public List<Map<String, Object>> authenticate_user(String login_id, String password){
        String sql = "SELECT * FROM user WHERE login_id = ? AND password = ?";
        return jdbcTemplate.queryForList(sql, login_id, password);
    }
}
