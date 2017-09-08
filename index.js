var replacements = {
	AA: 'Ꜳ',
	aa: 'ꜳ',
	AE: 'Æ',
	ae: 'æ',
	AO: 'Ꜵ',
	ao: 'ꜵ',
	AU: 'Ꜷ',
	au: 'ꜷ',
	AV: 'Ꜹ',
	AY: 'Ꜽ',
	ay: 'ꜽ',
	ff: 'ﬀ',
	ffi: 'ﬃ',
	ffl: 'ﬄ',
	fi: 'ﬁ',
	fl: 'ﬂ',
	OE: 'Œ',
	oe: 'œ',
	OO: 'Ꝏ',
	oo: 'ꝏ',
	st: 'ﬆ',
	ue: 'ᵫ',
	VY: 'Ꝡ',
	vy: 'ꝡ',
	db: 'ȸ',
	dz: 'ʣ',
	IJ: 'Ĳ',
	ij: 'ĳ',
	ls: 'ʪ',
	lz: 'ʫ',
	qp: 'ȹ',
	ts: 'ʦ',
}

var replaceable = /ffi|ffl|aa|ae|ao|au|av|ay|ff|fi|fl|oe|oo|st|ue|vy|db|dz|ij|ls|lz|qp|ts/gi

module.exports = function shorten(input) {
	return input.replace(replaceable, function(match) {
		return replacements[match] || replacements[match.toLowerCase()] || replacements[match.toUpperCase()]
	})
}
