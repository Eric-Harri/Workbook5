window.onload = () => {
      const googleBtn = document.getElementById("googleBtn");
      googleBtn.onclick = () => window.open("http://www.google.com/");

      const w3sBtn = document.getElementById("w3sBtn");
      w3sBtn.onclick = () => window.open("http://www.w3schools.com/js/");

      const imgBtn = document.getElementById("imgBtn");
      imgBtn.onclick = () => window.open("./images.html", "_self");
}