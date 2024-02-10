package dairy.product.itemManagement.controller;

import dairy.product.itemManagement.entity.ItemEntity;
import dairy.product.itemManagement.entity.StatisticsEntity;
import dairy.product.itemManagement.service.ItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping
@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ItemController {

    private final ItemService itemService;

    @GetMapping("/all_items")
    public List<ItemEntity> get_all_items(@RequestParam String user_id){
        return itemService.get_all_items(user_id);
    }

    @GetMapping("/recent_items")
    public List<ItemEntity> get_recent_items(@RequestParam String user_id){
        return itemService.get_recent_items(user_id);
    }

    @GetMapping("/total")
    public StatisticsEntity get_item_statistics(@RequestParam String user_id){
        return itemService.get_item_statistics(user_id);
    }

    @DeleteMapping("/delete_item")
    public int deleteItem(
            @RequestParam("item_id") String item_id,
            @RequestParam("user_id") String user_id){
        return itemService.deleteItems(item_id, user_id);
    }

}
