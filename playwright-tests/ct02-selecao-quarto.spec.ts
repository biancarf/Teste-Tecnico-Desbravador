import { test, expect } from '@playwright/test';

test('CT02 - Deveria selecionar quarto STANDARD ST1', async ({ page }) => {
  await page.goto('about:blank');
  // Teste de estrutura - selecionar quarto após login
  await page.click('text=STANDARD ST1');
  await expect(page).toHaveTitle(/Reserva/);
});