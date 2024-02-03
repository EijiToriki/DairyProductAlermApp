-- dairy_product DB を使用
USE dairy_product;

-- itemテーブルのデータ確認
select * from item;

-- 危険SQL実行できるように準備 & 実行
SET sql_safe_updates = 0;
delete from item;

-- UT 1-1
-- -- データの追加
insert into item 
	(id, user_id, name, img_file_name, register_date, span_num, span_unit, price, tag)
values 
	("1", "1", "スポンジ", "スポンジ.PNG", "2024-01-25", 1, "月", 150, "台所");

insert into item 
	(id, user_id, name, img_file_name, register_date, span_num, span_unit, price, tag)
values 
	("2", "1", "シャンプー", "シャンプー.PNG", "2024-01-07", 14, "日", 3000, "風呂");

insert into item 
	(id, user_id, name, img_file_name, register_date, span_num, span_unit, price, tag)
values 
	("3", "1", "リンス", "リンス.PNG", "2024-01-25", 1, "月", 2000, "台所");

insert into item 
	(id, user_id, name, img_file_name, register_date, span_num, span_unit, price, tag)
values 
	("4", "1", "アロマ", "アロマ.PNG", "2023-11-04", 2, "月", 5000, "部屋");

insert into item 
	(id, user_id, name, img_file_name, register_date, span_num, span_unit, price, tag)
values 
	("5", "1", "洗剤", "洗剤.PNG", "2023-01-25", 1, "年", 500, "台所");

insert into item 
	(id, user_id, name, img_file_name, register_date, span_num, span_unit, price, tag)
values 
	("6", "2", "シャンプー", "シャンプー.PNG", "2023-12-07", 2, "月", 2000, "風呂");

insert into item 
	(id, user_id, name, img_file_name, register_date, span_num, span_unit, price, tag)
values 
	("7", "2", "リンス", "リンス.PNG", "2023-10-07", 3, "月", 1000, "風呂");
    
insert into item 
	(id, user_id, name, img_file_name, register_date, span_num, span_unit, price, tag)
values 
	("8", "2", "石鹸", "石鹸.PNG", "2023-12-15", 25, "日", 600, "台所");

COMMIT;

-- -- itemテーブルのデータ確認
select * from item;

-- UT 1-2
delete from item where user_id = "1";
-- -- itemテーブルのデータ確認
select * from item;


-- UT 2-1
delete from item;

insert into item 
	(id, user_id, name, img_file_name, register_date, span_num, span_unit, price, tag)
values 
	("1", "1", "スポンジ", "スポンジ.PNG", "2024-01-14", 14, "日", 150, "台所");

select * from item;


-- UT 2-2
delete from item;

insert into item 
	(id, user_id, name, img_file_name, register_date, span_num, span_unit, price, tag)
values 
	("2", "1", "スポンジ", "スポンジ.PNG", "2024-01-01", 21, "日", 150, "台所");

select * from item;


-- UT 2-3, 2-4
delete from item;

insert into item 
	(id, user_id, name, img_file_name, register_date, span_num, span_unit, price, tag)
values 
	("1", "1", "洗剤", "洗剤.PNG", "2024-01-20", 14, "日", 600, "台所");

insert into item 
	(id, user_id, name, img_file_name, register_date, span_num, span_unit, price, tag)
values 
	("2", "1", "スポンジ", "スポンジ.PNG", "2024-01-01", 21, "日", 150, "台所");

select * from item;


-- UT2-5, 2-6
delete from item;

insert into item 
	(id, user_id, name, img_file_name, register_date, span_num, span_unit, price, tag)
values 
	("1", "1", "洗剤", "洗剤.PNG", "2024-01-01", 1, "月", 600, "台所");

insert into item 
	(id, user_id, name, img_file_name, register_date, span_num, span_unit, price, tag)
values 
	("2", "1", "スポンジ", "スポンジ.PNG", "2024-01-14", 2, "月", 150, "台所");

insert into item 
	(id, user_id, name, img_file_name, register_date, span_num, span_unit, price, tag)
values 
	("3", "1", "洗剤", "洗剤.PNG", "2024-01-02", 1, "月", 600, "台所");

select * from item;


-- UT2-7, 2-8
delete from item;

insert into item 
	(id, user_id, name, img_file_name, register_date, span_num, span_unit, price, tag)
values 
	("1", "1", "洗剤", "洗剤.PNG", "2023-12-27", 1, "月", 600, "台所");

insert into item 
	(id, user_id, name, img_file_name, register_date, span_num, span_unit, price, tag)
values 
	("2", "1", "スポンジ", "スポンジ.PNG", "2023-12-27", 2, "月", 150, "台所");

select * from item;


-- UT2-9, UT2-10
delete from item;

insert into item 
	(id, user_id, name, img_file_name, register_date, span_num, span_unit, price, tag)
values 
	("1", "1", "洗剤", "洗剤.PNG", "2023-01-31", 1, "年", 600, "台所");

insert into item 
	(id, user_id, name, img_file_name, register_date, span_num, span_unit, price, tag)
values 
	("2", "1", "スポンジ", "スポンジ.PNG", "2019-02-01", 2, "年", 150, "台所");

select * from item;


-- UT3-1, 3-2
delete from item;

insert into item 
	(id, user_id, name, img_file_name, register_date, span_num, span_unit, price, tag)
values 
	("1", "1", "洗剤", "洗剤.PNG", "2023-12-01", 14, "日", 300, "台所");

select * from item;


-- UT3-3, 3-4
delete from item;

insert into item 
	(id, user_id, name, img_file_name, register_date, span_num, span_unit, price, tag)
values 
	("1", "1", "洗剤", "洗剤.PNG", "2023-10-01", 2, "月", 300, "台所");

select * from item;


-- UT3-5, 3-6
delete from item;

insert into item 
	(id, user_id, name, img_file_name, register_date, span_num, span_unit, price, tag)
values 
	("1", "1", "シャンプー", "シャンプー.PNG", "2023-01-01", 1, "年", 3000, "風呂");

select * from item;


-- UT3-7, 3-8
delete from item;

insert into item 
	(id, user_id, name, img_file_name, register_date, span_num, span_unit, price, tag)
values 
	("1", "1", "洗剤", "洗剤.PNG", "2023-12-16", 16, "日", 300, "台所");

select * from item;
