package dairy.product.itemManagement.repository;

import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;
import java.util.Map;

@Repository
public interface ItemRepository {
    List<Map<String, Object>> get_all_items(String user_id);
    int delete_item(String item_id, String user_id);

    int register_item(
            String id,
            String user_id,
            String item_name,
            String img_file_name,
            Date register_date,
            Integer span_num,
            String span_unit,
            Integer price,
            String tag,
            byte[] image
    );
}
