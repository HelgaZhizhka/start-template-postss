module.exports = {
	map: true,
	plugins: {
		"postcss-easy-import": {},
		"postcss-nested": {},
		"postcss-preset-env": {
			autoprefixer: {
				flexbox: "no-2009",
				grid: true,
			},
			stage: 3,
			features: {
				"cascade-layers": true,
				"case-insensitive-attributes": true,
				"custom-media-queries": {
					preserve: false
				},
				"custom-properties": {
					preserve: false
				},
				"nesting-rules": true,
				"custom-selectors": true,
				"gap-properties": true,
				"not-pseudo-class": true
			}
		},
		"css-mqpacker": {}
	}
};