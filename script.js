menu.onclick = () => {
  var x = document.getElementById('myTopnav');
  if (x.className === "topNav") {
      x.className += " responsive";
  } else {
    x.className = "topNav";
  }
}
window.onscroll = () => {
  if (window.pageYOffset) {
    upElem.className = '';
  } else {
    upElem.className = 'hide';
  }
}
var upElem = document.getElementById('up');
upElem.onclick = () => {
      window.scrollTo(0,0);
}
