# Teste Prático Analista de QA Desbravador Software

## Cenários de Teste em Formato BDD (Gherkin)

### Cenário 1: Verificação de Disponibilidade de Reserva (Dia Útil)
```gherkin
Cenario: Verificar disponibilidade de reserva para dias úteis
  Dado que o usuário está logado no sistema Reservas Online
  Quando o usuário acessa a página de reservas https://reservas.desbravador.com.br/hotel-app/desbravador-4-5
  Então o sistema deve exibir o calendário de disponibilidade
  E o usuário deve poder selecionar datas futuras
  Quando o usuário seleciona um período de 3 dias consecutivos
  Então o sistema deve exibir a disponibilidade do quarto STANDARD ST1
  E mostrar horários disponíveis para o período selecionado
```

### Cenário 2: Seleção de Quarto e Composição de Hóspedes
```gherkin
Cenario: Selecionar quarto STANDARD ST1 com hóspedes
  Dado que o usuário selecionou disponibilidade para 3 dias
  Quando o usuário seleciona o quarto "STANDARD ST1"
  Então o sistema deve confirmar a seleção do quarto
  E exibir as opções de composição de hóspedes
  Quando o usuário informa 02 adultos e 01 criança (até 5 anos)
  Então o sistema deve validar a idade da criança
  E calcular o valor total da reserva
  E permitir a continuação para a etapa de cadastro
```

### Cenário 3: Cadastro de Hóspedes Obrigatório
```gherkin
Cenario: Informar dados dos hóspedes da reserva
  Dado que o usuário prosseguiu após selecionar quarto e hóspedes
  Quando o sistema solicita o informar os hóspedes da reserva
  Então o sistema deve exibir campos obrigatórios para cada hóspede
  E validar formatos de nome, documento e contato
  Quando o usuário preenche todos os campos obrigatórios com dados válidos
  Então o sistema deve validar que todos os hóspedes foram cadastrados
  E permitir a progressão para a etapa de pagamento
  E exibir resumo da reserva com todos os dados confirmados
```

### Cenário 4: Processo de Pagamento com Cartão de Crédito
```gherkin
Cenario: Efetuar pagamento com cartão de crédito especificado
  Dado que o usuário chegou na etapa de pagamento
  Quando o usuário informa os dados do cartão de crédito:
    * Número: 4000 0000 0000 0044
    * Nome: DESBRAVADOR SOFTWARE
    * Validade: 12/23
    * CVC: 123
  Então o sistema deve validar o número do cartão (Luhn algorithm)
  E validar nome do portador
  E validar data de validade (não expirada)
  E validar CVC (3 dígitos)
  Quando o usuário confirma o pagamento
  Então o sistema deve processar a transação
  E exibir confirmação de reserva bem-sucedida
  E gerar número de protocolo/confirmation code
  E enviar e-mail de confirmação para o e-mail cadastrado
```

## Justificativa da Escolha dos Cenários

1. **Cenário 1 (Disponibilidade)**: Essencial para validar o core do sistema - a capacidade de verificar e reservar vagas. Sem isso, não há reserva. Foco em 3 dias consecutivos pois é o mínimo solicitado e cobre cenário de fim de semana ou feriado se cruzado.

2. **Cenário 2 (Quarto + Hóspedes)**: Validar a seleção de produto (quarto STANDARD ST1) e a regra de negócio de composição de hóspentes (adultos + criança). Este é um ponto crítico pois erros aqui podem causar overbooking ou cobrança indevida.

3. **Cenário 3 (Cadastro de Hóspedes)**: Obrigatório por requisitos de compliance e fiscalização. Sistemas de reserva precisam identificar quem está utilizando o serviço. Campos obrigatórios garantem dados completos para contato e emergência.

4. **Cenário 4 (Pagamento)**: Maior risco crítico do teste. Pagamento com cartão de crédito envolve dados sensíveis e transações financeiras. Os dados fornecidos (4000 0000 0000 0044) seguem padrão de teste (primeiros 4 dígitos 4000, último dígito 44 válido para Luhn). Este cenário testa a integração com gateway de pagamento e tratamento de sucesso/erro.

## Execução dos Testes - Passo a Passo

### Passo 1: Acessar o sistema
```
URL: https://reservas.desbravador.com.br/hotel-app/desbravador-4-5
Ação: Abertura da página de login
Evidência: Página carregada com formulário de login (campos: e-mail/usuário, senha, QR code de acesso)
```

### Passo 2: Login no sistema
```
Ação: Preencher credenciais de acesso (serão necessárias credenciais de teste)
Evidência: Acesso ao dashboard/sistema de reservas
```

