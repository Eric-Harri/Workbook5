window.onload = () => {

  
    const button = document.querySelector("button")
    button.onclick = changeImage;

};

function changeImage() {
    const img = document.querySelector("#dogImage");
    img.src = "images/ash-v0_MCllHY9M-unsplash.jpg";
    img.alt = "change-image-dog"


}
