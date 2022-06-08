Atividade - Aprofundamento SQL
===============================

### **EXERCÍCIO 1** 

<br>

> Leia os comandos abaixo e indique o que eles fazem. <br> 
>> Não os rode nas tabelas desse projeto! <br> Explique o que elas fariam se fossem rodadas.

<br>

a.

<center>

```
ALTER TABLE Actor DROP COLUMN salary;
```

</center>

R: Altera na tabela `Actor` deletando a coluna `salary`.

<br>

b.

<center>

```
ALTER TABLE Actor CHANGE gender sex VARCHAR(6); 
```

</center>

R: Altera na tabela `Actor` mudando a coluna `gender` para o nome `sex` com o **tipo** `VARCHAR(6)`.

<br>


c. 

<center>

```
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```

</center>

R: Altera na tabela `Actor` mudando a coluna `gender` com o **tipo** `VARCHAR(255)`.

<br>

d. Agora, altere a coluna gender da tabela ACTOR para que ele aceite strings com até 100 caracteres.

R:

<center>

```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

</center>

<br>

### **EXERCÍCIO 2** 

<br>

> No MySQL também podemos fazer as operações CRUD como pudemos ver com a criação e leitura das tabelas. <br>
> Vamos ver agora o `UPDATE`, que nos permite atualizá-la. <br>
>
> A query abaixo muda o **nome** do ator com `id = 123` para _Moacyr Franco_: 
>
> ```
> UPDATE Actor
> SET name = "Moacyr Franco"
> WHERE id = "123"
> ```

<br>

a. Escreva uma query que atualize o nome e a data de nascimento do ator com o id 003.

R:

```
UPDATE Actor 
    SET name = "Marie Avgeropoulos",
        birth_date = "1986-06-17"
    WHERE id = "003";
```

<br>

b. Escreva uma query que atualize o nome da atriz Juliana Paes para JULIANA PAES. Então, escreva outra query para voltar ao nome anterior.

R:

```
UPDATE Actor
	SET name = "JULIANA PAES"
	WHERE name = "Juliana Paes";

UPDATE Actor
	SET name = "Juliana Paes"
	WHERE name = "JULIANA PAES";
```

<br>

c. Escreva uma query que atualize todas as informações do ator com o id 005.

R:

```
UPDATE Actor
    SET name = "Dwayne Johnson",
        birth_date = "1972-02-05",
        salary = 7.000.000,
        gender = "male"
    WHERE id = "005";
```

<br>

d. Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado. 

R: A query abaixo será executada normalmente, porém, não vai atualizar nada na tabela `Actor` pois não existe o `id = 100`.

```
UPDATE Actor
    SET name = "Paul Walker",
        birth_date = "1973-09-12",
        salary = 7000000,
        gender = "male"
    WHERE id = "100";

0 row(s) affected
Rows matched: 0  Changed: 0  Warnings: 0    0.172 sec
```

<br>

### **EXERCÍCIO 3** 

<br>

> Para finalizar o CRUD, veremos o D: `DELETE`. <br>
> Esse operador permite deletar toda uma linha de uma tabela, seria como apagar um elemento dela. 
>
> Por exemplo, se quisermos apagar o ator com o nome `Tony Ramos`:
>
> ```
> DELETE FROM Actor WHERE name = "Tony Ramos"
> ```

<br>

a. Escreva uma query que apague a atriz com o nome Fernanda Montenegro.

R:

```
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```

<br>

b. Escreva uma query que apague todos os atores (do gênero male) com o salário maior do que R$1.000.000,00

R:

```
DELETE FROM Actor 
    WHERE gender = "male" AND salary > 1000000;
