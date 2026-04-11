import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';

export default [
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs['jsx-a11y-recommended'],
  {
    rules: {
      'no-unused-vars': 'warn',
      'astro/no-set-html-directive': 'error',
    },
  },
  {
    ignores: ['dist/', '.astro/', 'node_modules/'],
  },
];
