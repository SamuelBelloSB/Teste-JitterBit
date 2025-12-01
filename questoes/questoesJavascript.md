# 📚 Questões de JavaScript

## 1. **Qual é o operador lógico usado para verificar a negação de uma expressão? (Nota: 0,2)**

- a) `&&`
- b) `||`
- c) `!`
- d) `==`

**Resposta: c) `!`**

---

## 2. **Qual dos seguintes métodos é usado para adicionar um elemento ao final de um array? (Nota: 0,2)**

- a) `push()`
- b) `pop()`
- c) `shift()`
- d) `unshift()`

**Resposta: a) `push()`**

---

## 3. **O que o método “Array.map()” faz? (Nota: 0,2)**

- a) Remove o último elemento de um array. 
- b) Mapeia os elementos de um array para um novo array com base em uma função de mapeamento. 
- c) Filtra os elementos de um array com base em uma função de filtro. 
- d) Inverte a ordem dos elementos em um array. 

**Resposta: b) Mapeia os elementos de um array para um novo array com base em uma função de mapeamento.**

---

## 4. **Qual é a função do método “Array.filter()”? (Nota: 0,2)**

- a) Adicionar elementos ao início do array. 
- b) Remover elementos do array com base em uma função de filtro. 
- c) Transformar os elementos do array em uma string concatenada. 
- d) Ordenar o array em ordem alfabética.

**Resposta: b) Remover elementos do array com base em uma função de filtro.**

---

##  5. **O que é async/await em JavaScript? (Nota: 0,2)**

- a) Um método para criar funções síncronas em JavaScript. 
- b) Uma técnica para manipulação de erros em operações assíncronas. 
- c) Um conjunto de palavras-chave que tornam as funções assíncronas mais legíveis e fáceis de usar. 
- d) Uma biblioteca JavaScript para criar animações e transições suaves. 

**Resposta: c) Um conjunto de palavras-chave que tornam as funções assíncronas mais legíveis e fáceis de usar.**

---

## 6. **Qual é a sintaxe correta para definir uma função assíncrona chamada "getData"? (Nota: 0,2)**

- a) async getData() { return new Promise({}); } 
- b) getData() { return new Promise({}); } 
- c) async function getData() { return new Promise({}); } 
- d) async function getData() => new Promise({}); 

**Resposta: c) async function getData() { return new Promise({}); }**

---

## 7. **O que será impresso no código abaixo?  (Nota: 0,6)**

```javascript
let palavra = "ABC"; 
switch (palavra) 
{ 
case "ACB": 
     console.log("C"); 
      break; 
  case "BC": 
  case "ABC": 
             console.log("A"); 
      break; 
case "B": 
                  console.log("Hello"); 
      break; 
       default: 
                  console.log("Palavra não encontrada"); 
      break; 
}
```

- a) C. 
- b) A. 
- c) Hello. 
- d) Palavra não encontrada

**Resposta: b) A.**

---

## 8.  **Escreva uma função em JavaScript chamada “somaImpares” que recebe um número inteiro positivo “n” como parâmetro e retorna a soma de todos os números ímpares de 1 até n. (Nota: 0,6)**

Exemplo:
somaImpares(5); // Saída esperada: 9 (1 + 3 + 5) 
somaImpares(10); // Saída esperada: 25 (1 + 3 + 5 + 7 + 9) 

Resposta:
```javascript
// Resposta A
function somaImpares(n) 
{
    // Encontra quantos números impares k tem em n
    // A soma dos números impares é sempre igual a k ao quadrado 
    const k = Math.ceil(n/2)
    return k*k
}

// Resposta B
function somaImpares(n)
{
    // inicializa o somador
    let soma = 0

    // itera de 1 a n
    for (let i = 1; i<=n; i++>)
    {
        // Se resto da divisão de i por 2 for diferente de 0, logo i é impár
        if (i % 2 !==0)
        {
            // Adicona valor impár de i na soma
            soma += i;
        }
    }
    return soma;
}
```

---

## 9. **Escreva uma função chamada” inverterPalavra” que recebe uma string como parâmetro e retorna a string com as letras invertidas. (Nota: 0,6)**

Exemplo:
inverterPalavra("javascript"); // Saída esperada: "tpircsavaj"

Resposta:
```javascript
function invertePalavra(palavra)
{
    return palavra.split('').reverse().join('');
}
```

---

## 10.  **Considere o seguinte trecho de código em JavaScript que tenta realizar a divisão de dois números: (Nota: 0,6)**

