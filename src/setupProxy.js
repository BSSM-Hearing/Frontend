const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/", {
      target: "http://10.150.149.2:3000",
      changeOrigin: true,
    }),
  );
};
