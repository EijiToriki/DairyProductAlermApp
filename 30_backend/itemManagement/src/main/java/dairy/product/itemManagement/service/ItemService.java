package dairy.product.itemManagement.service;

import dairy.product.itemManagement.repository.ItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ItemService {
    private final ItemRepository itemRepository;

    public void get_all_items(String user_id){
        itemRepository.get_all_items(user_id);
    }
}
