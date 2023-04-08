--
-- PostgreSQL database dump
--

-- Dumped from database version 13.2
-- Dumped by pg_dump version 14.3

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

--
-- Name: timescaledb; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS timescaledb WITH SCHEMA public;


--
-- Name: EXTENSION timescaledb; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION timescaledb IS 'Enables scalable inserts and complex queries for time-series data';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO postgres;

--
-- Name: images; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.images (
    id integer NOT NULL,
    url text NOT NULL,
    project_id integer,
    created_at timestamp with time zone NOT NULL
);


ALTER TABLE public.images OWNER TO postgres;

--
-- Name: images_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.images_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.images_id_seq OWNER TO postgres;

--
-- Name: images_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.images_id_seq OWNED BY public.images.id;


--
-- Name: labels; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.labels (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    type character varying(255),
    created_at timestamp with time zone NOT NULL,
    image text
);


ALTER TABLE public.labels OWNER TO postgres;

--
-- Name: labels_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.labels_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.labels_id_seq OWNER TO postgres;

--
-- Name: labels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.labels_id_seq OWNED BY public.labels.id;


--
-- Name: labels_projects_bridge; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.labels_projects_bridge (
    id integer NOT NULL,
    project_id integer,
    label_id integer NOT NULL,
    created_at timestamp with time zone NOT NULL
);


ALTER TABLE public.labels_projects_bridge OWNER TO postgres;

--
-- Name: labels_projects_bridge_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.labels_projects_bridge_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.labels_projects_bridge_id_seq OWNER TO postgres;

--
-- Name: labels_projects_bridge_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.labels_projects_bridge_id_seq OWNED BY public.labels_projects_bridge.id;


--
-- Name: projects; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.projects (
    id integer NOT NULL,
    link text,
    repository text NOT NULL,
    title character varying(255) NOT NULL,
    short_description character varying(255) NOT NULL,
    published boolean NOT NULL,
    description text,
    created_at timestamp with time zone NOT NULL,
    slug character varying(255) NOT NULL
);


ALTER TABLE public.projects OWNER TO postgres;

--
-- Name: projects_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.projects_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.projects_id_seq OWNER TO postgres;

--
-- Name: projects_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.projects_id_seq OWNED BY public.projects.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    recovery_token character varying(255),
    role character varying(255) DEFAULT 'customer'::character varying NOT NULL,
    created_at timestamp with time zone NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: images id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.images ALTER COLUMN id SET DEFAULT nextval('public.images_id_seq'::regclass);


--
-- Name: labels id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.labels ALTER COLUMN id SET DEFAULT nextval('public.labels_id_seq'::regclass);


--
-- Name: labels_projects_bridge id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.labels_projects_bridge ALTER COLUMN id SET DEFAULT nextval('public.labels_projects_bridge_id_seq'::regclass);


