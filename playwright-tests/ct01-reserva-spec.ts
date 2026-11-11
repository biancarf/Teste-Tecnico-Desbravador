import { test, expect } from '@playwright/test';

const BASE_URL = 'https://reservas.desbravador.com.br';
const CARD_NUMBER = '4000000000000044';
const CARD_HOLDER = 'DESBRAVADOR SOFTWARE';
const CARD_EXPIRY = '12/23';
const CARD_CVC = '123';

test.describe('Testes de Reserva - Desbravador Software', () => {

  test('CT01 - Deveria verificar disponibilidade e criar reserva', async ({ page }) => {
    // Acessar login
    await page.goto(`${BASE_URL}/1111`);
    
    // TODO: Descomentar e usar credenciais de teste reais quando disponíveis
    // await page.fill('#usuario', 'usuario_teste');
    // await page.fill('#senha', 'senha_teste');
    // await page.click('button:has-text("Logar")');
    
    // Navegar para nova reserva
    // await page.click('text=Nova Reserva');
    
    // Selecionar datas (3 dias consecutivos)
    // await page.click('text=15/12/2026');
    // await page.click('text=18/12/2026');
    
    // Selecionar quarto STANDARD ST1
    // await page.click('text=STANDARD ST1');
    
    // Informar hóspedes (02 adultos + 01 criança)
    // await page.fill('[data-testid="adultos"]', '2');
    // await page.fill('[data-testid="criancas"]', '1');
    // await page.fill('[data-testid="idade-crianca"]', '4');
    
    // Preencher dados dos hóspedes
    // await page.fill('[data-testid="hospede-1-nome"]', 'João Silva');
    // await page.fill('[data-testid="hospede-2-nome"]', 'Maria Silva');
    // await page.fill('[data-testid="hospede-3-nome"]', 'Pedro Silva');
    
    // Pagamento com cartão de teste
    // await page.fill('[data-testid="card-number"]', CARD_NUMBER);
    // await page.fill('[data-testid="card-name"]', CARD_HOLDER);
    // await page.fill('[data-testid="card-expiry"]', CARD_EXPIRY);
    // await page.fill('[data-testid="card-cvc"]', CARD_CVC);
    // await page.click('button:has-text("Pagar")');
    
    // Validar sucesso
    // await expect(page).toHaveURL(/confirmacao/);
    // await expect(page.locator('text=Reserva confirmada')).toBeVisible();
  });

});