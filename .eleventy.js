module.exports = (eleventyConfig) => {
	eleventyConfig.addDataExtension("txt", (contents) => {
		const text = contents.split("====").map((x) => {
			let name = x.match(/NAME:((?:\\[\s\S]|[^\\])+?)\n/);
			let host = x.match(/HOST:((?:\\[\s\S]|[^\\])+?)\n/);
			let bref = x.match(/BREF:((?:\\[\s\S]|[^\\])+?)\n/);
			let body = x.match(/BODY:((?:\\[\s\S]|[^\\])+?)$/);

			x = {
				name: name[1].trim(),
				host: host[1].trim(),
				bref: bref[1].trim(),
				body: body[1].trim(),
			};
			return x;
		});
		console.log(text);
		return text;
	});

	return {
		dir: {
			input: "src",
			output: "_site",
			data: "_data",
		},
	};
};