--
-- Name: projects id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.projects ALTER COLUMN id SET DEFAULT nextval('public.projects_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: cache_inval_bgw_job; Type: TABLE DATA; Schema: _timescaledb_cache; Owner: postgres
--

COPY _timescaledb_cache.cache_inval_bgw_job  FROM stdin;
\.


--
-- Data for Name: cache_inval_extension; Type: TABLE DATA; Schema: _timescaledb_cache; Owner: postgres
--

COPY _timescaledb_cache.cache_inval_extension  FROM stdin;
\.


--
-- Data for Name: cache_inval_hypertable; Type: TABLE DATA; Schema: _timescaledb_cache; Owner: postgres
--

COPY _timescaledb_cache.cache_inval_hypertable  FROM stdin;
\.


--
-- Data for Name: hypertable; Type: TABLE DATA; Schema: _timescaledb_catalog; Owner: postgres
--

COPY _timescaledb_catalog.hypertable (id, schema_name, table_name, associated_schema_name, associated_table_prefix, num_dimensions, chunk_sizing_func_schema, chunk_sizing_func_name, chunk_target_size, compression_state, compressed_hypertable_id, replication_factor) FROM stdin;
\.


--
-- Data for Name: chunk; Type: TABLE DATA; Schema: _timescaledb_catalog; Owner: postgres
--

COPY _timescaledb_catalog.chunk (id, hypertable_id, schema_name, table_name, compressed_chunk_id, dropped) FROM stdin;
\.


--
-- Data for Name: dimension; Type: TABLE DATA; Schema: _timescaledb_catalog; Owner: postgres
--

COPY _timescaledb_catalog.dimension (id, hypertable_id, column_name, column_type, aligned, num_slices, partitioning_func_schema, partitioning_func, interval_length, integer_now_func_schema, integer_now_func) FROM stdin;
\.


--
-- Data for Name: dimension_slice; Type: TABLE DATA; Schema: _timescaledb_catalog; Owner: postgres
--

COPY _timescaledb_catalog.dimension_slice (id, dimension_id, range_start, range_end) FROM stdin;
\.


--
-- Data for Name: chunk_constraint; Type: TABLE DATA; Schema: _timescaledb_catalog; Owner: postgres
--

COPY _timescaledb_catalog.chunk_constraint (chunk_id, dimension_slice_id, constraint_name, hypertable_constraint_name) FROM stdin;
\.


--
-- Data for Name: chunk_data_node; Type: TABLE DATA; Schema: _timescaledb_catalog; Owner: postgres
--

COPY _timescaledb_catalog.chunk_data_node (chunk_id, node_chunk_id, node_name) FROM stdin;
\.


--
-- Data for Name: chunk_index; Type: TABLE DATA; Schema: _timescaledb_catalog; Owner: postgres
--

COPY _timescaledb_catalog.chunk_index (chunk_id, index_name, hypertable_id, hypertable_index_name) FROM stdin;
\.


--
-- Data for Name: compression_chunk_size; Type: TABLE DATA; Schema: _timescaledb_catalog; Owner: postgres
--

COPY _timescaledb_catalog.compression_chunk_size (chunk_id, compressed_chunk_id, uncompressed_heap_size, uncompressed_toast_size, uncompressed_index_size, compressed_heap_size, compressed_toast_size, compressed_index_size, numrows_pre_compression, numrows_post_compression) FROM stdin;
\.


--
-- Data for Name: continuous_agg; Type: TABLE DATA; Schema: _timescaledb_catalog; Owner: postgres
--

COPY _timescaledb_catalog.continuous_agg (mat_hypertable_id, raw_hypertable_id, user_view_schema, user_view_name, partial_view_schema, partial_view_name, bucket_width, direct_view_schema, direct_view_name, materialized_only) FROM stdin;
\.


--
-- Data for Name: continuous_aggs_hypertable_invalidation_log; Type: TABLE DATA; Schema: _timescaledb_catalog; Owner: postgres
--

COPY _timescaledb_catalog.continuous_aggs_hypertable_invalidation_log (hypertable_id, lowest_modified_value, greatest_modified_value) FROM stdin;
\.


--
-- Data for Name: continuous_aggs_invalidation_threshold; Type: TABLE DATA; Schema: _timescaledb_catalog; Owner: postgres
--

COPY _timescaledb_catalog.continuous_aggs_invalidation_threshold (hypertable_id, watermark) FROM stdin;
\.


--
-- Data for Name: continuous_aggs_materialization_invalidation_log; Type: TABLE DATA; Schema: _timescaledb_catalog; Owner: postgres
--

COPY _timescaledb_catalog.continuous_aggs_materialization_invalidation_log (materialization_id, lowest_modified_value, greatest_modified_value) FROM stdin;
\.


--
-- Data for Name: hypertable_compression; Type: TABLE DATA; Schema: _timescaledb_catalog; Owner: postgres
--

COPY _timescaledb_catalog.hypertable_compression (hypertable_id, attname, compression_algorithm_id, segmentby_column_index, orderby_column_index, orderby_asc, orderby_nullsfirst) FROM stdin;
\.


--
-- Data for Name: hypertable_data_node; Type: TABLE DATA; Schema: _timescaledb_catalog; Owner: postgres
--

COPY _timescaledb_catalog.hypertable_data_node (hypertable_id, node_hypertable_id, node_name, block_chunks) FROM stdin;
\.


--
-- Data for Name: metadata; Type: TABLE DATA; Schema: _timescaledb_catalog; Owner: postgres
--

COPY _timescaledb_catalog.metadata (key, value, include_in_telemetry) FROM stdin;
exported_uuid	481ff2d5-41de-4743-846f-d16615997ec6	t
\.


--
-- Data for Name: remote_txn; Type: TABLE DATA; Schema: _timescaledb_catalog; Owner: postgres
--

COPY _timescaledb_catalog.remote_txn (data_node_name, remote_transaction_id) FROM stdin;
\.


--
-- Data for Name: tablespace; Type: TABLE DATA; Schema: _timescaledb_catalog; Owner: postgres
--

COPY _timescaledb_catalog.tablespace (id, hypertable_id, tablespace_name) FROM stdin;
\.


--
-- Data for Name: bgw_job; Type: TABLE DATA; Schema: _timescaledb_config; Owner: postgres
--

COPY _timescaledb_config.bgw_job (id, application_name, schedule_interval, max_runtime, max_retries, retry_period, proc_schema, proc_name, owner, scheduled, hypertable_id, config) FROM stdin;
\.


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."SequelizeMeta" (name) FROM stdin;
20230312143638-init.js
20230408142543-label-image.js
\.


--
-- Data for Name: images; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.images (id, url, project_id, created_at) FROM stdin;
4	https://res.cloudinary.com/dxryc5jgr/image/upload/v1680896332/davc93/Screenshot%20from%202023-04-07%2015-36-59.png.png	1	2023-04-07 19:56:27.896+00
5	https://res.cloudinary.com/dxryc5jgr/image/upload/v1680896331/davc93/Screenshot%20from%202023-04-07%2015-37-38.png.png	1	2023-04-07 19:56:27.899+00
6	https://res.cloudinary.com/dxryc5jgr/image/upload/v1680896330/davc93/Screenshot%20from%202023-04-07%2015-37-59.png.png	1	2023-04-07 19:56:27.901+00
12	https://res.cloudinary.com/dxryc5jgr/image/upload/v1680902591/davc93/Screenshot%20from%202023-04-07%2017-18-19.png.png	2	2023-04-07 21:36:55.424+00
13	https://res.cloudinary.com/dxryc5jgr/image/upload/v1680902589/davc93/Screenshot%20from%202023-04-07%2017-19-33.png.png	2	2023-04-07 21:36:55.426+00
14	https://res.cloudinary.com/dxryc5jgr/image/upload/v1680902586/davc93/Screenshot%20from%202023-04-07%2017-20-18.png.png	2	2023-04-07 21:36:55.428+00
15	https://res.cloudinary.com/dxryc5jgr/image/upload/v1680902584/davc93/Screenshot%20from%202023-04-07%2017-20-26.png.png	2	2023-04-07 21:36:55.429+00
16	https://res.cloudinary.com/dxryc5jgr/image/upload/v1680902587/davc93/Screenshot%20from%202023-04-07%2017-19-46.png.png	2	2023-04-07 21:36:55.434+00
\.


--
-- Data for Name: labels; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.labels (id, title, type, created_at, image) FROM stdin;
1	Typescript	tech	2023-04-07 19:06:20.316+00	https://res.cloudinary.com/dxryc5jgr/image/upload/v1680988646/davc93/typescript.svg.svg
2	Javascript	tech	2023-04-07 19:06:26.723+00	https://res.cloudinary.com/dxryc5jgr/image/upload/v1680990520/davc93/javascript.svg.svg
4	React	tech	2023-04-07 19:06:51.299+00	https://res.cloudinary.com/dxryc5jgr/image/upload/v1680990602/davc93/react.svg.svg
3	GraphQl	tech	2023-04-07 19:06:39.115+00	https://res.cloudinary.com/dxryc5jgr/image/upload/v1680990778/davc93/graphql.svg.svg
5	Angular	tech	2023-04-07 19:06:55.518+00	https://res.cloudinary.com/dxryc5jgr/image/upload/v1680990882/davc93/angular.svg.svg
6	NodeJS	tech	2023-04-07 19:06:59.388+00	https://res.cloudinary.com/dxryc5jgr/image/upload/v1680990960/davc93/nodejs.svg.svg
7	Vite	tech	2023-04-07 19:07:09.32+00	https://res.cloudinary.com/dxryc5jgr/image/upload/v1680991084/davc93/vite.svg.svg
8	CSS	tech	2023-04-07 19:07:21.916+00	https://res.cloudinary.com/dxryc5jgr/image/upload/v1680991129/davc93/css3.svg.svg
13	Sequelize	tech	2023-04-07 19:08:27.451+00	https://res.cloudinary.com/dxryc5jgr/image/upload/v1680991213/davc93/sequelize.svg.svg
14	Prisma	tech	2023-04-07 19:08:30.659+00	https://res.cloudinary.com/dxryc5jgr/image/upload/v1680991263/davc93/prisma.svg.svg
15	MongoDB	tech	2023-04-07 19:08:41.995+00	https://res.cloudinary.com/dxryc5jgr/image/upload/v1680991328/davc93/mongo.svg.svg
16	PostgreSQL	tech	2023-04-07 19:08:56.022+00	https://res.cloudinary.com/dxryc5jgr/image/upload/v1680991369/davc93/postgresql.svg.svg
17	Firebase	tech	2023-04-07 19:55:52.777+00	https://res.cloudinary.com/dxryc5jgr/image/upload/v1680991405/davc93/firebase.svg.svg
19	NextJS	tech	2023-04-07 21:33:06.716+00	https://res.cloudinary.com/dxryc5jgr/image/upload/v1680991533/davc93/nextjs-fill-svgrepo-com.svg.svg
22	Cloudinary	tech	2023-04-07 22:42:51.962+00	https://res.cloudinary.com/dxryc5jgr/image/upload/v1680991681/davc93/cloudinary-icon.png.png
23	Ionic	tech	2023-04-07 22:55:50.86+00	https://res.cloudinary.com/dxryc5jgr/image/upload/v1680991715/davc93/ionic-icon-svgrepo-com.svg.svg
24	Express	tech	2023-04-08 00:30:10.641+00	https://res.cloudinary.com/dxryc5jgr/image/upload/v1680991771/davc93/express-svgrepo-com.svg.svg
25	NestJS	tech	2023-04-08 00:30:18.545+00	https://res.cloudinary.com/dxryc5jgr/image/upload/v1680991812/davc93/nestjs-svgrepo-com.svg.svg
26	Jwt	tech	2023-04-08 00:30:29.114+00	https://res.cloudinary.com/dxryc5jgr/image/upload/v1680991851/davc93/jwt.svg.svg
27	Google Tag Manager	tech	2023-04-08 00:30:48.976+00	https://res.cloudinary.com/dxryc5jgr/image/upload/v1680991880/davc93/google-tag-manager.svg.svg
28	Google Analytics	tech	2023-04-08 00:30:58.759+00	https://res.cloudinary.com/dxryc5jgr/image/upload/v1680991909/davc93/google-analytics.svg.svg
29	New Relic	tech	2023-04-08 00:31:09.858+00	https://res.cloudinary.com/dxryc5jgr/image/upload/v1680992153/davc93/new-relic-seeklogo.com.svg.svg
30	TypeORM	tech	2023-04-08 00:31:44.197+00	https://res.cloudinary.com/dxryc5jgr/image/upload/v1680992182/davc93/typeorm.svg.svg
31	Vercel	tech	2023-04-08 00:32:11.56+00	https://res.cloudinary.com/dxryc5jgr/image/upload/v1680992206/davc93/vercel-icon.svg.svg
32	Netlify	tech	2023-04-08 00:32:18.367+00	https://res.cloudinary.com/dxryc5jgr/image/upload/v1680992254/davc93/netlify.svg.svg
33	GitHub Actions	tech	2023-04-08 00:32:56.792+00	https://res.cloudinary.com/dxryc5jgr/image/upload/v1680992304/davc93/github-actions.svg.svg
18	Mercadopago	tech	2023-04-07 21:32:56.029+00	https://res.cloudinary.com/dxryc5jgr/image/upload/v1680992405/davc93/mercadopago.svg.svg
34	Tailwind	tech	2023-04-08 22:24:15.097+00	https://res.cloudinary.com/dxryc5jgr/image/upload/v1680992652/davc93/tailwind.svg.svg
35	Apollo	tech	2023-04-08 22:25:55.449+00	https://res.cloudinary.com/dxryc5jgr/image/upload/v1680992753/davc93/apollographql-svgrepo-com.svg.svg
36	MySQL	tech	2023-04-08 22:28:33.316+00	https://res.cloudinary.com/dxryc5jgr/image/upload/v1680992910/davc93/mysql-svgrepo-com.svg.svg
9	Design	other	2023-04-07 19:07:51.735+00	https://res.cloudinary.com/dxryc5jgr/image/upload/v1680994171/davc93/Design.svg.svg
10	Backend	other	2023-04-07 19:07:58.164+00	https://res.cloudinary.com/dxryc5jgr/image/upload/v1680994191/davc93/Backend.svg.svg
11	Frontend	other	2023-04-07 19:08:01.771+00	https://res.cloudinary.com/dxryc5jgr/image/upload/v1680994205/davc93/Frontend.svg.svg
12	Fullstack	other	2023-04-07 19:08:06.97+00	https://res.cloudinary.com/dxryc5jgr/image/upload/v1680994217/davc93/Fullstack.svg.svg
\.


--
-- Data for Name: labels_projects_bridge; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.labels_projects_bridge (id, project_id, label_id, created_at) FROM stdin;
6	1	6	2023-04-07 19:56:27.935+00
7	1	1	2023-04-07 19:56:27.929+00
8	1	2	2023-04-07 19:56:27.931+00
9	1	17	2023-04-07 19:56:27.938+00
10	1	7	2023-04-07 19:56:27.943+00
11	1	12	2023-04-07 19:56:27.944+00
12	2	2	2023-04-07 21:36:55.457+00
13	2	12	2023-04-07 21:36:55.464+00
14	2	6	2023-04-07 21:36:55.466+00
15	2	1	2023-04-07 21:36:55.468+00
16	2	15	2023-04-07 21:36:55.469+00
17	2	18	2023-04-07 21:36:55.485+00
\.


--
-- Data for Name: projects; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.projects (id, link, repository, title, short_description, published, description, created_at, slug) FROM stdin;
1	https://nodejs-firebase-auth.vercel.app/	https://github.com/davc93/nodejs-firebase-auth	NodeJS Backend with Firebase Auth	An amazing implementation of authentication with Firebase Admin and NodeJS	t	The following project is an implementation of the firebase authentication service in a backend made in NodeJS. This has a number of advantages, such as:\n\n- Have multiple authentication providers such as Google, Facebook, Github, Email, etc...\n- Manage users from the Firebase suite and use associated services such as notifications and emails\n- Have a system already tested and constantly improved by Google	2023-04-07 19:53:37.648+00	nodejs-firebase-auth
2	https://mercadopago-frontend-blush.vercel.app/	https://github.com/davc93/mercadopago	MercadoPago Checkout Pro	The following implementation is the server that allows processing customer orders and obtaining a payment id to be later used to direct the user to the payment module within the site.	t	Mercadopago is a free market payment platform ,is present throughout Latin America.\n\nThe following implementation is the server that allows processing customer orders and obtaining a payment id to be later used to direct the user to the payment module within the site.\n\nFeatures\n\n- Checkout within the same site\n- Fast payment and great shopping experience for users\n- Accept multiple payment methods (credit, debit,banks transferences, mercadopago account)\n- Customizable\n- Multiple validations, from payments to the identity of the buyer	2023-04-07 21:23:20.612+00	mercadopago
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, email, password, recovery_token, role, created_at) FROM stdin;
1	davc93@gmail.com	$2b$10$RE35haeJq4euQjiQ60UpSOHrqC6aNtNVjSYZymIDPe0wyzhGVnHpa	\N	admin	2023-04-07 19:01:38.98+00
\.


