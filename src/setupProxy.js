const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    proxy("/?q", {
      target: "https://apg-saavn-api.herokuapp.com/result",
      changeOrigin: true,
    })
  );
};


