package dairy.product.itemManagement.service;

import dairy.product.itemManagement.entity.ItemEntity;
import dairy.product.itemManagement.entity.RegisterItemEntity;
import dairy.product.itemManagement.entity.StatisticsEntity;
import dairy.product.itemManagement.repository.ItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.*;

@Service
@RequiredArgsConstructor
public class ItemService {
    private final ItemRepository itemRepository;

  private LocalDate currentDate = LocalDate.now();
//    private final LocalDate currentDate = LocalDate.of(2024, 1, 31);

    public List<ItemEntity> get_all_items(String user_id){
        List<ItemEntity> items = new ArrayList<>();

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
                    (String) queryResult.get("tag"),
                    (byte[]) queryResult.get("image_data")
            );
            items.add(itemEntity);
        }

        return items;
    }

    public List<ItemEntity> get_recent_items(String user_id){
        List<ItemEntity> all_items = get_all_items(user_id);
        List<ItemEntity> recent_items = new ArrayList<>();


        for(ItemEntity item: all_items){
            LocalDate recent_purchase_date = date_to_localDate(item.getRegister_date());
            Integer span_num = item.getSpan_num();
            String span_unit = item.getSpan_unit();
            while (true){
                recent_purchase_date = calc_next_purchase_date(recent_purchase_date, span_unit, span_num);
                if(recent_purchase_date.isAfter(currentDate) || recent_purchase_date.isEqual(currentDate)) {
                    break;
                }
            }
            LocalDate seven_days_later = currentDate.plusDays(8);

            Boolean is_within_one_week = recent_purchase_date.isBefore(seven_days_later);
            Boolean is_today = recent_purchase_date.isEqual(currentDate);
            if(is_within_one_week || is_today) {
                recent_items.add(item);
            }
        }

        return recent_items;
    }

    public StatisticsEntity get_item_statistics(String user_id){
        List<ItemEntity> all_items = get_all_items(user_id);
        int last_month_total = 0;
        int this_month_total = 0;

        int this_year = currentDate.getYear();
        int this_month = currentDate.getMonthValue();
        for(ItemEntity item: all_items){
            LocalDate recent_purchase_date = date_to_localDate(item.getRegister_date());
            Integer span_num = item.getSpan_num();
            String span_unit = item.getSpan_unit();
            while (true){
                int recent_purchase_date_year = recent_purchase_date.getYear();
                int recent_purchase_date_month = recent_purchase_date.getMonthValue();
                if(
                        recent_purchase_date_year > this_year ||
                        recent_purchase_date_year >= this_year && recent_purchase_date_month > this_month
                ) {
                    break;
                } else if (recent_purchase_date_year == this_year && recent_purchase_date_month == this_month) {
                    this_month_total += item.getPrice();
                } else if (recent_purchase_date_year == this_year && recent_purchase_date_month == this_month - 1) {
                    last_month_total += item.getPrice();
                } else if (recent_purchase_date_year == this_year-1 && recent_purchase_date_month == 12 && this_month == 1) {
                    last_month_total += item.getPrice();
                }
                recent_purchase_date = calc_next_purchase_date(recent_purchase_date, span_unit, span_num);
            }
        }

        return new StatisticsEntity(
                this_month_total, last_month_total
        );
    }

    private LocalDate date_to_localDate(Date date){
        String date_str = date.toString();
        return LocalDate.parse(date_str);
    }

    private LocalDate calc_next_purchase_date(LocalDate before_date, String span_unit, Integer span_num){
        return switch (span_unit) {
            case "日" -> before_date.plusDays(span_num);
            case "月" -> before_date.plusMonths(span_num);
            case "年" -> before_date.plusYears(span_num);
            default -> LocalDate.now().plusDays(1);
        };
    }

    public int deleteItems(String item_id, String user_id){
        int delete_row_num = itemRepository.delete_item(item_id, user_id);
        if(delete_row_num == 1){    // 正常時
            return 0;
        }else{                      // 異常時
            return -1;
        }
    }

    public int registerItem(String user_id,
                            String item_name,
                            String img_file_name,
                            Integer span_num,
                            String span_unit,
                            Integer price,
                            String tag,
                            byte[] image){

        String id = UUID.randomUUID().toString();
        Date register_date = Date.from(LocalDate.now().atStartOfDay(ZoneId.systemDefault()).toInstant());

        return itemRepository.register_item(
                id, user_id, item_name,
                img_file_name, register_date, span_num,
                span_unit, price, tag, image
        );
    }
}
