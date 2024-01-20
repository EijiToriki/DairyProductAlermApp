package dairy.product.itemManagement.repository;

import org.springframework.stereotype.Repository;

@Repository
public interface LoginRepository {

    void authenticate_user(String user_id, String password);
}
