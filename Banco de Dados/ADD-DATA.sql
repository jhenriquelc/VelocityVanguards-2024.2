USE ImobiliariaVanguard;

/*Popular um imóvel*/
INSERT INTO ImobiliariaVanguard.Rua VALUES (1, 'Rua das Camélias');
INSERT INTO ImobiliariaVanguard.Bairro VALUES (1, 'Jardim Azul');
INSERT INTO ImobiliariaVanguard.Imovel (ID_Bairro, ID_Rua, Titulo, Descricao, Categoria, Tipo, PrecoVenda, PrecoAluguel)
VALUES (1, 1, 'Apartamento Residencial', 'Descrição Qualquer',
1, 1, 1300, NULL);
INSERT INTO ImobiliariaVanguard.Propriedades VALUES (2, 1200, 
1400, 105.2, 2, 3, 2);

/*Criar um usuário com a senha: 'admin'*/
INSERT INTO ImobiliariaVanguard.Funcionario VALUES (12345678911, '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', NULL)
