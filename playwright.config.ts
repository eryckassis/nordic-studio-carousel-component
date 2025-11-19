import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",

  // Timeout por teste
  timeout: 30 * 1000,

  // Executa testes em paralelo
  fullyParallel: true,

  // Fail fast: para na primeira falha (útil em dev)
  forbidOnly: !!process.env.CI,

  // Retry apenas em CI (ambiente pode ser instável)
  retries: process.env.CI ? 2 : 0,

  // Workers: quantos testes paralelos
  workers: process.env.CI ? 1 : undefined,

  // Reporter: como exibir resultados
  reporter: [["html"], ["list"], process.env.CI ? ["github"] : ["line"]],

  // Configuração compartilhada entre testes
  use: {
    // URL base do app
    baseURL: "http://localhost:3000",

    // Trace: grava todas as ações para debug
    trace: "on-first-retry", // Só grava se falhar e retry

    // Screenshot apenas em falhas
    screenshot: "only-on-failure",

    // Video apenas em falhas
    video: "retain-on-failure",

    // Timeout de ações individuais
    actionTimeout: 10 * 1000,
  },

  // Projetos: diferentes browsers/devices
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },

    // Mobile testing
    {
      name: "Mobile Chrome",
      use: { ...devices["Pixel 5"] },
    },

    {
      name: "Mobile Safari",
      use: { ...devices["iPhone 12"] },
    },
  ],

  webServer: {
    command: "npm run dev",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
});
