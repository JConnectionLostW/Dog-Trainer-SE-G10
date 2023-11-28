#drop existing database
drop database if exists PawsonalTrainer;

#create and use database
create database PawsonalTrainer;
use PawsonalTrainer;

#create all tables

#table Business
create table Business(
BId int primary key,
name varchar(255),
title varchar(255),
address varchar(255),
year int,
phone int,
email varchar(225)
);

#table dev
create table dev(
eId int primary key,
name varchar(255),
address varchar(255),
phone int,
salary int,
email varchar(255),
BId int,
foreign key(BId) references Business(BId)
);

#table Customer
create table Customer(
cId int AUTO_INCREMENT primary key,
name varchar(255),
email varchar(255),
);

#create table for id and password kept separate for security
CREATE TABLE credentials (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT UNIQUE,
  username VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES Customer(cId)
);


#table Dog
create table Dog(
dId int primary key,
name varchar(255),
breed varchar(30),
custId int,
foreign key(custId) references Customer(cId)
);

#table Service
create table Service(
sId int primary key,
sName varchar(255),
vidId int,
petId int,
foreign key(vidId) references dev(eId),
foreign key(petId) references Dog(dId),
);


CREATE TABLE dog_breeds (
    breed_id INT AUTO_INCREMENT PRIMARY KEY,
    breed_name VARCHAR(255) NOT NULL,
    country_of_origin VARCHAR(255),
    size VARCHAR(20),
    temperament VARCHAR(255),
    lifespan VARCHAR(20),
    common_colors VARCHAR(255)
);

INSERT INTO dog_breeds (breed_name, country_of_origin, size, temperament, lifespan, common_colors)
VALUES
    ('Beagle', ' United Kingdom' , 'Medium' , 'Intelligent, Curious, Gentle' , '12-15' , 'White and Tan'),
    ('Poodle', ' Germany ' , 'Medium' , 'Intelligent, Alert, Faithful' , '12-15' , 'Black, White, Apricot'),
    ('Boxer', 'Germany' , 'Medium' , 'Energetic, Brave, Loyal' , '10-12' , 'Fawn, Brindle'),
    ('Bulldog', 'United Kingdom' , 'Medium' , 'Willful, Docile, Friendly' , '8-10' , 'Black, Fawn, White'),
    ('Rottweiler', 'Germany' , 'Large' , 'Alert, Obedient, Courageous' , '8-10' , 'Black, Tan, Mahogany'),
    ('French Bulldog', 'United Kingdom' , 'Small' , 'Bright, Sociable, Affectionate' , '10-12' , 'White, Fawn, Tan'),
    ('Dachsund', 'Germany' , 'Small' , 'Lively, Clever, Stubborn' , '12-16' , 'Black, Tan, Chocolate and Cream'),
    ('Yorkshire Terrier', 'United Kingdom' , 'Small' , 'Bold, Confident, Intelligent' , '13-16' , 'Blue and Tan, Black and Tan'),
    ('Siberian Husky', 'Siberia' , 'Medium' , 'Intelligent, Alert, Outgoing' , '12-15' , 'White, Black, Red and White'),
    ('Australian Shepherd', 'Australia' , 'Medium' , 'Intelligent, Affectionate, Protective' , '13-15' , 'Merle, Black, Blue Merle'),
    ('Border Collie', 'United Kingdom' , 'Medium' , 'Responsive, Athletic, Energetic' , '10-17' , 'Black, White, Chocolate')
;

SELECT * FROM test_db.dog_breeds;
#dummy info for testing
  
#Insert data for Customer
insert into customer
VALUES 
	(1, 'Alice Haynes', 'ahaynes@email.com'),
	(2, 'Ryan Johnson', 'rjohnson@email.com'),
	(3, 'Jacob Thompson', 'jthompson@email.com'),
	(4, 'Wally Anderson', 'wanderson@email.com'),
	(5, 'Crystal Summers', 'csummers@email.com');

#Insert data for credentials
insert into credentials
VALUES
	(1, 'ahaynes@gmail.com', 'H100just!a'),
	(2, 'rjohnson@gmail.com', 'K200icey?b'),
	(3, 'jthompson@gmail.com', 'Z300star#c'),
	(4, 'wanderson@gmail.com', 'Y400moon!d'),
	(5, 'csummers@gmail.com', 'X500sun7?e');

#Insert data for Dog
INSERT INTO Dog
VALUES
		(1, 'Billy', 'pitbull', 1),
		(2, 'Sally', 'golden retriever', 2),
		(3, 'Mark', 'pitbull', 3),
		(4, 'Snowy', 'pitbull', 4), 
		(5, 'Kent', 'golden retriever', 5); 

