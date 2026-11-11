import { test, expect } from '@playwright/test';

const BASE_URL = 'https://reservas.desbravador.com.br/hotel-app/desbravador-4-5';

test('CT02 - Deveria selecionar quarto STANDARD ST1', async ({ page }) => {
  await page.goto(BASE_URL);
  // Aguardar página carregar completamente
  await page.waitForLoadState('networkidle');
  // TODO: Ajustar seletor conforme DOM da aplicação
  // Exemplos de seletores possíveis:
  // await page.click('text=STANDARD ST1');
  // await page.click('[data-testid="quarto-standard-st1"]');
  // await page.click('text=Quarto STANDARD ST1');
  // await page.waitForSelector('text=STANDARD ST1');
  console.log('📄 Teste CT02 executado - ver seletores na página');
});