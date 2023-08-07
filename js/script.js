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
