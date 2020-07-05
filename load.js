// const _canvas = document.querySelector(your_canvas_tag);
//
// let img_width = _canvas.clientWidth,
//     img_height = _canvas.clienHeight;
const max_width = 800;
      max_height = 600;
// const ratio_width = img_width/max_width,
//       ratio_height = img_height/max_height;
function clac_ratio(a,b){
  const max_width = 800;
        max_height = 600;
  const ratio_width = a/max_width,
        ratio_height = b/max_height;
  if(ratio_width >= ratio_height){
    const img_width = max_width;
    //max_width == img_width/ratio_width
    const img_height = a/ratio_width;
  }else{
    const img_height = max_height;
    const img_width = b/ratio_height;
  }
  return (img_width,img_height);
}
