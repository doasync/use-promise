
const { NODE_ENV } = process.env;

const presets = [
  ['@babel/preset-env', {
    debug: false,
    modules: NODE_ENV === 'test' ? 'commonjs' : false,
    useBuiltIns: 'usage',
    shippedProposals: true,
  }],
  '@babel/preset-react',
  '@babel/preset-flow',
];

const plugins = [
  ['@babel/plugin-proposal-class-properties', { loose: true }],
  ['@babel/plugin-syntax-dynamic-import'],
];

module.exports = { presets, plugins };
