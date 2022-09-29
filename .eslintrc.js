module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
  ],
  parserOptions: {
  },
  plugins: ['vue'],
  rules: {
    quotes: [1, 'single'], //引号类型 `` "" ''
    semi: [2, 'never'], // 语句强制分号结尾
    'space-before-function-paren': [0, 'always'], //函数定义时括号前面要不要有空格
    'vue/no-v-model-argument': 'off',
    'vue/no-multiple-template-root': 'off',
    'no-console': [2],
    'no-unused-vars': [1],
    'vue/no-unused-vars': [1],
    'vue/require-v-for-key': [1],
  },
  globals: {
    __dirname: true,
    process: true,
    defineProps: true,
    defineEmits: true,
    defineExpose: true,
  },
}
