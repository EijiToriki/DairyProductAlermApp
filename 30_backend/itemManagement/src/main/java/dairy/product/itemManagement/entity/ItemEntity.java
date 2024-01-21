package dairy.product.itemManagement.entity;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;

@AllArgsConstructor
@Data
public class ItemEntity {
    private String id;
    private String user_id;
    private String name;
    private String img_file_name;
    private Date register_date;
    private String span;
    private String price;
    private String tag;
}
