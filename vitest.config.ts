import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

/**
 * Configuração do Vitest para testes unitários e de integração
 * 
 * Features ativas:
 * - React testing com JSX/TSX
 * - Path aliases (@/...)
 * - jsdom para simular browser
 * - Coverage com v8 (mais rápido que istanbul)
 */
export default defineConfig({
  plugins: [react()],
  
  test: {
    // Ambiente de execução (simula browser DOM)
    environment: "jsdom",
    
    // Arquivos de setup executados antes dos testes
    setupFiles: ["./vitest.setup.ts"],
    
    // Onde procurar testes
    include: [
      "**/__tests__/**/*.{test,spec}.{ts,tsx}",
      "**/*.{test,spec}.{ts,tsx}",
    ],
    
    // Arquivos a ignorar
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/.next/**",
      "**/e2e/**", // E2E vai pro Playwright
    ],
    
    // Coverage configuration (essencial para devs sênior!)
    coverage: {
      provider: "v8", // Mais rápido que istanbul
      reporter: ["text", "json", "html", "lcov"],
      
      // Thresholds - força qualidade mínima
      thresholds: {
        lines: 80,      // 80% das linhas cobertas
        functions: 80,  // 80% das funções testadas
        branches: 75,   // 75% dos branches (if/else) cobertos
        statements: 80, // 80% dos statements
      },
      
      // O que incluir no coverage
      include: [
        "app/**/*.{ts,tsx}",
        "entities/**/*.{ts,tsx}",
        "features/**/*.{ts,tsx}",
        "shared/**/*.{ts,tsx}",
        "widgets/**/*.{ts,tsx}",
      ],
      
      // O que excluir do coverage
      exclude: [
        "**/*.d.ts",
        "**/*.config.{ts,js}",
        "**/types.ts",
        "**/__tests__/**",
        "**/node_modules/**",
      ],
    },
    
    // Performance e DX
    globals: true, // Não precisa importar describe, it, expect
    clearMocks: true, // Limpa mocks automaticamente
    restoreMocks: true, // Restaura implementações originais
    mockReset: true, // Reset de mocks entre testes
    
    // Watch mode configurado
    watch: false, // Desativado por padrão (use npm test -- --watch)
    
    // Timeout para testes lentos (animações GSAP podem demorar)
    testTimeout: 10000,
  },
  
  resolve: {
    // Aliases iguais ao tsconfig.json
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
});
