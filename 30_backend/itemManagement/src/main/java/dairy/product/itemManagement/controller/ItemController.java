package dairy.product.itemManagement.controller;

import dairy.product.itemManagement.entity.ItemEntity;
import dairy.product.itemManagement.entity.RegisterItemEntity;
import dairy.product.itemManagement.entity.StatisticsEntity;
import dairy.product.itemManagement.service.ItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
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

    @PostMapping("/register_item")
    public int register_item(@RequestParam("user_id") String userId,
                             @RequestParam("name") String name,
                             @RequestParam("img_file_name") String imgFileName,
                             @RequestParam("span_num") Integer spanNum,
                             @RequestParam("span_unit") String spanUnit,
                             @RequestParam("price") Integer price,
                             @RequestParam("tag") String tag,
                             @RequestParam(value="image", required=false) MultipartFile image){

        try {
            byte[] imageByte = null;
            if(image != null) {
                imageByte = image.getBytes();
            }
            return itemService.registerItem(
                    userId, name, imgFileName, spanNum, spanUnit, price, tag, imageByte
            );
        }catch (IOException e){
            return -1;
        }
    }

}
