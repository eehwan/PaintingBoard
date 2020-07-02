function select(tag){
  return document.querySelector(tag);
}
const _html = select("html");
const _canvas = select("canvas");
const _ctx = _canvas.getContext('2d');
const _range = select("input[type=range]");

let painting = false;
function stop_painting(){
  painting = false;
}
function handle_mouseMove(){
  if (painting){
    console.log(event.offsetX, event.offsetY);
  }
}
function handle_mouseDown(){
  painting = true;
}
function handle_mouseUp(){
  stop_painting()
}

if (_canvas){
  canvas.addEventListener("mousemove", handle_mouseMove);
  canvas.addEventListener("mousedown", handle_mouseDown);
  _html.addEventListener("mouseup", handle_mouseUp);
  // canvas.addEventListener("mouseout", stop_painting);

}
