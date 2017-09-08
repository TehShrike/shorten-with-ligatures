const test = require('tape')
const shorten = require('./')

const cases = [
	[ 'fuck off', 'fuck oﬀ' ],
	[ 'finish flushing', 'ﬁnish ﬂushing' ],
	[ 'Strangely\navaricious', 'ﬆrangely\nꜸaricious' ],
]

test('Basic test cases', t => {
	cases.forEach(([ input, expected ]) => {
		const actual = shorten(input)
		t.equal(actual, expected)
	})
	t.end()
})
