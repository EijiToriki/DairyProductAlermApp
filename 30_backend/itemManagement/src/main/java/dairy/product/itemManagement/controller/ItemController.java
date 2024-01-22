package dairy.product.itemManagement.controller;

import dairy.product.itemManagement.entity.ItemEntity;
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

}
