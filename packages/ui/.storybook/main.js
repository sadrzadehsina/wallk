const path = require("path");

module.exports = {
	core: {
		builder: "webpack5",
	},
	stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		{
			name: "@storybook/addon-postcss",
			options: {
				cssLoaderOptions: {
					importLoaders: 1,
				},
				postcssLoaderOptions: {
					implementation: require("postcss"),
				},
			},
		},
	],
	framework: "@storybook/react",
	webpackFinal: async (config) => {
		config.module.rules.push({
			test: /\.css$/i,
			use: [
				{
					loader: "postcss-loader",
					options: {
						implementation: require.resolve("postcss"),
					},
				},
			],
			include: path.resolve(__dirname, "../"),
		});
		// Return the altered config
		return config;
	},
};
