DROP DATABASE IF EXISTS sunpop_db;

CREATE DATABASE sunpop_db;

USE sunpop_db;

CREATE TABLE alienbabes (
	id INT NOT NULL auto_increment,
    name nvarchar(250) NOT NULL,
    url nvarchar(250) NOT NULL,
    PRIMARY KEY (id)

);