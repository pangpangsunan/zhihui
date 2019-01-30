/*
  See docs: https://github.com/chimurai/http-proxy-middleware

  Example for multi proxy:
  module.exports = {
    '/one': {
      target: 'http://localhost:3000',
      pathRewrite: {
        '^/one': ''
      }
    },
    '/two': {
      target: 'http://localhost:3001',
      pathRewrite: {
        '^/two': ''
      }
    }
  }
 */

module.exports = {
    '/edu': {
        // target: "http://www.zhihui-app.com"
        target: "http://116.62.23.7:3060"
    }
};
