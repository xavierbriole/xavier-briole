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
    canEat = false;

if (hoursToEat.hasOwnProperty('start') && hoursToEat.hasOwnProperty('end')) {
    var hour = date.getHours();
    canEat = hoursToEat.start <= hour && hour < hoursToEat.end;
}

var response = function () {
    if (canEat) {
        return "Yep";
    } else {
        return "Nope";
    }
};

$(document).ready(function () {
    setTimeout(() => {
        $(".response").fadeOut(function () {
            $(this).html(response()).fadeIn();
        });
    }, 800);
});