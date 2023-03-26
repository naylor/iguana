const PROXY_CONFIG = [
  {
    context: '/api/*',
    target: 'http://192.168.1.102:8000',
    secure: false,
    logLevel: 'debug',
    //pathRewrite: {'^/api' : ''}
  },
  {
    context: '/ws',
    target: 'ws://192.168.1.102:8001',
    secure: false,
    "ws": true,
    logLevel: 'debug'
  },
];

module.exports = PROXY_CONFIG;

