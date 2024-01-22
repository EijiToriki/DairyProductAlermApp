package dairy.product.itemManagement.service;

import dairy.product.itemManagement.entity.ItemEntity;
import dairy.product.itemManagement.repository.ItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class ItemService {
    private final ItemRepository itemRepository;

    public List<ItemEntity> get_all_items(String user_id){
        List<ItemEntity> items = new ArrayList<ItemEntity>();

        List<Map<String, Object>> queryResults = itemRepository.get_all_items(user_id);
        for(Map<String, Object> queryResult : queryResults){
            ItemEntity itemEntity = new ItemEntity(
                    (String) queryResult.get("id"),
                    (String) queryResult.get("user_id"),
                    (String) queryResult.get("name"),
                    (String) queryResult.get("img_file_name"),
                    (Date) queryResult.get("register_date"),
                    (String) queryResult.get("span"),
                    (Integer) queryResult.get("price"),
                    (String) queryResult.get("tag")
            );
            items.add(itemEntity);
        }

        return items;
    }
}
