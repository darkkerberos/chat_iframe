/*number 3*/
select count(sd.s_id) as number_of_sales, s.s_date as date, c.c_name as customer_name from sales as s
left join sales_detail as sd on s.s_id = sd.s_id
left join customer as c on s.c_id = c.c_id
where s.c_id = 1
group by s.s_date;

/*number 4*/
select s.s_date as date, sum(sd.s_quantity) as quantity, c.c_name as customer_name from sales as s
left join sales_detail as sd on s.s_id = sd.s_id
left join customer as c on s.c_id = c.c_id
where s.c_id = 1
group by s.s_date;