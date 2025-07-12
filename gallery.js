///////////////Gallery

let images = [
  "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/1025/600/400",
  "https://picsum.photos/id/1043/600/400",
  "https://picsum.photos/id/1062/600/400",
  "https://picsum.photos/id/1074/600/400"
];


let curIndex=0;
let imageElement=document.getElementById("gallery-image");

function showImage(index){
  imageElement.src=images[index];
}

function showNext(){
  curIndex=(curIndex+1) % images.length;
  showImage(curIndex);
}

function showPrevious(){
  curIndex=(curIndex-1 + images.length) % images.length;
  showImage(curIndex);
}

showImage(curIndex);