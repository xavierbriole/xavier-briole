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
cookiebanner.dataset.moreinfo = 'https://aboutcookies.org/';
cookiebanner.async = true;
document.body.appendChild(cookiebanner);

/**
 * Chatbot
 */

/*
var chatbotScript = document.createElement('script');
chatbotScript.src = 'https://bots.xavierbriole.com/assets/modules/channel-web/inject.js';
document.body.appendChild(chatbotScript);

window.onload = function() {
    var chatbotInit = document.createElement('script');
    chatbotInit.type = 'text/javascript';
    
    var chatbotConfig = 'window.botpressWebChat.init({ host: "https://bots.xavierbriole.com", botId: "jarvis", botName: "Jarvis", botConvoDescription: "Xavier\'s personal assistant", showConversationsButton: false, enableReset: false, enableTranscriptDownload: false, extraStylesheet: "' + window.location.origin + '/css/jarvis-dark.min.css" }); window.addEventListener("message", function(event) { if (event.data.name === "webchatOpened") { window.botpressWebChat.sendEvent({ type: "open-chat" }) } if (event.data.name === "webchatClosed") { window.botpressWebChat.sendEvent({ type: "close-chat" }) } })';
    chatbotInit.appendChild(document.createTextNode(chatbotConfig));
    document.body.appendChild(chatbotInit);
}
*/
