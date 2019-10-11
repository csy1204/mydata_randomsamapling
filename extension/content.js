
console.log("THIS IS CONTENT SCRIPTS!");
console.log(document.title);
console.log(document.URL);



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

const sendYTVlog = (e) => {
    const apiurl = "http://127.0.0.1:8000/api/vlog/";
    var v = new Date()
    var data = {
        "uid": "adsdaadsa",
        "sid": "dasds",
        "url": document.URL,
        "platform": "Youtube",
        "referrer": document.referrer ? document.referrer: 'empty',
        "timestamp": v.getTime(),
        "duration": e.target.duration,
        "uptime": e.target.currentTime,
        "title": document.querySelector('#container > h1').innerText,
        "channel": document.querySelector('#text > a').innerText,
        "gender": "1",
        "age": 23,
        "useragent": navigator.userAgent
    }

    console.log(data);
    axios.post(apiurl, data)
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err));
}

const sendYTElog = (e) => {
    const apiurl = "http://127.0.0.1:8000/api/vlog/";
    var v = new Date()
    var data = {
        "uid": "adsdaadsa",
        "sid": "dasds",
        "url": document.URL,
        "platfrom": "Youtube",
        "referrer": document.referrer ? document.referrer: 'empty',
        "timestamp": v.getTime(),
        "duration": e.target.duration,
        "uptime": e.target.currentTime,
        "title": document.querySelector('#container > h1').innerText,
        "channel": document.querySelector('#text > a').innerText,
        "gender": "1",
        "age": "23",
        "useragent": navigator.userAgent,
        "action": "aa",
        "label": "Aa",
    }
    console.log(data);
    axios.post(apiurl, data)
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err));
}


// const videoCheck = async () => {
//     setInterval(()=>{
        
//     }, 3000);

// }

var v = document.getElementsByTagName('video')[0];
if (v!=undefined) {
    document.querySelector('#top-level-buttons > ytd-toggle-button-renderer:nth-child(1)'); //좋아요
    document.querySelector('#top-level-buttons > ytd-toggle-button-renderer:nth-child(2)'); //싫어요
    document.querySelector('#top-level-buttons > ytd-toggle-button-renderer:nth-child(3)'); //공유하기
    document.querySelector('#top-level-buttons > ytd-toggle-button-renderer:nth-child(4)'); //저장하기
    document.querySelector('#subscribe-button > ytd-button-renderer'); // 구독하기
    if (document.querySelector('.ytp-ad-player-overlay')) {
        console.log('yes ad');
        document.querySelector('div.ytp-flyout-cta-body > div.ytp-flyout-cta-text-container > div.ytp-flyout-cta-description-container').innerText
        var ad = document.querySelector('div.ytp-ad-player-overlay-flyout-cta');
        var ad_title, ad_company;
        [ad_title, ad_company] = document.querySelector('#movie_player > div.ytp-chrome-top.ytp-share-button-visible > div.ytp-title > div.ytp-title-text').innerText.split('\n');
        console.log(ad_title, ad_company, ad.innerText);
        ad.onclick = console.log('AD Click!', ad_title, ad_company, ad.innerText);
    } else {
        console.log('no ad');
    }
    console.log(v);
    v.addEventListener("click", (e)=>captureEvent(e));
    v.addEventListener("play", (e)=>sendYTVlog(e));
    v.addEventListener("playing", (e)=>captureEvent(e));
    v.addEventListener("seeking", (e)=>captureEvent(e));
    v.addEventListener("seeked", (e)=>captureEvent(e));
} else {
    console.log("Not Defined Video!")
};
