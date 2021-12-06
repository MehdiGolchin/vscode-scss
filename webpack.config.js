const path = require("path");

module.exports = {
	entry: "./src/server.ts",
	output: {
		filename: "server.js",
		path: path.join(__dirname, "dist"),
	},
	mode: "none",
	target: "node",
	node: {
		__dirname: false, // leave the __dirname-behaviour intact
	},
	resolve: {
		mainFields: ["module", "main"],
		extensions: [".ts", ".js"], // support ts-files and js-files
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				use: [
					{
						// configure TypeScript loader:
						// * enable sources maps for end-to-end source maps
						loader: "ts-loader",
						options: {
							compilerOptions: {
								sourceMap: true,
							},
						},
					},
				],
			},
		],
	},
	externals: {
		vscode: "commonjs vscode", // ignored because it doesn't exist,
		"applicationinsights-native-metrics":
			"commonjs applicationinsights-native-metrics", // ignored because we don't ship native module
		"@opentelemetry/tracing": "commonjs @opentelemetry/tracing", // ignored because we don't ship this module
	},
	// yes, really source maps
	devtool: "source-map",
};
