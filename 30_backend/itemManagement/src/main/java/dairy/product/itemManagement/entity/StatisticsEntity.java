package dairy.product.itemManagement.entity;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class StatisticsEntity {
    private Integer this_month;
    private Integer last_month;
}
