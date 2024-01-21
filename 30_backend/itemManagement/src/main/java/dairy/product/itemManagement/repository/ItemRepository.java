package dairy.product.itemManagement.repository;

import org.springframework.stereotype.Repository;

@Repository
public interface ItemRepository {
    void get_all_items(String user_id);
}
