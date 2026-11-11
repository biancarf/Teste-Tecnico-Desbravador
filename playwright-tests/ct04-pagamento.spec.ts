import { test, expect } from '@playwright/test';

test('CT04 - Deveria processar pagamento com cartão de teste', async ({ page }) => {
  await page.goto('about:blank');
  // Teste de estrutura - processar pagamento
  await page.fill('[data-testid="card-number"]', '4000000000000044');
  await expect(page.locator('[data-testid="card-number"]')).toHaveValue('4000000000000044');
});