const coffeeScriptPlugin = require("esbuild-coffeescript");

require("esbuild").build({
	entryPoints: ["src/index.coffee"],
	bundle: true,
	outfile: "dist/index.js",
	platform: "node",
	plugins: [coffeeScriptPlugin()],
});

coffeeScriptPlugin({
	bare: true,
});
