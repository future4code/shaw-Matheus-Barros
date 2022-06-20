# Exercício 1

```
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

SHOW DATABASES;

SHOW TABLES;

DESCRIBE Actor
```

a) 
* `VARCHAR(n)` - declara strings, onde **n** será o número máximo de caracteres;

* `DATE` - declara uma data representada pela seguinte formatação: YYYY-MM-DD;

* `PRIMARY KEY` - identificador para cada item;

* `NOT NULL` - indica que tal propriedade não pode ser vazia.

b) 
* `SHOW DATABASES` - retorna todos os bancos de dados disponíveis no sistema;

* `SHOW TABLES` - retorna todas as tabelas cadastradas no banco de dados.

c) Retorna as colunas da tabela com seus respectivos valores, como por exemplo:

* `Field` - todos os campos de dados da tabela;

* `Type` - tipo de cada campo da tabela;

* `Null` - diz respeito se o campo é permitido receber um valor nulo(vazio) ...

# Exercício 2

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
```

a)
```
("002", "Glória Pires", 1200000, "1963-08-23", "female")
```

b) 
- Adicionando novo ator:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
	VALUES
        (
            "001", 
            "Tony Ramos", 
            400000, 
            "1948-08-25", 
            "male"
        )
,       (
            "002", 
            "Glória Pires", 
            1200000,
            "1963-08-23",
            "female"
        )
,       (
            "003",
            "Glória",
            12000, 
            "1963-08-20",
            "female"
        );
```

- Erro gerado:
```
Error Code: 1062. Duplicate entry '001' for key 'PRIMARY'	0.172 sec
```
- Está dizendo que a key '001' está sendo duplicada, logo ele para a execução, já que não tem como possuir dados com a mesma key.

c) 
- Inserindo novo ator na tabela com quantidade de valores diferentes da quantidade de colunas.
```
INSERT INTO Actor (id, name, salary)
	VALUES
        (
            "003", 
            "Fernanda Montenegro", 
            300000,
            "1929-10-19",
            "female"
        );
```

- Erro gerado:
```
Error Code: 1136. Column count doesn't match value count at row 1	0.187 sec
```
- Está dizendo que a quantidade de parâmetros não corresponde a quantidade de valores passados, para resolver, basta adicionar as outras colunas faltantes.

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
	VALUES
        (
            "003", 
            "Fernanda Montenegro", 
            300000, 
            "1929-10-19", 
            "female"
        );
```

d)
- Erro:
```
INSERT INTO Actor (id, salary, birth_date, gender)
	VALUES
        (
            "004", 
            400000, 
            "1949-04-18", 
            "male"
        );

Error Code: 1364. Field 'name' doesn't have a default value	0.187 sec
```

- Solução: 
```
INSERT INTO Actor (id, salary, birth_date, gender)
	VALUES
        (
            "004",
            "Matheus", 
            400000, 
            "1949-04-18", 
            "male"
        );
```

e)
- Erro:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
	VALUES
        (
            "005",  
            "Juliana Paes", 
            719333.33, 
            1979-03-26, 
            "female"
        );

Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1	0.172 sec
```

- Solução:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
	VALUES
        (
            "005",  
            "Juliana Paes", 
            719333.33, 
            "1979-03-26", 
            "female"
        );
```

f)
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
	VALUES
        (
            "006",
            "Zendaya", 
            1000000, 
            "1980-010-15", 
            "female"
        )
,		(
            "007",  
            "Will Smith", 
            500000, 
            "1980-05-30", 
            "male"
        );
```

# Exercício 3

a)

```
SELECT * from Actor WHERE gender = "female";
```

b)
```
SELECT salary from Actor WHERE name = "Tony Ramos";
```

c) Trouxe uma tabela vazia, pois não existe nenhum ator com o `gender` **invalid**.

d)
```
SELECT id, name, salary from Actor WHERE salary <= 500000;
```

e)
- Erro:
```
SELECT id, nome from Actor WHERE id = "002";

Error Code: 1054. Unknown column 'nome' in 'field list'	0.171 sec
```

- Solução: 
```
SELECT id, name from Actor WHERE id = "002";
```

# Exercício 4

a)
```
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000
```
- Seleciona todos os dados da tabela `Actor`, onde `name` tenha as iniciais **A** ou **J**, e que `salary` seja maior que R$300.000.

b)
```
SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;
```

c)
```
SELECT * FROM Actor WHERE (name LIKE "%A%" OR name LIKE "%a%");
```

d)
```
SELECT * FROM Actor WHERE (
	name LIKE "%A%" OR name LIKE "%a%" OR name LIKE "%G%" OR name LIKE "%g%"
) AND salary BETWEEN 350000 AND 900000;
```

# Exercício 5

a)
```
CREATE TABLE Movie (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    synopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating INT NOT NULL, CHECK(rating  BETWEEN 0 AND 10)
);
```

- Cria a tabela `Movie` com as seguintes colunas: `id`, `name`, `synopsis`, `release_date` e `rating`.

b) c) d) e)
```
INSERT INTO Movie (id, name, synopsis, release_date, rating)
	VALUES
		(
			"001", 
            "Se Eu Fosse Você", 
            "Cláudio e Helena são casados há muitos anos e 
            enfrentam a rotina do casamento. Um dia eles são 
            atingidos por um fenômeno inexplicável e trocam de corpos", 
            "2006/01/06", 
            7
		),
        (
			"002", 
            "Doce de mãe", 
            "Dona Picucha, uma animada senhora de 85 anos, sempre causa 
            grandes confusões. A vida dela e dos seus quatro filhos sofre 
            uma reviravolta depois que Zaida, empregada e amiga de Dona 
            Picucha, anuncia que vai se casar e não poderá mais morar com ela", 
            "2012/12/27",
            10
        ),
        (
			"003", 
            "Dona Flor e Seus Dois Maridos", 
            "Dona Flor é uma sedutora professora de culinária casada com Vadinho, 
            que só quer saber de farras e jogatina nas boates. A vida de abusos 
            acaba por acarretar sua morte precoce.", 
            "2017/11/02",
            8
        ),
        (
			"004",
            "Pokémon: The First Movie",
            "Cientistas criam o mais forte e poderoso Pokémon do planeta: Mewtwo, 
            um Pokémon com poderes psíquicos. Só que a criatura se rebela, provocando 
            uma batalha contra os maiores treinadores de Pokémon, a fim de conquistar 
            o planeta.",
            "1998/07/18",
            4.8
        );
```

# Exercício 6

a)
```
SELECT id, name, rating from Movie WHERE id = 4;
```

b)
```
SELECT * from Movie WHERE name = "Pokémon: The First Movie";
```

c)
```
SELECT id, name, synopsis from Movie WHERE rating >= 7;
```

# Exercício 7

a)
```
SELECT * FROM Movie WHERE name LIKE "%vida%";
```

b)
```
SELECT * FROM Movie WHERE (name LIKE "%vida%" OR synopsis LIKE "%morte%");
```

c)
```
SELECT * FROM Movie WHERE release_date < "2022-06-06";
```

d)
```
SELECT * FROM Movie 
	WHERE (release_date < "2022-06-06") AND 
		  (
			name LIKE "%pokemon%" OR
			synopsis LIKE "%pokemon%"
		  ) 
          AND rating > 7;
```