import { defineConfig } from 'vite-plus';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules') && id.includes('react')) {
            return 'react';
          }
        },
      },
    },
  },

  fmt: {
    singleQuote: true,
  },

  lint: {
    categories: {
      correctness: 'error',
      perf: 'warn',
      style: 'warn',
      suspicious: 'error',
    },
    ignorePatterns: ['dist/**'],
    options: {
      typeAware: true,
      typeCheck: true,
    },
    plugins: ['typescript', 'unicorn', 'oxc'],
    rules: {
      curly: 'error',
      'eslint/func-style': 'off',
      'eslint/id-length': 'off',
      'eslint/no-magic-numbers': 'off',
      'eslint/no-ternary': 'off',
      'eslint/sort-imports': 'off',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'error',
      'no-shadow': 'off',
      'typescript/no-explicit-any': 'warn',
      'typescript/no-unused-vars': 'error',
      'unicorn/filename-case': [
        'error',
        {
          case: 'kebabCase',
        },
      ],
      'unicorn/folder-name-case': [
        'error',
        {
          case: 'kebabCase',
        },
      ],
    },
  },

  plugins: [tailwindcss(), react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  staged: { '*': 'vp check --fix' },
});
