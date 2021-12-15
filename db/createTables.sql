create table IF NOT EXISTS restaurant(
   r_id integer not null PRIMARY KEY,
   r_name varchar(55) not null,
   r_street_name varchar(55) not null,
   r_building_number varchar(5) not null,
   r_extra_info text,
   r_city varchar(55) not null,
   r_country varchar(55) not null,

   shopify_collection_id varchar(55) not null

);

create table IF NOT EXISTS menus(
   shopify_product_id varchar(55) PRIMARY KEY,
   m_name varchar(55),
   m_picture_url text,
   rest_id integer not null,
   FOREIGN KEY(rest_id) REFERENCES restaurant (r_id)
);

create table IF NOT EXISTS orders(
   o_id integer not null PRIMARY KEY, 
   o_date timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
   o_delivery_date timestamp with time zone NOT NULL
);

create table IF NOT EXISTS order_menus(
   order_id integer not null,
   menu_id integer not null,
   quantity integer not null DEFAULT 1 CHECK (quantity > 0),
   FOREIGN KEY (order_id) REFERENCES orders(o_id),
   FOREIGN KEY (menu_id) REFERENCES menus(m_id),
   UNIQUE(order_id, menu_id)
);