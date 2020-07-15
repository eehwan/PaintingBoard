// const _canvas = select("canvas");
// const _file = select("#img_upload");

function img_contain(max_width,max_height,img_width,img_height){
  const max_ratio = max_width/max_height,
        img_ratio = img_width/img_height;
  if(max_ratio >= img_ratio){
    var img_width = img_ratio*max_height;
    var img_height = max_height
  }else{
    var img_width = max_width;
    var img_height = max_width/img_ratio;
  }
  return {width: img_width,
    height: img_height};
}
function handle_file(){
  const file_list = _file.files
  for(const file of _file.files){
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = function(e){
      contain = img_contain(_canvas.width,_canvas.height,img.width,img.height);
      ctx.drawImage(img, (_canvas.width-contain.width)/2, (_canvas.height-contain.height)/2, contain.width, contain.height);

    }
  }
  _file.parentElement.reset();
}

_file.addEventListener('change', handle_file)
