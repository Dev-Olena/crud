CREATE TABLE cats (
    id serial PRIMARY KEY,
    name varchar(300) NOT NULL CHECK(name != ''),
    breed varchar(300),
    color varchar(300),
    age int NOT NULL CHECK (age > 0),
    weight numeric(3,1) CHECK(weight > 0),
    favorite text
);

INSERT INTO cats (name, breed, color, age, weight, favorite)
VALUES (
    'Murzik',
    'british',
    'grey',
    3,
    7,
    'tuna'
  );

CREATE TABLE owners(
    id serial PRIMARY KEY,
    first_name varchar(300) NOT NULL CHECK(first_name != ''),
    last_name varchar(300) NOT NULL CHECK(last_name != ''),
    address text NOT NULL CHECK(address != ''),
    phone char(12) NOT NULL CHECK(phone != '')
);

ALTER TABLE cats
ADD COLUMN owner int REFERENCES owners(id);

ALTER TABLE cats
ALTER CONSTRAINT "cat_pk" PRIMARY KEY(id, owner);