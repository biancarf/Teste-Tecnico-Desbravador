import { test, expect } from '@playwright/test';

const BASE_URL = 'https://reservas.desbravador.com.br/hotel-app/desbravador-4-5';

test('CT03 - Deveria informar hóspedes da reserva', async ({ page }) => {
  await page.goto(BASE_URL);
  // Aguardar página carregar completamente
  await page.waitForLoadState('networkidle');
  // TODO: Ajustar seletor conforme DOM da aplicação
  // Exemplos de seletores possíveis:
  // await page.fill('[data-testid="hospede-1-nome"]', 'João Silva');
  // await expect(page.locator('[data-testid="hospede-1-nome"]')).toHaveValue('João Silva');
  // await page.waitForSelector('[data-testid="hospede-1-nome"]');
  console.log('📄 Teste CT03 executado - ver seletores na página');
});