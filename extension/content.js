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



if (v!=undefined) {

    console.log(v.title);
    console.log(v);
    v.addEventListener("click", (e)=>captureEvent(e));
    v.addEventListener("play", (e)=>captureEvent(e));
    v.addEventListener("playing", (e)=>captureEvent(e));
    v.addEventListener("seeking", (e)=>captureEvent(e));
    v.addEventListener("seeked", (e)=>captureEvent(e));
} else {
    console.log("Not Defined Video!")
}
