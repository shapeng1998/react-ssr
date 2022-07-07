// @ts-check
import { defineConfig } from 'eslint-define-config'

module.exports = defineConfig({
  extends: '@shapeng1998',
  rules: {
    '@typescript-eslint/no-non-null-assertion': ['off'],
  },
})
