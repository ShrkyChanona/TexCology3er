const fullImgbox = document.getElementById("fullImgbox");
fulimg = document.getElementById("fulimg");

function openImg(reference){
    fullImgbox.style.display = "flex";
    fullimg.src = reference;
}

function closeImg(){
    fullImgbox.style.display = "none";
}