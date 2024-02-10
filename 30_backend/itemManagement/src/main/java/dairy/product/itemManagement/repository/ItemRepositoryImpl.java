package dairy.product.itemManagement.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public class ItemRepositoryImpl implements ItemRepository{

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public List<Map<String, Object>> get_all_items(String user_id){
        String sql = "SELECT * FROM item WHERE user_id = ?";
        return jdbcTemplate.queryForList(sql, user_id);
    }

    @Override
    @Transactional
    public int delete_item(String item_id, String user_id){
        String sql = "DELETE FROM item WHERE id = ? AND user_id = ?";
        return jdbcTemplate.update(sql, item_id, user_id);

    }
}
