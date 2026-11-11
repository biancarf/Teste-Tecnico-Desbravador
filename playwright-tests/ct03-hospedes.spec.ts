import { test, expect } from '@playwright/test';

test('CT03 - Deveria informar hóspedes da reserva', async ({ page }) => {
  await page.goto('about:blank');
  // Teste de estrutura - informar hóspedes
  await page.fill('[data-testid="hospede-1-nome"]', 'João Silva');
  await expect(page.locator('[data-testid="hospede-1-nome"]')).toHaveValue('João Silva');
});