import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function lading(opt){
  var winH = window.outerHeight;
  console.log(winH)
  var el = document.querySelectorAll(opt.el)
  // console.log(opt.datasrc)
  for(var i=0;i<el.length;i++){
      
      var top  = el[i].getBoundingClientRect();
      console.log(top.top)
      if(top.top<winH){
          (function(ele){
              // console.log(ele)
              setTimeout(() => {
                  console.log(ele.getAttribute(opt.datasrc))
                  // console.log(ele)
                  ele.src=ele.getAttribute(opt.datasrc)
              }, 500);
          })(el[i])
      }
  }
}
// const lading = (image) => (
//     <LazyLoadImage
//       alt={image.alt}
//       height={image.height}
//       src={image.src} // use normal <img> attributes as props
//       width={image.width} 
//       datasrc={image.datasrc}
//       />
      
 
// );
export default lading;