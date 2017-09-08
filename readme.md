"Shorten" your text by replacing some pairs of characters with ligatures.

You could use this library to shorten tweets, if you didn't care about looking silly.

```sh
npm i shorten-with-ligatures
```

```
const shorten = require('shorten-with-ligatures')
```

<!--js
const shorten = require('./')
-->

Pass in a string, get back a string that might have some characters replaced with ligatures.

```js
shorten(`Paul foolishly fled stateside`) // => '㎩ul fꝏlishly ﬂed ﬆateside'
```

# License

[WTFPL](http://wtfpl2.com)
