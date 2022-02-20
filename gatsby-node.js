/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
const path = require("path");

exports.onCreateWebpackConfig = function ({ actions }) {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@/components": path.resolve(__dirname, "src/components"),
        "@/hooks": path.resolve(__dirname, "src/hooks"),
        "@/layouts": path.resolve(__dirname, "src/layouts"),
        "@/assets": path.resolve(__dirname, "src/assets"),
      },
    },
  });
};
