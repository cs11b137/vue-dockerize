const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    client: {
      // 热更新地址ws
      webSocketURL: "ws://0.0.0.0:8080/ws",
    },
  },
});
