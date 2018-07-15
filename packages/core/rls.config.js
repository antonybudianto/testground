const devMode = process.env.NODE_ENV === 'development';

console.log('devMode:', devMode);

module.exports = {
  modifyWebpack: config => {
    return {
      ...config,
      devtool: devMode ? 'cheap-eval-source-map' : undefined
    };
  }
};
