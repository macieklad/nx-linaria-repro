const rootMain = require('../../../.storybook/main');
const { extendWebpack } = require('./linaria');

// Use the following syntax to add addons!
// rootMain.addons.push('');
rootMain.stories.push(
  ...['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)']
);

module.exports = rootMain;
