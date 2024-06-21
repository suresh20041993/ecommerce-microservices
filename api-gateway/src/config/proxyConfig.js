const { createProxyMiddleware } = require('http-proxy-middleware');
const { USER_SERVICE_URL, PRODUCT_SERVICE_URL, ORDER_SERVICE_URL } = process.env;

const proxyConfig = [
    {
        route: '/api/users',
        target: USER_SERVICE_URL,
        pathRewrite: {
            '^/api/users': '/'
        }
    },
    {
        route: '/api/products',
        target: PRODUCT_SERVICE_URL,
        pathRewrite: {
            '^/api/products': '/'
        }
    },
    {
        route: '/api/orders',
        target: ORDER_SERVICE_URL,
        pathRewrite: {
            '^/api/orders': '/'
        }
    }
];

module.exports = function (app) {
    proxyConfig.forEach(({ route, target, pathRewrite }) => {
        app.use(route, createProxyMiddleware({
            target,
            changeOrigin: true,
            pathRewrite
        }));
    });
};
