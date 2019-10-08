
console.log("THIS IS CONTENT SCRIPTS!");
console.log(document.title);
console.log(document.URL);

var v = document.getElementsByTagName('video')[0];

const captureEvent = (e) => {
    console.log(e);
    //* Save it using the Chrome extension storage API.
    chrome.storage.sync.set({"foo": 'hello', 'bar': 'hi'}, function() {
    console.log('Settings saved');
    });
    chrome.storage.local.set({"foo2": 'hello2', 'bar2': 'hi2'}, function(data) {
        console.log('Settings saved', data);
    });

}

const sendVlog = (e) => {
    axios.get('http://127.0.0.1:8000/api/vlog/')
        .then((res)=>console.log(res));
    const apiurl = "http://127.0.0.1:8000/api/vlog/";
    var v = new Date()
    var data = {
        "uid": "adsdaadsa",
        "sid": "dasds",
        "url": document.URL,
        "referrer": document.referrer ? document.referrer: 'empty',
        "timestamp": v.getTime(),
        "duration": e.target.duration,
        "uptime": e.target.currentTime,
        "title": document.querySelector('#container > h1').innerText,
        "channel": "aaa",
        "gender": "1",
        "age": "12",
        "useragent": navigator.userAgent
      }
    console.log(data);
    axios.post(apiurl, data)
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err));
}
 

if (v!=undefined) {
    
    console.log(v.title);
    console.log(v);
    v.addEventListener("click", (e)=>captureEvent(e));
    v.addEventListener("play", (e)=>sendVlog(e));
    v.addEventListener("playing", (e)=>captureEvent(e));
    v.addEventListener("seeking", (e)=>captureEvent(e));
    v.addEventListener("seeked", (e)=>captureEvent(e));
} else {
    console.log("Not Defined Video!")
}
