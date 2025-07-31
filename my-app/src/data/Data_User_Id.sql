CREATE TABLE User_Id (
    User_Id NUMBER(6) NOT NULL,
    first_name VARCHAR2(100),
    last_name VARCHAR2(100) NOT NULL,
    email VARCHAR2(25) NOT NULL,
    phone_number VARCHAR2(20),
    hire_date DATE NOT NULL,
    PRIMARY KEY (User_Id)
);


ALTER TABLE User_Id
ADD password VARCHAR2(100) NOT NULL;

