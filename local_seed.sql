DROP DATABASE IF EXISTS bundle;
CREATE DATABASE bundle;

\c bundle;

CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    uid VARCHAR UNIQUE NOT NULL,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR NOT NULL
);

CREATE TABLE trip
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

CREATE TABLE bag_type
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE bag
(
    id SERIAL PRIMARY KEY,
    trip_id INT NOT NULL,
    type_id INT NOT NULL,
    FOREIGN KEY (trip_id) REFERENCES trip(id),
    FOREIGN KEY (type_id) REFERENCES bag_type(id)
);

CREATE TABLE categories
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE items
(
    id SERIAL PRIMARY KEY,
    packed BIT NOT NULL,
    quantity INT NOT NULL,
    bag_id INT NOT NULL,
    category_id INT NOT NULL,
    FOREIGN KEY (bag_id) REFERENCES bag(id),
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE itinerary_type
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
    FOREIGN KEY (type_id) REFERENCES itinerary_type(id),
    FOREIGN KEY (trip_id) REFERENCES trip(id)
);

CREATE TABLE todolist
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    trip_id INT NOT NULL,
    FOREIGN KEY (trip_id) REFERENCES trip(id)
);

CREATE TABLE todo
(
    id SERIAL PRIMARY KEY,
    task_name VARCHAR(50),
    complete BIT NOT NULL,
    todolist_id INT NOT NULL,
    FOREIGN KEY (todolist_id) REFERENCES todolist(id)
);