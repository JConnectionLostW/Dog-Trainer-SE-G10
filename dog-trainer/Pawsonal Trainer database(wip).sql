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

#table Foods
create table Foods(
fId int primary key,
name varchar(255),
AllgeryItem varchar(255),
ptId int,
svcId int,
foreign key(ptId) references Dog(dId),
foreign key(svcId) references Service(sId),
);

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
