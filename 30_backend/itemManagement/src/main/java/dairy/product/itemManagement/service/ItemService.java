package dairy.product.itemManagement.service;

import dairy.product.itemManagement.entity.ItemEntity;
import dairy.product.itemManagement.repository.ItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.ZoneId;
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
                    (Integer) queryResult.get("span_num"),
                    (String) queryResult.get("span_unit"),
                    (Integer) queryResult.get("price"),
                    (String) queryResult.get("tag")
            );
            items.add(itemEntity);
        }

        return items;
    }

    public List<ItemEntity> get_recent_items(String user_id){
        List<ItemEntity> all_items = get_all_items(user_id);
        List<ItemEntity> recent_items = new ArrayList<ItemEntity>();

        LocalDate currentDate = LocalDate.now();
        for(ItemEntity item: all_items){
            String recent_purchase_date_str = item.getRegister_date().toString();
            LocalDate recent_purchase_date = LocalDate.parse(recent_purchase_date_str);
            Integer span_num = item.getSpan_num();
            String span_unit = item.getSpan_unit();
            while (true){
                if(calc_next_purchase_date(recent_purchase_date, span_unit, span_num).isAfter(currentDate)){
                    break;
                }else{
                    recent_purchase_date = calc_next_purchase_date(recent_purchase_date, span_unit, span_num);
                }
            }
            LocalDate seven_days_ago = currentDate.minusDays(8);

            Boolean is_before1days = recent_purchase_date.isBefore(currentDate);
            Boolean is_after7days = recent_purchase_date.isAfter(seven_days_ago);
            Boolean is_before_1to7days_ago = is_before1days && is_after7days;
            Boolean is_today = recent_purchase_date.isEqual(currentDate);
            if(is_before_1to7days_ago || is_today) {
                recent_items.add(item);
            }
        }

        if(recent_items.size() != 0){
            return recent_items;
        }else{
            return null;
        }
    }

    private LocalDate calc_next_purchase_date(LocalDate before_date, String span_unit, Integer span_num){
        if(span_unit.equals("日")){
            return before_date.plusDays(span_num);
        } else if (span_unit.equals("月")) {
            return before_date.plusMonths(span_num);
        } else if (span_unit.equals("年")) {
            return before_date.plusYears(span_num);
        }else{
            return LocalDate.now().plusDays(1);
        }
    }
}
