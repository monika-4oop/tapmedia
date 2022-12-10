// let question1 = document.querySelector(".q1");
// let question2 = document.querySelector(".q2");
// let question3 = document.querySelector(".q3");
// let p1 = document.querySelector(".p1");
// let p2 = document.querySelector(".p2");
// let p3 = document.querySelector(".p3");
// let p4 = document.querySelector(".p4");
// function q1() {
//   question1.classList.remove("active");
//   question2.classList.add("active");
// }
// function q2() {
//   question2.classList.remove("active");
//   question3.classList.add("active");
// }
function q3() {
  question3.classList.remove("active");
  p1.classList.add("active");
  setTimeout(() => {
    p1.classList.remove("active");
    p2.classList.add("active");
  }, 1500);
  setTimeout(() => {
    p2.classList.remove("active");
    p3.classList.add("active");
  }, 2500);
  setTimeout(() => {
    p3.classList.remove("active");
    p4.classList.add("active");
  }, 3500);
}
//timer
  var timeoutHandle;

  function countdown(minutes, seconds) {
    var seconds = 40;
    var mins = minutes

    function tick() {
      var counter = document.getElementById("timer");
      var current_minutes = mins - 1
      seconds--;
      counter.innerHTML =
        current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
      if (seconds > 0) {
        timeoutHandle = setTimeout(tick, 1000);
      } else {

        if (mins > 1) {

          setTimeout(function() {
            countdown(mins - 1);
          }, 1000);

        }
      }
    }
    tick();
  }

  countdown(2);
