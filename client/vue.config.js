module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        logLevel: "debug",
        ws: true,
        pathRewrite: { "^/api": "/" },
      },
    },
    host: "oneschool.co",
  },
};