--
-- Name: chunk_constraint_name; Type: SEQUENCE SET; Schema: _timescaledb_catalog; Owner: postgres
--

SELECT pg_catalog.setval('_timescaledb_catalog.chunk_constraint_name', 1, false);


--
-- Name: chunk_id_seq; Type: SEQUENCE SET; Schema: _timescaledb_catalog; Owner: postgres
--

SELECT pg_catalog.setval('_timescaledb_catalog.chunk_id_seq', 1, false);


--
-- Name: dimension_id_seq; Type: SEQUENCE SET; Schema: _timescaledb_catalog; Owner: postgres
--

SELECT pg_catalog.setval('_timescaledb_catalog.dimension_id_seq', 1, false);


--
-- Name: dimension_slice_id_seq; Type: SEQUENCE SET; Schema: _timescaledb_catalog; Owner: postgres
--

SELECT pg_catalog.setval('_timescaledb_catalog.dimension_slice_id_seq', 1, false);


--
-- Name: hypertable_id_seq; Type: SEQUENCE SET; Schema: _timescaledb_catalog; Owner: postgres
--

SELECT pg_catalog.setval('_timescaledb_catalog.hypertable_id_seq', 1, false);


--
-- Name: bgw_job_id_seq; Type: SEQUENCE SET; Schema: _timescaledb_config; Owner: postgres
--