### Passo 3: Verificar disponibilidade de reserva
```
Ação: Navegar para a página de novas reservas
Ação: Selecionar data de entrada (ex: 15/12/2026)
Ação: Selecionar data de saída (ex: 18/12/2026 - 3 dias)
Ação: Clicar em "Buscar disponibilidade"
Evidência: Calendário exibido com dias disponíveis/indisponíveis
```

### Passo 4: Selecionar quarto STANDARD ST1
```
Ação: Filtrar por tipo de quarto "STANDARD ST1"
Ação: Clicar no quarto selecionado
Evidência: Detalhes do quarto exibidos (capacidade, preço, comodidades)
```

### Passo 5: Adicionar hóspedes (02 Adultos + 01 criança)
```
Ação: Informar 02 adultos no campo de hóspedes
Ação: Informar 01 criança (idade até 5 anos)
Ação: Sistema validar idade da criança (campo de data de nascimento ou seletor de idade)
Evidência: Total de hóspedes = 03, valor da reserva calculado
```

### Passo 6: Informar hóspedes da reserva
```
Ação: Preencher dados de cada hóspede (nome, documento, contato, e-mail)
Ação: Marcar campos obrigatórios conforme validação do sistema
Evidência: Todos os campos validados com sucesso
```

### Passo 7: Efetuar pagamento com cartão de crédito
```
Ação: Navigar para etapa de pagamento
Ação: Informar número do cartão: 4000 0000 0000 0044
Ação: Informar nome: DESBRAVADOR SOFTWARE
Ação: Informar validade: 12/23
Ação: Informar CVC: 123
Ação: Confirmar pagamento
Evidência: Transação processada com sucesso
Ação: Capturar número de confirmação/protocolo
Evidência: Reserva confirmada com número de protocolo
```

## Documentação dos Resultados dos Testes

### Resultado Esperado (Sucesso)
- [ ] Página de login carregada com sucesso
- [ ] Disponibilidade consultada para 3 dias
- [ ] Quarto STANDARD ST1 selecionado
- [ ] 02 adultos + 01 criança cadastrados
- [ ] Dados dos hóspedes preenchidos e validados
- [ ] Pagamento processado com cartão 4000 0000 0000 0044
- [ ] Reserva confirmada com número de protocolo
- [ ] E-mail de confirmação enviado

### Possíveis Falhas e Tratamento
1. **Falha na disponibilidade**: Quarto indisponível para as datas selecionadas → Selecionar datas alternativas
2. **Falha na validação de idade da criança**: Informar data de nascimento correta ou criança acima de 5 anos
3. **Falha no pagamento**: Cartão rejeitado → Verificar dados informados ou usar outro meio de pagamento
4. **Campo obrigatório não preenchido**: Identificar qual campo e preencher corretamente

## Comandos de Teste API (Para testes de integração)

Caso seja necessário testar endpoints da API do sistema:

### 1. Verificar disponibilidade de reserva (GET)
```bash
# Consultar disponibilidade de quartos
curl -X GET "https://reservas.desbravador.com.br/hotel-app/desbravador-4-5/api/availability \
  -H "Authorization: Bearer <token_de_acesso>" \
  -H "Content-Type: application/json" \
  -d '{
    "check_in": "2026-12-15",
    "check_out": "2026-12-18",
    "room_type": "STANDARD_ST1",
    "adults": 2,
    "children": 1,
    "child_age": 4
  }'
```

### 2. Criar nova reserva (POST)
```bash
# Efetuar reserva através da API
curl -X POST "https://reservas.desbravador.com.br/hotel-app/desbravador-4-5/api/reservas" \
  -H "Authorization: Bearer <token_de_acesso>" \
  -H "Content-Type: application/json" \
  -d '{
    "check_in": "2026-12-15",
    "check_out": "2026-12-18",
    "room_id": "STANDARD_ST1",
    "guests": [
      {"tipo": "adulto", "nome": "Teste Usuario", "documento": "12345678901"},
      {"tipo": "adulto", "nome": "Teste Usuario 2", "documento": "98765432100"},
      {"tipo": "crianca", "nome": "Teste Criança", "documento": "11122233344", "idade": 4}
    ],
    "payment_method": "credit_card",
    "card_number": "4000000000000044",
    "card_holder": "DESBRAVADOR SOFTWARE",
    "card_validity": "12/23",
    "card_cvc": "123"
  }'
```

### 3. Validar número de cartão (Luhn Algorithm - Teste unitário)
```javascript
// Node.js - Validar Luhn Algorithm
function validarLuhn(numeroCartao) {
  const num = numeroCartao.replace(/\s+/g, '');
  let soma = 0;
  let alternar = false;
  
  for (let i = num.length - 1; i >= 0; i--) {
    let digito = parseInt(num[i]);
    if (alternar) {
      digito *= 2;
      if (digito > 9) digito -= 9;
    }
    soma += digito;
    alternar = !alternar;
  }
  
  return soma % 10 === 0;
}

// Teste
console.log(validarLuhn('4000000000000044')); // Deve retornar: true
console.log(validarLuhn('4000000000000042')); // Deve retornar: false
```

