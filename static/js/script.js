/**
 * Dark Theme
 */

const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
const siteTheme = localStorage.getItem('theme');
const setDark = (e) => {
    document.body.className = (e.matches ? 'dark-theme' : '');
}

if (siteTheme === null) {
    mediaQueryList.addListener(setDark);
    document.addEventListener('DOMContentLoaded', function() {
        setDark(mediaQueryList);
    });
}

/**
 * Progress Bar
 */

if (window.location.href.includes("/posts/") && window.location.href !== window.location.origin + "/posts/") {
    var progressContainer = document.createElement('div');
    progressContainer.className = 'progress-container';
    document.querySelector('.header').before(progressContainer);

    var progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    document.querySelector('.progress-container').appendChild(progressBar);

    window.onscroll = function() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.querySelector('.progress-bar').style.width = scrolled + "%";
    }
}

/**
 * Cookie Banner
 */

var cookiebanner = document.createElement('script');
cookiebanner.type = 'application/javascript';
cookiebanner.id = 'cookiebanner';
cookiebanner.src = 'https://www.xavierbriole.com/js/cookiebanner.min.js';
cookiebanner.dataset.message = 'I use cookies to improve your browsing experience.';
cookiebanner.dataset.moreinfo = 'https://cookie-consent.app.cloudstinger.com/why-websites-use-cookies/';
cookiebanner.async = true;
document.body.appendChild(cookiebanner);

/**
 * Chatbot
 */

var chatbot = document.createElement('script');
chatbot.src = 'https://bots.xavierbriole.com/assets/modules/channel-web/inject.js';
document.body.appendChild(chatbot);

window.onload = function() {
    var chatbotInit = document.createElement('script');
    chatbotInit.type = 'text/javascript';
    var code = 'window.botpressWebChat.init({ host: "https://bots.xavierbriole.com", botId: "jarvis", botName: "Jarvis", botConvoDescription: "Xavier\'s personal assistant", showConversationsButton: false, enableReset: false, enableTranscriptDownload: false, extraStylesheet: "' + window.location.origin + '/css/jarvis-dark.min.css" }); window.addEventListener("message", function(event) { if (event.data.name === "webchatOpened") { window.botpressWebChat.sendEvent({ type: "open-chat" }) } if (event.data.name === "webchatClosed") { window.botpressWebChat.sendEvent({ type: "close-chat" }) } })';

    try {
        chatbotInit.appendChild(document.createTextNode(code));
        document.body.appendChild(chatbotInit);
    } catch (e) {
        s.text = code;
        document.body.appendChild(chatbotInit);
    }
}
