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
foreign key(petId) references Dog(dId)
);


CREATE TABLE dog_breeds (
    breed_id INT AUTO_INCREMENT PRIMARY KEY,
    breed_name VARCHAR(255) NOT NULL,
    country_of_origin VARCHAR(255),
    temperament VARCHAR(255),
    lifespan VARCHAR(20),
    common_colors VARCHAR(255)
    weight VARCHAR(255),
    height VARCHAR(255),
    grooming VARCHAR(255),
    trainability VARCHAR(255),
    mental_stimulation_needs VARCHAR(255),
    social_level VARCHAR(255),
    coat_length VARCHAR(255),
    shedding_level VARCHAR(255)
);

CREATE TABLE videos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255),
  url VARCHAR(255),
  dbid int,
  foreign key(dbid) references dog_breeds(breed_id)
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

INSERT INTO dog_breeds (breed_name, country_of_origin, temperament, lifespan, common_colors, weight, height, grooming, trainability, social_level, mental_stimulation_needs, coat_length, shedding_level)
VALUES
    ('Beagle', ' United Kingdom' , 'Intelligent, Curious, Gentle' , '12-15' , 'White and Tan', '20-30 lbs', '13-15 inches', 'monthly', '3/5', '3/5', '4/5', 'short, smooth', '3/5'),
    ('Poodle', ' Germany ' , 'Intelligent, Alert, Faithful' , '12-15' , 'Black, White, Apricot', '40-50lbs(female) 60-70lbs(male)', '>15 inches', 'weekly-every other day', '5/5', '4/5', '5/5', 'long, curly', '1/5'),
    ('Boxer', 'Germany' , 'Energetic, Brave, Loyal' , '10-12' , 'Fawn, Brindle', '65-80lbs (male) 50-65lbs (female)', '23-25 inches (male) 21.5-23.5 inches (female)', 'monthly', '4/5', '4/5', '4/5', 'short, smooth', '2/5'),
    ('Bulldog', 'United Kingdom' , 'Willful, Docile, Friendly' , '8-10' , 'Black, Fawn, White', '50lbs (male) 40lbs(female)', '14-15 inches', 'weekly-monthly', '4/5', '3/5', '3/5', 'short-smooth', '3/5'),
    ('Rottweiler', 'Germany' , 'Alert, Obedient, Courageous' , '8-10' , 'Black, Tan, Mahogany', '95-135lbs (male) 80-100lbs (female)', '24-27 inches (male) 22-25 inches (female)', 'monthly', '5/5', '4/5', '5/5', '3/5'),
    ('French Bulldog', 'United Kingdom' , 'Bright, Sociable, Affectionate' , '10-12' , 'White, Fawn, Tan', '>28 lbs', '11-13 inches', 'monthly', '4/5', '4/5', '4/5', 'short, smooth', '3/5'),
    ('Dachsund', 'Germany' , 'Lively, Clever, Stubborn' , '12-16' , 'Black, Tan, Chocolate and Cream', '16-32lbs (standard) >11lbs (mini)', '8-9 inches (standard) 5-6 inches (mini)', 'monthly', '4/5', '4/5', '3/5', 'short-medium, smooth', '2/5'),
    ('Yorkshire Terrier', 'United Kingdom' , 'Bold, Confident, Intelligent' , '13-16' , 'Blue and Tan, Black and Tan', '7lbs', '7-8 inches', 'daily', '4/5', '5/5', '4/5', 'long, silky', '1/5'),
    ('Siberian Husky', 'Siberia' , 'Intelligent, Alert, Outgoing' , '12-15' , 'White, Black, Red and White', '45-60lbs (male) 35-50lbs (female)', '21-23.5 inches (male) 20-22 inches (female)', 'monthly', '3/5', '4/5', '4/5', 'medium, double', '4/5'),
    ('Australian Shepherd', 'Australia' , 'Intelligent, Affectionate, Protective' , '13-15' , 'Merle, Black, Blue Merle', '50-65lbs(male) 40-55lbs(female)', '20-23 inches(male) 18-21lbs(female)', monthly, '5/5', '3/5', '5/5', 'medium, smooth', '3/5'),
    ('Border Collie', 'United Kingdom' , 'Responsive, Athletic, Energetic' , '10-17' , 'Black, White, Chocolate', '30-55lbs', '19-22 inches', 'every other day', '4/5', '4/5', '4/5', 'medium, smooth-rough', '3/5'),
    ('Mini Poodle', ' Germany', 'Proud, Athletic, Faithful', '10-18', 'Black, White, Apricot', '10-15lbs', '10-15 inches', 'weekly-every other day', '5/5', '4/5', '5/5', 'long, curly', '1/5'),
    ('Labrador Retriever', 'United Kingdom', 'Friendly, Outgoing, High-Spirited', '11-13', 'Black, Yellow, Chocolate, Fox Red', '65-80lbs (male) 55-70lbs (female)', '22.5-24.5 inches (male) 21.5-23.5 inches (female)', 'every other month', '5/5', '5/5', '4/5', 'short, double', '4/5'),
    ('Golden Retriever', 'Scotland', 'Serious, Obedient, Hard-Working', '10-12', 'Cream, Golden(normal, light and dark)', '65-75lbs (male) 55-65lbs (female)', '23-24 inches (male) 21.5-22.5 inches (female)', 'every other month', '5/5', '4/5', '4/5', 'medium, double', '4/5'),
    ('German Shepherd', 'Germany', 'Athletic, Loyal, Confident', '7-10', 'Black and Red(or Tan), Sable, Blue', '65-90lbs (male) 50-70lbs (female)', '24-26 inches (male) 22-24 inches (female)', 'every other month', '5/5', '4/5', '5/5', 'medium, double', '4/5'),
    ('German Shorthaired pointer', 'Germany', 'Versatile, Enthusiastic', '10-12', 'Liver and White, Black and White', '55-70lbs (male) 45-60lbs (female)', '23-25 inches (male) 21-23 inches (female)', '5/5', '4/5', '5/5', 'short, smooth', '3/5'),
    ('Corgi', 'Wales', 'Athletic, Affectionate, Lively', '12-13', 'Sable, Red, Black', '30lbs (male) 28lbs (female)', '10-12 inches', 'monthly', '4/5', '4/5', '4/5', 'short, double', '4/5'),
    ('Cavalier Spaniel', 'United Kingdom', 'Attentive, Athletic', '12-15', 'Blenheim, Black and Tan, Ruby, Tri-Color', '13-18 lbs', '12-13 inches', '4/5', '3/5', '3/5', 'medium, wavy-silky', '2/5'),
    ('Doberman', 'Germany', 'Fearless, Vigilant, Powerful', '10-12', 'Black and Rust, Black, Blue, White', '75-100lbs (male) 60-90lbs (female)', '26-28 inches (male) 24-26 inches (female)', 'monthly', '5/5', '4/5', '4/5', 'short, smooth', '4/5'),
    ('Miniature Schnauzer', 'Germany', 'Outgoing, Healthy', '12-15', 'Black Silver, Liver Tan, Salt and Pepper', '11-20 lbs', '12-14 inches', 'monthly', '5/5', '4/5', '4/5', 'medium, wiry/double', '3/5'),
    ('Cane Corso', 'Italy', 'Assertive, Confident', '9-12', 'Fawn, Red, Black(or Gray) Brindle', 'proportionate to height', '25-27.5 inches (male) 23.5-26 inches (female)', 'monthly', '4/5', '3/5', '3/5', 'short, smooth', '2/5')
;

INSERT INTO videos(title, url)
VALUES
        ('How to Teach your Puppy to Sit and Stay', 'https://www.youtube.com/watch?v=DPNz6reMVXY'),
        ('How to leash train your puppy or dog. || Monkoodog', 'https://www.youtube.com/watch?v=XWHwt575ZgQ'),
        ('The EASIEST way to Teach Your Dog to ROLL OVER! | How to teach your dog to roll over', 'https://www.youtube.com/watch?v=IsJ0VdeOJcg'),
        ('How to Teach Your Dog to Walk to Heel In Seconds', 'https://www.youtube.com/watch?v=ftI0MidR4oE'),
        ('THIS is how to train your REACTIVE DOG!', 'https://www.youtube.com/watch?v=y6OzuPEPQXo')
;

SELECT * FROM dog_breeds;
