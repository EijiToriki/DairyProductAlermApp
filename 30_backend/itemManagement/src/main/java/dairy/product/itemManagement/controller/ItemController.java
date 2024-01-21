package dairy.product.itemManagement.controller;

import dairy.product.itemManagement.service.ItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping
@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ItemController {

    private final ItemService itemService;

    @GetMapping("/all_items")
    public void get_all_items(@RequestParam String user_id){
        itemService.get_all_items(user_id);
    }

}
