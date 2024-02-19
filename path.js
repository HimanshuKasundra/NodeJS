const path = require("path");

console.log(path.basename("/foo/bar/baz/asdf/quux.html"));
// Returns: 'quux.html'

console.log(path.dirname("/foo/bar/baz/asdf/quux"));
// Returns: '/foo/bar/baz/asdf'

console.log(path.extname("index.html"));
// Returns: '.html'

console.log(path.normalize("/foo/bar/baz/asdf/quux/.."));
// Returns: \foo\bar\baz\asdf

console.log(path.relative("C:\\orandea\\test\\aaa", "C:\\orandea\\impl\\bbb"));
// Returns: '..\..\impl\bbb'

console.log(path.resolve("abc", "xyz"));
// Returns: d:\Web Technology\Demo's\Node\Code\abc\xyz
