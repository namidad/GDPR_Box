function noscroll() {
  window.scrollTo( 0, 0 );
}

function shouldScroll() {
  if(document.querySelector(".gdprBox").classList.contains("hidden")){
    window.removeEventListener('scroll', noscroll);
  } else {
    window.addEventListener('scroll', noscroll);
  }
}
shouldScroll();

function msToHrs(s) {
  var ms = s % 1000;
  s = (s - ms) / 1000;
  var secs = s % 60;
  s = (s - secs) / 60;
  var mins = s % 60;
  var hrs = (s - mins) / 60;
  return hrs;
}

function shouldDisplayBox(){
  if(localStorage.getItem("date")!==null){
    const date=localStorage.getItem("date");
    const dif = msToHrs(Math.abs(new Date()-new Date(date)));
    if(dif>=24){
        document.querySelector(".gdprBox").classList.remove("hidden");
    } else {
        document.querySelector(".gdprBox").classList.add("hidden");
    }
  }
}

shouldDisplayBox();

document.querySelector(".cancelButton").addEventListener("click", ()=>{
  document.querySelector(".gdprBox").classList.add("hidden");
  localStorage.setItem("userChoose","cancel");
  const date = new Date();
  localStorage.setItem("date",date);
  shouldScroll();
});


document.querySelector(".acceptButton").addEventListener("click", ()=>{
  document.querySelector(".gdprBox").classList.add("hidden");
  localStorage.setItem("userChoose","accept");
  const date = new Date();
  localStorage.setItem("date",date);
  shouldScroll();
});
