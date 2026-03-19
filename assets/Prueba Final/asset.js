
const imagenes = document.querySelectorAll("img");


imagenes.forEach((img) => {
    
    img.addEventListener("click", () => {
        
       
        alert("Te gusta el " + img.alt + " 😋");

        
        if (img.style.transform === "scale(1.2)") {
            img.style.transform = "scale(1)";
        } else {
            img.style.transform = "scale(1.2)";
        }
    });

});