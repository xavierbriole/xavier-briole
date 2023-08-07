/**
 * Progress Bar
 */

if (window.location.href.includes("/posts/") && window.location.href !== window.location.origin + "/posts/") {
    const progressContainer = document.createElement('div');
    progressContainer.className = 'progress-container';
    document.querySelector('.header').before(progressContainer);

    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    document.querySelector('.progress-container').appendChild(progressBar);

    window.onscroll = function() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.querySelector('.progress-bar').style.width = scrolled + "%";
    }
}

/**
 * Cookie Banner
 */

const cookiebanner = document.createElement('script');
cookiebanner.type = 'application/javascript';
cookiebanner.id = 'cookiebanner';
cookiebanner.src = 'https://www.xavierbriole.com/js/cookiebanner.min.js';
cookiebanner.dataset.message = 'I use cookies to improve your browsing experience.';
cookiebanner.dataset.moreinfo = 'https://aboutcookies.org/';
cookiebanner.async = true;
document.body.appendChild(cookiebanner);

/**
 * Update meta theme-color when dark mode is enabled
 */

const LIGHT_MODE_COLOR = "#fafafa";
const DARK_MODE_COLOR = "#1b1c1d";
const matchQuery = window.matchMedia('(prefers-color-scheme: dark)');

window.onload = function() {
    const isDarkMode = matchQuery.matches;
    document.querySelector('meta[name="theme-color"]').setAttribute("content", isDarkMode ? DARK_MODE_COLOR : LIGHT_MODE_COLOR);
}

matchQuery.addEventListener("change", function(e) {
    const isDarkMode = e.matches;
    document.querySelector('meta[name="theme-color"]').setAttribute("content", isDarkMode ? DARK_MODE_COLOR : LIGHT_MODE_COLOR);
});
