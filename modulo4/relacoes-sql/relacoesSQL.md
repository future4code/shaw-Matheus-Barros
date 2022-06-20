**Atividade - Relações SQL**
=========================

## **Exercício 1**

<br>

a) FOREIGN KEY serve para poder fazer relações de uma tabela para um item.

b) 
```
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

INSERT INTO Rating VALUES
	( "dlq", "Filme muito bacana.", 9, "001" ),
    ( "fpw", "Ótimo drama.", 8.5, "002" ),
    ( "hgk", "Muito divertido.", 8, "003"),
    ( "glb", "Varias emoções e muito nostálgico.", 10, "004" );
```

c)
```
INSERT INTO Rating VALUES
	("flg", "Gostei.", 7.5, "005");

Error Code: 1452. 
Cannot add or update a child row: a foreign key constraint fails (`shaw-21815296-barros`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
```
R: O erro diz que não foi possível adicionar ou atualizar o solicitado pois ele não encontra um `id` correspondente na tabela `Movie` para se relacionar.

d) 
```
ALTER TABLE Movie DROP COLUMN rating;
```

e)
```
DELETE FROM Movie WHERE id = "001";

Error Code: 1451. 
Cannot delete or update a parent row: a foreign key constraint fails (`shaw-21815296-barros`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
```
R: O erro diz que não foi possível deletar ou atualizar o solicitado pois o `id` está relacionado na tabela `Rating`, logo, precisaria apagar os dados respectivos de lá para não ficar um dado solto sem significado ou sem uso.  

<br>

## **Exercício 2**

<br>

a) 
```
CREATE TABLE MovieCast (
	movie_id VARCHAR(255),
	actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
```
R: Cria uma tabela com o nome `MovieCast`, que terá como coluna `movie_id` e `actor_id`, juntamente com uma `FOREIGN KEY` para cada uma das colunas, onde serão responsáveis para se relacionar ao filme e ator respectivamente.

b)
```
INSERT INTO MovieCast VALUES
	("001", "001"),
    ("001", "005"),
    ("002", "002"),
    ("003", "006"),
    ("004", "003"),
    ("004", "004");
```

c)
```
INSERT INTO MovieCast Values ("001", "005");

Error Code: 1452. 
Cannot add or update a child row: a foreign key constraint fails (`shaw-21815296-barros`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
```
R: O erro diz que não foi possível adicionar ou atualizar o solicitado pois não foi encontrado um `id` relacionado a tabela `Actor`.

d) 
```
DELETE FROM Movie WHERE id = "002";

Error Code: 1451. 
Cannot delete or update a parent row: a foreign key constraint fails (`shaw-21815296-barros`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))	0.156 sec
```
R: O erro diz que não foi possível deletar ou atualizar o solicitado pois o `id` está relacionado na tabela `MovieCast`, logo, precisaria apagar os dados respectivos de lá para não ficar um dado solto sem significado ou sem uso.

<br>

## **Exercício 3**

<br>

a)
```
SELECT * FROM Movie 
    INNER JOIN Rating ON Movie.id = Rating.movie_id;
```
R: Retorna a tabela `Movie` juntamente a tabela `Rating`, onde `Movie.id` seja igual a `Rating.movie_id`.

b)
```
SELECT name, Movie.id, rate FROM Movie JOIN Rating
	ON Movie.id = Rating.movie_id;
```
