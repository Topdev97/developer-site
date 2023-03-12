--
-- PostgreSQL database dump
--

-- Dumped from database version 14.7 (Debian 14.7-1.pgdg110+1)
-- Dumped by pg_dump version 14.3

-- Started on 2023-03-11 14:52:05 -03

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

SET default_table_access_method = heap;

--
-- TOC entry 212 (class 1259 OID 16395)
-- Name: images; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.images (
    id integer NOT NULL,
    url text NOT NULL,
    project_id integer
);


ALTER TABLE public.images OWNER TO root;

--
-- TOC entry 211 (class 1259 OID 16394)
-- Name: images_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public.images_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.images_id_seq OWNER TO root;

--
-- TOC entry 3341 (class 0 OID 0)
-- Dependencies: 211
-- Name: images_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.images_id_seq OWNED BY public.images.id;


--
-- TOC entry 214 (class 1259 OID 16409)
-- Name: labels; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.labels (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    type character varying(255)
);


ALTER TABLE public.labels OWNER TO root;

--
-- TOC entry 213 (class 1259 OID 16408)
-- Name: labels_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public.labels_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.labels_id_seq OWNER TO root;

--
-- TOC entry 3342 (class 0 OID 0)
-- Dependencies: 213
-- Name: labels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.labels_id_seq OWNED BY public.labels.id;


--
-- TOC entry 216 (class 1259 OID 16418)
-- Name: labels_projects_bridge; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.labels_projects_bridge (
    id integer NOT NULL,
    project_id integer NOT NULL,
    label_id integer NOT NULL
);


ALTER TABLE public.labels_projects_bridge OWNER TO root;

--
-- TOC entry 215 (class 1259 OID 16417)
-- Name: labels_projects_bridge_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public.labels_projects_bridge_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.labels_projects_bridge_id_seq OWNER TO root;

--
-- TOC entry 3343 (class 0 OID 0)
-- Dependencies: 215
-- Name: labels_projects_bridge_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.labels_projects_bridge_id_seq OWNED BY public.labels_projects_bridge.id;


--
-- TOC entry 210 (class 1259 OID 16386)
-- Name: projects; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.projects (
    id integer NOT NULL,
    link text,
    repository text NOT NULL,
    title character varying(255) NOT NULL,
    short_description character varying(255) NOT NULL,
    published boolean NOT NULL,
    description text
);


ALTER TABLE public.projects OWNER TO root;

--
-- TOC entry 209 (class 1259 OID 16385)
-- Name: projects_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public.projects_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.projects_id_seq OWNER TO root;

--
-- TOC entry 3344 (class 0 OID 0)
-- Dependencies: 209
-- Name: projects_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.projects_id_seq OWNED BY public.projects.id;


--
-- TOC entry 3183 (class 2604 OID 16398)
-- Name: images id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.images ALTER COLUMN id SET DEFAULT nextval('public.images_id_seq'::regclass);


--
-- TOC entry 3184 (class 2604 OID 16412)
-- Name: labels id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.labels ALTER COLUMN id SET DEFAULT nextval('public.labels_id_seq'::regclass);


--
-- TOC entry 3185 (class 2604 OID 16421)
-- Name: labels_projects_bridge id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.labels_projects_bridge ALTER COLUMN id SET DEFAULT nextval('public.labels_projects_bridge_id_seq'::regclass);


--
-- TOC entry 3182 (class 2604 OID 16389)
-- Name: projects id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.projects ALTER COLUMN id SET DEFAULT nextval('public.projects_id_seq'::regclass);


--
-- TOC entry 3189 (class 2606 OID 16402)
-- Name: images images_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.images
    ADD CONSTRAINT images_pkey PRIMARY KEY (id);


--
-- TOC entry 3191 (class 2606 OID 16416)
-- Name: labels labels_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.labels
    ADD CONSTRAINT labels_pkey PRIMARY KEY (id);


--
-- TOC entry 3193 (class 2606 OID 16423)
-- Name: labels_projects_bridge labels_projects_bridge_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.labels_projects_bridge
    ADD CONSTRAINT labels_projects_bridge_pkey PRIMARY KEY (id);


--
-- TOC entry 3187 (class 2606 OID 16393)
-- Name: projects projects_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_pkey PRIMARY KEY (id);


--
-- TOC entry 3194 (class 2606 OID 16403)
-- Name: images fkey_images_projects; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.images
    ADD CONSTRAINT fkey_images_projects FOREIGN KEY (project_id) REFERENCES public.projects(id);


--
-- TOC entry 3196 (class 2606 OID 16429)
-- Name: labels_projects_bridge fkey_labels; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.labels_projects_bridge
    ADD CONSTRAINT fkey_labels FOREIGN KEY (label_id) REFERENCES public.labels(id);


--
-- TOC entry 3195 (class 2606 OID 16424)
-- Name: labels_projects_bridge fkey_projects; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.labels_projects_bridge
    ADD CONSTRAINT fkey_projects FOREIGN KEY (project_id) REFERENCES public.projects(id);


-- Completed on 2023-03-11 14:52:05 -03

--
-- PostgreSQL database dump complete
--

