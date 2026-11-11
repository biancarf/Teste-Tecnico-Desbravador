# Comandos de Teste API Executados

## 1. Validar Luhn Algorithm (Node.js)
```
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

console.log(validarLuhn('4000000000000044')); // true - cartão válido para teste
console.log(validarLuhn('4000000000000042')); // false - cartão inválido
```
**Evidência**: O cartão 4000 0000 0000 0044 passa na validação Luhn (último dígito 4 é verificador correto para prefixo 4000).

## 2. Consultar Disponibilidade de Reserva (GET API)
```
curl -X GET "https://reservas.desbravador.com.br/1111/api/availability" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9" \
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
**Esperado**: Retornar status 200 com disponibilidade do quarto STANDARD ST1 para as datas informadas.

## 3. Criar Nova Reserva (POST API)
```
curl -X POST "https://reservas.desbravador.com.br/1111/api/reservas" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9" \
  -H "Content-Type: application/json" \
  -d '{
    "check_in": "2026-12-15",
    "check_out": "2026-12-18",
    "room_id": "STANDARD_ST1",
    "guests": [
      {"tipo": "adulto", "nome": "João Silva", "documento": "12345678901"},
      {"tipo": "adulto", "nome": "Maria Silva", "documento": "098765432100"},
      {"tipo": "crianca", "nome": "Pedro Silva", "documento": "11122233344", "idade": 4}
    ],
    "payment_method": "credit_card",
    "card_number": "4000000000000044",
    "card_holder": "DESBRAVADOR SOFTWARE",
    "card_validity": "12/23",
    "card_cvc": "123"
  }'
```
**Esperado**: Retornar status 201 com número de protocolo/confirmação da reserva.

## 4. Validar Dados de Hóspedes (POST API)
```
curl -X POST "https://reservas.desbravador.com.br/1111/api/validar-hospedes" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9" \
  -H "Content-Type: application/json" \
  -d '{
    "hospedes": [
      {"nome": "João Silva", "documento": "12345678901", "tipo": "adulto"},
      {"nome": "Maria Silva", "documento": "098765432100", "tipo": "adulto"},
      {"nome": "Pedro Silva", "documento": "11122233344", "tipo": "crianca", "idade": 3}
    ]
  }'
```
**Esperado**: Retornar status 200 com validação de todos os campos preenchidos corretamente.

## 5. Consultar Status da Reserva (GET API)
```
curl -X GET "https://reservas.desbravador.com.br/1111/api/reservas/{id_reserva}" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9" \
  -H "Content-Type: application/json"
```
**Esperado**: Retornar status 200 com detalhes da reserva confirmada, número do protocolo e dados dos hóspedes.

## 6. Testes de Comando Básico com Newman (Coleção Postman)
```
# Instalar Newman globalmente
npm install -g newman

# Executar coleção de testes
newman run reservas_collection.json --reporters cli,html

# Executar com relatório HTML
newman run reservas_collection.json --reporters html --reporter-html-export ./relatorio-newman
```

## 7. Verificar Endpoints Disponíveis
```
# Listar rotas da API (se houver endpoint de documentação)
curl -X GET "https://reservas.desbravador.com.br/1111/api-docs" \
  -H "Authorization: Bearer <token>"

# Ou verificar OpenAPI/Swagger
curl -X GET "https://reservas.desbravador.com.br/1111/openapi.json" \
  -H "Authorization: Bearer <token>"
```