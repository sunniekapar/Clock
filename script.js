let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let difference = 12;
let period = hours > 12 ? "PM": "AM";
let clock = () => {
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    if (hours == 0) hours = 12;
    hours = hours > 12 ? hours - difference : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    let time = hours + ":" + minutes + ":" + seconds + " " + period;
    document.getElementById("clock").innerHTML = time;
    setTimeout(clock, 1000);
};
clock();

const slider = document.getElementById("checkbox");
slider.addEventListener('change', function () {
    if(this.checked) {
        difference = 0;
        period = "";
    }  else {
        difference = 12;
        period = hours > 12 ? "PM": "AM";
    }
    clock();
}); 