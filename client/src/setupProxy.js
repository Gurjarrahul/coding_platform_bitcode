const { createProxyMiddleware } = require('http-proxy-middleware');
// https://bitcode.onrender.com/
// const url='http://127.0.0.1:8000'
const url = 'https://bitcode.onrender.com/'
module.exports = function (app) {
  app.use(
    '/sendq',
    createProxyMiddleware({
      target: url,
      changeOrigin: true,
    })
  );
  app.use(
    '/test',
    createProxyMiddleware({
      target: url,
      changeOrigin: true,
    })
  );
  app.use(
    '/submit',
    createProxyMiddleware({
      target: url,
      changeOrigin: true,
    })
  );
  app.use(
    '/qlist',
    createProxyMiddleware({
      target: url,
      changeOrigin: true,
    })
  );
  app.use(
    '/add',
    createProxyMiddleware({
      target: url,
      changeOrigin: true,
    })
  );
  app.use(
    '/input',
    createProxyMiddleware({
      target: url,
      changeOrigin: true,
    })
  );
  app.use(
    '/userregister',
    createProxyMiddleware({
      target: url,
      changeOrigin: true,
    })
  )
  app.use(
    '/userlogin',
    createProxyMiddleware({
      target: url,
      changeOrigin: true,
    })
  )
  app.use(
    '/sendmail',
    createProxyMiddleware({
      target: url,
      changeOrigin: true,
    })
  )
  app.use(
    '/forgetpassword/:token',
    createProxyMiddleware({
      target: url,
      changeOrigin: true,
    })
  )
  app.use(
    '/home',
    createProxyMiddleware({
      target: url,
      changeOrigin: true,
    })
  )
  app.use(
    '/discuss',
    createProxyMiddleware({
      target: url,
      changeOrigin: true,
    })
  );
  app.use(
    '/thread',
    createProxyMiddleware({
      target: url,
      changeOrigin: true,
    })
  );
  app.use(
    '/userlogout',
    createProxyMiddleware({
      target: url,
      changeOrigin: true,
    })
  );
  app.use(
    '/mypost',
    createProxyMiddleware({
      target: url,
      changeOrigin: true,
    })
  );
  app.use(
    '/threadcomment',
    createProxyMiddleware({
      target: url,
      changeOrigin: true,
    })
  );
  app.use(
    '/codeditor',
    createProxyMiddleware({
      target: url,
      changeOrigin: true,
    })
  );
};