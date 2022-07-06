var an=document.querySelector(".foods").querySelector(".north").querySelectorAll(".nor");
    an.forEach(element =>{
        element.addEventListener("click",function(){
            an.forEach(div=>div.classList.remove("active"));
        this.classList.add("active");
        })
    });
var bn=document.querySelector(".foods").querySelector(".south1").querySelectorAll(".south");
    bn.forEach(element =>{
        element.addEventListener("click",function(){
            bn.forEach(div=>div.classList.remove("active"));
        this.classList.add("active");
        })
    });
var bn=document.querySelector(".foods").querySelector(".chinese").querySelectorAll(".chin");
    bn.forEach(element =>{
        element.addEventListener("click",function(){
            bn.forEach(div=>div.classList.remove("active"));
        this.classList.add("active");
        })
    });
var bn=document.querySelector(".foods").querySelector(".italian").querySelectorAll(".ital");
    bn.forEach(element =>{
        element.addEventListener("click",function(){
            bn.forEach(div=>div.classList.remove("active"));
        this.classList.add("active");
        })
    });