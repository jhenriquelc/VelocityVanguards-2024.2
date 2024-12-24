CREATE DATABASE IF NOT EXISTS ImobiliariaVanguard;
USE DATABASE ImobiliariaVanguard;

CREATE TABLE Funcionario(
   	CPF CHAR(11),
    HashSenha CHAR(64),	/*Assumindo SHA 256*/
    PRIMARY KEY (CPF)
);

CREATE TABLE Bairro (
    ID_Bairro int,
    Nome VARCHAR(30),
    PRIMARY KEY (ID_Bairro)
);

CREATE TABLE Rua (
    ID_Rua int,
    Nome VARCHAR(30),
    PRIMARY KEY (ID_Rua)
);

CREATE TABLE Rua_Bairro(
	ID_Bairro int,
	ID_Rua int,
	FOREIGN KEY (ID_Bairro) REFERENCES Bairro (ID_Bairro),
	FOREIGN KEY (ID_Rua) REFERENCES Rua (ID_Rua),
	PRIMARY KEY (ID_Bairro, ID_Rua)
);

CREATE TABLE Imovel (
	#endereco
	ID_Imovel int,
	ID_Bairro int,
	ID_Rua int, 
	
	Categoria VARCHAR(20),
	Preco float,
	Area float,
	ValorCondominio float,

	Rua VARCHAR(30),
	NumeroQuartos int,
	NumeroBanheiros int, 
	
	PRIMARY KEY (ID_Imovel),
	FOREIGN KEY (ID_Bairro) REFERENCES Rua_Bairro(ID_Bairro),
	FOREIGN KEY (ID_Rua) REFERENCES Rua_Bairro(ID_Rua)
);

CREATE TABLE Imagem (
	ID_Imagem int,
	ID_Imovel int,
	foto MEDIUMBLOB,
	PRIMARY KEY (ID_Imagem),
	FOREIGN KEY (ID_Imovel) REFERENCES Imovel (ID_Imovel)
)