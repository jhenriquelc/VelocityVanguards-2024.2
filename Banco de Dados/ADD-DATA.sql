USE ImobiliariaVanguard;

/*Popular um imóvel*/

INSERT INTO ImobiliariaVanguard.Imovel (Rua, Bairro, Titulo, Descricao, Categoria, Tipo, PrecoVenda, PrecoAluguel)
VALUES ('Rua Marcelo', 'Bairro Marcelo', 'Apartamento mARCELO', 'Descrição Qualquer',
1,	/*Categoria= Apartamento (1)*/
2 	/*Categoria= Comercial(1), Residencial (2)*/, 1300, NULL);

INSERT INTO ImobiliariaVanguard.Propriedades VALUES (1 /*  <-- LEMBRAR DE MODIFICA PELO ID DO IMÓVEL QUE VOCÊ ESTÁ VINCULANDO*/, 1200, 
1400, 105.2, 2, 3, 2);

/*Criar um usuário com a senha: 'admin'*/
INSERT INTO ImobiliariaVanguard.Funcionario VALUES (12345678911, '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', NULL)
