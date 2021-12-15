--
-- PostgreSQL database dump
--

-- Dumped from database version 12.9 (Ubuntu 12.9-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.9 (Ubuntu 12.9-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

--- SET default_table_access_method = heap;

--
-- Name: menus; Type: TABLE; Schema: public; Owner: voila_dev
--

CREATE TABLE public.menus (
    m_id integer NOT NULL,
    m_name character varying(55),
    m_picture_url text,
    shopify_product_id character varying(55),
    rest_id integer NOT NULL
);


ALTER TABLE public.menus OWNER TO voila_dev;

--
-- Name: order_menus; Type: TABLE; Schema: public; Owner: voila_dev
--

CREATE TABLE public.order_menus (
    order_id integer NOT NULL,
    menu_id integer NOT NULL,
    quantity integer DEFAULT 1 NOT NULL,
    CONSTRAINT order_menus_quantity_check CHECK ((quantity > 0))
);


ALTER TABLE public.order_menus OWNER TO voila_dev;

--
-- Name: orders; Type: TABLE; Schema: public; Owner: voila_dev
--

CREATE TABLE public.orders (
    o_id integer NOT NULL,
    o_date timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    o_delivery_date timestamp with time zone NOT NULL
);


ALTER TABLE public.orders OWNER TO voila_dev;

--
-- Name: restaurant; Type: TABLE; Schema: public; Owner: voila_dev
--

CREATE TABLE public.restaurant (
    r_id integer NOT NULL,
    r_name character varying(55) NOT NULL,
    r_street_name character varying(55) NOT NULL,
    r_building_number character varying(5) NOT NULL,
    r_extra_info text,
    r_city character varying(55) NOT NULL,
    r_country character varying(55) NOT NULL,
    shopify_collection_id character varying(55) NOT NULL
);


ALTER TABLE public.restaurant OWNER TO voila_dev;

--
-- Data for Name: menus; Type: TABLE DATA; Schema: public; Owner: voila_dev
--

COPY public.menus (m_id, m_name, m_picture_url, shopify_product_id, rest_id) FROM stdin;
\.


--
-- Data for Name: order_menus; Type: TABLE DATA; Schema: public; Owner: voila_dev
--

COPY public.order_menus (order_id, menu_id, quantity) FROM stdin;
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: voila_dev
--

COPY public.orders (o_id, o_date, o_delivery_date) FROM stdin;
\.


--
-- Data for Name: restaurant; Type: TABLE DATA; Schema: public; Owner: voila_dev
--

COPY public.restaurant (r_id, r_name, r_street_name, r_building_number, r_extra_info, r_city, r_country, shopify_collection_id) FROM stdin;
1	KFC	tagmoo 1	12A	\N	Cairo	Egypt	12412334
\.


--
-- Name: menus menus_pkey; Type: CONSTRAINT; Schema: public; Owner: voila_dev
--

ALTER TABLE ONLY public.menus
    ADD CONSTRAINT menus_pkey PRIMARY KEY (m_id);


--
-- Name: order_menus order_menus_order_id_menu_id_key; Type: CONSTRAINT; Schema: public; Owner: voila_dev
--

ALTER TABLE ONLY public.order_menus
    ADD CONSTRAINT order_menus_order_id_menu_id_key UNIQUE (order_id, menu_id);


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: voila_dev
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (o_id);


--
-- Name: restaurant restaurant_pkey; Type: CONSTRAINT; Schema: public; Owner: voila_dev
--

ALTER TABLE ONLY public.restaurant
    ADD CONSTRAINT restaurant_pkey PRIMARY KEY (r_id);


--
-- Name: menus menus_rest_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: voila_dev
--

ALTER TABLE ONLY public.menus
    ADD CONSTRAINT menus_rest_id_fkey FOREIGN KEY (rest_id) REFERENCES public.restaurant(r_id);


--
-- Name: order_menus order_menus_menu_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: voila_dev
--

ALTER TABLE ONLY public.order_menus
    ADD CONSTRAINT order_menus_menu_id_fkey FOREIGN KEY (menu_id) REFERENCES public.menus(m_id);


--
-- Name: order_menus order_menus_order_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: voila_dev
--

ALTER TABLE ONLY public.order_menus
    ADD CONSTRAINT order_menus_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(o_id);


--
-- PostgreSQL database dump complete
--