SELECT pg_catalog.setval('_timescaledb_config.bgw_job_id_seq', 1000, false);


--
-- Name: images_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.images_id_seq', 16, true);


--
-- Name: labels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.labels_id_seq', 36, true);


--
-- Name: labels_projects_bridge_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.labels_projects_bridge_id_seq', 17, true);


--
-- Name: projects_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.projects_id_seq', 2, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 1, true);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: images images_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.images
    ADD CONSTRAINT images_pkey PRIMARY KEY (id);


--
-- Name: labels labels_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.labels
    ADD CONSTRAINT labels_pkey PRIMARY KEY (id);


--
-- Name: labels_projects_bridge labels_projects_bridge_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.labels_projects_bridge
    ADD CONSTRAINT labels_projects_bridge_pkey PRIMARY KEY (id);


--
-- Name: labels labels_title_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.labels
    ADD CONSTRAINT labels_title_key UNIQUE (title);


--
-- Name: projects projects_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_pkey PRIMARY KEY (id);


--
-- Name: projects projects_slug_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_slug_key UNIQUE (slug);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: images images_project_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.images
    ADD CONSTRAINT images_project_id_fkey FOREIGN KEY (project_id) REFERENCES public.projects(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: labels_projects_bridge labels_projects_bridge_label_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.labels_projects_bridge
    ADD CONSTRAINT labels_projects_bridge_label_id_fkey FOREIGN KEY (label_id) REFERENCES public.labels(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: labels_projects_bridge labels_projects_bridge_project_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.labels_projects_bridge
    ADD CONSTRAINT labels_projects_bridge_project_id_fkey FOREIGN KEY (project_id) REFERENCES public.projects(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- PostgreSQL database dump complete
--

