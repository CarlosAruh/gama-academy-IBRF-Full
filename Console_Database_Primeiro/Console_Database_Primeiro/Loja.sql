﻿IF OBJECT_ID('DBO.PEDIDO') IS NOT NULL
DROP TABLE DBO.PEDIDO;
GO

IF OBJECT_ID('DBO.CLIENTE') IS NOT NULL
DROP TABLE DBO.CLIENTE;
GO

CREATE TABLE CLIENTE (
ID INTEGER PRIMARY KEY IDENTITY(1,1),
NOME TEXT ,
EMAIL TEXT );
GO

CREATE TABLE PEDIDO (
ID INTEGER PRIMARY KEY IDENTITY(1,1),
CLIENTE_ID INTEGER ,
ITEM TEXT,
PRECO REAL,
FOREIGN KEY(CLIENTE_ID) REFERENCES CLIENTE(ID));
GO