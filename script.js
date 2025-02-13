const images = document.querySelectorAll(".gallery-image");
const overlay = document.querySelector(".overlay");
const Btn = document.querySelector(".close-button");
const expandedImage = document.querySelector("#expandedImage");

images.forEach((image)=>{
    image.addEventListener("click",()=>{
        expandedImage.src = image.src;
        overlay.style.display = "flex";
        document.body.style.overflow = "hidden";
        
        setTimeout(()=>{
            expandedImage.style.transform = "translate(-50%,-50%)scale(1)";
        },100);
    });
});
Btn.addEventListener("click",()=>{
    expandedImage.style.transform = "translate(-50%,-50%)scale(0)";
    setTimeout(()=>{
        overlay.style.display = "none";
        document.body.style.overflow="auto;"
    },300)
});
