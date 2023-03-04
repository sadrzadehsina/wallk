module.exports = {
	content: [
		"../../packages/ui/**/*.{ts,tsx}",
		"../../packages/ui/**/*.stories.{ts,tsx}",
		"./pages/**/*.{ts,tsx}",
	],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["luxury", "halloween"],
		logs: false
	}
};
