DROP DATABASE IF EXISTS bundle;
CREATE DATABASE bundle;

\c bundle;

CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    uid VARCHAR UNIQUE NOT NULL,
    username VARCHAR(50) NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE trips
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    country VARCHAR(100) NULL,
    city VARCHAR(100) NULL,
    departure_date DATE NULL,
    return_date DATE NULL,
    user_id INT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE bag_types
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE bags
(
    id SERIAL PRIMARY KEY,
    trip_id INT NOT NULL,
    type_id INT NOT NULL,
    FOREIGN KEY (trip_id) REFERENCES trips(id),
    FOREIGN KEY (type_id) REFERENCES bag_types(id)
);

CREATE TABLE categories
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE items
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    packed BOOLEAN NOT NULL,
    quantity INT NOT NULL,
    bag_id INT NOT NULL,
    category_id INT NOT NULL,
    FOREIGN KEY (bag_id) REFERENCES bags(id),
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE itinerary_types
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE itinerary
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    address VARCHAR(255),
    phone_number VARCHAR(20),
    note VARCHAR (255),
    trip_id INT NOT NULL,
    type_id INT NOT NULL,
    FOREIGN KEY (type_id) REFERENCES itinerary_types(id),
    FOREIGN KEY (trip_id) REFERENCES trips(id)
);

CREATE TABLE todolist
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    trip_id INT NOT NULL,
    FOREIGN KEY (trip_id) REFERENCES trips(id)
);

CREATE TABLE todos
(
    id SERIAL PRIMARY KEY,
    task_name VARCHAR(50),
    complete BOOLEAN NOT NULL,
    item_id INT NULL,
    todolist_id INT NOT NULL,
    FOREIGN KEY (todolist_id) REFERENCES todolist(id)
);

-- INSERT BAG TYPES
INSERT INTO bag_types (name)
VALUES ('personal');

INSERT INTO bag_types (name)
VALUES ('carry-on');

INSERT INTO bag_types (name)
VALUES ('checked');

-- INSERT CATEGORIES
INSERT INTO categories (name)
VALUES ('clothing');

INSERT INTO categories (name)
VALUES ('accessories');

INSERT INTO categories (name)
VALUES ('electronics');

INSERT INTO categories (name)
VALUES ('personal');

INSERT INTO categories (name)
VALUES ('documents');

INSERT INTO categories (name)
VALUES ('first-aid');

INSERT INTO categories (name)
VALUES ('essentials');

INSERT INTO categories (name)
VALUES ('children');

-- INSERT ITINERARY TYPES
INSERT INTO itinerary_types (name)
VALUES ('hotel');

INSERT INTO itinerary_types (name)
VALUES ('car rental');

INSERT INTO itinerary_types (name)
VALUES ('restaurant');

INSERT INTO itinerary_types (name)
VALUES ('vacation rental');

INSERT INTO itinerary_types (name)
VALUES ('flight');

INSERT INTO itinerary_types (name)
VALUES ('cruise');

INSERT INTO itinerary_types (name)
VALUES ('shopping');

INSERT INTO itinerary_types (name)
VALUES ('tour');

INSERT INTO itinerary_types (name)
VALUES ('activity');

INSERT INTO itinerary_types (name)
VALUES ('entertainment');

INSERT INTO itinerary_types (name)
VALUES ('event');