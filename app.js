function select(tag){
  return document.querySelector(tag);
}
const _html = select("html");
const _canvas = select("canvas");
const _range = select("input[type=range]");
const _color = document.getElementsByClassName("color")
const _mode = select("#mode");
const _save = select("#save");

const ctx = _canvas.getContext('2d');

_canvas.width = 700;
_canvas.height = 700;

// ctx.strokeStyle = "rgb(0,0,0)";
ctx.lineWidth = 2.5;


let painting = false;
let filling = false;
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
  if (!filling){
    if (!painting){
      ctx.beginPath();
      ctx.moveTo(_x, _y);
    }else{
      ctx.lineTo(_x,_y);
      ctx.stroke();
    }
  }
}
function handle_click(){
  if(filling){
    ctx.fillRect(0,0, _canvas.width, _canvas.height)
  }
}
function handle_mode(){
  if (_mode.innerText == 'FILL'){
    // _canvas.style.cursor=
    _mode.innerText = 'draw';
    filling = true;
  }else{
    // _canvas.style.cursor=
    _mode.innerText = 'fill';
    filling = false;
  }
}

function init(){
  canvas.addEventListener("mousemove", handle_mouseMove);
  canvas.addEventListener("mousedown", start_paint);
  canvas.addEventListener("click", handle_click);
  _html.addEventListener("mouseup", stop_paint);
  Array.from(_color).forEach(x => x.addEventListener('click',
  () => {ctx.strokeStyle=event.target.style.backgroundColor;
    ctx.fillStyle=ctx.strokeStyle;}));
  _range.addEventListener('input',()=>{ctx.lineWidth=_range.value});
  _mode.addEventListener('click', handle_mode);
  _save.addEventListener('click', ()=>{
    if(confirm("Continue download")){
      const link = document.createElement("a");
      link.href = _canvas.toDataURL();
      link.download = "painting";
      link.click();
    }
  })
}
init();
