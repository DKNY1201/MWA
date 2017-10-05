const url = require('url');
const querystring = require('querystring');

const myURL = url.parse('http://quytran:123qwe@truongphusteel.vn/Nang-Luc/Ho-So-Nang-Luc/?query=abc&cc=11&bb=22#book', true);
console.log(myURL);

const urlObj = {
    protocol: 'https',
    host: 'www.truongphusteel.vn',
    search: 'q=steel',
    pathname: '/search'
}

console.log(url.format(urlObj));

let qString = querystring.stringify({
    name: 'Tran Van Quy',
    job: 'Full stack Developer'
})

console.log(qString);
console.log(querystring.parse('name=Tran%20Van%20Quy&job=Full%20stack%20Developer'));