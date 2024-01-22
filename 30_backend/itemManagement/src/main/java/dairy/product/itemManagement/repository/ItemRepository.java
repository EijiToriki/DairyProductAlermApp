package dairy.product.itemManagement.repository;

import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface ItemRepository {
    List<Map<String, Object>> get_all_items(String user_id);
}