```javascript
function dividirNumeros(number1, number2) { 
        try  
        { 
            if (number2 === 0)  
            { 
                throw new Error("Divisão por zero não é permitida."); 
            } 
 
            return number1 / number2; 
 
        }  
        catch (error)  
        { 
            return "Erro: " + error.message; 
        } 
    }
```

Escreva abaixo o resultado retornado por cada função:

- a) console.log(dividirNumeros(20, 2));
- b) console.log(dividirNumeros(6, 0));
- c) console.log(dividirNumeros(21, 3));

**Resposta: a) 10**
**Resposta: b) Erro: Divisão por zero não é permitida.**
**Resposta: C) 7**

---

11. **Como você pode percorrer e mapear um array JSON em JavaScript? Explique como usar métodos como "map", "forEach" ou "for...of" para iterar e manipular os elementos do array. (Nota: 0,7)**

**Resposta: Podemos percorrer e mapear um array JSON em JavaScript utilizando métodos nativos, como .map() e forEach().<br> O método ".map()" é usado para produzir um novo array atuando como uma função de manipulação, onde cada elemento desse array é submetido e retornando um novo array novo array pós manipulação. A vantagem do ".map()" se dá pelo retorno de um array manipulado sem modificar o array original.<br>O método ".forEach()" é usado para percorrer um array de forma iterativa executando algo sobre cada alemento do array.<br>Já o "for...of" tem controle sobre as entradas, então é possível percorrer o array e encerrar a iteração mais cedo de acordo com alguma condição com o uso do "break" ou "continue"**

---

12. **O que são variáveis em JavaScript? Explique como declarar e atribuir valores a uma variável.(Nota: 0,7)**

**Resposta: Variáveis são como caixas armazenadoras, usadas para armazenar dados ou informação. Em Java por exemplo, essas variáveis são menos flexíveis e é preciso definir antecipadamente qual tipo de dado ou informação aquela variável será capaz de armazanar, essa caracteristica é chamada de tipagem forte. Já em JavaScript as variáveis são flexiveis, não precisando obrigatóriamente declarar antecipadamente que tipo de dados ou informação será armazenada, chamamos essa característica de tipagem flexível.<br>No JavaScript existem 3 formas de criar uma variável, que são elas:<br>- let: é a forma mais comum e recomendada de criar uma variável cujo o valor espera-se que mude no futuro.<br>- const: é usada para declarar variáveis constantes, ou seja, variáveis cujo os valores deve permanecer o mesmo durante toda execução do programa.<br>- var: é a forma mais antiga e não recomendada de criar uma variável, diferente do let e var que tem o escopo em bloco, o escopo de uma variável var é de função, permitindo 'vazamento de escopo', ou seja ela não respeita os limites das {} de um 'if' ou 'for', gerando problemas de execução.**

---

13. **Em JavaScript, é possível ter múltiplas condições em uma estrutura "if/else"? Descreva como usar operadores lógicos (como "&&" e "||") para combinar condições. (Nota: 0,6)**

**Resposta: Sim é possível ter múltiplas condições em uma estrutura "if/else". Isso é muito utilizado para validar dados.<br>Operador && (AND/E) dentro de um if retorna verdadeira se TODAS as condições forem verdadeiras. Se uma falhar, tudo falhará, ou seja preciso que a condição A seja verdade E que B seja verdade também:<br>**

```javascript
let usuario = "Samuel";
let senha = "B3110";

if (usuario === "Samuel" && senha ==="123"){
    console.log("Acesso liberado!");
} else {
    console.log("Usuário ou senha incorretos.")
}
```

**Operador || (OR/OU) dentro de um if retorna verdadeira se PELO MENOS UMA das condições seja verdadeira. Se ambas forem falsas tudo falhará, ou seja preciso que a condição A seja verdade OU que B seja verdade:**

```javascript
let corUm = "Vermelho";
let corDois= "Verde";

// Basta uma ser verdadeira para entrar no IF
if (corUm || corDois === "Vermelho") {
    console.log("Uma cor primária foi selecionada");
} else {
    console.log("Nenhuma cor primária foi selecionada");
}
```

**Combinando "&&" e "||"  podemos criar lógicas mais complexas.**

```javascript
let formacao = "SI";
let anosDeExperiencia = 0;

// (Tem mais de 2 anos de experiência) OU (Tem formação na área de SI)
if (anosDeExperiencia >= 2 || formacao = "SI"){
    console.log("Aprovado para o processo");
} else {
    console.log("Recusado para o processo");
}

```

---