### 4. Testar validação de dados de hóspede (GET/POST)
```bash
# Validar se campos de hóspede estão completos
curl -X POST "https://reservas.desbravador.com.br/hotel-app/desbravador-4-5/api/validar-hospedes" \
  -H "Authorization: Bearer <token_de_acesso>" \
  -H "Content-Type: application/json" \
  -d '{
    "hospedes": [
      {"nome": "João Silva", "documento": "12345678901", "tipo": "adulto"},
      {"nome": "Maria Silva", "documento": "09876543210", "tipo": "adulto"},
      {"nome": "Pedro Silva", "documento": "11122233344", "tipo": "crianca", "idade": 3}
    ]
  }'
```

### 5. Obter status da reserva (GET)
```bash
# Consultar status da reserva criada
curl -X GET "https://reservas.desbravador.com.br/hotel-app/desbravador-4-5/api/reservas/{id_reserva}" \
  -H "Authorization: Bearer <token_de_acesso>" \
  -H "Content-Type: application/json"
```

## Ferramentas Recomendadas para Automação (Plus)

1. **Cypress**: Para testes end-to-end da interface web
   - Advantage: Instalação fácil, tempo de espera automático, debugging intuitivo
   - Exemplo de teste Cypress em BDD:

```javascript
// cypress/integration/reservas.cy.js
describe('Testes de Reserva - Desbravador Software', () => {
  it('CT01 - Deveria verificar disponibilidade e criar reserva', () => {
    // Acessar login
    cy.visit('https://reservas.desbravador.com.br/hotel-app/desbravador-4-5');
    
    // Login (credenciais de teste)
    cy.get('#usuario').type('usuario_teste');
    cy.get('#senha').type('senha_teste{enter}');
    
    // Navegar para reserva
    cy.contains('Nova Reserva').click();
    
    // Selecionar datas
    cy.contains('15/12/2026').click();
    cy.contains('18/12/2026').click();
    
    // Selecionar quarto
    cy.contains('STANDARD ST1').click();
    
    // Informar hóspedes
    cy.get('[data-testid="adultos"]').type('2');
    cy.get('[data-testid="criancas"]').type('1');
    cy.get('[data-testid="idade-crianca"]').type('4');
    
    // Preencher hóspedes
    cy.get('[data-testid="hospede-1-nome"]').type('João Silva');
    cy.get('[data-testid="hospede-2-nome"]').type('Maria Silva');
    cy.get('[data-testid="hospede-3-nome"]').type('Pedro Silva');
    
    // Pagamento
    cy.get('[data-testid="card-number"]').type('4000 0000 0000 0044');
    cy.get('[data-testid="card-name"]').type('DESBRAVADOR SOFTWARE');
    cy.get('[data-testid="card-expiry"]').type('12/23');
    cy.get('[data-testid="card-cvc"]').type('123');
    cy.contains('Pagar').click();
    
    // Validar sucesso
    cy.url().should('contain', 'confirmacao');
    cy.contains('Reserva confirmada').should('be.visible');
  });
});
```

2. **Postman / Newman**: Para testes de API
   - Advantage: Coleção de testes, fácil integração CI/CD
   - Newman command to run collection:
   ```bash
   newman run reservas-collection.json --reporters=cli,html
   ```

3. **Playwright**: Alternativa ao Cypress com suporte a múltiplos navegadores
   - Comandos básicos:
   ```bash
   # Instalar
   npm init -y
   npm i -D playwright
   npx playwright install
   
   # Executar teste específico
   npx playwright test testes-reserva.spec --grep "CT01"
   
   # Gerar relatório
   npx playwright test && npx playwright show-report
   ```

## Conclusão

Os 4 cenários cobrem fluxos críticos do sistema de reservas:
1. Disponibilidade (core do negócio)
2. Seleção de produto + regra de hóspedes
3. Cadastro e compliance de dados
4. Processamento financeiro (maior risco)

Todos os cenários seguem padrão BDD (Given/When/Then) facilitando a leitura por stakeholders e a criação de automação. Os dados de teste (cartão 4000 0000 0000 0044) foram escolhidos seguindo padrão de testes (valida Luhn, início 4000 comum em testes de gateway de pagamento).

Para execução manual, seguir o passo a passo detalhado. Para automação, recomenda-se Cypress para testes E2E ou Postman/Newman para testes de API, ambos com relatórios completos e integração com pipelines CI/CD.