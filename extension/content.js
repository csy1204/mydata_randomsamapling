const getSubcription = () => {
    var a = document.querySelector('body > div:nth-child(4)').getAttribute('data-react-router-data');
    var s = JSON.parse(a).current_user.current_order_schedule
    s = s.replace('년 ','.').replace('월 ','.').replace('일 ',' ')
    const apiurl = "http://127.0.0.1:8000/api/view/makesubscription";
    var params = {
        uid: "shuka",
        platform: "watch",
        expire: s,
    }
    
    console.log(params);
    axios.get("http://127.0.0.1:8000/api/view/makesubscription?uid=shuka&platform=watcha&expire="+s)
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err));
}

if (document.URL === 'https://play.watcha.net/home') {
    setTimeout(()=>{
        getSubcription();
        console.log("Subscription Crawling");
    }, 3000);
    
}


const captureEvent = (e) => {
    console.log(e);
}

const sendYTVlog = (e) => {
    const apiurl = "http://127.0.0.1:8000/api/vlog/";
    var v = new Date()
    var data = {
        "uid": "shuka",
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
        "age": 26,
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
        "uid": "shuka",
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




if (document.URL.slice(0,'https://www.youtube.com/watch'.length) === 'https://www.youtube.com/watch') {
    setTimeout(()=>{
        var v = document.getElementsByTagName('video')[0];
        if (v!=undefined) {
            var likebutton = document.querySelector('#top-level-buttons > ytd-toggle-button-renderer:nth-child(1)'); //좋아요
            var dislikebutton = document.querySelector('#top-level-buttons > ytd-toggle-button-renderer:nth-child(2)'); //싫어요
            var sharebutton = document.querySelector('#top-level-buttons > ytd-toggle-button-renderer:nth-child(3)'); //공유하기
            var subbutton = document.querySelector('#subscribe-button > ytd-button-renderer'); // 구독하기
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
            v.addEventListener("seeked", (e)=>captureEvent(e));
            likebutton.addEventListener("click",(e)=>{console.log("like!");captureEvent(e);});
            dislikebutton.addEventListener("click",(e)=>{console.log("disklike!");captureEvent(e);});
            sharebutton.addEventListener("click",(e)=>captureEvent(e));
            subbutton.addEventListener("click",(e)=>captureEvent(e));
        } else {
        };
    }, 1500);
    
} else if (document.URL.slice(0,'https://tv.naver.com/v/'.length)==='https://tv.naver.com/v/') {
    setTimeout(()=>{
        var v = document.getElementsByTagName('video')[0];
        if (v!=undefined) {
            var likebutton = document.querySelector('#clipInfoArea > div.watch_btn > div.u_likeit_list_module > a'); //좋아요
            var sharebutton = document.querySelector('#spiButton'); //공유하기
            var subbutton = document.querySelector('#topChannelInfo > div > div.ch_sp > a'); // 구독하기

            console.log(v);
            v.addEventListener("click", (e)=>captureEvent(e));
            v.addEventListener("play", (e)=>sendYTVlog(e));
            v.addEventListener("playing", (e)=>captureEvent(e));
            v.addEventListener("seeked", (e)=>captureEvent(e));
            likebutton.addEventListener("click",(e)=>{console.log("like!");captureEvent(e);});
            dislikebutton.addEventListener("click",(e)=>{console.log("disklike!");captureEvent(e);});
            sharebutton.addEventListener("click",(e)=>captureEvent(e));
            subbutton.addEventListener("click",(e)=>captureEvent(e));
        } else {
        };
    }, 1500);
        

}