# cardvalidator-boo

## Validador do número de cartão de crédito V.1.0.0

**Esta biblioteca se destina a validar números de cartão de crédito.**
Foi usado o algoritmo de Luhn e retorna true ou false de acordo com número testado.

## Como instalar:

```shell

$  npm install cardvalidator-boo

```

## Como utilizar:

```node

> const cardValidator = require("cardvalidator-boo");
> cardValidator.cardValidator("4929534188660375")
> // returns "true"

```

## roadmap oficial do projeto

#### versão 1.0.0 (released)

- funcionalidade: validar um cartão de crédito de 16 dígitos.

