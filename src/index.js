console.log('call index.js');
const html = await Promise.resolve("<h1>hello</h1>");
document.getElementById("app").innerHTML = html;
