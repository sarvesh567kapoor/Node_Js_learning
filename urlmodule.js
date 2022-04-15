import url from 'url';

const myURL = new URL('https://example.org:81/foo');
// console.log(myURL.host);
// console.log(myURL.pathname);
myURL.hash ="#fgh";
myURL.search = '?d=e';
myURL.pathname="/a/b/c";
myURL.username = "sarvesh"
myURL.password ="sarvesh123";

console.log(myURL);
console.log(myURL.href);
