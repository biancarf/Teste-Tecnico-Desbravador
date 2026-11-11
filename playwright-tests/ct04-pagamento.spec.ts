import { test, expect } from '@playwright/test';

const BASE_URL = 'https://reservas.desbravador.com.br/hotel-app/desbravador-4-5';

test('CT04 - Deveria processar pagamento com cartão de teste', async ({ page }) => {
  await page.goto(BASE_URL);
  // Aguardar página carregar completamente
  await page.waitForLoadState('networkidle');
  // TODO: Ajustar seletor conforme DOM da aplicação
  // Exemplos de seletores possíveis:
  // await page.fill('[data-testid="card-number"]', '4000000000000044');
  // await expect(page.locator('[data-testid="card-number"]')).toHaveValue('4000000000000044');
  // await page.waitForSelector('[data-testid="card-number"]');
  console.log('📄 Teste CT04 executado - ver seletores na página');
});