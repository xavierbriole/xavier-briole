var data = [
    {}, // Sunday
    { start: 12, end: 14 }, // Monday
    { start: 12, end: 14 }, // Tuesday
    { start: 12, end: 14 }, // Wednesday
    { start: 12, end: 14 }, // Thrusday
    { start: 12, end: 14 }, // Friday
    {} // Saturday
];

var date = new Date(),
    dayOfWeek = date.getDay(),
    hoursToEat = data[dayOfWeek],
    canEat = false,
    answerEl = document.querySelector('.answer');

if (hoursToEat.hasOwnProperty('start') && hoursToEat.hasOwnProperty('end')) {
    var hour = date.getHours();
    canEat = hoursToEat.start <= hour && hour < hoursToEat.end;
}

var response = function () {
    if (canEat) {
        return "Yep, bon appétit!";
    } else {
        return "Nope, try again later!";
    }
};

var timeOut = function (content, callback) {
    setTimeout(function () {
        answerEl.innerHTML = content;
        if (callback) callback();
    }, 2000);
}

document.addEventListener("DOMContentLoaded", function () {
    timeOut('Are you sure you wanna know?', function () {
        timeOut('Hum, okay. I\'ll give you the anwser.', function () {
            timeOut('Ow, you\'re angry?', function () {
                timeOut('That\'s ok…', function () {
                    timeOut('Give me 2 seconds', function () {
                        timeOut(response());
                    });
                });
            });
        });
    });
});
