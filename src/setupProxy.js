const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/api', { target: 'https://swapi.co' ,"pathRewrite": {"^/api": ""}, "secure": false }));
};