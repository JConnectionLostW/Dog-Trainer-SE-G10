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
cId int primary key
name varchar(255),
address varchar(255),
phone int,
email varchar(255),
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
	(1, 'Alice Haynes', '461-658-5116', 'ahaynes@email.com'),
	(2, 'Ryan Johnson', '764-466-1163', 'rjohnson@email.com'),
	(3, 'Jacob Thompson', '941-664-6618', 'jthompson@email.com'),
	(4, 'Wally Anderson', '946-648-1665', 'wanderson@email.com'),
	(5, 'Crystal Summers', '544-646-1616', 'csummers@email.com');

#Insert data for Dog
INSERT INTO Dog
VALUES
		(1, 'Billy', 'pitbull', 1),
		(2, 'Sally', 'golden retriever', 2),
		(3, 'Mark', 'pitbull', 3),
		(4, 'Snowy', 'pitbull', 4), 
		(5, 'Kent', 'golden retriever', 5); 
