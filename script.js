let difference = 12;
let clock = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if(hours == 0) hours = 12;
    hours = hours > 12 ? hours - difference : hours;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    let time = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").innerHTML = time;
    setTimeout(clock, 1000);
};
clock();

const slider = document.getElementById("checkbox");
slider.addEventListener('change', function() {
    difference = this.checked ? 0 : 12;
    clock();
}); 