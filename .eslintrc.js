module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ["custom"],
	ignorePattern: ["!.storybook"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
