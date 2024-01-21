package dairy.product.itemManagement.repository;

import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface LoginRepository {

    List<Map<String, Object>> authenticate_user(String login_id, String password);
}
