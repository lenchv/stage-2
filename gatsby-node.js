exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /chartjs-plugin-dragdata/,
            use: loaders.null()
          }
        ]
      }
    });
  }
};
