console.log('------- JSON -------');

let jsonString = '{"total": 4692, "totalHits": 500, "hits": [ { "id": 195893, "pageURL": "https://pixabay.com/en/blossom-bloom-flower-195893/", "type": "photo" },  { "id": 73424 } ]  }';
let jsonObj = JSON.parse(jsonString);
console.log(jsonObj);

console.log('--------------');

const jsonObject = { x: 6, y: "string" };
const jsonStr = JSON.stringify(jsonObject);
console.log(jsonStr);

console.log('------- AJAX -------');

function show() {
  //console.log('works');
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.github.com/users', true);
  xhr.onload = function() {
    console.log(this);
  };
  xhr.send();
}
show();
