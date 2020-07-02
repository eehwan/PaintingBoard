function select(tag){
  return document.querySelector(tag);
}
const _html = select("html");
const _canvas = select("canvas");
const _range = select("input[type=range]");
const _color = document.getElementsByClassName("color")
const ctx = _canvas.getContext('2d');

_canvas.width = 700;
_canvas.height = 700;

ctx.strokeStyle = "rgb(0,0,0)"
ctx.lineWidth = 2.5;

let painting = false;
function start_paint(){
  painting = true;
}
function stop_paint(){
  painting = false;
  ctx.closePath();
}

function handle_mouseMove(){
  const _x = event.offsetX,
        _y = event.offsetY;
  if (!painting){
    ctx.beginPath();
    ctx.moveTo(_x, _y);
  }else{
    ctx.lineTo(_x,_y);
    ctx.stroke();
  }
}

function init(){
  canvas.addEventListener("mousemove", handle_mouseMove);
  canvas.addEventListener("mousedown", start_paint);
  _html.addEventListener("mouseup", stop_paint);
  Array.from(_color).forEach(x => x.addEventListener('click',
  () => {ctx.strokeStyle=event.target.style.backgroundColor;}))
  _range.addEventListener('input',()=>{ctx.lineWidth=_range.value})
}
init();