```

<br>

### **EXERCÍCIO 4** 

<br>

> Agora veremos **funções** no MySQL, que nos permitem manipular os dados. <br>
> Alguns exemplos são: <br>
>   - `COUNT()` Retorna em quantidade algum dado;
>   - `AVG()` Retorna a média de algum dado que seja numérico;
>   - `MAX()` Retorna o valor máximo de algum dado, ou seja, o valor mais alto;
>   - `MIN()` Retorna o valor mínimo de algum dado, ou seja, o valor mais baixo.

<br>

a. Escreva uma query que pegue o maior salário de todos os atores e atrizes.

R:

```
SELECT MAX(salary) FROM Actor;
```

<br>

b. Escreva uma query que pegue o menor salário das atrizes.

R:

```
SELECT MIN(salary) FROM Actor WHERE gender = "female";
```

<br>

c. Escreva uma query que pegue a quantidade de atrizes.

R:

```
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```

<br>

d. Escreva uma query que pegue a soma de todos os salários.

R:

```
SELECT SUM(salary) FROM Actor;
```

<br>

### **EXERCÍCIO 5** 

<br>

> Para finalizar, veremos sobre `LIMIT`, `ORDER BY` e `GROUP BY`.
> 
> `LIMIT` limita a quantidade de dados retornados; <br>
>> ```
>> SELECT * FROM Actor LIMIT 3;
>> ```
>
> `ORDER BY` ordena os dados retornados em crescente(`ASC`) ou decrescente(`DESC`); <br>
>> ```
>> SELECT * FROM Actor ORDER BY name ASC;
>> ```
>
> `GROUP BY` agrupa os dados em relação a alguma coluna da tabela.
>> ```
>> SELECT COUNT(*), gender 
>>    FROM Actor 
>>    GROUP BY gender;
>> ```

<br>

a. Releia a última query. Teste-a. Explique o resultado com as suas palavras.

R: A query abaixo retorna duas colunas com valores `COUNT(*)` e `gender`, onde cada linha terá a quantidade de cada gênero da tabela `Actor`. 

```
SELECT COUNT(*), gender 
    FROM Actor 
    GROUP BY gender;

2 row(s) returned	0.157 sec / 0.000 sec
```

COUNT(*) | gender
-------- | ------ 
   3     | male
   3     | female

<br>

b. Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética.

R:

```
SELECT id, name FROM Actor
    ORDER BY name DESC;

6 row(s) returned	0.156 sec / 0.000 sec
```

id  | name
--  | ----
006	| Zendaya
007	| Will Smith
001	| Tony Ramos
004	| Tom Holland
003	| Marie Avgeropoulos

<br>

c. Faça uma query que retorne todos os atores ordenados pelo salário.

R:

```
SELECT * FROM Actor
    ORDER BY salary;

6 row(s) returned	0.156 sec / 0.000 sec
```

id  | name               | salary  | birth_date | gender
--  | ----               | ------  | ---------- | ------
004 | Tom Holland        | 100000  | 1996-06-01 | male
003	| Marie Avgeropoulos | 300000  | 1986-06-17 | female
001	| Tony Ramos         | 400000  | 1948-08-25 | male
007	| Will Smith         | 500000  | 1980-05-30 | male
006	| Zendaya            | 1000000 | 1980-10-15 | female
002	| Glória Pires       | 1200000 | 1963-08-23 | female

<br>

d. Faça uma query que retorne os atores com os três maiores salarios.

R:

```
SELECT * FROM Actor
    ORDER BY salary DESC
    LIMIT 3;

3 row(s) returned	0.187 sec / 0.000 sec
```

id  | name               | salary  | birth_date | gender
--  | ----               | ------  | ---------- | ------
002	| Glória Pires       | 1200000 | 1963-08-23 | female
006	| Zendaya            | 1000000 | 1980-10-15 | female
007	| Will Smith         | 500000  | 1980-05-30 | male

<br>

e. Faça uma query que retorne a média de salário por gênero.

R:

```
SELECT AVG(salary), gender FROM Actor
    GROUP BY gender;

2 row(s) returned	0.157 sec / 0.000 sec
```

AVG(salary)       | gender
-----------       | ------ 
333333.3333333333 | male
833333.3333333334 | female

<br>

### **EXERCÍCIO 6** 

<br>

> Pratique mais um pouco com os exercícios abaixo:

<br>

a. Altere a tabela de `Movie` e adicione um novo parâmetro: `playing_limit_date` que indique a data limite em que o filme será passado no cinema. 

R:

```
ALTER TABLE Movie ADD playing_limit_date DATE;
```

<br>

b. Altere a tabela de `Movie` para que o parâmetro `rating` possa aceitar valores não inteiros, como, por exemplo, uma avaliação `8.5`.

R:

```
ALTER TABLE Movie CHANGE rating rating FLOAT;
```

<br>

c. Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído.

R:

```
UPDATE Movie
    SET playing_limit_date = "2022-12-31"
    WHERE id = "001";

UPDATE Movie
    SET playing_limit_date = "2022-01-01"
    WHERE id = "002";
```

<br>

d. Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.

R:

```

```