package dairy.product.itemManagement.entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.util.Date;

@AllArgsConstructor
@Data
public class RegisterItemEntity {
    private String user_id;
    private String name;
    private String img_file_name;
    private Integer span_num;
    private String span_unit;
    private Integer price;
    private String tag;
    private MultipartFile image;
}
