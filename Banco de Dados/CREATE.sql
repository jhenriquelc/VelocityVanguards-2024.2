CREATE DATABASE IF NOT EXISTS ImobiliariaVanguard;
USE ImobiliariaVanguard;
CREATE TABLE Funcionario(
   	CPF CHAR(11),
    HashSenha CHAR(64),	/*Assumindo SHA 256*/
    Cookie VARCHAR(64) NULL,
    PRIMARY KEY (CPF)
);

CREATE TABLE Imovel (
	#endereco
	ID_Imovel int AUTO_INCREMENT,
	Bairro VARCHAR(50),
	Rua VARCHAR(50), 
	
	Titulo VARCHAR(50),
	Descricao TEXT,
	Categoria int, /*1=Apartamento 2=Casa 3=Terreno 4=SalaComercial*/
	Tipo int, /*1=Comercial 2=Residencial*/
	PrecoAluguel float NULL, /* Se for NULL não é alugavel*/
	PrecoVenda float NULL,	 /* Se for NULL não está a venda*/
	
	PRIMARY KEY (ID_Imovel),
);

CREATE TABLE Propriedades(
	ID_Imovel int,
	ValorCondominio float NULL,
	ValorIptu float,
	
	Area float,
	NumeroGaragem int, 
	NumeroQuartos int,
	NumeroBanheiros int, 
	
	PRIMARY KEY (ID_Imovel),
	FOREIGN KEY (ID_Imovel) REFERENCES Imovel(ID_Imovel)
);

CREATE TABLE Imagem (
	ID_Imagem int,
	ID_Imovel int,
	foto MEDIUMBLOB,
	PRIMARY KEY (ID_Imagem, ID_Imovel),
	FOREIGN KEY (ID_Imovel) REFERENCES Imovel (ID_Imovel)
);