module.exports = {
  'moduleFileExtensions': ['ts', 'js', 'jsx', 'json', 'vue'],
  'transform': {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.(js|jsx)?$': 'babel-jest'
  },
  'transformIgnorePatterns': ['<rootDir>/node_modules/'],
}
