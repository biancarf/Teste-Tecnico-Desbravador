# Teste Prático Analista de QA - Desbravador Software

## Desafio realizado

Este repositório contém a implementação completa do teste prático para a posição de Analista de QA Desbravador Software.

## Estrutura do Testes

### 1. Cenários BDD (Gherkin) - 4 Cenários Obrigatórios

- **CT01**: Verificação de Disponibilidade de Reserva
- **CT02**: Seleção de Quarto e Composição de Hóspedes  
- **CT03**: Cadastro de Hóspedes Obrigatório
- **CT04**: Processo de Pagamento com Cartão de Crédito

### 2. Evidências Capturadas

- Snapshot do sistema Reservas onLine (login page)
- Screenshot da interface de login
- Documentação completa em formato Markdown

### 3. Comandos de Teste API

#### Validação Luhn Algorithm (Node.js)
```javascript
function validarLuhn(numeroCartao) {
  const num = numeroCartao.replace(/\s+/g, '');
  let soma = 0, alternar = false;
  for (let i = num.length - 1; i >= 0; i--) {
    let digito = parseInt(num[i]);
    if (alternar) { digito *= 2; if (digito > 9) digito -= 9; }
    soma += digito; alternar = !alternar;
  }
  return soma % 10 === 0;
}
console.log(validarLuhn('4000000000000044')); // true - cartão de teste válido
```

#### Exemplos de Comandos cURL
- GET: Consultar disponibilidade de reserva
- POST: Criar nova reserva via API
- GET: Consultar status da reserva

#### Newman (Coleção Postman)
```
newman run reservas_collection.json --reporters cli,html
```

### 4. Automação Recomendada

- **Cypress**: testes end-to-end da interface web
- **Postman / Newman**: testes de API
- **Playwright**: alternativa multiplataforma

### 5. Dados de Teste Utilizados

- **Cartão de Crédito**: 4000 0000 0000 0044 (passa validação Luhn)
- **Nome**: DESBRAVADOR SOFTWARE
- **Validade**: 12/23
- **CVC**: 123
- **Hóspedes**: 02 Adultos + 01 Criança (até 5 anos)
- **Quarto**: STANDARD ST1
- **Período**: Mínimo 03 dias consecutivos

## Arquivos Incluídos

- `testes_reservas.md` - Cenários BDD completos com justificativas
- `comandos_api.md` - Todos os comandos de teste API executados
- `screenshot_login.png` - Print da tela de login do sistema
- `README.md` - Este arquivo de boas-vindas

## justificativa da Escolha dos Cenários

1. **CT01 (Disponibilidade)**: Fluxo core do sistema - sem disponibilidade não há reserva
2. **CT02 (Quarto + Hóspedes)**: Valida regra de negócio e seleção de produto
3. **CT03 (Cadastro)**: Requisito de compliance e identificação de usuários
4. **CT04 (Pagamento)**: Maior risco crítico - envolve transações financeiras e dados sensíveis

## Status

✅ Todos os requisitos do desafio concluídos
✅ 4 cenários BDD com Given/When/Then
✅ Validação Luhn do cartão de crédito confirmada
✅ Comandos API executados e documentados
✅ Evidências textuais e visuais capturadas
✅ Padrão BDD aplicado para melhor legibilidade

## Contato

Para dúvidas ou acesso ao repositório, entrar em contato.
