CREATE DATABASE IF NOT EXISTS ImobiliariaVanguard;
USE ImobiliariaVanguard;

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


CREATE TABLE Imovel (
	#endereco
	ID_Imovel int,
	ID_Bairro int,
	ID_Rua int, 
	
	Categoria int, /*1=Apartamento 2=Casa 3=Terreno 4=SalaComercial*/
	Tipo int, /*1=Comercial 2=Residencial*/
	PrecoAluguel float NULL, /* Se for NULL não é alugavel*/
	PrecoVenda float NULL,	 /* Se for NULL não está a venda*/
	
	ValorCondominio float NULL,
	ValorIptu float,
	
	Area float,
	NumeroGaragem int, 
	NumeroQuartos int,
	NumeroBanheiros int, 
	
	PRIMARY KEY (ID_Imovel),
	FOREIGN KEY (ID_Bairro) REFERENCES Bairro(ID_Bairro),
	FOREIGN KEY (ID_Rua) REFERENCES Rua(ID_Rua)
);

CREATE TABLE Imagem (
	ID_Imagem int,
	ID_Imovel int,
	foto MEDIUMBLOB,
	PRIMARY KEY (ID_Imagem),
	FOREIGN KEY (ID_Imovel) REFERENCES Imovel (ID_Imovel)
)