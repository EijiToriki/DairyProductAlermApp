package dairy.product.itemManagement.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class ItemRepositoryImpl implements ItemRepository{

    @Autowired
    private JdbcTemplate jdbcTemplate;
    @Override
    public void get_all_items(String user_id){
        String sql = "SELECT * FROM item WHERE user_id = ?";
        System.out.println(jdbcTemplate.queryForList(sql, user_id));
    }
}
