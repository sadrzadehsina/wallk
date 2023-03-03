module.exports = {
	content: [
		"../../packages/ui/**/*.{ts,tsx}",
		"../../packages/ui/**/*.stories.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["night"]
	}
};
